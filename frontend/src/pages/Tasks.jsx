import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Flex, Heading, Input, Select, Text, useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, getTasks } from '../action/taskAction';
import { DELETE_TASK_RESET, NEW_TASK_RESET, UPDATE_TASK_RESET } from '../constants/taskConstants';
import AddTaskModal from './AddTaskModal';
import { TaskItem } from './TaskItem';
import { FaSearch } from 'react-icons/fa';
import { Sidebar } from './Sidebar';
import { Dashboard } from '@mui/icons-material';



export const Tasks = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error, count } = useSelector(state => state.task);
  const { error: deleteError, isDeleted, isUpdated } = useSelector(state => state.tasks);
  const { token } = useSelector(state => state.user);
  const [searchedText, setSearchedText] = useState('');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [priorities, setPriorities] = useState('');
  const [size, setSize] = useState(3);
  const [sort, setSort] = useState('');
  const { success } = useSelector(state => state.newTask);
  const params = { search, status, priorities, size, sort };

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearError());
    }
    if (success) {
      window.alert("Task Created Successfully");
      dispatch({ type: NEW_TASK_RESET });
    }
    if (deleteError) {
      window.alert(deleteError);
      dispatch(clearError());
    }
    if (isDeleted) {
      window.alert("Task Deleted Successfully");
      dispatch({ type: DELETE_TASK_RESET });
    }
    if (isUpdated) {
      window.alert("Task Updated Successfully");
      dispatch({ type: UPDATE_TASK_RESET });
    }
    dispatch(getTasks(token, params));
  }, [dispatch, token, error, search, status, priorities, size, sort, deleteError, isDeleted, success, isUpdated]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      p={8}
      minHeight="100vh"
      backgroundColor="#ffffff"
      backgroundImage={"https://img.freepik.com/free-vector/abstract-blue-background-with-curve-lines_53876-117178.jpg?w=740&t=st=1722590897~exp=1722591497~hmac=c22b3f7c86d03dbeb6bb726d71fa81684f96032054426bd209c77d0537cf7946"}
      // backgroundSize="cover"
      // backgroundRepeat="no-repeat"
      // backgroundPosition="center"
      //backgroundImage="linear-gradient(315deg, #ffffff 0%, #5899e2 74%)"
      color="black"
    >
      {tasks.length > 0 ? (
        <Box mt={10} mb={5}>
          <Center>
            <Button colorScheme="green" size="lg" onClick={onOpen} mb={5} boxShadow="lg">
              Create Task
            </Button>
          </Center>
          <Center>
            <Flex
              justifyContent="space-between"
              gap={5}
              margin="auto"
              m={5}
              direction={{ base: 'column', md: 'row' }}
              width="100%"
              maxW="container.lg"
            >
              <Flex
                align="center"
                bg="white"
                borderRadius="md"
                overflow="hidden"
                width={{ base: '100%', md: '60%' }}
               boxShadow="10px 10px lightblue"
              >
                <Input
                  placeholder="Search"
                  onChange={(e) => setSearchedText(e.target.value)}
                  border="none"
                  boxShadow="10px 10px lightblue"
                  px={2}
                  py={2}
                  fontSize="md"
                  width="100%"
                />


                <Button
                  colorScheme="blue"
                  borderRadius="none"
                  px={4}
                  py={2}
                  onClick={() => setSearch(searchedText)}
                >
                  <FaSearch />
                </Button>
              </Flex>
              <Select
                id="status"
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Status"
                variant="outline"
                mb={{ base: 4, md: 0 }}
                boxShadow="10px 10px lightblue"
              >
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </Select>
              <Select
                id="priorities"
                onChange={(e) => setPriorities(e.target.value)}
                placeholder="Priorities"
                variant="outline"
                mb={{ base: 4, md: 0 }}
                boxShadow="10px 10px lightblue"
              >
                <option value="Low">Low</option>
                <option value="High">High</option>
              </Select>
              <Select
                id="dates"
                onChange={(e) => setSort(e.target.value)}
                placeholder="Filter By Date"
                variant="outline"
                boxShadow="10px 10px lightblue"
              >
                <option value="asc">Ascending Order</option>
                <option value="desc">Descending Order</option>
              </Select>
            </Flex>
          </Center>
          <Flex flexWrap="wrap" flexDirection="row" justifyContent="space-around" gap={5} margin="auto" m={10}>
            {tasks.map((task, index) => (
              <TaskItem key={index} task={task} />
            ))}
          </Flex>
          <Center>
            <Button onClick={() => setSize(size + 3)} isDisabled={count <= size} colorScheme="teal" size="md" boxShadow="md">
              Show More
            </Button>
          </Center>
        </Box>
      ) : (
        <Box
      p={8}
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bg="rgba(, 255, 255, 0.8)"
      color="white"
      boxShadow="10px 10px lightblue"
    >
      <Heading as="h1" size="2xl" mb={4} fontWeight="extrabold" color={"#ea1d6f"}>
        Welcome to Task Manager
      </Heading>
      <Text fontSize="xl" mb={8} fontWeight="extrabold" color="#000000">
        Currently, you don't have any tasks. Create a new one.
      </Text>
      <Text fontSize="lg" mb={8} fontWeight="extrabold" color="#000000">
        Task Manager helps you keep track of your tasks, set priorities, and manage deadlines efficiently. Start organizing your work and increase productivity by creating your first task.
      </Text>
      <Button color="#ea1d6f" size="lg" onClick={onOpen} boxShadow="lg">
        Create Task
      </Button>
      
    </Box>
      )}
      <AddTaskModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};



































