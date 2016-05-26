const portmantize = function(f, s) {
	var aF = f.toLowerCase().split(''), aS = s.toLowerCase().split('');
  var commonLetters = [];
  var cCL = [];
  var word = "";
  var vowels = ["a", "e", "i", "o", "u"];
	for (var i = 0; i < aF.length; i++) {
  	for (var j = 0; j < aS.length; j++) {
    	if (aF[i] === aS[j]) {
      	commonLetters.push(aF[i]);
      	if (aF[i+1] === aS[j+1]) {
      		cCL.push(aF[i], aF[i+1]);
        }
      }
    }
  }
  if (cCL.length > 1) {
  	var lF = cCL[0], lS = cCL[1];
  	var fS = aF.slice(0, aF.indexOf(lF)).join('');
    var sS = aS.slice(aS.indexOf(lF)).join('');
		return word = fS + sS;
  } else if (commonLetters.length > 1 && commonLetters[0] != commonLetters[1]) {
  	for (var i = 0; i < vowels.length; i++) {
    	for (var j = 0; j < aF.length; j++) {
	    	if (commonLetters[j] === vowels[i]) {
  	      var cL = commonLetters[j];
   				var fS = aF.slice(0, aF.indexOf(cL)).join('');
    			var sS = aS.slice(aS.indexOf(cL)).join('');
	  			return word = fS + sS;
        }
      }
    }
  } else {
  	var vF
    var vS
  	for (var i = 0; i < vowels.length; i++) {
    	for (var j = 0; j < aF.length; j++) {
      	if (aF[j] === vowels[i] && j !== 0) {
        	vF = aF[j];
        	for (var x = 0; x < vowels.length; x++) {
          	for (var y = 0; y < aS.length; y++) {
            	if (vowels[x] === aS[y]) {
              	vS = aS[y];
              }
            }
          }
        }
      }
    }
    var fS = aF.slice(0, aF.indexOf(vF)).join('');
    var sS = aS.slice(aS.indexOf(vS)).join('');
    return word = fS + sS;
  }
}

export default portmantize
