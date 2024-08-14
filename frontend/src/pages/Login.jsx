// import {
//   Alert,
//   AlertIcon,
//   AlertTitle,
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   VStack,
//   InputGroup,
//   InputLeftElement,
//   Icon,
//   Heading,
//   Text,
//   Flex,
//   Image
// } from '@chakra-ui/react';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { clearError, login } from '../action/userAction';
// import { FaEnvelope, FaLock, FaUserShield } from 'react-icons/fa'; // Import admin icon
// import { MdTask } from 'react-icons/md'; // Import other icons

// export const Login = () => {
//   const dispatch = useDispatch();
//   const { loading, isAuthenticated, error } = useSelector(state => state.user);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       email,
//       password
//     };
//     dispatch(login(data));
//   };

//   useEffect(() => {
//     let timeout;
//     if (error) {
//       timeout = setTimeout(() => {
//         dispatch(clearError());
//       }, 5000); // Set the duration here (in milliseconds)
//     }
//     if (isAuthenticated) {
//       navigate('/task');
//     }
//     return () => clearTimeout(timeout);
//   }, [dispatch, error, isAuthenticated, navigate]);

//   return (
//     <Box
    
//       p={4}
//       minHeight="100vh"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
      
//       //bgGradient="linear(to-r, #ffffff 0%, #5899e2 74%)"
//       // backgroundImage={"https://img.freepik.com/free-vector/gradient-geometric-shapes-dark-background_23-2148423542.jpg?w=900&t=st=1722590603~exp=1722591203~hmac=ac99d885b4d9e21a34329a05ee12db7aa39ea1f0823286ccf24aacbe9a902184"}
//       backgroundImage={"https://img.freepik.com/free-vector/abstract-blue-background-with-curve-lines_53876-117178.jpg?w=740&t=st=1722590897~exp=1722591497~hmac=c22b3f7c86d03dbeb6bb726d71fa81684f96032054426bd209c77d0537cf7946"}
      
//       //backgroundImage={"https://images.unsplash.com/photo-1652955189360-903b2bf1d4c9?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

//       //backgroundImage={"https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.1178403111.1721902565&semt=ais_hybrid"}

//       className="home"
//     >
//       <Box
//         display="flex"
//         flexDirection="row"
//         maxWidth="850px"
//         width="100%"
//          //bg="rgb(255, 62, 51 , 0.33)"
//         p={8}
//         borderRadius="12px"
//         boxShadow="0 5px 10px rgba(255,0,0,0.2)"
//         className="container"
//       >
//         <Box
//           flex="1"
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           p={8}
//           borderRadius="12px"
//           //bg="rgba(255, 255, 255, 0.2)" // Semi-transparent background
//            // Semi-transparent background
//           boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 8px"
//           className="form_container"
//         >
//           <Flex alignItems="center" justifyContent="center" mb={8}>
//             <Icon as={FaUserShield} boxSize={10} color="black" mr={2} />
//             <Heading as="h1" size="lg" mt={1} textAlign="center">
//               <Text
//                 bg="#ea1d6f"
//                 bgClip="text"
//                 fontSize="2xl"
//                 fontWeight="extrabold"
//               >
//                 Login
//               </Text>
//             </Heading>
//           </Flex>

//           <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//             <VStack spacing={5} align="stretch">
//               <FormControl id="email">
//                 <FormLabel>Email</FormLabel>
//                 <InputGroup>
//                   <InputLeftElement
//                     pointerEvents="none"
//                     children={<FaEnvelope color="gray.300" />}
//                   />
//                   <Input
//                     type="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     bg="gray.100"
//                     _focus={{ bg: "white" }}
//                     height="40px"
//                     borderBottom="1.5px solid #aaaaaa"
//                     _focus={{ borderColor: "#7d2ae8" }}
//                   />
//                 </InputGroup>
//               </FormControl>
//               <FormControl id="password">
//                 <FormLabel>Password</FormLabel>
//                 <InputGroup>
//                   <InputLeftElement
//                     pointerEvents="none"
//                     children={<FaLock color="gray.300" />}
//                   />
//                   <Input
//                     type="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     bg="gray.100"
//                     _focus={{ bg: "white" }}
//                     height="40px"
//                     borderBottom="1.5px solid #aaaaaa"
//                     _focus={{ borderColor: "#7d2ae8" }}
//                   />
//                 </InputGroup>
//               </FormControl>
//               <Button
//                 type="submit"
//                 colorScheme="blue"
//                 width="100%"
//                 isDisabled={loading}
//                 bg="#ea1d6f"
//                 borderRadius="10px"
//                 _active={{ transform: 'scale(0.98)' }}
//               >
//                 {loading ? "Logging In..." : "Login"}
//               </Button>
//             </VStack>
//           </form>
//           {isAuthenticated && (
//             <Alert status='success' mt={4}>
//               <AlertIcon />
//               <AlertTitle>Login Successful</AlertTitle>
//             </Alert>
//           )}
//           {error && (
//             <Alert status='error' mt={4}>
//               <AlertIcon />
//               <AlertTitle>{error}</AlertTitle>
//             </Alert>
//           )}
//           <Box mt={4} textAlign="center">
//             <p>
//               Not registered yet? <Link to="/register" style={{ color: '#ea1d6f' }}>Register here</Link>
//             </p>
//           </Box>
//         </Box>
//         <Box flex="1" display="flex" justifyContent="center" alignItems="center" p={8}>
//           <Image
//           src=''
//             alt="Login Image"
//             boxSize="100%"
//             objectFit="cover"
//             borderRadius="12px"
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

















