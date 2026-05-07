import { Star } from "lucide-react"
import { IschiaBogoAsset } from "@/components/ischia-bogo-asset"

const PDP_URL = "https://poolsidesocietyco.com/products/the-ischia-pool-chair-2"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--psl-bg)] overflow-x-hidden">
      {/* ============================================
          PROMOTIONAL BANNER — main offer
          ============================================ */}
      <div className="bg-[var(--psl-dark-bg)] text-center py-3 px-4">
        <p className="text-xs md:text-sm font-medium tracking-wide uppercase">
          <span className="text-[var(--psl-border)] font-bold tracking-wider">BUY 1 ISCHIA CHAIR GET 1 FREE</span>{" "}
          <span className="text-[var(--psl-dark-text)]">+ FREE GIFTS</span>
        </p>
      </div>

      {/* ============================================
          SEASONAL BANNER — editorial, BOGO-aware
          ============================================ */}
      <div
        className="text-center py-2.5 px-3 border-b"
        style={{ backgroundColor: "var(--psl-surface)", borderColor: "var(--psl-border)" }}
      >
        <p className="text-[11px] sm:text-xs md:text-sm tracking-[0.18em] text-[var(--psl-text)] uppercase leading-snug">
          <span className="inline-block mr-2 opacity-60">✦</span>
          Summer 2026 — Buy One, Bring One. Three Gifts on Us.
          <span className="inline-block ml-2 opacity-60">✦</span>
        </p>
      </div>

      {/* ============================================
          HEADER — wordmark only
          ============================================ */}
      <header className="py-5 px-4 flex items-center justify-center bg-[var(--psl-bg)]">
        <p className="font-display italic text-2xl md:text-3xl text-[var(--psl-text)] tracking-tight">
          Poolside Society
        </p>
      </header>

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--psl-surface)] shadow-md">
          <IschiaBogoAsset name="heroImage" alt="The Ischia Chair Float" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-5xl" />
        </div>

        {/* Editorial chip */}
        <div className="mt-6 flex justify-center">
          <span className="inline-block bg-[var(--psl-surface)] border border-[var(--psl-border)] rounded-full py-1.5 px-4 text-[11px] tracking-[0.18em] uppercase text-[var(--psl-text)]/80">
            BOGO &middot; Summer 2026
          </span>
        </div>

        {/* Main headline */}
        <div className="mt-5 text-center">
          <h1 className="font-display italic text-[40px] md:text-[52px] text-[var(--psl-text)] leading-[1.05] text-balance tracking-tight">
            6 Reasons The Ischia Is the Chair You&apos;ll Live In This Summer
          </h1>
          <p className="font-body text-base md:text-lg text-[var(--psl-text-muted)] mt-5 leading-relaxed text-pretty max-w-md mx-auto">
            The pool chair that sits up like furniture and floats like nothing else. Get one for you, the second is on us — plus three poolside essentials included with every order.
          </p>
        </div>

        {/* Primary CTA */}
        <a href={PDP_URL} className="block mt-8">
          <button
            className="w-full bg-[var(--psl-cta)] hover:bg-[var(--psl-cta-hover)] text-white font-medium tracking-[0.12em] uppercase text-sm py-5 rounded-full shadow-sm transition-colors"
          >
            Get The Pair + Free Gifts &rarr;
          </button>
        </a>

        {/* Social proof */}
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[var(--psl-cta)] text-[var(--psl-cta)]" />
            ))}
          </div>
          <p className="text-xs text-[var(--psl-text)]/80 font-medium tracking-wide">
            4.8 stars <span className="text-[var(--psl-text-muted)] mx-1">·</span> 600+ reviews <span className="text-[var(--psl-text-muted)] mx-1">·</span> Procida Blue + Ischia Verde
          </p>
        </div>
      </section>

      {/* ============================================
          LISTICLE — 6 reasons
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">

        {/* Reason 1 — Summer staple */}
        <article className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--psl-border)] shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--psl-text)]/70">
              Summer Staple
            </span>
            <span className="text-[11px] font-bold text-[var(--psl-text-muted)] tracking-wider">01</span>
          </div>
          <h2 className="font-display italic text-[28px] md:text-[34px] text-[var(--psl-text)] leading-[1.1] mb-3 text-balance">
            It replaces the random plastic chair you&apos;ve been hauling out for eight summers
          </h2>
          <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--psl-cta)] mb-5">
            Designed to live by the pool, not in a basement
          </p>

          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[var(--psl-surface)] mb-5 shadow-sm">
            <IschiaBogoAsset name="reason1Image" alt="The Ischia Chair Float in scene" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-5xl" />
          </div>

          <p className="font-body text-[var(--psl-text)]/80 leading-relaxed text-base text-pretty">
            Most summer chairs are afterthoughts — picked up at a hardware store, wedged into the trunk, replaced every other year when the webbing splits. The Ischia is the chair you actually want to pull out. <span className="font-medium text-[var(--psl-text)]">Fabric-covered PVC frame, mesh sling seat, two colorways that read like a furniture catalog.</span> It earns its place in the rotation.
          </p>
        </article>

        {/* Reason 2 — Posture / drink in hand */}
        <article className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--psl-border)] shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--psl-text)]/70">
              The Posture
            </span>
            <span className="text-[11px] font-bold text-[var(--psl-text-muted)] tracking-wider">02</span>
          </div>
          <h2 className="font-display italic text-[28px] md:text-[34px] text-[var(--psl-text)] leading-[1.1] mb-3 text-balance">
            Sit up. Drink in hand. Feet in the water.
          </h2>
          <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--psl-cta)] mb-5">
            Built for the moment the music slows
          </p>

          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[var(--psl-surface)] mb-5 shadow-sm">
            <IschiaBogoAsset name="reason2Image" alt="Sitting up on the Ischia, drink in hand" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-5xl" />
          </div>

          <p className="font-body text-[var(--psl-text)]/80 leading-relaxed text-base text-pretty">
            Most pool floats lay you flat on your back, drink balanced precariously on your stomach, neck cricked, sunscreen running into your eyes. The Ischia is the rare one that lets you actually sit. <span className="font-medium text-[var(--psl-text)]">Mesh seat under the water. Armrests above. The drink stays where you set it.</span> The conversation goes longer because no one&apos;s ready to get out.
          </p>
        </article>

        {/* Reason 3 — Craft */}
        <article className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--psl-border)] shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--psl-text)]/70">
              The Craft
            </span>
            <span className="text-[11px] font-bold text-[var(--psl-text-muted)] tracking-wider">03</span>
          </div>
          <h2 className="font-display italic text-[28px] md:text-[34px] text-[var(--psl-text)] leading-[1.1] mb-3 text-balance">
            Built like furniture. Floats like nothing else.
          </h2>
          <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--psl-cta)] mb-5">
            Fabric-covered PVC frame &middot; mesh sling seat
          </p>

          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[var(--psl-surface)] mb-5 shadow-sm">
            <IschiaBogoAsset name="reason3Image" alt="Fabric-covered PVC frame" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-5xl" />
          </div>

          <p className="font-body text-[var(--psl-text)]/80 leading-relaxed text-base text-pretty">
            The frame is fabric-covered PVC — no shiny vinyl finish, no rubbery smell. The seat is a breathable mesh sling that drops you into the water at the perfect height. <span className="font-medium text-[var(--psl-text)]">It reads like patio furniture and floats like a chair was always meant to.</span> Stays inflated all summer. Folds flat for the off-season.
          </p>
        </article>

        {/* Reason 4 — Versatility */}
        <article className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--psl-border)] shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--psl-text)]/70">
              Four Ways to Sit
            </span>
            <span className="text-[11px] font-bold text-[var(--psl-text-muted)] tracking-wider">04</span>
          </div>
          <h2 className="font-display italic text-[28px] md:text-[34px] text-[var(--psl-text)] leading-[1.1] mb-3 text-balance">
            Chair. Hammock. Saddle. Drifter.
          </h2>
          <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--psl-cta)] mb-5">
            One float, four ways through the afternoon
          </p>

          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[var(--psl-surface)] mb-5 shadow-sm">
            <IschiaBogoAsset name="reason4Image" alt="Four ways to sit on the Ischia" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-5xl" />
          </div>

          <p className="font-body text-[var(--psl-text)]/80 leading-relaxed text-base text-pretty">
            Sit up like a chair when you want to read. Lean back like a hammock when the sun shifts. Saddle up the side for the lazy river. Drift on your stomach when you&apos;re ready for a nap. <span className="font-medium text-[var(--psl-text)]">One float, four ways to spend the afternoon.</span> No reason to swap.
          </p>
        </article>

        {/* Reason 5 — Aesthetic */}
        <article className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--psl-border)] shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--psl-text)]/70">
              The Look
            </span>
            <span className="text-[11px] font-bold text-[var(--psl-text-muted)] tracking-wider">05</span>
          </div>
          <h2 className="font-display italic text-[28px] md:text-[34px] text-[var(--psl-text)] leading-[1.1] mb-3 text-balance">
            Two colorways. Both belong in the photo.
          </h2>
          <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--psl-cta)] mb-5">
            Procida Blue &middot; Ischia Verde
          </p>

          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[var(--psl-surface)] mb-5 shadow-sm">
            <IschiaBogoAsset name="reason5Image" alt="Procida Blue and Ischia Verde" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-5xl" />
          </div>

          <p className="font-body text-[var(--psl-text)]/80 leading-relaxed text-base text-pretty">
            Procida Blue, named for the cliffside village. Ischia Verde, named for the green water that surrounds it. <span className="font-medium text-[var(--psl-text)]">Both are quiet, considered, and built to look at home in any pool — backyard, lake house, or the hotel you&apos;ve been thinking about for two years.</span> The BOGO lets you take one of each.
          </p>
        </article>

        {/* Reason 6 — Risk-free */}
        <article className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--psl-border)] shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--psl-text)]/70">
              Risk-Free
            </span>
            <span className="text-[11px] font-bold text-[var(--psl-text-muted)] tracking-wider">06</span>
          </div>
          <h2 className="font-display italic text-[28px] md:text-[34px] text-[var(--psl-text)] leading-[1.1] mb-3 text-balance">
            30-day promise. We pay returns if it isn&apos;t a fit.
          </h2>
          <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--psl-cta)] mb-5">
            Bring it home for the summer with no risk
          </p>

          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[var(--psl-surface)] mb-5 shadow-sm">
            <IschiaBogoAsset name="reason6Image" alt="30-day promise" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-5xl" />
          </div>

          <p className="font-body text-[var(--psl-text)]/80 leading-relaxed text-base text-pretty">
            Try the pair for 30 days. Sit on them, float on them, drift around the pool with a drink in hand. <span className="font-medium text-[var(--psl-text)]">If they aren&apos;t earning their place in the summer rotation, send them back. Full refund. We pay return shipping.</span> Keep the gifts as our thanks for trying.
          </p>
        </article>
      </section>

      {/* ============================================
          PRODUCT SHOWCASE
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-4">
        <div className="text-center mb-8">
          <span className="inline-block bg-[var(--psl-surface)] border border-[var(--psl-border)] rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold mb-5 px-4 py-1.5 text-[var(--psl-text)]/80">
            The Ischia Chair Float &middot; BOGO
          </span>
          <h2 className="font-display italic text-[32px] md:text-[40px] text-[var(--psl-text)] mb-4 text-balance leading-[1.1]">
            Two chairs. Three gifts. One summer.
          </h2>
          <p className="font-body text-base text-[var(--psl-text-muted)] mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            Buy one chair, the second is on us. Procida Blue and Ischia Verde mix freely. Three poolside essentials included with every order.
          </p>

          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[var(--psl-cta)] text-[var(--psl-cta)]" />
              ))}
            </div>
            <p className="text-xs text-[var(--psl-text)]/80 font-medium">
              4.8 stars <span className="text-[var(--psl-text-muted)] mx-1.5">|</span> 600+ reviews
            </p>
          </div>
        </div>

        {/* Product card */}
        <div className="bg-white border border-[var(--psl-border)] rounded-2xl overflow-hidden shadow-md">
          <div className="bg-[var(--psl-dark-bg)] text-[var(--psl-dark-text)] text-center py-3 px-4">
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold">Buy 1, Get 1 Free + Free Gifts</p>
          </div>

          <div className="p-5">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[var(--psl-surface)] mb-4">
              <IschiaBogoAsset name="productMain" alt="The Ischia Chair Float" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-5xl" />
            </div>

            <div className="grid grid-cols-6 gap-1.5 mb-5">
              {(["productThumb1", "productThumb2", "productThumb3", "productThumb4", "productThumb5", "productThumb6"] as const).map((name, i) => (
                <div key={i} className="relative aspect-square rounded-md border border-[var(--psl-border)] bg-[var(--psl-surface)] overflow-hidden">
                  <IschiaBogoAsset name={name} alt={`Detail ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-[var(--psl-text-muted)] font-bold" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-5">
              <div className="bg-[var(--psl-surface)] rounded-lg p-3 text-center">
                <p className="text-[10px] tracking-[0.16em] uppercase font-semibold text-[var(--psl-text)]/70 mb-0.5">The Frame</p>
                <p className="font-display italic text-base text-[var(--psl-text)]">Fabric-covered</p>
              </div>
              <div className="bg-[var(--psl-surface)] rounded-lg p-3 text-center">
                <p className="text-[10px] tracking-[0.16em] uppercase font-semibold text-[var(--psl-text)]/70 mb-0.5">The Seat</p>
                <p className="font-display italic text-base text-[var(--psl-text)]">Mesh sling</p>
              </div>
              <div className="bg-[var(--psl-surface)] rounded-lg p-3 text-center">
                <p className="text-[10px] tracking-[0.16em] uppercase font-semibold text-[var(--psl-text)]/70 mb-0.5">The Sit</p>
                <p className="font-display italic text-base text-[var(--psl-text)]">Four ways</p>
              </div>
              <div className="bg-[var(--psl-surface)] rounded-lg p-3 text-center">
                <p className="text-[10px] tracking-[0.16em] uppercase font-semibold text-[var(--psl-text)]/70 mb-0.5">The Pack</p>
                <p className="font-display italic text-base text-[var(--psl-text)]">Folds flat</p>
              </div>
            </div>

            <a href={PDP_URL}>
              <button className="w-full border border-[var(--psl-text)] text-[var(--psl-text)] font-medium tracking-[0.12em] uppercase text-sm hover:bg-[var(--psl-surface)] py-4 rounded-full transition-colors">
                See The BOGO Offer
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          REVIEWS
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[var(--psl-cta)] text-[var(--psl-cta)]" />
            ))}
          </div>
          <h2 className="font-display italic text-[32px] md:text-[40px] text-[var(--psl-text)] mb-2 text-balance leading-[1.1]">
            What buyers are saying
          </h2>
          <p className="text-xs text-[var(--psl-text-muted)] tracking-wide uppercase">4.8 out of 5 from 600+ reviews</p>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-[var(--psl-border)] rounded-xl p-6">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[var(--psl-cta)] text-[var(--psl-cta)]" />
              ))}
            </div>
            <p className="font-display italic text-lg text-[var(--psl-text)] mb-3 leading-snug text-balance">
              &ldquo;Took the BOGO. Took both colors. Best decision of the summer.&rdquo;
            </p>
            <p className="font-body text-sm text-[var(--psl-text)]/75 leading-relaxed mb-3">
              I almost ordered one. Saw the BOGO at checkout and grabbed Procida Blue and Ischia Verde — one for me, one for my partner. They look like a set. The tote is genuinely useful. The drink holder gets used every time we&apos;re in the pool.
            </p>
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[var(--psl-text-muted)]">
              Anna L. · Verified Buyer
            </p>
          </div>

          <div className="bg-white border border-[var(--psl-border)] rounded-xl p-6">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[var(--psl-cta)] text-[var(--psl-cta)]" />
              ))}
            </div>
            <p className="font-display italic text-lg text-[var(--psl-text)] mb-3 leading-snug text-balance">
              &ldquo;We bought four for the lake house. They&apos;ve stayed inflated all season.&rdquo;
            </p>
            <p className="font-body text-sm text-[var(--psl-text)]/75 leading-relaxed mb-3">
              Four guests, four chairs, every weekend since June. They sit up high enough that you can hold a drink and not get splashed every time someone jumps in. The fabric finish is what makes them look right next to the lounge chairs we have on the dock.
            </p>
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[var(--psl-text-muted)]">
              Marco R. · Verified Buyer
            </p>
          </div>

          <div className="bg-white border border-[var(--psl-border)] rounded-xl p-6">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[var(--psl-cta)] text-[var(--psl-cta)]" />
              ))}
            </div>
            <p className="font-display italic text-lg text-[var(--psl-text)] mb-3 leading-snug text-balance">
              &ldquo;Sit up, drink in hand, feet in the water. Exactly as advertised.&rdquo;
            </p>
            <p className="font-body text-sm text-[var(--psl-text)]/75 leading-relaxed mb-3">
              I read the headline and rolled my eyes a little. Then I sat in it. The mesh sling sits you at the perfect height — the water hits about mid-calf, the armrests are dry, and you can actually relax instead of holding yourself up the whole time.
            </p>
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[var(--psl-text-muted)]">
              Priya N. · Verified Buyer
            </p>
          </div>

          <div className="bg-white border border-[var(--psl-border)] rounded-xl p-6">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[var(--psl-cta)] text-[var(--psl-cta)]" />
              ))}
            </div>
            <p className="font-display italic text-lg text-[var(--psl-text)] mb-3 leading-snug text-balance">
              &ldquo;Folds back into the trunk in 30 seconds. Looking this good is the bonus.&rdquo;
            </p>
            <p className="font-body text-sm text-[var(--psl-text)]/75 leading-relaxed mb-3">
              We take it to a different lake every weekend. Inflates fast, packs flat, hasn&apos;t shown a single sign of wear. The Ischia Verde reads like a piece of furniture once it&apos;s on the water — friends keep asking where we got it.
            </p>
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[var(--psl-text-muted)]">
              Catherine V. · Verified Buyer
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="font-display italic text-[32px] md:text-[40px] text-[var(--psl-text)] mb-4 text-balance leading-[1.1]">
            Common questions
          </h2>
          <p className="font-body text-sm text-[var(--psl-text-muted)] text-pretty max-w-md mx-auto">
            Everything worth knowing before the pair is in the trunk on the way to the pool.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "How does the Buy 1 Get 1 Free work?",
              a: "Add two chairs to your cart and the second one is automatically free at checkout — no code needed. Mix the two colorways freely (Procida Blue + Ischia Verde, two of one, your call). The three free gifts ship in the same box.",
            },
            {
              q: "What are the free gifts and do I have to pick one?",
              a: "All three are included with every BOGO order — Poolside Tote, Floating Drink Holder, and Patch Repair Kit ($44 value). Nothing to pick or add to cart. They ship in the same box as the chairs.",
            },
            {
              q: "How long does it take to inflate?",
              a: "Two to three minutes per chair with a standard hand or electric pump. The two main chambers inflate independently — both are tested to hold all season without topping up.",
            },
            {
              q: "Will it tip over when I sit on it?",
              a: "No. The mesh sling drops your weight below the waterline, so the chair sits low and stable. The wide base + dual chambers keep it balanced even when you lean back, drink in hand.",
            },
            {
              q: "What is it made of? Will it last?",
              a: "Fabric-covered PVC frame and a breathable mesh sling seat. The fabric finish is what gives it a furniture feel and protects the PVC from UV breakdown. Folded flat for the off-season, it ships ready for the next summer.",
            },
            {
              q: "What if I don&rsquo;t love it?",
              a: "30-day promise on the pair. Use them for the long weekend, the lake trip, the hotel stay — and if they aren&rsquo;t a fit, send them back. We cover return shipping. Keep the gifts as our thanks for trying.",
            },
          ].map((item, i) => (
            <details
              key={i}
              className="group bg-white border border-[var(--psl-border)] rounded-xl px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                <span className="font-display italic text-lg md:text-xl text-[var(--psl-text)] leading-snug">{item.q}</span>
                <span className="text-2xl text-[var(--psl-text-muted)] flex-shrink-0 transition-transform group-open:rotate-45 leading-none mt-0.5">+</span>
              </summary>
              <p className="font-body text-sm md:text-base text-[var(--psl-text)]/80 leading-relaxed pt-3" dangerouslySetInnerHTML={{ __html: item.a }} />
            </details>
          ))}
        </div>
      </section>

      {/* ============================================
          STICKY CTA — bottom fixed
          ============================================ */}
      <div className="fixed bottom-0 left-0 right-0 bg-[var(--psl-dark-bg)]/95 backdrop-blur-md border-t border-[var(--psl-dark-bg)] py-4 px-4 z-50 shadow-2xl">
        <div className="max-w-lg mx-auto">
          <a href={PDP_URL}>
            <button className="w-full bg-[var(--psl-cta)] hover:bg-[var(--psl-cta-hover)] text-white font-medium tracking-[0.14em] uppercase text-sm py-5 rounded-full mb-2.5 shadow-md transition-colors">
              Get The Pair + Free Gifts &rarr;
            </button>
          </a>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[var(--psl-cta)] text-[var(--psl-cta)]" />
              ))}
            </div>
            <p className="text-[11px] text-white/75 font-medium tracking-wide">
              4.8 / 5 · 600+ Reviews · 30-Day Promise
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
