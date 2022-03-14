import format from "format-duration";

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
		<div>
			<p>{timerLabel}</p>
			<p>{format(timeLeft * 1000)}</p>
			<button onClick={handleStartStopClick}>
				{startStopLabel ? "stop" : "start"}
			</button>
		</div>
	);
}
