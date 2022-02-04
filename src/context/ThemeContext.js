import React, {createContext} from "react";

// context adalah componen yang bersifat "global"

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
    }

    render () {
        return (
            // memakai spread operation agar componen lain bisa memakai nilai dari context
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;