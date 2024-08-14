import React from 'react';
import { Box, Grid, Typography, Button, Avatar, IconButton } from '@mui/material';
import { Add, CheckCircle, Notifications, AccountCircle, Search, ArrowForward } from '@mui/icons-material';

const TaskManagement = () => {
  return (
    <Box>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Typography variant="h6" component="div">
          TaskTrec
        </Typography>
        <Box display="flex" alignItems="center">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Box>
      </Box>
      
      {/* Title */}
      <Box textAlign="center" my={2}>
        <Typography variant="h5" component="div">
          The World's Most Powerful(fun) Web Application.
        </Typography>
      </Box>
      
      {/* Main Content */}
      <Grid container spacing={2}>
        {/* Sidebar */}
        <Grid item xs={2}>
          <Box>
            <Typography variant="subtitle1" component="div">
              Projects
            </Typography>
            <Box>
              <Button startIcon={<IconButton />} fullWidth>
                Web Enterprise
              </Button>
              <Button startIcon={<IconButton />} fullWidth>
                Mobile Game
              </Button>
              <Button startIcon={<IconButton />} fullWidth>
                Master Class
              </Button>
            </Box>
          </Box>
          
          <Box mt={4}>
            <Typography variant="subtitle1" component="div">
              Members
            </Typography>
            {['Karen Smith', 'Joe Colins', 'Nsame Daisy', 'John Joe', 'John Legend'].map(member => (
              <Button key={member} startIcon={<Avatar />} fullWidth>
                {member}
              </Button>
            ))}
          </Box>
        </Grid>
        
        {/* Task Boards */}
        <Grid item xs={10}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" component="div">
              Web Enterprise
            </Typography>
            <Button variant="contained" startIcon={<Add />}>
              Add Member
            </Button>
          </Box>
          
          <Box my={2}>
            <Grid container spacing={2}>
              {['Backlog', 'To Do', 'In Progress', 'Completed'].map((status, index) => (
                <Grid item xs={3} key={status}>
                  <Box>
                    <Typography variant="subtitle1" component="div">
                      {status}
                    </Typography>
                    <Button fullWidth>
                      + Add New Task
                    </Button>
                    
                    {/* Example Task Cards */}
                    <Box mt={2}>
                      {['Task 1', 'Task 2'].map((task, idx) => (
                        <Box key={idx} p={2} border="1px solid lightgray" borderRadius="8px" mb={2}>
                          <Typography variant="body2" component="div">
                            {task}
                          </Typography>
                          <Typography variant="caption" component="div">
                            They have a few videos on database design, which are geared towards developers who want to learn how to use MongoDB...
                          </Typography>
                          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                            <Avatar />
                            <IconButton>
                              {status === 'Completed' ? <CheckCircle color="success" /> : <ArrowForward />}
                            </IconButton>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskManagementDashboard;
