// import React from 'react';
// import { Box, Heading, Text, Button, Flex, Image } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';
// import Features from './Features';
// import HomePage from './HomePage';

// export const Home = () => {
//   return (
//     <Box>
//       <Flex
//         p={8}
//         textAlign="center"
//         backgroundImage={"https://img.freepik.com/free-vector/abstract-blue-background-with-curve-lines_53876-117178.jpg?w=740&t=st=1722590897~exp=1722591497~hmac=c22b3f7c86d03dbeb6bb726d71fa81684f96032054426bd209c77d0537cf7946"}
//         backgroundSize="cover"
//         backgroundRepeat="no-repeat"
//         backgroundPosition="center"
   
//         minHeight="100vh"
//         direction={{ base: 'column', md: 'row' }}
//         justify="center"
//         align="center"
//         color="white"
//       >
//         <Box
//           flex={{ base: 'none', md: 1 }}
//           textAlign={{ base: 'center', md: 'right' }}
//           p={4}
//           order={{ base: 2, md: 1 }}
//         >
//           <Heading as="h1" size="2xl" mb={4} textShadow="2px 2px #000">
//             Build your work’s foundation with tasks
//           </Heading>
//           <Text fontSize="xl" mb={8} textShadow="1px 1px #000">
//             Plan, organize, and collaborate on any project with tasks that adapt to any workflow or type of work.
//           </Text>
//           <Box display="flex" justifyContent="center" alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
//             <Button
//               as={Link}
//               to="/register"
//               size="lg"
//               bg="black"
//               _hover={{ bg: "gray.800", transform: "scale(1.05)", boxShadow: "lg" }}
//               colorScheme="blackAlpha"
//               rightIcon={<FaArrowRight />} // Adding the icon
//               transition="all 0.3s ease"
//             >
//               Getting Started
//             </Button>
//           </Box>
//         </Box>
//         <Box
//           flex={{ base: 'none', md: 1 }}
//           p={4}
//           order={{ base: 1, md: 2 }}
//           display="flex"
//           justifyContent="center" // Center the image horizontally
//         >
//           <Image
//           src=''
//             alt="Placeholder Image"
//             borderRadius="md"
//             maxW={{ base: '80%', md: '50%' }}
//             _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
//             transition="all 0.3s ease"
//           />
//         </Box>
//       </Flex>
//       <Features /> 
//       <HomePage/>
//       {/* Features component placed below the home content */}
//     </Box>
//   );
// };

// export default Home;




