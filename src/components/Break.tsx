import moment from "moment";
import "./Break.css";
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
		<div>
			<p id="break__break-label">Break</p>
			<p id="break__break-length">{breakLengthInMinutes}</p>
			<button
				className="break__button"
				onClick={()=>incrementBreakLengthByOneMinute()}>
				+
			</button>
			<button
				className="break__button"
				onClick={()=>decrementBreakLengthByOneMinute()}>
				-
			</button>
		</div>
	);
}
