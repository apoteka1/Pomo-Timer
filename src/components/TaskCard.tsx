import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

type Props = {
	task: string;
	setAllTasks: React.Dispatch<React.SetStateAction<string[]>>;
	setSessionTasks: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function TaskCard({
	task,
	setAllTasks,
	setSessionTasks,
}: Props) {
	const addToSession = () => {
		setSessionTasks((curr) => [...curr, task]);
		setAllTasks((curr) => curr.filter((t) => t !== task));
	};

	const deleteTask = () => {
		setAllTasks((curr) => curr.filter((t) => t !== task));
	};

	return (
		<div className="task">
			<div className="task__text">{task} </div>
			<ButtonGroup className="btn-group btn-group-sm button-group" size="sm">
				<Button
					style={{ color: "orange" }}
					variant="outline-secondary"
					onClick={addToSession}>
					<i className="fa fa-plus" />
				</Button>
				<Button variant="outline-secondary" onClick={deleteTask}>
					<i className="fa fa-trash-o" />
				</Button>
			</ButtonGroup>
		</div>
	);
}
