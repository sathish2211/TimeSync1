import React from 'react';
import { Box, Flex, Text, Button, Grid, GridItem } from '@chakra-ui/react';
import { FaPlus, FaCheckCircle, FaClipboardList, FaTrashAlt } from 'react-icons/fa';

export const UserDashboard = () => {
  return (
    <Box 
      p={8} 
      bg="linear-gradient(135deg, #e0eafc, #cfdef3)" 
      minHeight="100vh"
    >
      <Flex justify="space-between" align="center" mb={8}>
        <Text fontSize="3xl" fontWeight="bold">Task Dashboard</Text>
        <Button 
          bg="black" 
          color="white" 
          _hover={{ bg: "gray.800", transform: "scale(1.05)", boxShadow: "md" }} 
          leftIcon={<FaPlus />}
        >
          Add New Task
        </Button>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem 
          bg="white" 
          p={6} 
          borderRadius="lg" 
          boxShadow="md"
          _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
        >
          <FaClipboardList size="2rem" color="#4A90E2" />
          <Text fontSize="2xl" fontWeight="bold" mt={4}>Total Tasks</Text>
          <Text fontSize="4xl" color="gray.600">25</Text>
        </GridItem>
        <GridItem 
          bg="white" 
          p={6} 
          borderRadius="lg" 
          boxShadow="md"
          _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
        >
          <FaCheckCircle size="2rem" color="#7ED321" />
          <Text fontSize="2xl" fontWeight="bold" mt={4}>Completed Tasks</Text>
          <Text fontSize="4xl" color="gray.600">18</Text>
        </GridItem>
        <GridItem 
          bg="white" 
          p={6} 
          borderRadius="lg" 
          boxShadow="md"
          _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
        >
          <FaTrashAlt size="2rem" color="#D0021B" />
          <Text fontSize="2xl" fontWeight="bold" mt={4}>Deleted Tasks</Text>
          <Text fontSize="4xl" color="gray.600">7</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default UserDashboard;