// import React, { useState } from 'react';
// import { Box, Button, Center, Flex, Heading, Input, Select, Text, useDisclosure } from '@chakra-ui/react';
// import { FaSearch } from 'react-icons/fa';
// import AddTaskModal from './AddTaskModal';
// import { TaskItem } from './TaskItem';

// const sampleTasks = [
//   // Sample task data for illustration purposes
//   { id: 1, title: 'Sample Task 1', status: 'New', priority: 'High', date: '2024-08-01' },
//   { id: 2, title: 'Sample Task 2', status: 'In Progress', priority: 'Low', date: '2024-08-02' },
//   { id: 3, title: 'Sample Task 3', status: 'Completed', priority: 'High', date: '2024-08-03' },
// ];

// export const Tasks = () => {
//   const [tasks, setTasks] = useState(sampleTasks);
//   const [searchedText, setSearchedText] = useState('');
//   const [search, setSearch] = useState('');
//   const [status, setStatus] = useState('');
//   const [priorities, setPriorities] = useState('');
//   const [size, setSize] = useState(3);
//   const [sort, setSort] = useState('');

//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const handleSearch = () => {
//     setSearch(searchedText);
//     // Implement search logic
//   };

//   const filteredTasks = tasks
//     .filter(task => task.title.includes(search))
//     .filter(task => (status ? task.status === status : true))
//     .filter(task => (priorities ? task.priority === priorities : true))
//     .sort((a, b) => {
//       if (sort === 'asc') return new Date(a.date) - new Date(b.date);
//       if (sort === 'desc') return new Date(b.date) - new Date(a.date);
//       return 0;
//     })
//     .slice(0, size);

