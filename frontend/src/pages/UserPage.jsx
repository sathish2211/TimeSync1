import React from 'react';
import { Box, Text, Flex, Avatar, Button } from '@chakra-ui/react';
import { FaUserEdit, FaTasks, FaSignOutAlt } from 'react-icons/fa';

export const UserPage = () => {
  return (
    <Box 
      p={8} 
      bg="linear-gradient(135deg, #f5f7fa, #c3cfe2)" 
      minHeight="100vh"
      display="flex" 
      justifyContent="center" 
      alignItems="center"
    >
      <Box 
        w="100%" 
        maxW="500px" 
        bg="white" 
        p={6} 
        borderRadius="lg" 
        boxShadow="lg"
      >
        <Flex alignItems="center" mb={6}>
          <Avatar size="xl" src="https://via.placeholder.com/150" />
          <Box ml={4}>
            <Text fontSize="2xl" fontWeight="bold">John Doe</Text>
            <Text fontSize="md" color="gray.500">john.doe@example.com</Text>
          </Box>
        </Flex>
        <Button 
          w="full" 
          bg="black" 
          color="white" 
          _hover={{ bg: "gray.800", transform: "scale(1.05)", boxShadow: "md" }} 
          leftIcon={<FaUserEdit />}
          mb={4}
        >
          Edit Profile
        </Button>
        <Button 
          w="full" 
          bg="black" 
          color="white" 
          _hover={{ bg: "gray.800", transform: "scale(1.05)", boxShadow: "md" }} 
          leftIcon={<FaTasks />}
          mb={4}
        >
          My Tasks
        </Button>
        <Button 
          w="full" 
          bg="black" 
          color="white" 
          _hover={{ bg: "gray.800", transform: "scale(1.05)", boxShadow: "md" }} 
          leftIcon={<FaSignOutAlt />}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default UserPage;
