import moment from "moment";

import {ButtonGroup, Button} from "react-bootstrap"

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
		<div className="card">
			<p id="session__session-label">Session</p>
			<p id="session__session-length">{sessionLengthInMinutes}</p>
            <ButtonGroup size="sm">
			<Button
            variant="outline-info"
				className="session__button"
				onClick={() => incrementSessionLengthByOneMinute()}>
				+
			</Button>
			<Button
            variant="outline-info"
				className="session__button"
				onClick={() => decrementSessionLengthByOneMinute()}>
				-
			</Button>
            </ButtonGroup>
		</div>
	);
}
