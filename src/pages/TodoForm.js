import React, {useState, useEffect, useRef} from 'react';
import '../styles/TodoList.css';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    // Function to handle the form Changes
    const handleChange = e => {
        setInput(e.target.value);
    };

    // Function to handle the form submit
    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {
                props.edit ? ( 
                    <div className='edit-form'>
                        <input
                            type='text'
                            placeholder='Update Todo'
                            value={input}
                            name='text'
                            className='todo-input edit'
                            onChange={handleChange}
                            ref={inputRef}
                        />            
                        <button className='todo-button edit'>Update</button>
                    </div>
                ) :
                (
                    <>
                        <input
                            type='text'
                            placeholder='Write to do'
                            value={input}
                            name='text'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef}
                        />                        
                        <button className='todo-button'>Add Todo</button>
                    </>
                )
            }            
        </form>
    )
}

export default TodoForm