import React from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack h="full" w="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Detalhes</Heading>
        <Text>Se você já tem uma conta, clique aqui para entrar.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Primeiro nome</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Último nome</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Endereço</FormLabel>
            <Input placeholder="Blvd. Broken Dreams 21" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Cidade</FormLabel>
            <Input placeholder="San Francisco" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>País</FormLabel>
            <Select>
              <option value="br">Brazil</option>
              <option value="usa">United States of America</option>
              <option value="uae">United Arab Emirates</option>
              <option value="de">Germany</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Mesmo endereço para cobrança.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button variant="primary" colorScheme="brand" size="lg" isFullWidth>
            Finalizar pedido
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
