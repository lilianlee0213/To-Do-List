import {atom, selector} from 'recoil';

export enum Categories {
	'CHOOSE' = 'CHOOSE',
	'TO_DO' = 'TO_DO',
	'IN_PROGRESS' = 'IN_PROGRESS',
	'COMPLETED' = 'COMPLETED',
}
export interface IToDo {
	text: string;
	id: number;
	category: Categories;
}

export const categoryState = atom<Categories>({
	key: 'category',
	default: Categories.TO_DO,
});
export const toDoState = atom<IToDo[]>({
	key: 'toDo',
	default: [],
});

export const toDoSelector = selector({
	key: 'toDoSelector',
	get: ({get}) => {
		const toDos = get(toDoState);
		const category = get(categoryState);
		return toDos.filter((toDo) => toDo.category === category);
	},
});
