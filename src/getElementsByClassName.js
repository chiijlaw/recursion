// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var output;
  var elementClasses = document.body.classList;
  console.log(elementClasses);
  var getByClassName = function (list,target) {
  	if (elementClasses.length === 0){
  		return output;
  	}
  };
  getByClassName(elementClasses,className);
};
