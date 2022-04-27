import { Flex, Box, Image, Text, Link, Button } from '@chakra-ui/react';
import LeftCard from './leftCard'
import RightCard from './rightCard'

import hotel1 from '../pict/hotel01.jfif';
import hotel2 from '../pict/hotel02.jfif';
import hotel3 from '../pict/hotel03.jfif';

function Hotel(props) {
    <Box overflow='hidden' h='100%' w='100%'>
        <Image w='100%' src={props.hotel} alt=""/>
    </Box>
} 

function Heading() {
    return (
        <Box>
            <Flex justifyContent='center'>
                {/* <Hotel hotel={hotel1}/>
                <Hotel hotel={hotel2}/>
                <Hotel hotel={hotel3}/> */}
                <Box overflow='hidden' h='100%' w='100%'>
                    <Image w='100%' src={hotel1} alt=""/>
                </Box>
                <Box overflow='hidden' h='100%' w='100%'>
                    <Image w='100%' src={hotel2} alt=""/>
                </Box>
                <Box overflow='hidden' h='100%' w='100%'>
                    <Image w='100%' src={hotel3} alt=""/>
                </Box>
            </Flex>
            <Header />

            <Flex p={8} flexDir={{base:'column', md:'row'}}>
                <LeftCard />
                <RightCard />
            </Flex>
            <Box bottom={0} bg='brand.100' py={6} textAlign='center'>
                <Text mb={3} >BOOK YOURSELF A ROOM NOW</Text>
                <Button 
                    color='brand.100'
                    py={6} px={10} 
                    href='#' 
                    bgGradient='linear(to-r, rgba(174,212,235,1), rgba(112,164,211,1) 69%)'
                    _hover={{color:'brand.500'}}
                >BOOK NOW</Button>
            </Box>
        </Box>
    )
}

function Header() {
    return(
        <Flex bg='brand.100' justify='space-between' alignItems='center'>
            <Text fontSize='lg' pl={5}>The Ritz-Carlton Hotel</Text>
            <Flex alignItems='center' justify='content-between'>
                <Link fontSize='sm' target='_blank' href='https://goo.gl/maps/4vrMrsXEZnBUJFwC7'>Jakarta, Indonesia</Link>
                <Box bg='brand.400' color='brand.100' fontSize='smaller' ml={5} p={5} textAlign='center'>
                    <Text fontSize='md'>9.6</Text>
                    <Text fontSize='xs'>420 votes</Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Heading;