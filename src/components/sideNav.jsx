import { Flex, Link, Text } from '@chakra-ui/react';

function Nav(props) {
    return (
        <Link 
            href='#'
            fontSize='large'
            color='brand.100' 
            my={2} p='20px'
            borderRadius={{base:'10px', md:'none'}}
            width={{base:'auto', md:'100%'}}
            _hover={{backgroundColor: 'brand.100', color: 'brand.400'}}
        >{props.name}</Link>
    )
}

function SideNav() {
    return (
        <Flex 
            bg='brand.400' 
            width='100%'
            minHeight='100%'
            flexDir={{base: 'row', md: 'column'}}
            justify={{base: 'space-evenly', md: 'start'}}
            alignItems={{base: 'center', md: 'start'}}
        >
            <Nav name="Hotels" />
            <Nav name="Flights" />
            <Nav name="Car Rentals" />
            <Nav name="Tool" />

            <Text display={{base:'none', md:'block'}} color="brand.100" fontSize="xs" w="full" mt='auto' mb={5} textAlign="center">&copy;2022 by<Text />Maecyntha Irelynn Tantra<Text />All Rights Reserved</Text>
        </Flex>
    )
}

export default SideNav;