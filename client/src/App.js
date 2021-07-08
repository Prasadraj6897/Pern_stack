import React, {Fragment} from "react"
import './App.css';

import InputTodos from "./Components/InputTodo";
import ListTodos from "./Components/ListTodo";

function App() {
  return (
    <Fragment>
		<div className = "container">
			<InputTodos />
			<ListTodos />
		</div>	
    </Fragment>
  );
}

export default App;
