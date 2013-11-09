///<reference path="~/src/Person.js"/>
///<reference path="~/lib/jasmine-1.3.0/jasmine.js"/>

describe('Person', function () {
    var person = null;
    var expectedName = null;
    var expectedAge = null;
    
    
    beforeEach(function () {
        expectedName = "Tom";
        expectedAge = 19;
        person = new Person(expectedName, expectedAge);
        
        /*this.addMatchers({
            customMatcher: function () {
                return true;
            }
        });*/
    });
    
    it('GetName_WithoutArguments_ShouldBeEqualExpectedName', function () {
        
        var actualName = person.getName();
        
        expect(expectedName).toEqual(actualName);
    });
    
    
    it('GetAge_WithoutArguments_ShouldBeEqualExpectedAge', function () {
        
        var actualAge = person.getAge();
        
        expect(expectedAge).toEqual(actualAge);
    });


    it('GetName_WithoutArguments_ShouldtoBeDefined', function () {
        //expect(person.getName).toBeDefined();
    });

    it('CrazyMethod_WithoutArguments_ShouldtoBeUndefined', function () {
        
    });

    it('toBeTruthy', function () {
        //expect(true).toBeTruthy();
    });
    
    it('toBeFalsy', function () {
        /*expect(false).toBeFalsy();*/
    });
    
    it('toContain', function () {
        /*expect([1,2,3]).toContain(1);
        expect("one two three").toContain("two");*/
    });

    it('toThrow', function() {
        /*var fun = function() {
            person.crazyMethod();
        };

        expect(fun).toThrow();*/
    });
    
    it('addMatchers', function() {
        //expect("some value").customMatcher();
    });
    
});