var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};


let User = class {
    sayHi() {
        alert("Привет");
    }
};


var o = {
    log: [],
    get getFullName() {

        return `ddd`;
    },
    set setFullName(value) {
        this.log.push(value)
    }
};


class Phone {
    firmra = 0;
    color = '';
    size = '';
    version = '';

    call()
    {
        console.log('I am calling');
    }

    ring()
    {
        console.log('bring bring');
    }
}

class ClassString {
    length = 0;

    replace()
    {

    }
}

let str = new ClassString('sadasdsd');
str.replace();




