import {useRecoilValue} from 'recoil';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import {toDoSelector, toDoState} from '../atoms';

interface IForm {
	toDo: string;
}

function ToDoList() {
	const [toDo, doing, done] = useRecoilValue(toDoSelector);

	return (
		<div>
			<CreateToDo />
			<h1>To Dos</h1>
			<ul>
				{toDo.map((toDo) => (
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
			<hr />
			<h1>Doing</h1>
			<ul>
				{doing.map((toDo) => (
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
			<hr />
			<h1>Done</h1>
			<ul>
				{done.map((toDo) => (
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
			<hr />
		</div>
	);
}
export default ToDoList;
