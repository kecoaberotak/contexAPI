import React from "react";

// didalam component yang dipanggil adalah contextType
import { ThemeContext } from "../context/ThemeContext";

class Navbar extends React.Component {
    // mengaktifkan context di componen
    static contextType = ThemeContext;
    render() {
        // mengambil nilai context
        const {isDarkTheme, darkTheme, lightTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <nav style={{background: theme.background, color: theme.text, height: '120px'}}>
                <h2 style={{textAlign: 'center'}} >
                    Yo Academy
                </h2>
                <div className="ui three buttons">
                    <button className="ui button">Overview</button>
                    <button className="ui button">Contact</button>
                    <button className="ui button">Support</button>
                </div>
            </nav>
        )
    }
}

export default Navbar;