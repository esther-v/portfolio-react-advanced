import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <VStack backgroundColor="white" borderRadius={10} >
        <Image
          src={imageSrc}
          objectFit='cover'
          style={{ borderRadius: 10 }}
        />
        <VStack px={5} py={2} alignItems="flex-start">
          <Heading as='h6' size='md' color="black">{title}</Heading>
          <Text color="grey">{description}</Text>
          <Text color="black">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        </VStack>
      </VStack>
    </>
  )
};

export default Card;
