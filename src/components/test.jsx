import { Flex } from '@chakra-ui/react';
import SideNav from './sideNav'
import Heading from './heading'

// import char1 from '../pict/winnie.webp';
// import char2 from '../pict/tigger.webp';
// import char3 from '../pict/piglet.webp';
// import char4 from '../pict/eeyore.webp';


function test() {
    return (
        <Flex flexDir={{base: 'column', md: 'row'}} bg='brand.300'>
            <SideNav />
            <Heading />
        </Flex>
    )
}



export default test;