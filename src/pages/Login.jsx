import { 
    Form, 
    redirect, 
    useActionData, 
    useLoaderData, 
    useNavigation
} from "react-router-dom";
import {
	Container,
	Input,
	Title,
	SButton as Button,
} from "../styles/login.css";
import { loginUser } from "../utils/dispatches";

export const loader = ({ request }) => {
	return new URL(request.url).searchParams.get("message");
};

export const action = async ({request}) => {
    const formData = await request.formData()
    const username = formData.get("username")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/"

    try {
        await loginUser({username, password})
        return redirect(pathname)
    } catch (err) {
        return err.message
    }
}

const Login = () => {
    const errorMessage = useActionData()
	const message = useLoaderData();
	const navigation = useNavigation();

	return (
		<Container>
            <Title variant="h6" component="h1">Sign in to your account</Title>
			{message && <Title variant="subtitle2" component="h3">{message}</Title>}
            {errorMessage && <Title variant="subtitle2" component="h3">{errorMessage}</Title>}

			<Form
				method="post"
				className="login-form"
				replace
			>
				<Input
					name="username"
					id="username"
					type="text"
					placeholder="Username ex - john23"
				/>
				<Input
					name="password"
					id="password"
					type="password"
					placeholder="Password"
				/>
				<Button type="submit" disabled={navigation.state === "submitting"}>
					{navigation.state === "submitting"
						? "Loging in..."
						: "Log in"}
				</Button>
			</Form>
		</Container>
	);
};

export default Login;
