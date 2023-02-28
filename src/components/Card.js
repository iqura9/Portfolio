import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack 
      backgroundColor={'white'}
      borderBottomRadius={'12px'}
      alignItems="start" 
    >
      <Image src={imageSrc} borderBottomRadius={'12px'} alt='image' />
      <VStack padding={4} gap={2} alignItems="start" >
        <Heading color={"black"} as='h6' size='md'>{title}</Heading>
        <Text color={'#333'} >{description}</Text>
        <HStack color={"#444"} >
          <Heading as='p' size='m' fontWeight='500' cursor='pointer'>See more</Heading>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
      
    </VStack>
  );
};

export default Card;
