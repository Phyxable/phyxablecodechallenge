const isDev = process.env.NODE_ENV !== "production";
export const config = {
  apiUrl: isDev ? "http://localhost:3000" : "PRODUCTION_URL",
};
