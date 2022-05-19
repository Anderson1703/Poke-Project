import { useState } from "react";
import Pokemon from "./pokemon";
import {
  Button, Modal, ModalOverlay, ModalContent,Center,
  ModalHeader, ModalFooter, ModalBody, ModalCloseButton
} from '@chakra-ui/react';

export default function Searched({ pokemon, setPokemon}) {
  const [isOpen, setisOpen] = useState(true);

  const handleIsOpen=()=>{
    setisOpen(!isOpen);
    setPokemon(null);
  }

  return (
    <Modal isOpen={isOpen} onClose={handleIsOpen}>
    <ModalOverlay />
    <ModalContent>
      <Center><ModalHeader>Pokemon Encontrado</ModalHeader></Center>
      <ModalCloseButton />
      <ModalBody>
            <Pokemon pokemon={pokemon}/>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={handleIsOpen}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  );
}
