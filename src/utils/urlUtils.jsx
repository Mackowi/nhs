function swapLanguage(url) {
  const match = url.match(/(pl|en)/i)
  if (match) {
    if (match[0] === 'pl') {
      return url.replace('pl', 'en')
    } else if (match[0] === 'en') {
      return url.replace('en', 'pl')
    }
  } else {
    return url.replace('/', '/pl')
  }
}

export { swapLanguage }
