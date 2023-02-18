import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@graphqlTypes": "/src/apollo/generated/graphql.ts",
      "@graphqlHooks": "/src/apollo/hooks/index.ts",
      "@constants": "/src/apollo/common/index.ts",
    },
  },
  plugins: [react()],
});
