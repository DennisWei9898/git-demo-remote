import { Button, ButtonProps, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

type LaunchButtonProps = {
  text: string
  route: string
}

const LaunchButton = ({
  route,
  text,
  ...props
}: LaunchButtonProps & ButtonProps) => {
  const router = useRouter()
  return (
    <Button
      borderRadius="50px"
      layerStyle="button.primary"
      {...props}
      onClick={() => {
        router.push(route)
      }}
      minH="100px"
      minW="360px"
    >
      <Text 
        fontSize={{base: "36px"}}
        position="relative"
        top={{base:"7px"}}
      >
        {text}
      </Text>
    </Button>
  )
}

export default LaunchButton