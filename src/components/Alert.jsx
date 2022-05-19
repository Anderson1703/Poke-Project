import React from 'react';
import { Center, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';


export default function Alerts({ status, title, describcion }) {
    return (
        <Center>
            <Alert
                status={status ? status : "error"}
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    {
                        title ? title
                            : "Error Inesperado!"
                    }
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    {
                        describcion ? describcion
                            : "Verifica tu Conexion a Internet y Recarga o Ve a la Pantalla Principal."
                    }
                </AlertDescription>
            </Alert>
        </Center>
    );
}
