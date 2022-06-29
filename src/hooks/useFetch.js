import { useState, useEffect } from 'react'

import axios from 'axios'

export function useFetch(url) {
  const [data, setData] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setData(response.data)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  return { data, isFetching }
}
