import React, {createContext, useState} from "react";

export const AuthContext = createContext();


// MEMBUAT CONTEXT DENGAN FUNCTIONAL COMPONENT
const AuthContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const changeAuthStatus = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return(
        <AuthContext.Provider value={{isLoggedIn, changeAuthStatus: changeAuthStatus }}>
            {children}
        </AuthContext.Provider>
    )

}


















// MEMBUAT CONTEXT MENGGUNAKAN CLASS COMPONENT  
// class AuthContextProvider extends React.Component {
//     state = {
//         isLoggedIn: false
//     };

//     changeAuthStatus = () => {
//         this.setState({isLoggedIn: !this.state.isLoggedIn});
//     }

//     render() {
//         return(
//             <AuthContext.Provider value={{...this.state, changeAuthStatus: this.changeAuthStatus}}>
//                 {this.props.children}
//             </AuthContext.Provider>
//         )
//     }
// }

export default AuthContextProvider;