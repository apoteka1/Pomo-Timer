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
		<div className="session-break-block">
			<p id="break__break-label">Break</p>
			<p id="break__break-length">{breakLengthInMinutes}</p>
			<div>
				<ButtonGroup className="button-block" size="sm">
					<Button
						variant="outline-info"
						onClick={() => incrementBreakLengthByOneMinute()}>
						<i className="fa fa-plus" />
					</Button>
					<Button
						variant="outline-info"
						onClick={() => decrementBreakLengthByOneMinute()}>
						<i className="fa fa-minus" />
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
}
