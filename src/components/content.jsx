import { Flex } from '@chakra-ui/react';
import SideNav from './sideNav'
import Heading from './heading'

function test() {
    return (
        <Flex flexDir={{base: 'column', md: 'row'}} bg='brand.300'>
            <SideNav />
            <Heading />
        </Flex>
    )
}



export default test;