import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  InputGroup,
  InputLeftElement,
  Icon,
  Heading,
  Text,
  Flex,
  Image
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearError, login } from '../action/userAction';
import { FaEnvelope, FaLock, FaUserShield } from 'react-icons/fa';

export const Login = () => {
  const dispatch = useDispatch();
  const { loading, isAuthenticated, error } = useSelector(state => state.user);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    };
    dispatch(login(data));
  };

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        dispatch(clearError());
      }, 5000);
    }
    if (isAuthenticated) {
      navigate('/task');
    }
    return () => clearTimeout(timeout);
  }, [dispatch, error, isAuthenticated, navigate]);

  return (
    <Box
      p={4}
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundImage={"url('https://img.freepik.com/free-vector/abstract-blue-background-with-curve-lines_53876-117178.jpg?w=740&t=st=1722590897~exp=1722591497~hmac=c22b3f7c86d03dbeb6bb726d71fa81684f96032054426bd209c77d0537cf7946')"}
      backgroundSize="cover"
      backgroundPosition="center"
    >
    <Box
      display="flex"
      flexDirection="row"
      maxWidth="850px"
      width="100%"
      p={8}
      borderRadius="12px"
      boxShadow="0 5px 10px rgba(0,0,0,0.2)"
      backgroundColor="rgba(255, 255, 255, 0.7)" // semi-transparent white background
    >

        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={8}
          borderRadius="12px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 8px"
        >
          <Flex alignItems="center" justifyContent="center" mb={8}>
            <Icon as={FaUserShield} boxSize={10} color="black" mr={2} />
            <Heading as="h1" size="lg" mt={1} textAlign="center">
              <Text
                bg="#ea1d6f"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
              >
                Login
              </Text>
            </Heading>
          </Flex>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <VStack spacing={5} align="stretch">
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaEnvelope color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    bg="gray.100"
                    _focus={{ bg: "white", borderColor: "#7d2ae8" }}
                    height="40px"
                    borderBottom="1.5px solid #aaaaaa"
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaLock color="gray.300" />}
                  />
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    bg="gray.100"
                    _focus={{ bg: "white", borderColor: "#7d2ae8" }}
                    height="40px"
                    borderBottom="1.5px solid #aaaaaa"
                  />
                </InputGroup>
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                width="100%"
                isDisabled={loading}
                bg="#ea1d6f"
                borderRadius="10px"
                _active={{ transform: 'scale(0.98)' }}
                _hover={{ bg: "#ea1d6f", opacity: 0.8 }}
              >
                {loading ? "Logging In..." : "Login"}
              </Button>
            </VStack>
          </form>
          {isAuthenticated && (
            <Alert status='success' mt={4}>
              <AlertIcon />
              <AlertTitle>Login Successful</AlertTitle>
            </Alert>
          )}
          {error && (
            <Alert status='error' mt={4}>
              <AlertIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
          <Box mt={4} textAlign="center">
            <Text>
              Not registered yet? <Link to="/register" style={{ color: '#ea1d6f' }}>Register here</Link>
            </Text>
          </Box>
        </Box>
        <Box flex="1" display="flex" justifyContent="center" alignItems="center" p={8}>
          <Image
          
            alt="Login Image"
            boxSize="100%"
            objectFit="cover"
            borderRadius="12px"
          />
        </Box>
      </Box>
    </Box>
  );
};
