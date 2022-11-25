import {Box, Flex, Text} from "@chakra-ui/react"

import useResponsive from "../../hooks/useResponsive"

import LaunchButton from '../LaunchButton'

import Typus from '../../public/logo/typus-logo.png'
import Twitter from '../../public/logo/twitter-icon.svg'
import Sui from '../../public/logo/sui-logo.svg'

import styles from './Logo.module.css'

const Background = () => {
  const { sm } = useResponsive();

  return(
    <Box 
      h="auto" 
      mx={{ lg:20}} 
      m="0px !important"
      p={{
        base: '260px 180px 84px 140px'
      }}>
      <Flex 
        direction="row"
        minH={{base: '448px'}}
        justify="space-between"
        w="100%"
        >
          <Flex 
            direction="column"
            h={{base: "210px"}}
            w={{base: "550px"}}
            >
            <Box 
              backgroundImage={{
                base: Typus.src
              }}
              backgroundRepeat="no-repeat"
              backgroundSize="auto 100%"
              minH={{base: "130px"}}
              mb = {4}
              >
            </Box>
            <Box
              display="block"
              fontSize="36px"
              lineHeight="36px"
              letterSpacing="0.18em"
              fontWeight="400"
              position={{base:"relative"}}
              left={17}
              color="#000"
              >
              <Text display={{base: 'block'}}>
                Real Yield in one click
              </Text>
            </Box>

          </Flex>
          <Flex 
            direction="column"
            w={{base: "360px"}}
            h={{base: "188px"}}
            mt={{base: "24px"}}
            >
            <Box>
                <Box 
                  className={styles.Twitter}
                  backgroundImage={{
                    base: Twitter.src
                  }}
                  backgroundRepeat="no-repeat"
                  backgroundSize="auto 100%"
                  h={{base: "72px"}}
                  w={{base:"72px"}}
                  mt={{base:"0px"}}
                  ml="auto"
                  mr="auto"
                >
                </Box>
            </Box>
            
            <Box
              display="block"
              fontSize="36px"
              lineHeight="36px"
              letterSpacing="0.18em"
              fontWeight="400"
              ml={{base:"auto"}}
              mr={{base:"auto"}}
              mt="0px"
              >
              <LaunchButton
                fontWeight="700"
                fontSize="18px"
                lineHeight="26px"
                width={{ base: '100%', md: '212px' }}
                height="48px"
                text="Coming Soon"
                route="123"
              />
                
            </Box>

          </Flex>
      </Flex>
      <Flex
        direction="row"
        justify="center"
        w="100%"
      >
            <Flex
              direction="row"
              justify="center"
              alignItems="center"
            >
                  <Text
                    fontFamily="ariel"
                    fontWeight="400"
                    fontSize="24px"
                    color="#498FB6"
                  >
                    BUILD ON
                  </Text>
                  <Box
                    backgroundImage={{
                      base: Sui.src
                    }}
                    backgroundRepeat="no-repeat"
                    backgroundSize="contain"
                    h={{base: "39px"}}
                    w={{base: "66px"}}
                    ml="7px"
                  >

                  </Box>
            </Flex>
      </Flex>

    </Box>
  )
}

export default Background
