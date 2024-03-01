import { useEffect, useState, React, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IosShareIcon from '@mui/icons-material/IosShare';

function TodoList() {

    const [numOrder, setnumOrder] = useState(3);
    const [tasks, setTasks] = useState([{ id: 1, text: "Выполнить задачу 1" }, { id: 2, text: "Выполнить задачу 2" }]);
    const [newTask, setNewTask] = useState("");

    function handlerAdd() {
        if (!newTask.trim()) {
            return;
        }
        setnumOrder(numOrder + 1);
        setTasks([...tasks, {id: numOrder, text: newTask}]);
    };

    function handlerDelete(e) {
        setTasks(tasks.filter((el) => el.id != e.target.getAttribute("id")));
    };

    function setCard() {
        return (
            <CardContent>
                {tasks.map((task) =>
                    <div key={task.id}>
                        <Typography>{task.text}</Typography>
                        <IosShareIcon id={task.id} onClick={handlerDelete}></IosShareIcon>
                    </div>
                )}
            </CardContent>
        );
    }

    return (
        <div className="TodoList">
            <TextField
                id="outlined-task"
                label="Новая задача"
                helperText="Введ новой задачи"
                onChange={(e) => setNewTask(e.target.value)}
            />
            <Button variant="contained" onClick={handlerAdd}>Добавить задачу в список</Button>
            <Card variant="outlined">{setCard()}</Card>
        </div>
    );
}

export default TodoList;