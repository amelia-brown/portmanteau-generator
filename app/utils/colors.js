export const colorsArray = ['pink', 'red', 'purple', 'blue', 'green', 'yellow'];
export const selectColors = function(arr) {
  var color1 = arr[Math.round(Math.random()*5)];
  var arr2 = arr.filter(function(item){
  	if (item !== color1){
    	return true;
    }
    return false;
  });
  var color2 = arr2[Math.round(Math.random()*4)];
  return [color1, color2];
};

