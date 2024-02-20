import { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../card/Card";
import scss from "./Form.module.scss";

const Form = () => {
	const dispatch = useDispatch();
	const [todoText, setTodoText] = useState("");

	const addButton = () => {
		if (todoText === "") {
			alert("Кандай е😘");
		} else {
			dispatch({
				type: "ADD_TODO",
				payload: { id: Math.random(), name: todoText },
			});
			setTodoText("");
		}
	};

	return (
		<div className={scss.content}>
			<div className="container">
				<h1>TodoList React-Redux</h1>
				<div className={scss.form}>
					<input
						className={scss.ini}
						type="text"
						placeholder="Text🥷"
						value={todoText}
						onChange={(e) => setTodoText(e.target.value)}
					/>
					<button onClick={addButton}>Add</button>
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Form;
