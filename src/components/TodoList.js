import React from "react";

// didalam component yang dipanggil adalah contextType
import { ThemeContext } from "../context/ThemeContext";

class TodoList extends React.Component {
    // mengaktifkan context di componen
    static contextType = ThemeContext;
    render() {
        // mengambil nilai context
        const {isDarkTheme, lightTheme, darkTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <div style={{background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}}>
                <p className="item">Plan the family trip</p>
                <p className="item">Go for shopping for dinner</p>
                <p className="item">Go for a walk</p>
            </div>
        )
    }
}

export default TodoList;