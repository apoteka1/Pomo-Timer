import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
type Props = {
	task: string;
	setAllTasks: React.Dispatch<React.SetStateAction<string[]>>;
	setSessionTasks: React.Dispatch<React.SetStateAction<string[]>>;
	setCompleteTasks: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function SessionTaskCard({
	task,
	setAllTasks,
	setSessionTasks,
	setCompleteTasks,
}: Props) {
	const deleteTask = () => {
		setSessionTasks((curr) => curr.filter((t) => t !== task));
	};
	const moveTaskBack = () => {
		setAllTasks((curr) => [...curr, task]);
		setSessionTasks((curr) => curr.filter((t) => t !== task));
	};
	const completeTask = () => {
		setCompleteTasks((curr) => [...curr, task]);
		setSessionTasks((curr) => curr.filter((t) => t !== task));
	};
	return (
		<div className="task">
			<p className="task__text">{task}</p>
			<ButtonGroup className="btn-group btn-group-sm button-group" size="sm">
				<Button
					style={{ color: "green" }}
					variant="outline-secondary"
					onClick={completeTask}>
					<i className="fa fa-check" />
				</Button>
				<Button
					style={{ color: "red" }}
					variant="outline-secondary"
					onClick={moveTaskBack}>
					<i className="fa fa-undo" />
				</Button>
				<Button variant="outline-secondary" onClick={deleteTask}>
					<i className="fa fa-trash-o" />
				</Button>
			</ButtonGroup>{" "}
		</div>
	);
}
