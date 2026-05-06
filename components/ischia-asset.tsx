import { getIschiaImage, getIschiaFallback } from '@/lib/ischia-images'

type IschiaImageKey = Parameters<typeof getIschiaImage>[0]

/** Renders an <img> if a path is set in ischia-images.ts, otherwise renders the emoji fallback. */
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

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getIschiaFallback(name)}</span>
}
