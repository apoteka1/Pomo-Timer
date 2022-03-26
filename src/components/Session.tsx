import moment from "moment";

import { ButtonGroup, Button } from "react-bootstrap";

type Props = {
	sessionLength: number;
	decrementSessionLengthByOneMinute: Function;
	incrementSessionLengthByOneMinute: Function;
};

export default function Session({
	sessionLength,
	incrementSessionLengthByOneMinute,
	decrementSessionLengthByOneMinute,
}: Props) {
	const sessionLengthInMinutes: number = moment
		.duration(sessionLength, "s")
		.minutes();
	return (
		<div className="session-break-block">
			<p id="session__session-label">Session</p>
			<p id="session__session-length">{sessionLengthInMinutes}</p>
			<ButtonGroup className="button-block" size="sm">
				<Button
					variant="outline-info"
					onClick={() => incrementSessionLengthByOneMinute()}>
					<i className="fa fa-plus" />
				</Button>
				<Button
					variant="outline-info"
					onClick={() => decrementSessionLengthByOneMinute()}>
					<i className="fa fa-minus" />
				</Button>
			</ButtonGroup>
		</div>
	);
}
