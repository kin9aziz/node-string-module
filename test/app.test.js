var expect = require('expect');
var functions = require('../app');

describe('FirstLetterUpper', () => {
	it('should accept a string', () => {
		var str = 'this is a test';
		var strRes = functions.FirstLetterUpper(str);

		expect(strRes).toBeA('string');
	});

	it('should match the result of the function', () =>{
		var str = 'this is another test';
		var strResult = functions.FirstLetterUpper(str);

		expect(strResult).toMatch('This Is Another Test');
	})
});

describe('RepeatString', () => {
	it('should repeat the string', () => {
		var str = 'this';
		var strRes = functions.RepeatString(str, 3);

		expect(strRes).toBe('thisthisthis');
	});
});

describe('StringEnding', () => {
	it('should return true if the string ends with the value provided', () => {
		var string = 'successfull';
		var stringResult = functions.StringEnding(string, 'l');

		expect(stringResult).toBe(true);
	});

	it('should return false if the string does not ends with the value provided', () => {
		var string = 'successfull';
		var stringResult = functions.StringEnding(string, 'u');

		expect(stringResult).toBe(false);
	})
});

describe('ReverseString', () => {
	it('should reverse the string provided', () => {
		var str = functions.ReverseString('testing');

		expect(str).toBe('gnitset');
	})
});

describe('Longest', () => {
	it('should return the longest string', () => {
		var str = functions.Longest('this a very wonderful test');

		var res = str[0];

		expect(res).toBe('wonderful')
	});

	it('should return the length of the string', () => {
		var str = functions.Longest('this a very wonderful test');

		var res = str[1];

		expect(res).toBe(9)
	})
})