import { getIschiaImage, getIschiaFallback } from '@/lib/ischia-images'

type IschiaImageKey = Parameters<typeof getIschiaImage>[0]

const VIDEO_EXTS = /\.(mp4|webm|mov)(\?.*)?$/i

/**
 * Renders an <img> for image URLs, a muted-autoplay <video> for .mp4/.webm/.mov
 * URLs, or the emoji fallback if no path is set.
 *
 * Drop a video URL into ischia-images.ts (e.g. heroImage or productMain)
 * and it will render as an ambient looping background. Mobile autoplay
 * requires `muted` + `playsInline` — both are set automatically.
 */
export function IschiaAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: IschiaImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getIschiaImage(name)

  if (!src) {
    return <span className={fallbackClassName}>{getIschiaFallback(name)}</span>
  }

  if (VIDEO_EXTS.test(src)) {
    return (
      <video
        src={src}
        className={className}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
      />
    )
  }

  return <img src={src} alt={alt} className={className} />
}
