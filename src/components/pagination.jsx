import React from 'react';
import { Button, ButtonGroup, Box } from '@chakra-ui/react';

export default function Pagination({ backPage, nextPage, page }) {
    return (
        <Box margin={"3px"}>
            <ButtonGroup alignItems={"center"} gap='2'>
                <Button colorScheme='teal' onClick={() => backPage()}>Back</Button>
                <Box> {page * 25 + 1}-{page * 25 + 25} </Box>
                <Button colorScheme='teal' onClick={() => nextPage()}>Next</Button>
            </ButtonGroup>
        </Box>
    )
}
