import React, {useContext, useState} from "react";

// didalam component yang dipanggil adalah contextType
import { ThemeContext } from "../context/ThemeContext";
import { TodoListContext } from "../context/TodoListContext";


// MENGGUNAKAN FUNCTIONAL COMPONENT

const TodoList = () => {
    const [todo, setTodo] = useState('');
    // memanggil context yg mau dipakai
    const {todos, addTodo, removeTodo} = useContext(TodoListContext);
    const {isDarkTheme, lightTheme, darkTheme, changeTheme} = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;


    // fungsi menampung data ke state sementara (todo)
    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    // menambahkan data ke state utama (todos)
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
    }

    // pengecekan untuk menghapus data
    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        removeTodo(id);
    };

    return (
        <div style={{background: theme.background, color: theme.text, textAlign: 'center'}}>
            {/* menampilkan data dari state */}
            {todos.length ? (todos.map((todo) => {
                    return <p id={todo.id} onClick={handleRemoveTodo} className="item" key = {todo.id}>{todo.text}</p>
                })) 
                : (
                    <div>YOU HAVE NO TODO!!!</div>
                )
            }
            {/* menambahkan data baru ke state */}
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="todo">Add Todo</label>
                <input type="text" id="todo" onChange={handleChange}/>
                <input type="submit" value="Add new todo" className="ui button primary"/>
            </form>
            {/* tombol untuk mengubah theme */}
            {/* walau tombolnya hanya ada di componen ini tapi nilai context di component lain juga berubah */}
            <button className="ui button primary" onClick={changeTheme}>Change the theme</button>
        </div>
    );
};










// MENGGUNAKAN CLASS COMPONENT  

// class TodoList extends React.Component {
//     // mengaktifkan context di componen
//     static contextType = ThemeContext;
//     render() {
//         // mengambil nilai context
//         const {isDarkTheme, lightTheme, darkTheme, changeTheme} = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme;
//         return (
            // <div style={{background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}}>
            //     <p className="item">Plan the family trip</p>
            //     <p className="item">Go for shopping for dinner</p>
            //     <p className="item">Go for a walk</p>

            //     {/* tombol untuk mengubah theme */}
            //     {/* walau tombolnya hanya ada di componen ini tapi nilai context di component lain juga berubah */}
            //     <button className="ui button primary" onClick={changeTheme}>Change the theme</button>
            // </div>
//         )
//     }
// };

export default TodoList;