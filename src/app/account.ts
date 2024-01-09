interface AccountModel {
    email: string;
    password: string;
}

class Account {
	checkEmail(data: AccountModel) {
        //connect to db
        //check email already
        let query = "select * from accounts where email = " + data.email;
        //let result = execute query
        //return result > 0 ? true: false;
    }
}