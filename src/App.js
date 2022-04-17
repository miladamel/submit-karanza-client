import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup";
import Success from "./components/Success/Success";
// import Login from "./components/Login";

function App() {


	return (
		<Routes>
			{/* { <Route path="/" exact element={<Main />} />} */}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/success" exact element={<Success />} />
			{/* <Route path="/login" exact element={<Login />} /> */}
			<Route path="/" element={<Navigate replace to="/signup" />} />
		</Routes>
	);
}

export default App;