//   return (
//     <Box
//       p={8}
//       minHeight="100vh"
//       backgroundColor="#ffffff"
//       backgroundImage={"https://img.freepik.com/free-vector/abstract-blue-background-with-curve-lines_53876-117178.jpg?w=740&t=st=1722590897~exp=1722591497~hmac=c22b3f7c86d03dbeb6bb726d71fa81684f96032054426bd209c77d0537cf7946"}
//       color="black"
//     >
//       {tasks.length > 0 ? (
//         <Box mt={10} mb={5}>
//           <Center>
//             <Button colorScheme="green" size="lg" onClick={onOpen} mb={5} boxShadow="lg">
//               Create Task
//             </Button>
//           </Center>
//           <Center>
//             <Flex
//               justifyContent="space-between"
//               gap={5}
//               margin="auto"
//               m={5}
//               direction={{ base: 'column', md: 'row' }}
//               width="100%"
//               maxW="container.lg"
//             >
//               <Flex
//                 align="center"
//                 bg="white"
//                 borderRadius="md"
//                 overflow="hidden"
//                 width={{ base: '100%', md: '60%' }}
//                 boxShadow="10px 10px lightblue"
//               >
//                 <Input
//                   placeholder="Search"
//                   onChange={(e) => setSearchedText(e.target.value)}
//                   border="none"
//                   boxShadow="10px 10px lightblue"
//                   px={2}
//                   py={2}
//                   fontSize="md"
//                   width="100%"
//                 />
//                 <Button
//                   colorScheme="blue"
//                   borderRadius="none"
//                   px={4}
//                   py={2}
//                   onClick={handleSearch}
//                 >
//                   <FaSearch />
//                 </Button>
//               </Flex>
//               <Select
//                 id="status"
//                 onChange={(e) => setStatus(e.target.value)}
//                 placeholder="Status"
//                 variant="outline"
//                 mb={{ base: 4, md: 0 }}
//                 boxShadow="10px 10px lightblue"
//               >
//                 <option value="New">New</option>
//                 <option value="In Progress">In Progress</option>
//                 <option value="Completed">Completed</option>
//               </Select>
//               <Select
//                 id="priorities"
//                 onChange={(e) => setPriorities(e.target.value)}
//                 placeholder="Priorities"
//                 variant="outline"
//                 mb={{ base: 4, md: 0 }}
//                 boxShadow="10px 10px lightblue"
//               >
//                 <option value="Low">Low</option>
//                 <option value="High">High</option>
//               </Select>
//               <Select
//                 id="dates"
//                 onChange={(e) => setSort(e.target.value)}
//                 placeholder="Filter By Date"
//                 variant="outline"
//                 boxShadow="10px 10px lightblue"
//               >
//                 <option value="asc">Ascending Order</option>
//                 <option value="desc">Descending Order</option>
//               </Select>
//             </Flex>
//           </Center>
//           <Flex flexWrap="wrap" flexDirection="row" justifyContent="space-around" gap={5} margin="auto" m={10}>
//             {filteredTasks.map((task, index) => (
//               <TaskItem key={index} task={task} />
//             ))}
//           </Flex>
//           <Center>
//             <Button onClick={() => setSize(size + 3)} isDisabled={tasks.length <= size} colorScheme="teal" size="md" boxShadow="md">
//               Show More
//             </Button>
//           </Center>
//         </Box>
//       ) : (
//         <Box
//           p={8}
//           textAlign="center"
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           minHeight="100vh"
//           bg="rgba(255, 255, 255, 0.8)"
//           color="white"
//           boxShadow="10px 10px lightblue"
//         >
//           <Heading as="h1" size="2xl" mb={4} fontWeight="extrabold" color={"#ea1d6f"}>
//             Welcome to Task Manager
//           </Heading>
//           <Text fontSize="xl" mb={8} fontWeight="extrabold" color="#000000">
//             Currently, you don't have any tasks. Create a new one.
//           </Text>
//           <Text fontSize="lg" mb={8} fontWeight="extrabold" color="#000000">
//             Task Manager helps you keep track of your tasks, set priorities, and manage deadlines efficiently. Start organizing your work and increase productivity by creating your first task.
//           </Text>
//           <Button color="#ea1d6f" size="lg" onClick={onOpen} boxShadow="lg">
//             Create Task
//           </Button>
//         </Box>
//       )}
//       <AddTaskModal isOpen={isOpen} onClose={onClose} />
//     </Box>
//   );
// };























