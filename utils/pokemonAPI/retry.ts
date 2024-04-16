export async function retry(requestEndopoint: () => Promise<any>, maxRetries = 1, delay = 3000): Promise<any> {
  let retries = 0

  while (retries < maxRetries) {
    try {  
      return await requestEndopoint() 
    } 
    catch (error) {
      retries++

      if (retries < maxRetries) { await wait(delay) } 
      else { throw new Error('Seems the API is offline right now') }
    }
  }
}

function wait(ms: number): Promise<void> { 
  return new Promise((resolve) => setTimeout(resolve, ms)) 
}