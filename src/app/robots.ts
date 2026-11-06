import { MetadataRoute } from "next";
import { getSiteUrl, isProduction } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  // Previews and staging must never be indexed.
  if (!isProduction()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${getSiteUrl().url}/sitemap.xml`,
  };
}
