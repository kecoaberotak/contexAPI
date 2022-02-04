import React, {createContext} from "react";

// context membuat proses oper data menjadi lebih mudah, karena tidak harus mengoper data melalui props d tiap tingkatan karena data dalam context bersifat "global"

// untuk di panggil di App.js
export const ThemeContext = createContext();



// untuk dipanggil di componen yang membutuhkan
class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: true,
        lightTheme: {
            text: '#222',
            background: '#d8ddf1'
        },
        darkTheme: {
            text: '#fff',
            background: '#5c5c5c'
        }
    };

    // toggle untuk mengubah nilai theme
    changeTheme = () => {
        this.setState({ isDarkTheme: !this.state.isDarkTheme })
    };

    render () {
        return (
            // memakai spread operation agar componen lain bisa memakai nilai dari context
            // perhatikan syntax nya
            <ThemeContext.Provider value={{...this.state, changeTheme: this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;