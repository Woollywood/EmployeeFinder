import { Base } from './Base';

export class Employees extends Base {
	static get entity() {
		return 'users';
	}

	static request() {
		return this._init();
	}
}
