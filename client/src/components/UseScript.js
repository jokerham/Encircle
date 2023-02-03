import { useEffect } from 'react'

const useScript = (url, selector = 'body', async = true) => {
  useEffect(() => {
    const element = document.querySelector(selector)
    const script = document.createElement('script')
    script.src = url
    script.async = async
    element.appendChild(script)
    return () => {
      element.removeChild(script)
    }
  }, [async, selector, url])
}

export default useScript
