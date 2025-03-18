import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [tailwindcss(), react()],
    optimizeDeps: {
      include: ["styled-components"],
    },
    define: {
      "import.meta.env.REACT_APP_API_BASE_URL": JSON.stringify(
        env.VITE_API_BASE_URL
      ),
    },
  };
});
