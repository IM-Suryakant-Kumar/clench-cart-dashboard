import Chart from "../components/Chart"
import FeaturedInfo from "../components/FeaturedInfo"
import { Container, HomeWidget } from "../styles/home.css"
import userData from "../dummyData";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";
import { defer, useLoaderData } from "react-router-dom";
import { getAllUsers } from "../utils/dispatches";

export const loader = ({request}) => {
    return defer({ users: getAllUsers() })
}

const Home = () => {
    const loaderData = useLoaderData()

    return (
        <Container component="section">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" dataKey="Active User" />
            <HomeWidget>
                <WidgetSm loaderData={loaderData} />
                <WidgetLg />
            </HomeWidget>
        </Container>
    )
}

export default Home