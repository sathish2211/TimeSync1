import React from 'react';
import { Box, Heading, Text, Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box p={10}>
      <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-between" mb={10}>
        <Box flex="1" mr={{ base: 0, md: 10 }} mb={{ base: 10, md: 0 }}>
          <Text color="orange.500" fontWeight="bold" mb={2} fontFamily='"Poppins", sans-serif'>
            Focus on what's important
          </Text>
          <Heading as="h2" size="xl" mb={4} fontFamily='"Poppins", sans-serif'>
            Reach that mental clarity you've been longing for.
          </Heading>
          <Text fontSize="lg" fontFamily='"Poppins", sans-serif'>
            Just focus on your assigned task and let the board do the organizing. Prioritize your most important work.
          </Text>
        </Box>
        <Box flex="1" ml={{ base: 0, md: 10 }}>
          <Text color="orange.500" fontWeight="bold" mb={2} fontFamily='"Poppins", sans-serif'>
            Improvise, Divide, and Conquer
          </Text>
          <Heading as="h2" size="xl" mb={4} fontFamily='"Poppins", sans-serif'>
            The fastest way to get tasks out of your head.
          </Heading>
          <Text fontSize="lg" fontFamily='"Poppins", sans-serif'>
            Tasktrec will be a life saver for you. It will help you be organized, on track, and stay at the top of your work.
          </Text>
        </Box>
      </Flex>
      <Box border="1px" borderColor="gray.200" p={10} borderRadius="md" textAlign="center">
        <Heading as="h2" size="lg" mb={4} fontFamily='"Poppins", sans-serif'>
          One app to replace them all
        </Heading>
        <Text fontSize="lg" mb={6} fontFamily='"Poppins", sans-serif'>
          Your job in one: Goals, Tasks, Progress, Docs & more...
        </Text>
        <Link to="/register">
          <Button 
            colorScheme="orange" 
            size="lg" 
            fontFamily='"Poppins", sans-serif' 
            background="linear-gradient(45deg, #f857a8, #ff5858)"
            _hover={{
              background: "linear-gradient(45deg, #ff5858, #f857a8)",
              transform: "scale(1.05)"
            }}
          >
            Get Started
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
