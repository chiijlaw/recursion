// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var output;
	var stringFormat = function (element) {
		var result;
		if (typeof element == "boolean" || typeof element == "number" ){
		result = element.toString();
		}  else if (typeof element == "string") {
			result = '\"'+element+'\"';
		}
		return result;
	};
	if (!Array.isArray(obj) && typeof obj != "object") {
		output = stringFormat(obj);
	} else if (Array.isArray(obj)) {
		output = "[]";
		var inside = [];
		for (var i of obj){
			if (!Array.isArray(i) && typeof i != "object"){
				inside.push(stringFormat(i));
			} else {
				inside.push(stringifyJSON(i));
			}
		}
			output = '['+inside+']';
	} else if (typeof obj == "object" && !Array.isArray(obj)) {
		if (obj == null) {
			output = "null";
		} else {
			output = "{}";
			var inside = [];
			var pairs = Object.entries(obj);
			for( var i = 0; i <= pairs.length-1; i++) {
				if (pairs[i].includes(undefined) || typeof pairs[i][0] == "function" || typeof pairs[i][1] == "function") {
					i+=0;
				} else {
					inside.push(stringifyJSON(pairs[i][0])+':'+stringifyJSON(pairs[i][1]));
				}
			}
			if (!!inside && Object.entries(inside).length > 0){
				output = '{'+inside+'}';
			}
		}
	}
	return output;
};
