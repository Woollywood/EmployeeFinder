import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import type { EmployeeInterface } from '@/interfaces/employee';

export interface State {
	employees: EmployeeInterface[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
	state: {
		employees: [],
	},

	getters: {
		employees(state) {
			return state.employees;
		},
	},

	mutations: {
		setEmployees(state, payload: EmployeeInterface[]) {
			state.employees = payload;
		},
	},
});
