import { Divider, Flex, Box, Image, Text, ListItem, UnorderedList } from '@chakra-ui/react';

import char1 from '../pict/winnie.webp';
import char2 from '../pict/tigger.webp';
import char3 from '../pict/piglet.webp';
import char4 from '../pict/eeyore.webp';
import char5 from '../pict/roo.webp';
import char6 from '../pict/cr.webp';

function left() {
    return(
        <Box 
            width={{base:'100%', md:'55%'}}
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
                    <Image 
                        src={char1} 
                        rounded='full' 
                        mr={1}
                        width={{base:'40px', md:'25px'}}
                    />
                    <Image 
                        src={char2} 
                        rounded='full' 
                        mr={1}
                        width={{base:'40px', md:'25px'}}
                    />
                    <Image 
                        src={char3} 
                        rounded='full' 
                        mr={1}
                        width={{base:'40px', md:'25px'}}
                    />
                    <Image 
                        src={char4} 
                        rounded='full' 
                        mr={1}
                        width={{base:'40px', md:'25px'}}
                    />
                </Flex>
            </Flex>
        </Box>
    )
}

export default left;