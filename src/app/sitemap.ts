import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1.0 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.8 },
  { path: "/approach", priority: 0.8 },
  { path: "/contact", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const { url } = getSiteUrl();
  return routes.map(({ path, priority }) => ({
    url: `${url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
