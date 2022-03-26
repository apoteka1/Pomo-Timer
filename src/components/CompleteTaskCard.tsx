import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
type Props = {
	task: string;
	setAllTasks: React.Dispatch<React.SetStateAction<string[]>>;
	setSessionTasks: React.Dispatch<React.SetStateAction<string[]>>;
	setCompleteTasks: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function CompleteTaskCard({
	task,
	setAllTasks,
	setSessionTasks,
	setCompleteTasks,
}: Props) {
	const deleteTask = () => {
		setCompleteTasks((curr) => curr.filter((t) => t !== task));
	};
	const moveTaskBack = () => {
		setSessionTasks((curr) => [...curr, task]);
		setCompleteTasks((curr) => curr.filter((t) => t !== task));
	};
	const moveTaskBack2 = () => {
		setAllTasks((curr) => [...curr, task]);
		setCompleteTasks((curr) => curr.filter((t) => t !== task));
	};

	return (
		<div className="task">
			<p className="task__text">{task}</p>
			<ButtonGroup className="btn-group btn-group-sm button-group" size="sm">
				<Button
					style={{ color: "orange" }}
					variant="outline-secondary"
					onClick={moveTaskBack}>
					<i className="fa fa-undo" />
				</Button>
				<Button
					style={{ color: "red" }}
					variant="outline-secondary"
					onClick={moveTaskBack2}>
					<i className="fa fa-undo" />
				</Button>
				<Button
					className="btn-sm"
					variant="outline-secondary"
					onClick={deleteTask}>
					<i className="fa fa-trash-o" />
				</Button>
			</ButtonGroup>{" "}
		</div>
	);
}
