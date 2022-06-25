import { DestinationMatching } from "../DestionationSuggestion/DestinationMatching";
import { Grid, Paper } from "@material-ui/core";
import "../../css-styling/UserDashboardPage.css"
import { UserPreferences } from "./UserPreferences";
import map from "lodash/map";
import range from "lodash/range";

export const UserDashboardPage = () => {
	const reccs = (input) => {
		return (
			<div>
				<div className="userTile">
					<ul>
						<li>
							<p>Trip {input}:</p>
						</li>
						<li className="userTileSpacing">
							<p className="whiteSpace">Destination: Vancouver</p>
						</li>
						<li className="userTileSpacing">
							<p className="whiteSpace">Route Planned: TBD</p>
						</li>
						<li className="userTileSpacing">
							<p className="whiteSpace">Welcome to Beautiful British Columbia</p>
						</li>
						<li className="userTileSpacing">
							<input type="button" value="Delete Plans"></input>
						</li>
					</ul>
				</div>
			</div>
		);
	}

	const Container = () => {
		return (
			<div style={{ height: "212px", width: "434px", margin: "16px" }}>
				<Paper style={{ height: "100%", width: "434px" }}>{reccs()}</Paper>
			</div>
		);
	};

	return (
		<div style={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
			<Grid container spacing={2}>
				<Grid xs={12} md={6}>
					<h1>User Dashboard</h1>
					<p>View and modify all settings related to your account here!</p>
					<div style={{ width: "100%", overflow: "auto", display: "flex" }}>
						{map(range(10), _ => (
							<Container />
						))}
					</div>
				</Grid>
				<Grid xs={12} md={6}>
					<UserPreferences />
				</Grid>
			</Grid>

		</div>
	);
}




// return (
// 	<div>
// 		<h1>
// 			User Dashboard Page
// 		</h1>
// 		<div>
// 			{tile()}
// 			{reccs(1)}
// 			{reccs(2)}
// 			{reccs(3)}
// 		</div>
// 		{/* <DestinationMatching /> */}
// 	</div>
// );
// }
// const tile = (props) => {
// 	return (
// 		<div>
// 			<div className="userTile">
// 				<ul>
// 					<li>
// 						<p>Good Afternoon, Sharon.</p>
// 					</li>
// 					<li className="userTileSpacing">
// 						<p className="whiteSpace">Current Planned Trips: 3</p>
// 					</li>
// 					<li className="userTileSpacing">
// 						<input type="button" value="Plan Me a New Trip!"></input>
// 					</li>
// 				</ul>
// 			</div>
// 		</div>
// 	);
// }