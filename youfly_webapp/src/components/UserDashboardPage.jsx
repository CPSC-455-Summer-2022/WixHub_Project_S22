import { DestinationMatching } from "./DestinationMatching";
import "../styling/UserDashboardPage.css"

export const UserDashboardPage = () => {

	const tile = (props) => {
		return (
			<div>
				<div className="userTile">
					<ul>
					<li>
						<p>Good Afternoon, Sharon.</p>
					</li>
					<li className="userTileSpacing">
						<p className="whiteSpace">Current Planned Trips: 3</p>
					</li>
					<li className="userTileSpacing">
						<input type="button" value="Plan Me a New Trip!"></input>
					</li>
					</ul>
				</div>
			</div>
		);
	}

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

	return (
		<div>
			<h1>
				User Dashboard Page
			</h1>
			<div>
				{tile()}
				{reccs(1)}
				{reccs(2)}
				{reccs(3)}
			</div>
			<DestinationMatching />
		</div>
	);
}