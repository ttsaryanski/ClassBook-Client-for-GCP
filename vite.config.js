import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        VitePWA({
            registerType: "autoUpdate",
            manifest: {
                name: "ClassBook App",
                short_name: "ClassBook",
                start_url: "/",
                display: "standalone",
                background_color: "#ffffff",
                theme_color: "#2c3e50",
            },
        }),
    ],
    base: "/",
    server: {
        historyApiFallback: true,
    },
});
