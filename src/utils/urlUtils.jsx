function swapLanguage(url) {
  const match = url.match(/\/pl|en/i)
  if (match[0] === '/pl') {
    return url.replace('/pl', '/en')
  } else {
    return url.replace('/en', '/pl')
  }
}

export { swapLanguage }
