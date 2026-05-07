// ============================================================
// IMAGE ASSET MAP — The Ischia Chair Float : BOGO Listicle
// ============================================================
// Defaults are pulled from the live PDP at
// poolsidesocietyco.com/products/the-ischia-pool-chair-2 (BOGO variant).
//
// Swap any URL below to update an image. Empty string ("") = emoji
// fallback shown on page (use sparingly — every PSL lander should
// render real imagery).
//
// VIDEO SUPPORT: heroImage / productMain / any reason image accepts an
// .mp4 / .webm / .mov URL. <IschiaBogoAsset> auto-detects the extension
// and renders a muted-autoplay-loop <video> instead of <img>. Mobile
// autoplay works automatically (muted + playsInline are set for you).
//
// ⚠️ Swap candidates for the BOGO angle (vs /summer-essential):
//   - heroImage     (a "two chairs in scene" shot reads the BOGO better
//                    than a single-chair frame)
//   - giftImage1/2/3 (replace product photos with actual gift product shots)
// ============================================================

export const ischiaBogoImages = {

  // ── HERO SECTION ──────────────────────────────────────────
  heroImage: "https://cdn.shopify.com/videos/c/o/v/21ed62dba5a944b188e7461eb778b521.mp4",

  // ── FREE GIFTS BAND ───────────────────────────────────────
  // Three free gifts that ship with every BOGO order. Default to product
  // imagery; swap to actual gift product shots when available.
  giftImage1: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161900_bc5132ec-9a1f-42a5-b813-272c174edb3c.png?v=1777829114",   // Poolside Tote
  giftImage2: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_172655_3cbc12f9-7452-4721-9939-a07fc0e9bb31.png?v=1777829850",   // Floating Drink Holder
  giftImage3: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161322_6b53baf6-61a1-40cf-a951-73f75e0b1923.png?v=1777829120",   // Patch Repair Kit

  // ── LISTICLE REASON IMAGES (1:1 aspect ratio) ─────────────
  reason1Image: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161004_456d7bc2-fdca-40a5-94a8-8e7216921963.png?v=1777830300",
  reason2Image: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161915_5034f484-7a53-4565-91c9-f4715aa7b322.png?v=1777830209",
  reason3Image: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161633_c8a9e77f-24d0-49ce-ae86-2fac889dfb62.png?v=1777829142",
  reason4Image: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_170503_ba8b1155-1b65-4b46-a4d2-b28865f8a950.png?v=1777829146",
  reason5Image: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161305_cf35bea4-35a3-4ade-860f-0c605932fa65.png?v=1778049487",
  reason6Image: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161322_6b53baf6-61a1-40cf-a951-73f75e0b1923.png?v=1777829120",

  // ── PRODUCT SHOWCASE ──────────────────────────────────────
  productMain: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/0504_2_-Cover.jpg?v=1778044137",
  productThumb1: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161900_bc5132ec-9a1f-42a5-b813-272c174edb3c.png?v=1777829114",
  productThumb2: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161628_57f492da-9c75-429b-a193-0283432fa9cd.png?v=1777829139",
  productThumb3: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161633_c8a9e77f-24d0-49ce-ae86-2fac889dfb62.png?v=1777829142",
  productThumb4: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_170503_ba8b1155-1b65-4b46-a4d2-b28865f8a950.png?v=1777829146",
  productThumb5: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_172655_3cbc12f9-7452-4721-9939-a07fc0e9bb31.png?v=1777829850",
  productThumb6: "https://cdn.shopify.com/s/files/1/0983/8251/2419/files/hf_20260503_161322_6b53baf6-61a1-40cf-a951-73f75e0b1923.png?v=1777829120",

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const ischiaBogoFallbacks = {

  heroImage: "🏖️",

  giftImage1: "🛍️",
  giftImage2: "🥤",
  giftImage3: "🧰",

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

type IschiaBogoImageKey = keyof typeof ischiaBogoImages

export function getIschiaBogoImage(key: IschiaBogoImageKey): string | null {
  return ischiaBogoImages[key] || null
}

export function getIschiaBogoFallback(key: IschiaBogoImageKey): string {
  return ischiaBogoFallbacks[key]
}
