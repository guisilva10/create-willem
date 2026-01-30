import { NEXT_PUBLIC_APP_URL } from "@/types/env";

export function getUrl(path?: string) {
  const baseUrl = NEXT_PUBLIC_APP_URL?.replace(/\/$/, ""); // Remove a barra final, se houver
  const normalizedPath =
    path && !path.startsWith("/") ? `/${path}` : path || "";
  return `${baseUrl}${normalizedPath}`;
}
