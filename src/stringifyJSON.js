// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var output;
	if (typeof obj == "boolean" || typeof obj == "number" ){
		output = obj.toString();
	} else if (obj == null) {
		output = "null";
	} else if (obj == undefined) {
		output = "undefined";
	} else if (typeof obj == "string") {
		output = '\"'+obj+'\"';
	} else if (Array.isArray(obj)) {
		output = "[]";
		var inside = [];
		for (var i of obj){
			if (typeof i == "boolean" || typeof i == "number" ){
				inside.push(i.toString());
			} else if (i == null) {
				inside.push("null");
			} else if (i == undefined) {
				inside.push("undefined");
			} else if (typeof i == "string") {
				inside.push('\"'+i+'\"');
			} else if (Array.isArray(i)){
				recursiveArray(i);
			}
		}
		if (!!inside){
			output = '['+inside+']';
		}
	}
	return output;
};
