var Person = function(name, age) {
    name = name;
    age = age;
    
    this.getName = function() {
        return name;
    };

    this.getAge = function() {
        return age;
    };

    this.addYear = function() {
        age++;
    };
};