import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import AuthContextProvider from "./context/AuthContext";

// yang dipanggil selain di component adalah provider dari context
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">

        {/* menampung component dalam provider */}
        {/* bisa lebih dari satu context */}
        <AuthContextProvider>
          <ThemeContextProvider>
          <Navbar/>
          <TodoList/>
          </ThemeContextProvider>          
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
