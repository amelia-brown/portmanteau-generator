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

export const colorsObj = {
  pink: {
    light: '#E91E63',
    dark: '#880E4F',
  },
  purple: {
    light: '#673AB7',
    dark: '#311B92',
  },
  blue: {
    light: '#2196F3',
    dark: '#0D47A1',
  },
  green: {
    light: '#BBC34A',
    dark: '#33691E',
  },
  yellow: {
    light: '#FFEB3B',
    dark: '#F57f17',
  },
  red: {
    light: '#F44336',
    dark: '#B71C1C',
  }
}


