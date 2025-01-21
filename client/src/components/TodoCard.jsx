export default function TodoCard(props) {
    const { children, deleteTodoItem, index, updateList } = props;

    const deleteHandler = () => {
        deleteTodoItem(index);
    }

    const updateHandler = () => {
        updateList(index);
    }

    const clickHandler = async() =>{
        console.log("click request");
        try {
            const response = await fetch("http://localhost:4000/user", {
                method: "GET",
                mode: "no-cors",
                headers: {}
            });
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <li className="todo-item">
            {children}
            <div className="actions-container">
                <button id="edit-button" onClick={updateHandler}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button id="delete-button" onClick={deleteHandler}>
                    <i className="fa-solid fa-trash" ></i>
                </button>
                <button  onClick={clickHandler}>
                    press
                </button>
            </div>
        </li>
    )
}