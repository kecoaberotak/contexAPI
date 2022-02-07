import React, {useContext} from "react";

// didalam component yang dipanggil adalah contextType
import { ThemeContext } from "../context/ThemeContext";
import { TodoListContext } from "../context/TodoListContext";


// MENGGUNAKAN FUNCTIONAL COMPONENT

const TodoList = () => {
    // memanggil context yg mau dipakai
    const {todos} = useContext(TodoListContext);
    const {isDarkTheme, lightTheme, darkTheme, changeTheme} = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <div style={{background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}}>
            <p className="item">Plan the family trip</p>
            <p className="item">Go for shopping for dinner</p>
            <p className="item">Go for a walk</p>

            {/* tombol untuk mengubah theme */}
            {/* walau tombolnya hanya ada di componen ini tapi nilai context di component lain juga berubah */}
            <button className="ui button primary" onClick={changeTheme}>Change the theme</button>
        </div>        
    )
}










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