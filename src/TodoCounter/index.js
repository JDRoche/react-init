import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

const estilos = {
    color: 'red',
    backgroudColor: 'yellow'
};

function TodoCounter() {
    const {
        totalTodos,
        completedTodos
    } = React.useContext(TodoContext);
    return (
        <h2 style={estilos} className="TodoCounter">Has completado {completedTodos} de {totalTodos} ToDo</h2>
    );
}

export { TodoCounter };