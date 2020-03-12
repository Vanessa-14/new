export class User {
    constructor (_id = '', name = '', lastname = '', email = '', password = '', role = ''){
        this._id = _id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;

        this.role = role;
    }
    _id: string;
    name: string;
    lastname: string;
    email:string;
    password:string;

    role:string;

}
