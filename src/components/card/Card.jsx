import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { TbPencilHeart } from "react-icons/tb";
import { VscSaveAs } from "react-icons/vsc";
import { ImCancelCircle } from "react-icons/im";
import scss from "./Card.module.scss";

const Card = () => {
	const todos = useSelector((state) => state);
	const dispatch = useDispatch();

	const [values, setValues] = useState("");
	const [isEdit, setIsEdit] = useState(null);
	const [checkedItems, setCheckedItems] = useState({});

	const deleteTodo = (id) => {
		dispatch({ type: "DELETE_TODO", payload: id });
	};

	const editButton = (id, newName) => {
		dispatch({ type: "UPDATE_TODO", payload: { id, newName } });
		setIsEdit(null);
	};

	const toggleEdit = (id, name) => {
		setIsEdit(id);
		setValues(name);
	};

	const toggleCheckbox = (id) => {
		setCheckedItems({ ...checkedItems, [id]: !checkedItems[id] });
	};

	return (
		<div className={scss.content}>
			<div className="container">
				<div className={scss.cards}>
					{todos.map((item) => (
						<div key={item.id}>
							{isEdit === item.id ? (
								<div className={scss.mufa}>
									<input
										className={scss.ini}
										type="text"
										value={values}
										placeholder="Mufa"
										onChange={(e) => setValues(e.target.value)}
									/>
									<span onClick={() => editButton(item.id, values)}>
										<VscSaveAs />
									</span>
									<span
										onClick={() => {
											setValues(name);
											setIsEdit(null);
										}}>
										<ImCancelCircle />
									</span>
								</div>
							) : (
								<div
									className={scss.maap}
									style={{
										textDecoration: checkedItems[item.id]
											? "line-through"
											: "none",
									}}>
									<input
										className={scss.inputs}
										type="checkbox"
										onChange={() => toggleCheckbox(item.id)}
									/>
									<p>{item.name}</p>
									<div className={scss.icons}>
										<span onClick={() => toggleEdit(item.id, item.name)}>
											<TbPencilHeart />
										</span>
										<span onClick={() => deleteTodo(item.id)}>
											<RiDeleteBin2Fill />
										</span>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;
