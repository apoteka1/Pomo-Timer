import format from "format-duration";
import Button from 'react-bootstrap/Button'
type Props = {
	timerLabel: string;
	timeLeft: number;
	handleStartStopClick: any;
	startStopLabel: boolean;
};

export default function TimeLeft({
	timerLabel,
	timeLeft,
	handleStartStopClick,
	startStopLabel,
}: Props) {
	return (
		<div className="card">
			<p>{timerLabel}</p>
			<p>{format(timeLeft * 1000)}</p>
			<Button variant="danger" onClick={handleStartStopClick}>
				{startStopLabel ? "stop" : "start"}
			</Button>
		</div>
	);
}
