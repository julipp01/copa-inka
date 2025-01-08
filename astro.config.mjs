import { defineConfig } from 'astro/config';
// Importa otros plugins que uses, si aplica
// Por ejemplo:
// import tailwind from '@astrojs/tailwind';
// import sitemap from '@astrojs/sitemap';

// Elimina o comenta cualquier referencia a astro-critters
// import critters from 'astro-critters';

export default defineConfig({
  integrations: [
    // Si tienes otros plugins, mantenlos activos, por ejemplo:
    // tailwind(),
    // sitemap(),
    // Comenta critters si genera problemas:
    // critters(),
  ],
});
