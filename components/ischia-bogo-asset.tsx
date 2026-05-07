import { getIschiaBogoImage, getIschiaBogoFallback } from '@/lib/ischia-bogo-images'

type IschiaBogoImageKey = Parameters<typeof getIschiaBogoImage>[0]

const VIDEO_EXTS = /\.(mp4|webm|mov)(\?.*)?$/i

/**
 * Renders an <img> for image URLs, a muted-autoplay <video> for .mp4/.webm/.mov
 * URLs, or the emoji fallback if no path is set.
 *
 * Drop a video URL into ischia-bogo-images.ts (e.g. heroImage or productMain)
 * and it will render as an ambient looping background. Mobile autoplay
 * requires `muted` + `playsInline` — both are set automatically.
 */
export function IschiaBogoAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: IschiaBogoImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getIschiaBogoImage(name)

  if (!src) {
    return <span className={fallbackClassName}>{getIschiaBogoFallback(name)}</span>
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
