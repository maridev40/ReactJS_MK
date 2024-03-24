import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../reducers/tasksSlice';

export default function TasksList() {
    const tasks = useSelector((state) => state.tasks.array);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'TEST_ACTION' });
        dispatch(fetchTasks())
    }, []);

    return (
        <div>
            <h2>Список задач: </h2>
            {tasks.map((item) => (
                <div key={item.id} id={item.id}>{item.title}</div>
            ))}
        </div>
    );
}