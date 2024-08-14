// import React from 'react';
// import { Box, Flex, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, useColorModeValue, Heading, Spinner, Text } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';

// const AdminDashboard = () => {
//   const statBg = useColorModeValue('white', 'gray.800');
//   const { tasks, loading, error } = useSelector(state => state.task);

//   // Calculate task counts
//   const newTasks = tasks.filter(tasks => tasks.status === 'new').length;
//   const inProgressTasks = tasks.filter(tasks => tasks.status === 'inProgress').length;
//   const completedTasks = tasks.filter(tasks => tasks.status === 'completed').length;

//   if (loading) {
//     return (
//       <Box p={8} height="90vh" display="flex" justifyContent="center" alignItems="center">
//         <Spinner size="xl" />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box p={8} height="90vh" display="flex" justifyContent="center" alignItems="center">
//         <Text fontSize="xl" color="red.500">Error: {error.message}</Text>
//       </Box>
//     );
//   }

//   return (
//     <Box p={8} backgroundColor="#ffffff" height="90vh" backgroundImage="linear-gradient(315deg, #ffffff 0%, #5899e2 74%)" color="black">
//       <Heading as="h2" size="lg" mb={6} textAlign="center" textShadow="2px 2px #000">Admin Dashboard</Heading>
//       <Flex justify="space-around" flexWrap="wrap" gap={5}>
//         <Stat p={4} bg={statBg} shadow="md" borderRadius="md">
//           <StatLabel>Total Tasks</StatLabel>
//           <StatNumber>{tasks.length}</StatNumber>
//         </Stat>
//         <Stat p={4} bg={statBg} shadow="md" borderRadius="md">
//           <StatLabel>New Tasks</StatLabel>
//           <StatNumber>{tasks.length}</StatNumber>
//           <StatHelpText>
//             <StatArrow type="increase" /> New this month
//           </StatHelpText>
//         </Stat>
//         <Stat p={4} bg={statBg} shadow="md" borderRadius="md">
//           <StatLabel>In Progress</StatLabel>
//           <StatNumber>{tasks.status}</StatNumber>
//           <StatHelpText>
//             <StatArrow type="increase" /> In progress
//           </StatHelpText>
//         </Stat>
//         <Stat p={4} bg={statBg} shadow="md" borderRadius="md">
//           <StatLabel>Completed Tasks</StatLabel>
//           <StatNumber>{completedTasks}</StatNumber>
//           <StatHelpText>
//             <StatArrow type="increase" /> Completed this month
//           </StatHelpText>
//         </Stat>
//       </Flex>
//     </Box>
//   );
// };

// export default AdminDashboard;





import React from 'react';
import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  useColorModeValue,
  Heading,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { FaTasks, FaPlusCircle, FaSpinner, FaCheckCircle } from 'react-icons/fa';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Sidebar } from './Sidebar';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const AdminDashboard = () => {
  const statBg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(48, 48, 48, 0.8)');
  
  // Mocked task data for demonstration
  const tasks = [
    { id: 1, status: 'new' },
    { id: 2, status: 'inProgress' },
    { id: 3, status: 'completed' },
    { id: 4, status: 'new' },
    { id: 5, status: 'inProgress' },
    { id: 6, status: 'completed' },
    { id: 7, status: 'new' },
    { id: 8, status: 'inProgress' },
    { id: 9, status: 'completed' },
    { id: 10, status: 'new' },
  ];

  // Calculate task counts
  const newTasks = tasks.filter(task => task.status === 'new').length;
  const inProgressTasks = tasks.filter(task => task.status === 'inProgress').length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;

  const pieData = {
    labels: ['New Tasks', 'In Progress', 'Completed'],
    datasets: [
      {
        data: [newTasks, inProgressTasks, completedTasks],
        backgroundColor: ['#FF6384', '#36A2EB', '#4CAF50'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#4CAF50'],
      },
    ],
  };

  const barData = {
    labels: ['New Tasks', 'In Progress', 'Completed'],
    datasets: [
      {
        label: 'Tasks',
        data: [newTasks, inProgressTasks, completedTasks],
        backgroundColor: ['#FF6384', '#36A2EB', '#4CAF50'],
        borderColor: ['#FF6384', '#36A2EB', '#4CAF50'],
        borderWidth: 1,
      },
    ],
  };

  // Chart options with animations
  const chartOptions = {
    animation: {
      duration: 2000, // Animation duration in milliseconds
      easing: 'easeInOutQuart', // Easing function
    },
  };

  return (
    <Box
      p={8}
      minHeight="100vh"
      backgroundImage={"https://img.freepik.com/free-vector/abstract-blue-background-with-curve-lines_53876-117178.jpg?w=740&t=st=1722590897~exp=1722591497~hmac=c22b3f7c86d03dbeb6bb726d71fa81684f96032054426bd209c77d0537cf7946"}
      color="black"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading as="h2" size="lg" mb={6} textAlign="center" textShadow="2px 2px #000">
        Admin Dashboard
      </Heading>
      <Flex justify="space-around" flexWrap="wrap" gap={5} align="center" mb={10}>
        <Stat p={4}  bg="rgba(255, 255, 255, 0.8)" shadow="md" borderRadius="md" width="240px">
          <Flex align="center">
            <FaTasks size="24px" color="#4A90E2" />
            <Box ml={3}>
              <StatLabel>Total Tasks</StatLabel>
              <StatNumber>{tasks.length}</StatNumber>
            </Box>
          </Flex>
        </Stat>
        <Stat p={4} bg={statBg} shadow="md" borderRadius="md" width="240px">
          <Flex align="center">
            <FaPlusCircle size="24px" color="#FF6384" />
            <Box ml={3}>
              <StatLabel>New Tasks</StatLabel>
              <StatNumber>{newTasks}</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" /> New this month
              </StatHelpText>
            </Box>
          </Flex>
        </Stat>
        <Stat p={4} bg={statBg} shadow="md" borderRadius="md" width="240px">
          <Flex align="center">
            <FaSpinner size="24px" color="#36A2EB" />
            <Box ml={3}>
              <StatLabel>In Progress</StatLabel>
              <StatNumber>{inProgressTasks}</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" /> In progress
              </StatHelpText>
            </Box>
          </Flex>
        </Stat>
        <Stat p={4} bg={statBg} shadow="md" borderRadius="md" width="240px">
          <Flex align="center">
            <FaCheckCircle size="24px" color="#4CAF50" />
            <Box ml={3}>
              <StatLabel>Completed Tasks</StatLabel>
              <StatNumber>{completedTasks}</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" /> Completed this month
              </StatHelpText>
            </Box>
          </Flex>
        </Stat>
      </Flex>
      <Box width="100%" maxWidth="1200px" mb={10}>
        <Box mb={10} p={4} bg={statBg} shadow="md" borderRadius="md">
          <Heading as="h3" size="md" mb={4} textAlign="center">
            Task Distribution
          </Heading>
          <Pie data={pieData} options={chartOptions} />
        </Box>
        <Box p={4} bg={statBg} shadow="md" borderRadius="md">
          <Heading as="h3" size="md" mb={4} textAlign="center">
            Task Status Overview
          </Heading>
          <Bar data={barData} options={chartOptions} />
        </Box>
      </Box>
      <Box
        as="footer"
        py={4}
        width="100%"
        textAlign="center"
        backgroundColor="#f7f7f7"
        borderTop="1px solid #eaeaea"
        backgroundImage="linear-gradient(315deg, #ffffff 0%, #5899e2 74%)"
      >
        <Text>&copy; {new Date().getFullYear()} Task Manager</Text>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
