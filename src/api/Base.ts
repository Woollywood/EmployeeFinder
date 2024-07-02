import axios from 'axios';

export class Base {
	static get entity(): string | Error {
		throw new Error('unknown entity');
	}

	static _init() {
		const apiUrl = import.meta.env.VITE_API_URL;

		return axios.create({
			baseURL: apiUrl,
		});
	}
}
