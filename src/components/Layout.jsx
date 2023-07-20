import { Outlet } from "react-router-dom";
import { Container, Main } from "../styles/layout.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Layout = () => {
	return (
		<Container>
			<Header />
			<Main
				direction="row"
				component="main"
			>
				<Sidebar />
				<Outlet />
			</Main>
            <ToastContainer autoClose={1000} />
		</Container>
	);
};

export default Layout;
