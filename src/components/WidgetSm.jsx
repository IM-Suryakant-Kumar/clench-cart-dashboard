/* eslint-disable react/prop-types */
import React from "react";
import {
	Container,
	SList,
	SListItem,
	Name,
	SButton,
	Title,
	UserInfoConatiner,
	UserTitle,
	VisibilityIcon,
} from "../styles/widgetSm.css";
import { Await } from "react-router-dom";
import Avatar from "./Avatar";

const WidgetSm = ({loaderData}) => {

    const renderUsers = (users) => users.map(user => (
        <SListItem key={user._id}>
                <Avatar avatar={user.avatar} username={user.username} />
                <UserInfoConatiner>
                    <Name component="span">{user.username}</Name>
                    <UserTitle component="span">
                        Software Engineer
                    </UserTitle>
                </UserInfoConatiner>
                <SButton
                    variant="text"
                    startIcon={<VisibilityIcon />}
                >
                    Dispaly
                </SButton>
            </SListItem>
    ))

	return (
		<Container elevation={2}>
			<Title
				variant="subtitle1"
				component="h2"
			>
				New Join Members
			</Title>
			<SList>
                <React.Suspense fallback={<h3>Loding...</h3>}>
                    <Await resolve={loaderData.users}>{renderUsers}</Await>
                </React.Suspense>
			</SList>
		</Container>
	);
};

export default WidgetSm;
