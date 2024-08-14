import React from 'react';
import { Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaUser, FaTasks, FaHome } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      left="0"
      top="0"
      width="250px"
      height="100vh"
      bg="gray.800"
      color="white"
      display="flex"
      flexDirection="column"
      p="4"
      boxShadow="2xl"
    >
      <Flex alignItems="center" mb="8">
        <FaHome size="1.5rem" />
        <Text fontSize="2xl" fontWeight="bold" ml="4">
          Taskz Dashboard
        </Text>
      </Flex>
      <Flex direction="column" gap="6">
        <ChakraLink as={Link} to="/dashboard" _hover={{ color: "gray.400" }}>
          <Flex alignItems="center">
            <FaTasks size="1.5rem" />
            <Text ml="4">Dashboard</Text>
          </Flex>
        </ChakraLink>
        <ChakraLink as={Link} to="/user" _hover={{ color: "gray.400" }}>
          <Flex alignItems="center">
            <FaUser size="1.5rem" />
            <Text ml="4">User Page</Text>
          </Flex>
        </ChakraLink>
      </Flex>
    </Box>
  );
};
