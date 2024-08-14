// import React from 'react';
// import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';

// const AboutUs = () => {
//   return (
//     <Box
//       minH="100vh"
//       p="20px"
//       bg="#EDEDED"
//        backgroundImage={"https://img.freepik.com/free-vector/abstract-blue-background-with-curve-lines_53876-117178.jpg?w=740&t=st=1722590897~exp=1722591497~hmac=c22b3f7c86d03dbeb6bb726d71fa81684f96032054426bd209c77d0537cf7946"}
//       //backgroundImage="linear-gradient(315deg, #ffffff 0%, #5899e2 74%)"
//       backgroundPosition="50% 50%"
//       pt="5%"
//       fontFamily="'Poppins', sans-serif"  // Apply the font family here
//     >
//       <Box
//         id="aboutUs"
//         display="grid"
//         gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
//         placeItems={{ base: 'center', md: 'initial' }}
//         gap="20px"
//       >
//         <Box position="relative" className="about-img" maxW={{ base: '80%', md: '400px' }} m="20px">
//           <Box
//             position="absolute"
//             content="''"
//             right="-30px"
//             top="30px"
//             border="9px solid rgba(255, 255, 255, 0.5)"
//             width="100%"
//             height="100%"
//           />
//           <Image
//             src='https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?t=st=1722933192~exp=1722936792~hmac=61c595d9e3ad5bd7daab6f259bfb397169bb70e89bf18bd161b295a00ab1a234&w=740'
//             //src="https://img.freepik.com/free-photo/business-people-partnership-support-team-urban-scene-concept_53876-144834.jpg?t=st=1722227473~exp=1722231073~hmac=08a29efef1438e8c479b157b610876983e09ac8b380764826297dd5be8bc0dcd&w=1060"
//             alt="About Us"
//             width="100%"
//             height="100%"
//             objectFit="fit"
//             borderRadius="10px"
//           />
//         </Box>
//         <Box pt={{ base: '20%', md: '20%' }} className="about-text">
//           <Heading as="h2" fontSize="50px" color="black" fontFamily="'Poppins', sans-serif" textAlign={{ base: 'center', md: 'left' }}>
//             ABOUT US
//           </Heading>
//           <Text fontSize="18px" color="black" my="20px" textAlign={{ base: 'center', md: 'left' }}>
//             Welcome to TASKZZ, your number one source for all things task management. We're dedicated to providing you the best of task management, with a focus on dependability, customer service, and efficiency.
//           </Text>
//           <Text fontSize="18px" color="black" my="20px" textAlign={{ base: 'center', md: 'left' }}>
//             Founded in 2023, TASKZZ has come a long way from its beginnings. When we first started out, our passion for helping people be more productive drove us to start our own business.
//           </Text>
//           <Text fontSize="18px" color="black" my="20px" textAlign={{ base: 'center', md: 'left' }}>
//             We now serve customers all over the world and are thrilled to be a part of the task management industry. Our mission is to make task management easy and accessible for everyone, whether you're a solo entrepreneur or part of a large organization.
//           </Text>
//           <Text fontSize="18px" color="black" my="20px" textAlign={{ base: 'center', md: 'left' }}>
//             Our team is dedicated to continuously improving our platform to better serve your needs. We believe in innovation, quality, and providing top-notch customer support.
//           </Text>
//           <Text fontSize="18px" color="black" my="20px" textAlign={{ base: 'center', md: 'left' }}>
//             Thank you for choosing TASKZZ. We hope you enjoy using our platform as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.
//           </Text>
//           <Text fontSize="18px" color="black" my="20px" textAlign={{ base: 'center', md: 'left' }}>
//             Sincerely,
//             <br />
//             The TASKZZ Team
//           </Text>
//           <Button
//             bg="#f9004d"
//             color="white"
//             p="13px 30px"
//             mt="20px"
//             _hover={{ bg: "transparent", border: "2px solid #f9004d", cursor: "pointer" }}
//             borderRadius="30px"
//             fontFamily="'Poppins', sans-serif"
//             textAlign={{ base: 'center', md: 'left' }}
//             fontWeight="bold"
//           >
//             Contact Us
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AboutUs;











import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#f1f1f1"
      sx={{
        '*': {
          margin: 0,
          padding: 0,
          fontFamily: '"Poppins", sans-serif',
          boxSizing: 'border-box',
        },
        '.about-section': {
          background: 'url(https://fadzrinmadu.github.io/hosted-assets/responsive-about-us-section-using-html/pic.jpg) no-repeat left',
          backgroundSize: '55%',
          backgroundColor: '#fdfdfd',
          overflow: 'hidden',
          padding: '100px 0',
          '@media screen and (max-width: 1000px)': {
            backgroundSize: '100%',
            padding: '100px 40px',
          },
          '@media screen and (max-width: 600px)': {
            padding: 0,
          },
        },
        '.inner-container': {
          width: '55%',
          float: 'right',
          backgroundColor: '#fdfdfd',
          padding: '150px',
          '@media screen and (max-width: 1200px)': {
            padding: '80px',
          },
          '@media screen and (max-width: 1000px)': {
            width: '100%',
          },
          '@media screen and (max-width: 600px)': {
            padding: '60px',
          },
        },
        '.inner-container h1': {
          marginBottom: '30px',
          fontSize: '30px',
          fontWeight: '900',
        },
        '.text': {
          fontSize: '13px',
          color: '#545454',
          lineHeight: '30px',
          textAlign: 'justify',
          marginBottom: '40px',
        },
        '.skills': {
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: '700',
          fontSize: '13px',
        },
      }}
    >
      <Box className="about-section">
        <Box className="inner-container">
          <Heading as="h2" mb="30px" fontSize="30px" fontWeight="900" color="#ea1d6f" >
            About Us
          </Heading>
          <Text className="text">
          We now serve customers all over the world and are thrilled to be a part of the task management industry. Our mission is to make task management easy and accessible for everyone, whether you're a solo entrepreneur or part of a large organization.          </Text>
          <Box className="skills">
            <span></span>
            <span></span>
            <span></span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;

