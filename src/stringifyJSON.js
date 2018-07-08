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
		var inside = obj.join();
		output = '['+inside+']';
	}
	return output;
};
