import React from 'react';
import './NewTask.css';

const tasks = [
    { id: 1, status: 'To-do', title: 'TASK 20', subtitle: 'Task-101', date: '20-APR-2021' },
    { id: 2, status: 'Yet to Start', title: 'TASK 05', subtitle: 'Task-104', date: '22-MAY-2021' },
    { id: 3, status: 'In-Progress', title: 'TASK 19', subtitle: 'Task-114', date: '22-APR-2021' },
    { id: 4, status: 'On-Hold', title: 'TASK 05', subtitle: 'Task-107', date: '22-APR-2021' },
    { id: 6, status: 'To-do', title: 'TASK 01', subtitle: 'Task-116', date: '22-APR-2021' },
    { id: 7, status: 'Yet to Start', title: 'TASK 01', subtitle: 'Task-116', date: '22-APR-2021' },
    { id: 8, status: 'In-Progress', title: 'TASK 01', subtitle: 'Task-116', date: '22-APR-2021' },
    { id: 9, status: 'On-Hold', title: 'TASK 01', subtitle: 'Task-116', date: '22-APR-2021' },
    { id: 10, status: 'To-do', title: 'TASK 01', subtitle: 'Task-116', date: '22-APR-2021' },
    { id: 11, status: 'Completed', title: 'TASK 01', subtitle: 'Task-116', date: '22-APR-2021' },
    // Add more tasks as needed
];

const TaskCard = ({ title, subtitle, date }) => (
    <div className="task-card">
        <div className="task-header">{title}</div>
        <div className="task-body">
            <div className="task-subtitle">{subtitle}</div>
            <div className="task-date">{date}</div>
        </div>
    </div>
);

const NewTask = () => {
    const groupedTasks = tasks.reduce((acc, task) => {
        if (!acc[task.status]) {
            acc[task.status] = [];
        }
        acc[task.status].push(task);
        return acc;
    }, {});

    return (
        <div className="task-board">
            {Object.keys(groupedTasks).map((status, idx) => (
                <div key={idx} className="task-column">
                    <div className="task-column-header">{status}</div>
                    {groupedTasks[status].map(task => (
                        <TaskCard key={task.id} {...task} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default NewTask;
