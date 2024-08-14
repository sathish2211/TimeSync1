import { Box, Button, Center, FormControl, FormLabel, Select, useDisclosure } from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../action/taskAction';
import EditTaskModal from './EditTaskModal';
import { FaUser, FaEdit, FaTrashAlt, FaClock } from 'react-icons/fa';

export const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { token } = useSelector(state => state.user);

    const handleDelete = (id, token) => {
        dispatch(deleteTask(id, token));
    };

    const formattedCreatedAt = formatDistanceToNow(new Date(task.createdAt), { addSuffix: true });

    return (
        <Box
            width={['95%', '60%', '40%', '30%']}
            border="1px solid #E2E8F0"
            borderRadius="8px"
            padding="20px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            backgroundColor="white"
            margin="10px"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.02)' }}
            fontFamily="'Poppins', sans-serif"
        >
            <Box
                display="flex"
                alignItems="center"
                fontSize="1.2rem"
                fontWeight="bold"
                color="#2D3748"
                marginBottom="10px"
                textAlign="center"
                borderBottom="1px solid #E2E8F0"
                paddingBottom="10px"
            >
                <FaUser style={{ marginRight: '10px' }} />
                {task.name}
            </Box>
            <Box
                display="flex"
                alignItems="center"
                fontSize="0.9rem"
                fontWeight="normal"
                color="#718096"
                textAlign="center"
                marginBottom="20px"
            >
                <FaClock style={{ marginRight: '5px' }} />
                {formattedCreatedAt}
            </Box>
            <Box
                fontSize="1rem"
                color="#4A5568"
                marginBottom="20px"
                textAlign="center"
                padding="10px"
                border="1px solid #E2E8F0"
                borderRadius="4px"
                backgroundColor="#F7FAFC"
            >
                {task.description}
            </Box>
            <FormControl marginBottom="20px">
                <FormLabel htmlFor="status" fontSize="1rem" color="#4A5568">Status</FormLabel>
                <Select id="status" value={task.status} borderColor="#CBD5E0">
                    <option>{task.status}</option>
                </Select>
            </FormControl>
            <FormControl marginBottom="20px">
                <FormLabel htmlFor="priorities" fontSize="1rem" color="#4A5568">Priorities</FormLabel>
                <Select id="priorities" value={task.priorities} borderColor="#CBD5E0">
                    <option>{task.priorities}</option>
                </Select>
            </FormControl>
            <Center>
                <Button
                    marginTop="10px"
                    colorScheme="blue"
                    onClick={onOpen}
                    padding="10px 20px"
                    borderRadius="4px"
                    marginRight="10px"
                    leftIcon={<FaEdit />}
                    _hover={{ backgroundColor: '#2B6CB0' }}
                >
                    Edit
                </Button>
                <Button
                    marginTop="10px"
                    colorScheme="red"
                    onClick={() => handleDelete(task._id, token)}
                    padding="10px 20px"
                    borderRadius="4px"
                    leftIcon={<FaTrashAlt />}
                    _hover={{ backgroundColor: '#C53030' }}
                >
                    Delete
                </Button>
            </Center>
            <EditTaskModal isOpen={isOpen} onClose={onClose} task={task} />
        </Box>
    );
};













// import { Box, Button, Center, FormControl, FormLabel, Select, useDisclosure } from '@chakra-ui/react';
// import { formatDistanceToNow } from 'date-fns';
// import React from 'react';
// import { FaUser, FaEdit, FaTrashAlt, FaClock } from 'react-icons/fa';
// import EditTaskModal from './EditTaskModal';

// export const TaskItem = ({ task }) => {
//     const { isOpen, onOpen, onClose } = useDisclosure();
    
//     const formattedCreatedAt = formatDistanceToNow(new Date(task.createdAt), { addSuffix: true });

//     return (
//         <Box
//             width={['95%', '60%', '40%', '30%']}
//             border="1px solid #E2E8F0"
//             borderRadius="8px"
//             padding="20px"
//             boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
//             backgroundColor="white"
//             margin="10px"
//             transition="transform 0.2s"
//             _hover={{ transform: 'scale(1.02)' }}
//             fontFamily="'Poppins', sans-serif"
//         >
//             <Box
//                 display="flex"
//                 alignItems="center"
//                 fontSize="1.2rem"
//                 fontWeight="bold"
//                 color="#2D3748"
//                 marginBottom="10px"
//                 textAlign="center"
//                 borderBottom="1px solid #E2E8F0"
//                 paddingBottom="10px"
//             >
//                 <FaUser style={{ marginRight: '10px' }} />
//                 {task.name}
//             </Box>
//             <Box
//                 display="flex"
//                 alignItems="center"
//                 fontSize="0.9rem"
//                 fontWeight="normal"
//                 color="#718096"
//                 textAlign="center"
//                 marginBottom="20px"
//             >
//                 <FaClock style={{ marginRight: '5px' }} />
//                 {formattedCreatedAt}
//             </Box>
//             <Box
//                 fontSize="1rem"
//                 color="#4A5568"
//                 marginBottom="20px"
//                 textAlign="center"
//                 padding="10px"
//                 border="1px solid #E2E8F0"
//                 borderRadius="4px"
//                 backgroundColor="#F7FAFC"
//             >
//                 {task.description}
//             </Box>
//             <FormControl marginBottom="20px">
//                 <FormLabel htmlFor="status" fontSize="1rem" color="#4A5568">Status</FormLabel>
//                 <Select id="status" value={task.status} borderColor="#CBD5E0">
//                     <option>{task.status}</option>
//                 </Select>
//             </FormControl>
//             <FormControl marginBottom="20px">
//                 <FormLabel htmlFor="priorities" fontSize="1rem" color="#4A5568">Priorities</FormLabel>
//                 <Select id="priorities" value={task.priorities} borderColor="#CBD5E0">
//                     <option>{task.priorities}</option>
//                 </Select>
//             </FormControl>
//             <Center>
//                 <Button
//                     marginTop="10px"
//                     colorScheme="blue"
//                     onClick={onOpen}
//                     padding="10px 20px"
//                     borderRadius="4px"
//                     marginRight="10px"
//                     leftIcon={<FaEdit />}
//                     _hover={{ backgroundColor: '#2B6CB0' }}
//                 >
//                     Edit
//                 </Button>
//                 <Button
//                     marginTop="10px"
//                     colorScheme="red"
//                     padding="10px 20px"
//                     borderRadius="4px"
//                     leftIcon={<FaTrashAlt />}
//                     _hover={{ backgroundColor: '#C53030' }}
//                 >
//                     Delete
//                 </Button>
//             </Center>
//             <EditTaskModal isOpen={isOpen} onClose={onClose} task={task} />
//         </Box>
//     );
// };

