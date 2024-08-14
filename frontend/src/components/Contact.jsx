// import React from 'react';
// import { Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button, Grid, GridItem } from '@chakra-ui/react';

// const Contact = () => {
//   return (
//     <Box
//       p={8}
//       minHeight="100vh"
//       backgroundImage={"https://img.freepik.com/free-vector/abstract-blue-background-with-curve-lines_53876-117178.jpg?w=740&t=st=1722590897~exp=1722591497~hmac=c22b3f7c86d03dbeb6bb726d71fa81684f96032054426bd209c77d0537cf7946"}
//       backgroundSize="cover"
//       backgroundBlendMode="overlay"
//       color="black"
//       fontFamily="'Montserrat', sans-serif"
//       fontWeight="700"
//       letterSpacing="1.4px"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Box
//         borderRadius="15px"
//         position="relative"
//         boxShadow="0 20px 40px rgba(25, 0, 0, 0.4)"
//         p={10}
//         maxW="800px"
//         w="100%"
//         minH="500px"
//         display="flex"
//         flexDirection="column"
//         bg="rgba(, 255, 255, 0.8)"
//       >
//         <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
//           <GridItem>
//             <Box
//               display="flex"
//               flexDirection="column"
//               justifyContent="center"
//               alignItems="center"
//               p={6}
//             >
//               <Heading as="h1" size="xl" mb={4} color="#ea1d6f">Contact Us</Heading>
//               <Text fontSize="lg" mb={4} color="#333">
//                 We'd love to hear from you! Please fill out the form below to get in touch with us.
//               </Text>
//               <Box w="100%" maxW="500px">
//                 <FormControl id="name" mb={4}>
//                   <FormLabel color="#333">Name</FormLabel>
//                   <Input 
//                     type="text" 
//                     placeholder="Enter your name" 
//                     variant="unstyled"
//                     borderBottom="1px solid #666"
//                     color="#333"
//                     _placeholder={{ color: "#ea1d6f" }}
//                     _focus={{ borderBottomColor: '#333' }}
//                   />
//                 </FormControl>
//                 <FormControl id="email" mb={4}>
//                   <FormLabel color="#333">Email</FormLabel>
//                   <Input 
//                     type="email" 
//                     placeholder="Enter your email" 
//                     variant="unstyled"
//                     borderBottom="1px solid #666"
//                     color="#333"
//                     _placeholder={{ color: "#ea1d6f" }}
//                     _focus={{ borderBottomColor: '#333' }}
//                   />
//                 </FormControl>
//                 <FormControl id="message" mb={4}>
//                   <FormLabel color="#333">Message</FormLabel>
//                   <Textarea 
//                     placeholder="Enter your message" 
//                     variant="unstyled"
//                     borderBottom="1px solid #666"
//                     color="#333"
//                     _placeholder={{ color: "#ea1d6f" }}
//                     _focus={{ borderBottomColor: '#333' }}
//                   />
//                 </FormControl>
//                 <Button
//                   bg="white"
//                   border="none"
//                   color="#ea1d6f"
//                   fontSize="14px"
//                   cursor="pointer"
//                   _hover={{ color: '#b9134f' }}
//                   mb={4}
//                 >
//                   Submit
//                 </Button>
//               </Box>
//             </Box>
//           </GridItem>
//           <GridItem display={{ base: "none", md: "block" }}>
//             <Box
//               //backgroundImage={""}
//               backgroundImage={"https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-1850.jpg?t=st=1722836519~exp=1722840119~hmac=c3b00f3975280d1b7f4851115f1aaef5c21be56b193ececa6c0c812c544dde49&w=740"}
//               //bgImage="url('https://images.unsplash.com/photo-1652955189360-903b2bf1d4c9?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
//               bgSize="cover"
//               bgPosition="center"
//               h="100%"
//               borderRadius="15px"
//             />
//           </GridItem>
//         </Grid>
//         <Box
//           textAlign="center"
//           mt="auto"
//           color="#ea1d6f"
//           fontFamily="'Roboto Condensed', sans-serif"
//           fontSize="16px"
//           fontWeight="normal"
//         >
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Contact;
















