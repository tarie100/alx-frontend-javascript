export default class Currency{
	constructor(code, name){
		if (typeof code !== 'string' || typeof name !== 'string'){
			throw new Error('Invalid attribute');
		}
		this._code = code;
		this._name = name;
	}
	get code(){
		return this._code;
	}
	set code(value){
		if (typeof code !== 'string'){
			throw new Error('must be a string');
		}
		this._code = value;
	}
	get name(){
		return this._name;
	}
	set name(value){
		if (typeof name !== 'string'){
			throw new Error('must be a string');
		}
		this._name = value;
	}
	displayFullCurrency(){
		return `${this._name} (${this._code})`;
	}
}
