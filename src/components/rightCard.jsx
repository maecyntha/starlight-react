import { Input, Flex, Box, Image, Text, Link } from '@chakra-ui/react';

import char5 from '../pict/roo.webp';
import char6 from '../pict/cr.webp';

function right() {
    return(
        <Box width={{base:'100%', md:'45%'}}>
            <Box 
                mt={{base:'8', md:'0'}}
                padding={5}
                rounded={4}
                bg='brand.100'
                boxShadow='3px 3px 5px #6ca0d1'
                mr={{base:'0', md:'5'}}
            >
                <Text color='brand.500'>
                    Quisque pellentesque finibus libero, ac volutpat tortor pulvinar eu. Ut ante elit, 
		    		pellentesque a auctor id, tempor sed nulla. Vestibulum et justo eros.
                </Text>
                <Flex alignItems='center'>
                    <Flex mt={4}>
                        <Image 
                            src={char5} alt="" 
                            rounded='full' 
                            mr={5}
                            width='15%'
                            height='100%'
                        />
                        <Flex ml={5} flexDir='column' justifyContent='center'>
                            <Text mb={1} fontWeight='bold' color='brand.400'>Kanga & Roo</Text>
                            <Text fontSize='xs'>Feb 20, 2021</Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems='center' justifyContent='end' mr={6}>
                        <Text color='brand.400' fontSize='xl'>9.6</Text>
                    </Flex>
                </Flex>
            </Box>
            <Box
                mt='8'
                padding={5}
                rounded={4}
                bg='brand.100'
                boxShadow='3px 3px 5px #6ca0d1'
                mr={{base:'0', md:'5'}}
            >
                <Text color='brand.500'>
                    Morbi vulputate consectetur viverra. Nullam eleifend, ex quis euismod malesuada, 
                    elit dolor eleifend ante, vitae rutrum quam est nec quam. 
                </Text>
                <Flex alignItems='center'>
                    <Flex mt={4}>
                        <Image 
                            src={char6} alt="" 
                            rounded='full' 
                            mr={5}
                            width='15%'
                            height='100%'
                        />
                        <Flex ml={5} flexDir='column' justifyContent='center'>
                            <Text mb={1} fontWeight='bold' color='brand.400'>Christopher Robin</Text>
                            <Text fontSize='xs'>Mar 25, 2021</Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems='center' justifyContent='end' mr={6}>
                        <Text color='brand.400' fontSize='xl'>9.6</Text>
                    </Flex>
                </Flex>
            </Box>
            <Box 
                textAlign='center' 
                mt={5} 
                color='brand.400'
            >
                <Link 
                    href="#" 
                    textDecoration='none'
                    borderBottom='2px solid'
                    pb='12px'
                >Read More -{'>'}</Link>
            </Box>
        </Box>
    )
}

export default right;