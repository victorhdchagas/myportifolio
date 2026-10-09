// Client-side language detection.
// Portuguese is the default; English is used only when the browser is English.
// Static Astro output, so the language is resolved on the client.

export function detectLang() {
  const preferred =
    (Array.isArray(navigator.languages) && navigator.languages[0]) ||
    navigator.language ||
    'pt'

  return preferred.toLowerCase().startsWith('en') ? 'en' : 'pt'
}

/**
 * Applies the detected language to every element that declares
 * `data-i18n-pt` / `data-i18n-en` (text) and
 * `data-i18n-title-pt` / `data-i18n-title-en` (title attribute).
 */
export function applyLanguage() {
  const lang = detectLang()

  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'

  document.querySelectorAll('[data-i18n-pt]').forEach((el) => {
    const value = el.getAttribute(`data-i18n-${lang}`)
    if (value !== null) el.textContent = value
  })

  document.querySelectorAll('[data-i18n-title-pt]').forEach((el) => {
    const value = el.getAttribute(`data-i18n-title-${lang}`)
    if (value !== null) el.setAttribute('title', value)
  })
}
