import format from "format-duration";
import { Button, ButtonGroup } from "react-bootstrap";
type Props = {
	timerLabel: string;
	timeLeft: number;
	handleStartStopClick: any;
	startStopLabel: boolean;
	handleResetButtonClick: any;
};

export default function TimeLeft({
	timerLabel,
	timeLeft,
	handleStartStopClick,
	startStopLabel,
	handleResetButtonClick,
}: Props) {
	return (
		<div className="card">
			<p>{timerLabel}</p>
			<p>{format(timeLeft * 1000)}</p>
			<ButtonGroup>
				<Button variant="btn btn-outline-danger" onClick={handleStartStopClick}>
					{startStopLabel ? (
						<i className="fa fa-pause" />
					) : (
						<i className="fa fa-play" />
					)}
				</Button>
				<Button
					variant="btn btn-outline-danger"
					onClick={handleResetButtonClick}>
					<i className="fa fa-refresh" />
				</Button>
			</ButtonGroup>
		</div>
	);
}
