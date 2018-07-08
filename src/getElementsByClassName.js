// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var output=[];
	//if (document.body.classList.contains(className)) {
	//	output.push(document.body);
	//}
	for (var node of document.documentElement.childNodes) {
		if ( node.classList && node.classList.contains(className)){
			output.push(node);
		}
		if (node.hasChildNodes()){
			//for (var i = node.children.length-1;i>=0;i--) {
			for (var node2 of node.childNodes) {
				if ( node2.classList && node2.classList.contains(className)){
					output.push(node2);
				}
			}
		}
	}
	return output;
};
