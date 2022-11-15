import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


/* const deafultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar curso intro react', completed: false },
  { text: 'Llorar con la llorona', completed: false }
] */

function App(props) {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
