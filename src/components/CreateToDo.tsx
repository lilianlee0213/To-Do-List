import {useForm} from 'react-hook-form';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {categoryState, toDoState} from '../atoms';
import styled from 'styled-components';

interface IForm {
	toDo: string;
}
const InputForm = styled.form`
	display: grid;
	grid-template-columns: 3fr 1fr;
	gap: 10px;
	margin-bottom: 40px;
`;
function CreateToDo() {
	const setToDos = useSetRecoilState(toDoState);
	const category = useRecoilValue(categoryState);
	const {register, handleSubmit, setValue} = useForm<IForm>();
	const handleValid = ({toDo}: IForm) => {
		setToDos((oldToDos) => [
			{text: toDo, id: Date.now(), category},
			...oldToDos,
		]);
		setValue('toDo', '');
	};

	return (
		<InputForm onSubmit={handleSubmit(handleValid)}>
			<input
				{...register('toDo', {required: 'Please write a To Do'})}
				placeholder="Write a to do"
			/>
			<button>Add</button>
		</InputForm>
	);
}
export default CreateToDo;
