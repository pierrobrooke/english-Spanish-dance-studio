import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Public production origin. Used for absolute <loc> URLs.
const BASE_URL = "https://san-antonio-dance-connect.lovable.app";

type Entry = {
  loc: string;
  priority: string;
  changefreq: "weekly" | "monthly" | "yearly";
  /** Free-text image / video metadata is omitted to keep the XML valid & broadly compatible. */
};

// The site is a single-page app organized into semantic sections. The root
// URL is the canonical page; the fragment entries exist to help search engines,
// generative engines (GEO), and LLM crawlers discover the distinct content
// blocks (schedule, pricing, rental, etc.).
const entries: Entry[] = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/#schedule", priority: "0.9", changefreq: "weekly" },
  { loc: "/#pricing", priority: "0.9", changefreq: "weekly" },
  { loc: "/#classes", priority: "0.8", changefreq: "monthly" },
  { loc: "/#about", priority: "0.7", changefreq: "monthly" },
  { loc: "/#rental", priority: "0.7", changefreq: "monthly" },
  { loc: "/#faq", priority: "0.6", changefreq: "monthly" },
  { loc: "/#visit", priority: "0.6", changefreq: "monthly" },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, """)
    .replace(/'/g, "'");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${escapeXml(`${BASE_URL}${e.loc}`)}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
