

// one
var getName = function (objectNames) {
	return objectNames['na-me']
};

var nameObj = { 'na-me': 'Luisa', age: 25 };
console.log(getName(nameObj));



// two
var totalLetters = function(stringLet){
	console.log(stringLet.join('').length);
};

var string1 = ['javascript', 'is', 'awesome'];
var string2 = ['what', 'happened', 'to', 'my', 'function'];
totalLetters(string2);



// three
var cityObj = {};
var keyValue = function(k, city){
		cityObj[k] = city;
		console.log(cityObj);
};

keyValue('park', 'cheeseman');

// four
var negativeIndex = function(arr, num){
	var ind = arr.length+num;
	console.log(arr[ind]);
}
negativeIndex(['jerry', 'sarah', 'sally'], -2);


// six
var printObject = function(obeejay){
	for (var i in obeejay) {
		console.log(i + " is " + obeejay[i]);
	}
}

var jectO= { a: 10, b: 20, c: 30 };
printObject(jectO);

// seven
var vowArr = []


var vowels = function(word){

	var splitWord = word.split('');
	console.log(splitWord)

	for (var i=0; i<splitWord.length; i++){
		
		if (splitWord[i]==='a' || splitWord[i]==='e' || splitWord[i]==='i' || splitWord[i]==='o' || splitWord[i]==='u'){
			vowArr.push(splitWord[i])
			
		};
		
	};
	// console.log(vowArr)
	return vowArr
};
console.log(vowels('conversation'));



// five
var removeM = function(word){
	var result = word.split('').filter(function(elem){
			return elem!=='m';
	});
	return result.join('');
};
console.log(removeM('mammalian'));



// eight
var twins = function(twArr) {
	var z = 0;

	for(var i=0; i<twArr.length; i+=2){
		if(twArr[i]===twArr[i+1]){
			
			z++;
		};

	};

	console.log('zee', z);
	console.log('eye',i);
	

	if(z===i/2){return true}
	else {return false};
}
console.log(twins(['a', 'a', 'b', 'b','c','c','e','h']));

// nine

var or = function(arrTrue){
	var j = 0
	var output = '';
	var mapOr = arrTrue.map(function(elem){
		if(elem){
			output = elem;
			return ;
		}
	});
	return !!output;
};

console.log(or([0, 0, 1, 0, 0, 0, 0, 0]));

// ten





























