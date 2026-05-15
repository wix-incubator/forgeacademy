const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#f4f8f2" />
  <path d="M32 8 50 17v14c0 12-7.2 20-18 25-10.8-5-18-13-18-25V17l18-9Z" fill="#10231d" />
  <path d="M24 20h19v7H31v6h10v7H31v11h-7V20Z" fill="#ffffff" />
  <path d="M14 17 32 8l18 9" fill="none" stroke="#e15c39" stroke-width="5" stroke-linejoin="round" />
</svg>`;

export const GET = () =>
  new Response(favicon, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "image/svg+xml; charset=utf-8",
    },
  });
