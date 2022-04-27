import { Divider, Flex, Box, Image, Text, ListItem, UnorderedList } from '@chakra-ui/react';

function Pict(props) {
    return (
        <Image 
            src={props.url} 
            rounded='full' 
            mr={1}
            maxH={{base:'30px', md:'25px'}}
        >
        </Image>
    )
}

function left() {
    return(
        <Box 
            width={{base:'100%', md:'55%'}}
            mb={{base:'8', md:'0'}}
            padding={5}
            rounded={4}
            bg='brand.100'
            boxShadow='3px 3px 5px #6ca0d1'
            mr={{base:'0', md:'8'}}
        >
            <Text color='brand.500'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non est eu velit fermentum semper. 
				Proin lobortis dolor rhoncus elit cursus mollis.
            </Text>
            <Text color='brand.500' mt={4}>
                Praesent vel ultrices elit, sit amet mattis lectus. Quisque porttitor sit amet turpis vel efficitur. Nulla facilisi. 
            </Text>
            <Divider color='brand.400' my={4} />
            <Flex px={5} flexDir={{base:'column', md:'row'}}>
                <Box w='55%'>
                    <UnorderedList color='brand.500'>
                        <ListItem mb={1}>Close to the beach</ListItem>
                        <ListItem mb={1}>Breakfast included</ListItem>
                        <ListItem mb={1}>Free airport shuttle</ListItem>
                        <ListItem mb={{base:'1', md:'none'}}>Free wifi in all rooms</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <UnorderedList color='brand.500'>
                        <ListItem mb={1}>Air conditioning and heating</ListItem>
                        <ListItem mb={1}>Pets allowed</ListItem>
                        <ListItem mb={1}>We speak all languages</ListItem>
                        <ListItem>Perfect families</ListItem>
                    </UnorderedList>
                </Box>
            </Flex>
            <Divider color='brand.400' my={4}/>
            <Flex 
                justifyContent='space-between'
                alignContent='center'
                flexDir={{base:'column', md:'row'}}
            >
                <Text color='brand.500'>Pooh and 3 other friends recommended this hotel</Text>
                <Flex
                    justifyContent={{base:'flex-start', md:'flex-end'}}
                    mt={{base:'2', md:'0'}}
                >
                    <Pict url='https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg'/>
                    <Pict url='https://lumiere-a.akamaihd.net/v1/images/d97be3597bae8541c4de53aa8741d30b34b76dac.jpeg'/>
                    <Pict url='https://lumiere-a.akamaihd.net/v1/images/9e259a68c3fceb6265860399bfc98fb56e098960.jpeg'/>
                    <Pict url='https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-11ej849_779819a7.jpeg'/>
                </Flex>
            </Flex>
        </Box>
    )
}

export default left;