import React from 'react';
import { Box, Heading, Text, Input, Textarea, Button, Icon } from '@chakra-ui/react';
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage="url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
      bgSize="cover"
      bgPosition="center"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        bgColor: "rgba(0,0,0,0.8)"
      }}
    >
      <Box
        position="relative"
        zIndex="3"
        paddingY="50px"
        width="100%"
        maxW="1080px"
        mx="auto"
        px={{ base: '20px', md: '40px' }}
      >
        <Box textAlign="center" marginBottom="50px">
          <Heading as="h2" color="white" fontWeight="bold" fontSize="3em" marginBottom="20px" color="#ea1d6f">
            Contact Us
          </Heading>
          <Text color="white">
          We're here to assist you with any questions or concerns you may have. Whether you're experiencing issues with your tasks or have general inquiries, feel free to reach out to us.
          </Text>
        </Box>
        <Box display={{ md: 'flex' }} justifyContent="space-between">
          <Box width={{ base: '100%', md: '50%' }} marginBottom={{ base: '40px', md: '0' }}>
            <Box display="flex" marginBottom="30px">
              <Box
                height="70px"
                width="70px"
                bg="white"
                textAlign="center"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={FaHome} fontSize="30px" />
              </Box>
              <Box marginLeft="20px">
                <Heading as="h4" color="#ea1d6f" fontSize="1.4em" marginBottom="5px">
                  Address
                </Heading>
                <Text color="white" fontSize="1em">
                  4671 Sugar Camp Road,
                  <br /> Owatonna, Minnesota,
                  <br /> 55060
                </Text>
              </Box>
            </Box>
            <Box display="flex" marginBottom="30px">
              <Box
                height="70px"
                width="70px"
                bg="white"
                textAlign="center"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={FaPhone} fontSize="30px" />
              </Box>
              <Box marginLeft="20px">
                <Heading as="h4" color="#ea1d6f" fontSize="1.4em" marginBottom="5px">
                  Phone
                </Heading>
                <Text color="white" fontSize="1em">
                  571-457-2321
                </Text>
              </Box>
            </Box>
            <Box display="flex" marginBottom="30px">
              <Box
                height="70px"
                width="70px"
                bg="white"
                textAlign="center"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={FaEnvelope} fontSize="30px" />
              </Box>
              <Box marginLeft="20px">
                <Heading as="h4" color="#ea1d6f" fontSize="1.4em" marginBottom="5px">
                  Email
                </Heading>
                <Text color="white" fontSize="1em">
                  ntamerrwael@mfano.ga
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            bg="white"
            p="40px"
            width={{ base: '100%', md: '45%' }}
            borderRadius="8px"
          >
            <Heading as="h2" fontWeight="bold" fontSize="2em" marginBottom="10px" color="#ea1d6f">
              Send Message
            </Heading>
            <Box as="form" id="contact-form">
              <Box position="relative" width="100%" marginTop="10px">
                <Input type="text" required placeholder="Full Name" marginBottom="10px" borderBottom="2px solid #333" />
              </Box>
              <Box position="relative" width="100%" marginTop="10px">
                <Input type="email" required placeholder="Email" marginBottom="10px" borderBottom="2px solid #333" />
              </Box>
              <Box position="relative" width="100%" marginTop="10px">
                <Textarea required placeholder="Type your Message..." marginBottom="10px" borderBottom="2px solid #333" />
              </Box>
              <Box position="relative" width="100%" marginTop="10px">
                <Button
                  type="submit"
                  width="100%"
                  bg="black"
                  color="white"
                  padding="10px"
                  fontSize="18px"
                  border="1px solid #00bcd4"
                  transition="0.5s"
                  _hover={{
                    bg: "#ea1d6f",
                    color: "#00bcd4",
                  }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
