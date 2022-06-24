import React from "react";
import {Grid} from "@material-ui/core";
import {LoginVsSignup} from "./LoginVsSignup";

export const LandingPage = () => {
	return (
		<div style={{paddingLeft: '4rem', paddingRight: '4rem'}}>
			<Grid container spacing={2}>
				<Grid xs={12} md={6}>
					<h1>Welcome!!!</h1>
					<p>Youfly is a travel booking web application that allows users to create a personalized profile by answering a series of questions. Based on their profile youfly will provide optimal travel destination recommendations and the top activities to do at that destination. </p>
				</Grid>

				<Grid xs={12} md={6}>
					<LoginVsSignup/>
				</Grid>
			</Grid>

		</div>
	);
}