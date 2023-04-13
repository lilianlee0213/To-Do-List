import styled from 'styled-components';
import {useRecoilState, useRecoilValue} from 'recoil';
import CreateToDo from './CreateToDo';
import {Categories, categoryState, toDoSelector} from '../atoms';
import ToDo from './ToDo';

const Container = styled.div`
	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-direction: column;
	gap: 100px;
	padding-top: 50px;
	height: 100vh;
	font-family: 'Allerta', sans-serif;
	background-color: ${(props) => props.theme.bgColor};
	background-image: linear-gradient(#1a120b 2px, transparent 2px),
		linear-gradient(to right, #1a120b 2px, #fafafa 2px);
	background-size: 40px 40px;
	opacity: 1;
`;
const Card = styled.div`
	width: fit-content;
	padding: 30px;
	border: 3px solid ${(props) => props.theme.textColor};
	border-radius: 4px;
	box-shadow: 5px -5px 1px 1.5px rgba(26, 18, 11, 1);
	background-color: whitesmoke;
`;
const Title = styled.h1`
	margin-bottom: 30px;
	font-family: 'Rampart One', cursive;
	text-transform: uppercase;
	font-size: 50px;
	font-weight: 400;
	text-align: center;
`;

const Select = styled.select`
	width: 100%;
	border: 2px solid ${(props) => props.theme.textColor};
	margin-bottom: 10px;
`;
interface IForm {
	toDo: string;
}

function ToDoList() {
	const toDos = useRecoilValue(toDoSelector);
	const [category, setCategory] = useRecoilState(categoryState);
	const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
		setCategory(event.currentTarget.value as any);
	};
	return (
		<Container>
			<Card>
				<Title>To Dos</Title>
				<Select value={category} onInput={onInput}>
					<option value={Categories.TO_DO}>To Do</option>
					<option value={Categories.DOING}>Doing</option>
					<option value={Categories.DONE}>Done</option>
				</Select>
				<CreateToDo />
			</Card>
			<div style={{display: 'flex'}}>
				<Card>
					<Title>To Dos</Title>
					{toDos?.map((toDo) => (
						<ToDo key={toDo.id} {...toDo} />
					))}
				</Card>
				<Card>
					<Title>In Process</Title>
					{toDos?.map((toDo) => (
						<ToDo key={toDo.id} {...toDo} />
					))}
				</Card>
				<Card>
					<Title>Completed</Title>
					{toDos?.map((toDo) => (
						<ToDo key={toDo.id} {...toDo} />
					))}
				</Card>
			</div>
		</Container>
	);
}
export default ToDoList;
