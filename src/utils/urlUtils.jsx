const swapLanguage = (url, currentLocale) => {
  const blogPostMatch = url.match(/\/blog\/(?!en|pl)(\d+)/i)
  if (blogPostMatch) {
    if (currentLocale === 'pl') {
      return '/blog/en'
    } else {
      return '/blog/pl'
    }
  }
  const langMatch = url.match(/(pl|en)/i)
  if (langMatch) {
    if (langMatch[0] === 'pl') {
      return url.replace('pl', 'en')
    } else if (langMatch[0] === 'en') {
      return url.replace('en', 'pl')
    }
  } else {
    return url.replace('/', '/en')
  }
}

export { swapLanguage }
