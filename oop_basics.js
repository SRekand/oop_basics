function Person(first, last, age, gender, interests) {
    this.name = {
        first : 'Bob',
        last : 'Smith'
    };
    this.age = 31;
    this.gender = 'male';
    this.interests = 'music', 'skiing';
    this.bio = function() {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);