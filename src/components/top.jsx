import React from 'react';
import { Input, Flex, Box, Image } from '@chakra-ui/react';

import duck from '../pict/duck.jpg';
import car from '../pict/car.svg';
import ig from '../pict/ig.svg';

function Account() {
    return (
        <Flex 
            alignItems='center' 
            _hover={{ backgroundColor: 'brand.200'}} 
            height='50px' 
            borderRadius={5} 
            justifyContent='center'
        >
            <Box py='3' width='60px'>
                <Image 
                    src={duck} alt=''
                    cursor='pointer'
                    borderRadius='full'
                    p={3}
                />
            </Box>
            <Box pr={3} cursor='pointer'>Mae</Box>
        </Flex>
    )
}

// function Icon(props) {
//     return (
//         <Box width='50px' mr={{ base: '0', md: '5' }} >
//                 <Image 
//                     src={props.logo} alt=''
//                     cursor='pointer'
//                     borderRadius={3}
//                     _hover={{ backgroundColor: 'brand.200'}}
//                     p={3}
//                 />
//             </Box>
//     );
// }

function Other() {
    return (
        <Flex alignItems='center'>
            <Box width='50px' mr={{ base: '0', md: '5' }} >
                <Image 
                    src={car} alt=''
                    cursor='pointer'
                    borderRadius={3}
                    _hover={{ backgroundColor: 'brand.200'}}
                    p={3}
                />
            </Box>

            {/* <Icon img="{car}" /> */}

            <Box width='50px' mr={{ base: '0', md: '5' }} >
                <Image 
                    src={ig} alt=''
                    cursor='pointer'
                    borderRadius={4}
                    _hover={{ backgroundColor: 'brand.200'}}
                    p={3}
                />
            </Box>
            <Account />
        </Flex>
    )
}

function top() {
    return (
        <Flex bg='brand.100' mb={1} h='85px' alignItems='center' justifyContent='space-between' px={6} >
            <Image 
                src={duck} 
                boxSize='55px'
                cursor='pointer'
                alt='profile'
                borderRadius='5'
                mr={3}
            />
            <Input 
                placeholder="Search Hotels"
                variant='outline'
                width='50%' 
                bg='brand.200'
                mr={1}
                textAlign='center'
            />
            <Other />
        </Flex>
    )
}

export default top;