
import { useEffect, useState } from 'react';
import React from 'react';
import { toast } from 'react-toastify';

const Todo = () => {
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        fetch(' https://evening-island-96562.herokuapp.com/todo')
            .then(res => res.json())
            .then(data => {
                setTodos(data);
            })
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?')
        if (proceed) {
            const url = ` https://evening-island-96562.herokuapp.com/todo/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remaining = todos.filter(todo => todo._id !== id);
                        setTodos(remaining)
                    }
                })
        }
         toast("Successfully deleted");
    }
    return (
        <div className='container my-16 mx-auto drop-shadow-2xl p-12'>

            <h2 className='text-center text-white mb-3 text-2xl font-bold'>Todo Items</h2>
            <div class="overflow-x-auto  border border-2 rounded-lg ">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(fruit =>
                                <tr>
                                    <td data-label="Name">{fruit.title}</td>
                                    <td data-label="Price(per kg)">{fruit.description}tk</td>
                                    <td>
                                        <button onClick={() => handleDelete(fruit._id)} className='btn btn-error'><span className='pe-1'>Delete</span></button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Todo;
