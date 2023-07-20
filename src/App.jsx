import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home, { loader as homeLoader } from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login, {loader as loginLoader, action as loginAction} from "./pages/Login";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}
		>
			<Route
				index
				element={<Home />}
                loader={homeLoader}
			/>
			<Route path="users">
				<Route
					index
					element={<Users />}
				/>
				<Route
					path=":id"
					element={<User />}
				/>
				<Route
					path="new"
					element={<NewUser />}
				/>
			</Route>
			<Route path="products">
				<Route
					index
					element={<Products />}
				/>
				<Route
					path=":id"
					element={<Product />}
				/>
				<Route
					path="new"
					element={<NewProduct />}
				/>
			</Route>
			<Route
				path="login"
				element={<Login />}
                loader={loginLoader}
                action={loginAction}
			/>
		</Route>,
	),
);

const App = () => <RouterProvider router={router} />;

export default App;
