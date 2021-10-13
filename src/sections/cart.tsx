import React from "react";
import {
  AspectRatio,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "whiteAlpha.100");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      h="full"
      w="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bgColor={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Carrinho</Heading>
        <Text>
          If the price is too hard on your eyes,{" "}
          <Button variant="link" colorScheme="black" onClick={toggleColorMode}>
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="/images/skateboard.jpg" alt="Skateboard" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Penny board</Heading>
            <Text color={secondaryTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            R$119,00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">R$119,00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Envio</Text>
          <Heading size="sm">R$19,99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxas (estimado)</Text>
          <Heading size="sm">R$23,80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">R$ 162,79</Heading>
      </HStack>
    </VStack>
  );
};
export default Cart;
