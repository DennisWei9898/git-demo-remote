import { useEffect } from 'react'
import shallow from 'zustand/shallow'
import useEnvironment from '../stores/useEnvironment'

const Initialize = () => {
  const { setEnvironment } = useEnvironment(
    (state) => {
      return {
        setEnvironment: state.set
      }
    },
    shallow
  )
  useEffect(() => {
  
    const env = {
      gaTrackingId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID
    }

    setEnvironment((state) => {
      state.gaTrackingId = env.gaTrackingId
    })
  })

  return <></>
}

export default Initialize

