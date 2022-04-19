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
			<p>Now: {timerLabel}</p>
			<p>{format(timeLeft * 1000)}</p>

			<ButtonGroup id="main-btn-block" className="button-block">
				<Button variant="outline-info" onClick={handleStartStopClick}>
					{startStopLabel ? (
						<i className="fa fa-pause" />
					) : (
						<i className="fa fa-play" />
					)}
				</Button>
				<Button variant="outline-info" onClick={handleResetButtonClick}>
					<i className="fa fa-refresh" />
				</Button>
			</ButtonGroup>
		</div>
	);
}
