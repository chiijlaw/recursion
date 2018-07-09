// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var output;
	var stringFormat = function (element) {
		var result;
		if (typeof element == "boolean" || typeof element == "number" ){
		result = element.toString();
		}  else if (element == undefined) {
			result = "undefined";
		} else if (typeof element == "string") {
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
			if (!Array.isArray(i)){
				inside.push(stringFormat(i));
			} else if (Array.isArray(i)){
				inside.push(stringifyJSON(i));
			}
		}
		if (!!inside){
			output = '['+inside+']';
		}
	} else if (typeof obj == "object" && !Array.isArray(obj)) {
		if (obj == null) {
			output = "null";
		} else {
			output = "{}";
			var inside = {};
			if (Object.entries(inside).length > 0){
				output = '{'+inside+'}';
			}
		}
	}
	return output;
};
