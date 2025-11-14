import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    plugins: [react()],
    base: env.VITE_ADMIN_PATH || "/admin-project",
  });
};
