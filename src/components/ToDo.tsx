import {useSetRecoilState} from 'recoil';
import {Categories, IToDo, toDoState} from '../atoms';
import styled from 'styled-components';

const List = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	list-style: none;
`;
const Buttons = styled.div`
	display: flex;
	gap: 10px;
`;
function ToDo({text, category, id}: IToDo) {
	const setToDos = useSetRecoilState(toDoState);
	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: {name},
		} = event;
		setToDos((oldToDos) => {
			const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
			const newToDo = {text, id, category: name as any};
			return [
				...oldToDos.slice(0, targetIndex),
				newToDo,
				...oldToDos.slice(targetIndex + 1),
			];
		});
	};
	return (
		<List>
			<span>{text}</span>
			<Buttons>
				{category !== Categories.IN_PROGRESS && (
					<button name={Categories.IN_PROGRESS} onClick={onClick}>
						In Progress
					</button>
				)}
				{category !== Categories.TO_DO && (
					<button name={Categories.TO_DO} onClick={onClick}>
						To Do
					</button>
				)}
				{category !== Categories.COMPLETED && (
					<button name={Categories.COMPLETED} onClick={onClick}>
						Completed
					</button>
				)}
			</Buttons>
		</List>
	);
}
export default ToDo;
