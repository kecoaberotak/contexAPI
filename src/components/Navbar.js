import React, { useContext } from "react";

// didalam component yang dipanggil adalah contextType
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context//AuthContext";



// Multiple Context menggunakan Functional Component
const Navbar = () => {
    const {isLoggedIn, changeAuthStatus} = useContext(AuthContext);
    const {isDarkTheme, darkTheme, lightTheme} = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <nav style={{background: theme.background, color: theme.text, height: '120px'}}>
            <h2 style={{textAlign: 'center'}} >
                Yo Academy
            </h2>
            <p onClick={changeAuthStatus} style={{textAlign: 'center'}}>{ isLoggedIn ? 'logged in' : 'logged out' }</p>
            <div className="ui three buttons">
                <button className="ui button">Overview</button>
                <button className="ui button">Contact</button>
                <button className="ui button">Support</button>
            </div>
        </nav>
    );
}






// Multiple Context menggunakan Class Component
// class Navbar extends React.Component {
//     // mengaktifkan context di componen
//     static contextType = ThemeContext;
//     render() {    
//         return (
//             // bisa memiliki lebih dari satu context, tampung context lainnya didalam context yang lain
//             <AuthContext.Consumer>{(authContext) => {
//                 return(
//                     // menggunakan context consumer, memberikan hasil yang sama
//                     // context consumer bisa digunakan untuk funsional component
//                     <ThemeContext.Consumer>{(themeContext) => {
//                         // mengambil nilai context    
//                         const {isDarkTheme, darkTheme, lightTheme} = themeContext;
//                         const {isLoggedIn, changeAuthStatus} = authContext;
//                         const theme = isDarkTheme ? darkTheme : lightTheme;
//                         return (
                            // <nav style={{background: theme.background, color: theme.text, height: '120px'}}>
                            //     <h2 style={{textAlign: 'center'}} >
                            //         Yo Academy
                            //     </h2>
                            //     <p onClick={changeAuthStatus} style={{textAlign: 'center'}}>{ isLoggedIn ? 'logged in' : 'logged out' }</p>
                            //     <div className="ui three buttons">
                            //         <button className="ui button">Overview</button>
                            //         <button className="ui button">Contact</button>
                            //         <button className="ui button">Support</button>
                            //     </div>
                            // </nav>                    
//                         )
//                     }}</ThemeContext.Consumer>                    
//                 )
//             }}</AuthContext.Consumer>
//         )
//     }
// };

export default Navbar;