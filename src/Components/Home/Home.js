import React from 'react';
import Todo from './Todo';

const Home = () => {
    const handleTodo = e => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const data = {
            title: title,
            description: description
        }
        console.log(data);
        const url = 'https://localhost:5000/todo';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        // toast.success('Successfully Added');
    }
    return (
        <div>
            <div class="card w-96 bg-accent text-primary-content mx-auto">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Add Todo</h2>
                    <form onSubmit={handleTodo} className='py-5'>
                        <div className=' flex-col mx-auto'>
                            <input name='title' type="text" placeholder="Title" className="input w-full mb-5" />
                            <textarea name='description' className="textarea w-full mb-5 h-32" placeholder="Description"></textarea>
                            <div class="card-actions justify-end">
                                <button type='submit' class="btn">Add Now</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <Todo></Todo>
        </div>
    );
};

export default Home;
