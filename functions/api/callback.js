export async function onRequest(context) {
  try {
    const { searchParams } = new URL(context.request.url);
    const code = searchParams.get("code");

    if (!code) {
      return new Response("Brak kodu", { status: 400 });
    }

    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
      },
      body: JSON.stringify({
        client_id: context.env.GITHUB_CLIENT_ID,
        client_secret: context.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const result = await response.json();

    if (result.access_token) {
      const html = `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body>
          <p>Nawiązywanie połączenia z panelem...</p>
          <script>
            (function() {
              // Nasz gotowy klucz
              const tokenMsg = 'authorization:github:success:{"token":"${result.access_token}","provider":"github"}';
              
              // Funkcja, która czeka na odpowiedź od głównego okna
              function receiveMessage(e) {
                // Jeśli panel główny odpowie, że jest gotowy...
                if (e.data === "authorizing:github") {
                  // ...wysyłamy mu klucz!
                  window.opener.postMessage(tokenMsg, e.origin);
                  // I zamykamy okienko
                  setTimeout(() => window.close(), 500);
                }
              }
              
              // Zaczynamy nasłuchiwać
              window.addEventListener("message", receiveMessage, false);
              
              // Krok 1: Okienko puka do panelu i inicjuje rozmowę
              if (window.opener) {
                // Wysyłamy sygnał co pół sekundy, na wypadek gdyby panel ładował się wolniej
                setInterval(() => {
                  window.opener.postMessage("authorizing:github", "*");
                }, 500);
              }
            })();
          </script>
        </body>
        </html>
      `;
      return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8" } });
    } else {
      return new Response("Błąd API GitHuba: " + JSON.stringify(result), { status: 400 });
    }
  } catch (err) {
    return new Response("Błąd: " + err.message, { status: 500 });
  }
}