import React from 'react';
import { Box, Heading, Text, Button, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Features from './Features';
import HomePage from './HomePage';

export const Home = () => {
  return (
    <Box>
      <Flex
        p={8}
        textAlign="center"
        backgroundImage={"https://img.freepik.com/free-vector/abstract-blue-background-with-curve-lines_53876-117178.jpg?w=740&t=st=1722590897~exp=1722591497~hmac=c22b3f7c86d03dbeb6bb726d71fa81684f96032054426bd209c77d0537cf7946"}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        minHeight="100vh"
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        align="center"
        color="white"
      >
        <Box
          flex={{ base: 'none', md: 1 }}
          textAlign={{ base: 'center', md: 'right' }}
          p={4}
          order={{ base: 2, md: 1 }}
        >
          <Heading as="h1" size="2xl" mb={4} textShadow="2px 2px #000">
            Build your work’s foundation with tasks
          </Heading>
          <Text fontSize="xl" mb={8} textShadow="1px 1px #000">
            Plan, organize, and collaborate on any project with tasks that adapt to any workflow or type of work.
          </Text>
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
            <Button
              as={Link}
              to="/register"
              size="lg"
              position="relative"
              display="inline-block"
              cursor="pointer"
              outline="none"
              border="0"
              verticalAlign="middle"
              textDecoration="none"
              bg="transparent"
              padding="0"
              fontSize="inherit"
              fontFamily="inherit"
              width="12rem"
              height="auto"
              _hover={{
                '.circle': {
                  width: "100%",
                },
                '.icon.arrow': {
                  background: "#fff",
                  transform: "translate(1rem, 0)",
                },
                '.button-text': {
                  color: "#fff",
                },
              }}
            >
              <Box className="circle" position="relative" display="block" margin="0" width="3rem" height="3rem" bg="#282936" borderRadius="1.625rem" transition="all 0.45s cubic-bezier(0.65, 0, 0.076, 1)">
                <Box className="icon arrow" position="absolute" top="0" bottom="0" margin="auto" left="0.625rem" width="1.125rem" height="0.125rem" _before={{
                  content: '""',
                  position: "absolute",
                  top: "-0.25rem",
                  right: "0.0625rem",
                  width: "0.625rem",
                  height: "0.625rem",
                  borderTop: "0.125rem solid #fff",
                  borderRight: "0.125rem solid #fff",
                  transform: "rotate(45deg)",
                }} />
              </Box>
              <Box className="button-text" position="absolute" top="0" left="0" right="0" bottom="0" padding="0.75rem 0" margin="0 0 0 2.85rem" color="#282936" fontWeight="700" lineHeight="1.6" textAlign="center" textTransform="uppercase" fontFamily={"'Poppins', sans-serif"}>
                Getting Started
              </Box>
            </Button>
          </Box>
        </Box>
        <Box
          flex={{ base: 'none', md: 1 }}

          p={4}
          order={{ base: 1, md: 2 }}
          display="flex"
          justifyContent="center" // Center the image horizontally
        >
          <Image
            alt="Placeholder Image"
            borderRadius="md"
            maxW={{ base: '80%', md: '50%' }}
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
            transition="all 0.3s ease"
          />
        </Box>
      </Flex>
      <Features />
      <HomePage />
      
      {/* Features component placed below the home content */}
    </Box>
  );
};

export default Home;













// import React from 'react';
// import { Box, Heading, Text, Button, Flex, Image, List, ListItem, ListIcon } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'; // Importing the icons

// export const Home = () => {
//   return (
//     <Flex
//       p={8}
//       textAlign="center"
//       backgroundImage={"https://img.freepik.com/free-vector/abstract-blue-background-with-curve-lines_53876-117178.jpg?w=740&t=st=1722590897~exp=1722591497~hmac=c22b3f7c86d03dbeb6bb726d71fa81684f96032054426bd209c77d0537cf7946"}
//       backgroundSize="cover"
//       backgroundRepeat="no-repeat"
//       backgroundPosition="center" 
//       minHeight="100vh"
//       direction="column"
//       justify="center"
//       align="center"
//       color="white"
//     >
//       <Box
//         textAlign="center"
//         p={4}
//       >
//         <Heading as="h1" size="2xl" mb={4} textShadow="2px 2px #000">
//           Build your work’s foundation with tasks
//         </Heading>
//         <Text fontSize="xl" mb={8} textShadow="1px 1px #000">
//           Plan, organize, and collaborate on any project with tasks that adapt to any workflow or type of work.
//         </Text>
//         <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
//           <Button
//             as={Link}
//             to="/register"
//             size="lg"
//             bg="black"
//             _hover={{ bg: "gray.800", transform: "scale(1.05)", boxShadow: "lg" }}
//             colorScheme="blackAlpha"
//             rightIcon={<FaArrowRight />} // Adding the icon
//             transition="all 0.3s ease"
//             mb={8} // Margin bottom to add space between the button and the features list
//           >
//             Getting Started
//           </Button>
//         </Box>
//       </Box>
//       <Box
//         textAlign="center"
//         p={4}
//       >
//         <Heading as="h2" size="xl" mb={4} textShadow="2px 2px #000">
//           Features
//         </Heading>
//         <List spacing={3} textAlign="left" display="inline-block">
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             Create and Manage Project
//           </ListItem>
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             Create and Manage Tasks
//           </ListItem>
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             Invite Member(s)
//           </ListItem>
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             Assign Task to Member(s)
//           </ListItem>
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             Track Tasks Progress State
//           </ListItem>
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             Generate Project Report(s)
//           </ListItem>
//         </List>
//       </Box>
//       <Box
//         display="flex"
//         justifyContent="center" // Center the image horizontally
//         p={4}
//       >
//         <Image
//           src="path/to/your/image.png" // Replace with your image path
//           alt="Placeholder Image"
//           borderRadius="md"
//           maxW="50%"
//           _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
//           transition="all 0.3s ease"
//         />
//       </Box>
//     </Flex>
//   );
// };