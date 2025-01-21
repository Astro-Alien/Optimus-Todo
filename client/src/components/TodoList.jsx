import TodoCard from "./TodoCard";
export default function TodoList(props) {
    const { todo } = props;
    return (
        <ul className="main">
            {
                todo.map((item, index) => {
                    return (
                       <TodoCard {...props} key={index} index={index}>
                           <p>{item}</p>
                       </TodoCard>
                    )
                })
            }
        </ul>
    )
}