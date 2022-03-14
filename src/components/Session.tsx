import moment from "moment";
import "./Session.css";

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
		<div>
			<p id="session__session-label">Session</p>
			<p id="session__session-length">{sessionLengthInMinutes}</p>
			<button
				className="session__button"
				onClick={() => incrementSessionLengthByOneMinute()}>
				+
			</button>
			<button
				className="session__button"
				onClick={() => decrementSessionLengthByOneMinute()}>
				-
			</button>
		</div>
	);
}
