import { useMediaQuery } from '@chakra-ui/react'

const useResponsive = () => {
  const [sm] = useMediaQuery('(max-width: 767px)')
  const [mdMin] = useMediaQuery('(min-width: 768px)')
  const [mdMax] = useMediaQuery('(max-width: 1023px)')
  const md = mdMin && mdMax
  const [lg] = useMediaQuery('(min-width: 1024px)')
  return {
    sm,
    md,
    lg,
  }
}

export default useResponsive
