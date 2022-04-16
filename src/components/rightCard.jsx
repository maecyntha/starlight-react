import { Input, Flex, Box, Image, Text, Link, Button } from '@chakra-ui/react';

function RightTemp(props) {
    return (
        <Box 
            mb={{base:'8', md:'0'}}
            padding={5}
            rounded={4}
            bg='brand.100'
            boxShadow='3px 3px 5px #6ca0d1'
            mr={{base:'0', md:'5'}}
        >
            <Text color='brand.500'>{props.text}</Text>
            <Flex alignItems='center'>
                <Flex mt={4}>
                    <Image 
                        src={props.img} alt="" 
                        rounded='full' 
                        mr={5}
                        width='15%'
                        height='100%'
                    />
                    <Flex ml={5} flexDir='column' justifyContent='center'>
                        <Text mb={1} fontWeight='bold' color='brand.400'>{props.name}</Text>
                        <Text fontSize='xs'>{props.date}</Text>
                    </Flex>
                </Flex>
                <Flex alignItems='center' justifyContent='end' mr={6}>
                    <Text color='brand.400' fontSize='xl'>{props.rate}</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

function right() {
    return(
        <Box width={{base:'100%', md:'45%'}}>
            <RightTemp 
                text="Quisque pellentesque finibus libero, ac volutpat tortor pulvinar eu. Ut ante elit, 
				pellentesque a auctor id, tempor sed nulla. Vestibulum et justo eros."
                img = "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-z5vp43_a64a47a0.jpeg"
                name="Kanga & Roo"
                date="Feb 20, 2021"
                rate="9.6"

            />
            <RightTemp 
                text="Morbi vulputate consectetur viverra. Nullam eleifend, ex quis euismod malesuada, 
                elit dolor eleifend ante, vitae rutrum quam est nec quam."
                img = "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-1xy4ast_78573e01.jpeg"
                name="Christopher Robin"
                date="Mar 25, 2021"
                rate="9.6"
            />
            <Box textAlign='center' mt={5} color='brand.400'>
                <Button href="#">
                    Read More
                </Button>
            </Box>
        </Box>
    )
}

export default right;