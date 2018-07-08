// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var output=[];
	function childNodeSearch(node) {
		for (var node2 of node.childNodes) {
			if ( node2.classList && node2.classList.contains(className)) {
				output.push(node2);
			}
		}
		if (node2.hasChildNodes()){
			childNodeSearch(node2);
		}
	}
	for (var node of document.documentElement.childNodes) {
		if ( node.classList && node.classList.contains(className)){
			output.push(node);
		}
		if (node.hasChildNodes()){
			childNodeSearch(node);
		}
	}
	return output;
};
