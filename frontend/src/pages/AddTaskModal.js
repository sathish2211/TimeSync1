import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../action/taskAction';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea,
  Button,
  Center,
  Box,
} from '@chakra-ui/react';

const AddTaskModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.user);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('New');
  const [priorities, setPriorities] = useState('Low');
  const [deadline, setDeadline] = useState('');

  const taskData = {
    name,
    description,
    status,
    priorities,
    deadline
  };

  const createSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask(taskData, token));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={createSubmit}>
            <FormControl isRequired mb={4}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl isRequired mb={4}>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel htmlFor="status">Status</FormLabel>
              <Select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel htmlFor="priorities">Priorities</FormLabel>
              <Select id="priorities" value={priorities} onChange={(e) => setPriorities(e.target.value)}>
                <option value="Low">Low</option>
                <option value="High">High</option>
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel htmlFor="deadline">Deadline</FormLabel>
              <Input id="deadline" type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
            </FormControl>
            <Center>
              <Button type="submit" mt={4} colorScheme="blue">Add Task</Button>
            </Center>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddTaskModal;















// import React, { useState } from 'react';
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   FormControl,
//   FormLabel,
//   Select,
//   Input,
//   Textarea,
//   Button,
//   Center,
// } from '@chakra-ui/react';

// const AddTaskModal = ({ isOpen, onClose }) => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState('New');
//   const [priorities, setPriorities] = useState('Low');
//   const [deadline, setDeadline] = useState('');

//   const createSubmit = (e) => {
//     e.preventDefault();
//     const taskData = {
//       name,
//       description,
//       status,
//       priorities,
//       deadline,
//     };
//     console.log(taskData); // This logs the task data to the console instead of sending it to the backend
//     onClose();
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>Create Task</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           <form onSubmit={createSubmit}>
//             <FormControl isRequired mb={4}>
//               <FormLabel htmlFor="name">Name</FormLabel>
//               <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
//             </FormControl>
//             <FormControl isRequired mb={4}>
//               <FormLabel htmlFor="description">Description</FormLabel>
//               <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
//             </FormControl>
//             <FormControl mb={4}>
//               <FormLabel htmlFor="status">Status</FormLabel>
//               <Select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
//                 <option value="New">New</option>
//                 <option value="In Progress">In Progress</option>
//                 <option value="Completed">Completed</option>
//               </Select>
//             </FormControl>
//             <FormControl mb={4}>
//               <FormLabel htmlFor="priorities">Priorities</FormLabel>
//               <Select id="priorities" value={priorities} onChange={(e) => setPriorities(e.target.value)}>
//                 <option value="Low">Low</option>
//                 <option value="High">High</option>
//               </Select>
//             </FormControl>
//             <FormControl mb={4}>
//               <FormLabel htmlFor="deadline">Deadline</FormLabel>
//               <Input id="deadline" type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
//             </FormControl>
//             <Center>
//               <Button type="submit" mt={4} colorScheme="blue">Add Task</Button>
//             </Center>
//           </form>
//         </ModalBody>
//         <ModalFooter>
//           <Button colorScheme='blue' mr={3} onClick={onClose}>
//             Close
//           </Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default AddTaskModal;
