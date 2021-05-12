import { useEffect } from 'react'

const useWeatherAPI = (path: string) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  return null
}

export { useWeatherAPI}
