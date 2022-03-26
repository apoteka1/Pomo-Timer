import {
	Form,
	FormControl,
	InputGroup,
	Button,
	ButtonGroup,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import CompleteTaskCard from "./CompleteTaskCard";
import SessionTaskCard from "./SessionTaskCard";
import "./Tasks.css";

const Tasks = () => {
	const [taskInput, setTaskInput] = useState<string>("");
	const [allTasks, setAllTasks] = useState<string[]>([]);
	const [sessionTasks, setSessionTasks] = useState<string[]>([]);
	const [completeTasks, setCompleteTasks] = useState<string[]>([]);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTaskInput(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setAllTasks((curr: string[]) => [...curr, taskInput]);
		setTaskInput("");
	};
	return (
		<div className="card">
			<Form onSubmit={handleSubmit}>
				<InputGroup>
					<FormControl
						as="textarea"
						value={taskInput}
						rows={2}
						onChange={handleChange}
						placeholder="Add task"
						id="task"
						required
					/>
					<Button variant={"outline-danger"} id="button-addon1" type="submit">
						<i className="fa fa-plus" />
					</Button>
				</InputGroup>
			</Form>
			<div className="tasks__list-red">
				<p style={{ color: "red" }}>All tasks</p>

				{allTasks.length
					? allTasks.map((t, index) => {
							return (
								<TaskCard
									key={index}
									task={t}
									setAllTasks={setAllTasks}
									setSessionTasks={setSessionTasks}
								/>
							);
					  })
					: null}
			</div>
			<div className="tasks__list-amber">
				<p style={{ color: "orange" }}>This session</p>
				{sessionTasks.length
					? sessionTasks.map((t, index) => {
							return (
								<SessionTaskCard
									key={index}
									task={t}
									setAllTasks={setAllTasks}
									setSessionTasks={setSessionTasks}
									setCompleteTasks={setCompleteTasks}
								/>
							);
					  })
					: null}
			</div>
			<div className="tasks__list-green">
				<p style={{ color: "green" }}>Complete</p>
				{completeTasks.map((t, index) => {
					return (
						<CompleteTaskCard
							key={index}
							task={t}
							setAllTasks={setAllTasks}
							setSessionTasks={setSessionTasks}
							setCompleteTasks={setCompleteTasks}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Tasks;
