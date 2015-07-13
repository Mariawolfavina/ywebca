// Student Workspace
Fizz.buzz = function () {

var num = 1;
    
	while (num <= 100) {

		if (num % 3 == 0 && num % 5 == 0) {
			conso le.log("FizzBuzz");
		}

		else if (num % 3 == 0) {
			console.log("Fizz");
		}

		else if (num % 5 == 0) {
			console.log("Buzz");
		}

		else {
			console.log(num);
        }
        
		num +=1 ;

	}
};