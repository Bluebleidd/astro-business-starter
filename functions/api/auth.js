export async function onRequest(context) {
  const client_id = context.env.GITHUB_CLIENT_ID;
  return Response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo,user`,
    302
  );
}