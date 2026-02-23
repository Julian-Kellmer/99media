import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Module-level guard prevents double-fire from React StrictMode
// (StrictMode mounts → unmounts → remounts in dev)
let lastPageViewKey = null

export default function MetaPixelTracker() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    // Normalize path to lowercase for case-insensitive route matching
    // e.g. /Calendly and /calendly are treated as the same route
    const normalizedPath = pathname.toLowerCase()
    const pageKey = normalizedPath + search

    // Prevent duplicate fire for same route (StrictMode + SPA guard)
    if (pageKey === lastPageViewKey) return
    lastPageViewKey = pageKey

    // Debug log — remove after verifying with Pixel Helper
    console.log('[MetaPixel] Route change →', pageKey)

    // Guard against adblock / missing fbq
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
      console.log('[MetaPixel] ✅ fbq PageView fired for', pageKey)
    } else {
      console.warn('[MetaPixel] ⚠️ fbq not available (adblock?)')
    }
  }, [pathname, search])

  return null
}
