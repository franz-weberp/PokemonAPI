export function lowInStringCase(lowerCase:string|number) : string|number {
  if (typeof lowerCase === 'string') { lowerCase = lowerCase.toLowerCase() }
  const searchForTerm = lowerCase

  return searchForTerm
}
