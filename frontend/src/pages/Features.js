import React, { useState } from 'react';
import { Box, Heading, List, ListItem, Flex, Image, Text, Button } from '@chakra-ui/react';
import styled from 'styled-components';
import FeaturesImage from '../asserts/sathish.png'; // Update the path to your image

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00134d;
  color: white;
  height: 100vh;
  font-family: 'Poppins', sans-serif; /* Changed to Poppins */
  padding: 20px;
  box-sizing: border-box;
`;

const Content = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap; /* Ensures responsive behavior */
`;

const ImageContainer = styled(Box)`
  flex: 1;
  margin-right: 20px;
  max-width: 500px; /* Optional: limit the image size */
`;

const FeaturesList = styled(Box)`
  flex: 1;
  padding-left: 20px;
  max-width: 500px; /* Optional: limit the content width */
`;

const FeatureItem = styled(ListItem)`
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Increased margin for more space between items */
  font-size: 1.2rem;
  position: relative;
  padding-bottom: 5px; /* Space for the underline */
  transition: color 0.3s ease, transform 0.3s ease; /* Added transition for transform */
  
  &:hover {
    color: #2e86c1; /* Change text color on hover */
    transform: translateX(10px); /* Shift item to the right on hover */
  }
`;

const Number = styled(Box)`
  background-color: #ea1d6f;
  border-radius: 50%;
  width: 40px; /* Increased size for better visibility */
  height: 40px; /* Increased size for better visibility */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px; /* Increased margin for more spacing */
  font-weight: bold;
  color: white; /* Ensure the number is visible on the background */
`;

const ToggleButton = styled(Button)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #2e86c1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #1f65a6;
  }
`;

const Features = () => {
  const [showFeatures, setShowFeatures] = useState(true);

  return (
    <Container>
      <Content direction={{ base: 'column', md: 'row' }}>
        <ImageContainer>
          <Image
            //src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?t=st=1723011712~exp=1723015312~hmac=5928b1eac6aac8a3942deee5ec6e53449dee0e883b942c16b27ac5c22d911a37&w=740"
            alt="Features Illustration"
            borderRadius="10px"
            maxW="100%"
            height="auto"
          />
        </ImageContainer>
        <FeaturesList>
          <Heading as="h2" size="xl" mb={7} textShadow="2px 2px #000" color={"#ea1d6f"}>
            Features
          </Heading>
          {showFeatures && (
            <List spacing={3}>
              <FeatureItem>
                <Number>1</Number>
                <Text>Create and Manage Project</Text>
              </FeatureItem>
              <FeatureItem>
                <Number>2</Number>
                <Text>Create and Manage Tasks</Text>
              </FeatureItem>
              <FeatureItem>
                <Number>3</Number>
                <Text>Invite Member(s)</Text>
              </FeatureItem>
              <FeatureItem>
                <Number>4</Number>
                <Text>Assign Task to Member(s)</Text>
              </FeatureItem>
              <FeatureItem>
                <Number>5</Number>
                <Text>Track Tasks Progress State</Text>
              </FeatureItem>
              <FeatureItem>
                <Number>6</Number>
                <Text>Generate Project Report(s)</Text>
              </FeatureItem>
            </List>
          )}
          <ToggleButton onClick={() => setShowFeatures(!showFeatures)}>
            {showFeatures ? 'Hide Features' : 'Show Features'}
          </ToggleButton>
        </FeaturesList>
      </Content>
    </Container>
  );
};

export default Features;