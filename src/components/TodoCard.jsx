export default function TodoCard(props) {
    const { children, deleteTodoItem, index, updateList } = props;

    const deleteHandler = () => {
        deleteTodoItem(index);
    }

    const updateHandler = () => {
        updateList(index);
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
            </div>
        </li>
    )
}