// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var output=[];
  if (document.body.classList.contains(className)) {
  	output.push(document.body);
  }
  for (var node of document.body.childNodes) {
  	if ( node.classList && node.classList.contains(className)){
  		output.push(node);
  	}
  }
  //console.log(elementClasses);
  //var getByClassName = function (list,target) {
  	//var comparison;
  	//if (elementClasses.length === 0){
  	//	return output;
  	//}
  	//comparison = list.pop();
  	//if (comparison == target){
  	//	output.push(comparison);
  	//}
  	//getByClassName(list,target);
  //};
  //getByClassName(elementClasses,className);
  //console.log(output);
  return output;
};
