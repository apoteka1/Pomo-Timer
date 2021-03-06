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
	useEffect(() => {
		const allTasksLocal = localStorage.getItem("allTasks");
		if (allTasksLocal?.length) {
			setAllTasks(JSON.parse(allTasksLocal));
		} else {
			setAllTasks([]);
		}
	}, []);

	useEffect(() => {
		const sessionTasksLocal = localStorage.getItem("sessionTasks");
		if (sessionTasksLocal) {
			setSessionTasks(JSON.parse(sessionTasksLocal));
		}
	}, []);

	useEffect(() => {
		const completeTasksLocal = localStorage.getItem("completeTasks");
		if (completeTasksLocal) {
			setCompleteTasks(JSON.parse(completeTasksLocal));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("allTasks", JSON.stringify(allTasks));
		localStorage.setItem("sessionTasks", JSON.stringify(sessionTasks));
		localStorage.setItem("completeTasks", JSON.stringify(completeTasks));
	}, [allTasks, sessionTasks, completeTasks]);

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
				<p style={{ color: "#dc3545" }}>All tasks</p>

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
				<p style={{ color: "#f09c00" }}>This session</p>
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
				<p style={{ color: "#007700" }}>Complete</p>
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
