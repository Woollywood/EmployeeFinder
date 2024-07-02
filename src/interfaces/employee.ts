export interface EmployeeGeoInterface {
	lat: string;
	lng: string;
}

export interface EmployeeAdressInterface {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: EmployeeGeoInterface;
}

export interface EmployeeCompanyInterface {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface EmployeeInterface {
	id: number;
	name: string;
	username: string;
	email: string;
	address: EmployeeAdressInterface;
	phone: string;
	website: string;
	company: EmployeeCompanyInterface;
}
