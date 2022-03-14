import moment from "moment";

import { ButtonGroup, Button } from "react-bootstrap";
type Props = {
	breakLength: number;
	decrementBreakLengthByOneMinute: Function;
	incrementBreakLengthByOneMinute: Function;
};

export default function Break({
	breakLength,
	decrementBreakLengthByOneMinute,
	incrementBreakLengthByOneMinute,
}: Props) {
	const breakLengthInMinutes: number = moment
		.duration(breakLength, "s")
		.minutes();
	return (
		<div className="card">
			<p id="break__break-label">Break</p>
			<p id="break__break-length">{breakLengthInMinutes}</p>
			<ButtonGroup size="sm">
				<Button
					variant="outline-info"
					className="break__button"
					onClick={() => incrementBreakLengthByOneMinute()}>
					+
				</Button>
				<Button
					variant="outline-info"
					className="break__button"
					onClick={() => decrementBreakLengthByOneMinute()}>
					-
				</Button>
			</ButtonGroup>
		</div>
	);
}
