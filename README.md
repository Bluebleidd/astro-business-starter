# Astro Service-Based Business Template & CMS

A high-performance website template designed specifically for local service businesses. 

This project demonstrates how to bridge the gap between blazing-fast static site generation (SSG) and dynamic, client-friendly content management without relying on heavy databases or traditional monolith CMS platforms like WordPress.

## About The Project

The core philosophy behind this template is the separation of content from the UI. All business data (pricing, service descriptions, contact info, gallery paths) is decoupled and stored in structured JSON files. This allows the website UI to be completely data-driven, making it highly scalable and easy to maintain. 

## Tech Stack

* **Framework:** [Astro](https://astro.build/)
* **Languages:** HTML5, Vanilla CSS, JavaScript / TypeScript
* **Content Management:** Static CMS (Headless, Git-based CMS)
* **Data Storage:** JSON
* **Icons:** Lucide-Astro

## Key Features & Capabilities

### Integrated Headless CMS
The project includes a fully configured `/admin` dashboard powered by Static CMS. It allows non-technical clients to easily add new services, update pricing, and upload gallery images. The CMS interacts directly with the GitHub API, automatically committing changes to the JSON data files behind the scenes.

### Custom "Before & After" Comparison Slider
Includes a custom-built, interactive image comparison component. Written entirely in Vanilla JavaScript and CSS, it utilizes dynamic and synchronized widths to create a smooth, mobile-friendly slider without relying on heavy external libraries.

### Responsive & Mobile-First
Fully responsive design with custom CSS media queries. The layout smoothly adapts to mobile devices, ensuring critical business information (contact, location, pricing) is highly accessible on smaller screens.