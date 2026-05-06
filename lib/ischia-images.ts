// ============================================================
// IMAGE ASSET MAP — The Ischia Chair Float : Summer Essential Listicle
// ============================================================
// Defaults are pulled from the live PDP at
// poolsidesocietyco.com/products/the-ischia-pool-chair (2026-05-06).
//
// Swap any URL below to update an image. Empty string ("") = emoji
// fallback shown on page (use sparingly — every PSL lander should
// render real imagery).
// ============================================================

export const ischiaImages = {

  // ── HERO SECTION ──────────────────────────────────────────
  // Primary lander shot. Use the most editorial / lifestyle frame
  // available — the pool chair in scene, not on a white seamless.
  heroImage: "https://cdn.shopify.com/videos/c/o/v/8723a4ed08be42b49d4ff737796b3dda.mp4",

  // ── LISTICLE REASON IMAGES (1:1 aspect ratio) ─────────────
  // Each reason image should reinforce its headline. Map below is a
  // best-guess from the live PDP gallery — refine with intent shots
  // when available.
  reason1Image: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161004_456d7bc2-fdca-40a5-94a8-8e7216921963.png?v=1777830300",   // Summer staple — chair-in-scene
  reason2Image: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161915_5034f484-7a53-4565-91c9-f4715aa7b322.png?v=1777830209",   // Sit-up posture, drink in hand
  reason3Image: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161633_c8a9e77f-24d0-49ce-ae86-2fac889dfb62.png?v=1777829142",   // Craft / fabric-covered detail
  reason4Image: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_170503_ba8b1155-1b65-4b46-a4d2-b28865f8a950.png?v=1777829146",   // Versatility / 4-in-1
  reason5Image: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_211811_ea7331cc-8493-47fa-9d50-bdd411d1a64a_1.png?v=1777844389",   // Aesthetic / colorway scene
  reason6Image: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161322_6b53baf6-61a1-40cf-a951-73f75e0b1923.png?v=1777829120",   // Risk-free / packaging or fold-flat

  // ── PRODUCT SHOWCASE ──────────────────────────────────────
  productMain: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/0504_2_-Cover.jpg?v=1778044137",
  productThumb1: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161900_bc5132ec-9a1f-42a5-b813-272c174edb3c.png?v=1777829114",
  productThumb2: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161628_57f492da-9c75-429b-a193-0283432fa9cd.png?v=1777829139",
  productThumb3: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161633_c8a9e77f-24d0-49ce-ae86-2fac889dfb62.png?v=1777829142",
  productThumb4: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_170503_ba8b1155-1b65-4b46-a4d2-b28865f8a950.png?v=1777829146",
  productThumb5: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161305_ea81d0cb-aab2-4e18-bc95-7093bff900af.png?v=1778049089",
  productThumb6: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161322_6b53baf6-61a1-40cf-a951-73f75e0b1923.png?v=1777829120",

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const ischiaFallbacks = {

  heroImage: "🏖️",

  reason1Image: "☀️",
  reason2Image: "🍹",
  reason3Image: "🪑",
  reason4Image: "🌀",
  reason5Image: "📷",
  reason6Image: "🛟",

  productMain: "📦",
  productThumb1: "1",
  productThumb2: "2",
  productThumb3: "3",
  productThumb4: "4",
  productThumb5: "5",
  productThumb6: "6",

} as const

// ── HELPER ──────────────────────────────────────────────────

type IschiaImageKey = keyof typeof ischiaImages

export function getIschiaImage(key: IschiaImageKey): string | null {
  return ischiaImages[key] || null
}

export function getIschiaFallback(key: IschiaImageKey): string {
  return ischiaFallbacks[key]
}
