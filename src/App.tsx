import { useState, useEffect, useRef } from "react";
import "./App.css";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";
import Tasks from "./components/Tasks";
import { Button } from "react-bootstrap";

function App() {
	const audioElement = useRef<HTMLAudioElement>(null);
	const [sessionLength, setSessionLength] = useState(60 * 25);
	const [breakLength, setBreakLength] = useState(60 * 5);
	const [currentSessionType, setCurrentSessionType] = useState("Session");
	const [intervalID, setIntervalID] = useState<NodeJS.Timeout | null>(null);
	const [timeLeft, setTimeLeft] = useState(sessionLength);
	const isStarted = intervalID !== null;

	useEffect(() => {
		setTimeLeft(sessionLength);
	}, [sessionLength]);

	useEffect(() => {
		if (timeLeft === 0) {
			audioElement?.current?.play();
			if (currentSessionType === "Session") {
				setCurrentSessionType("Break");
				setTimeLeft(breakLength);
			} else if (currentSessionType === "Break") {
				setCurrentSessionType("Session");
				setTimeLeft(sessionLength);
			}
		}
	}, [timeLeft, breakLength, currentSessionType, sessionLength]);

	const decrementSessionLengthByOneMinute = (): void => {
		const newSessionLength: number = sessionLength - 60;

		if (newSessionLength > 0) {
			setSessionLength(newSessionLength);
		}
	};

	const incrementSessionLengthByOneMinute = (): void => {
		const newSessionLength = sessionLength + 60;
		if (newSessionLength <= 60 * 60) {
			setSessionLength(newSessionLength);
		}
	};

	const decrementBreakLengthByOneMinute = (): void => {
		const newBreakLength: number = breakLength - 60;

		if (newBreakLength > 0) {
			setBreakLength(newBreakLength);
		}
	};

	const incrementBreakLengthByOneMinute = (): void => {
		const newBreakLength = breakLength + 60;
		if (newBreakLength <= 60 * 60) {
			setBreakLength(newBreakLength);
		}
	};

	const handleStartStopClick = () => {
		if (isStarted) {
			if (intervalID) {
				clearInterval(intervalID);
			}
			setIntervalID(null);
		} else {
			const newIntervalID = setInterval(() => {
				setTimeLeft((prevTimeLeft): number => prevTimeLeft - 1);
			}, 1000);
			setIntervalID(newIntervalID);
		}
	};
	const handleResetButtonClick = () => {
		audioElement?.current?.load();
		if (intervalID) {
			clearInterval(intervalID);
		}
		setIntervalID(null);
		setCurrentSessionType("Session");
		setSessionLength(60 * 25);
		setBreakLength(60 * 5);
		setTimeLeft(60 * 25);
	};

	return (
		<div className="App">
			<h1 className="card bold">Pomo!</h1>
			<TimeLeft
				timerLabel={currentSessionType}
				handleStartStopClick={handleStartStopClick}
				startStopLabel={intervalID !== null}
				timeLeft={timeLeft}
				handleResetButtonClick={handleResetButtonClick}></TimeLeft>
			<div className="card" id="session-break-block">
				<Session
					sessionLength={sessionLength}
					decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
					incrementSessionLengthByOneMinute={
						incrementSessionLengthByOneMinute
					}></Session>

				<Break
					breakLength={breakLength}
					decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
					incrementBreakLengthByOneMinute={
						incrementBreakLengthByOneMinute
					}></Break>
			</div>

			<Tasks />
			<audio id="alarm" ref={audioElement}>
				<source
					src="http://soundbible.com/grab.php?id=1531&type=mp3"
					type="audio/mpeg"
				/>
			</audio>
		</div>
	);
}

export default App;

//drag n drop!
