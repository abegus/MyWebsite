
function risk(height,weight,gender){
    var ret = false;
    var bmi = weight / ((height/100) * (height/100));
    if(gender == 'M'){
        if( bmi > 31.9 || bmi < 20.4){
			ret = true;
		}
    }
    else{
		if( bmi > 27.6 || bmi < 19.5){
			ret = true;
		}
	}
	return ret;
}





function roman(num){

	if( typeof num === 'string'){
		var eyes = 0;
		var vorx = 0;
		var ret = 0;
		for( var i=0; i < num.length; i+=1){
			if( num.charAt(i) === 'I'){
				eyes += 1;
			}
			else if( num.charAt(i) ==='V'){
				vorx +=5;
			}
			else if( num.charAt(i) ==='X'){
				vorx +=10;
			}
			else{
			//?
				return undefined;
			}
		}
		//deciding whether to subtract the i's or not
		if(num.charAt(0) ==='I' && vorx > 0)
		{
			ret = vorx - eyes;
		}
		else{
			ret = vorx + eyes;
		}
		if( ret > 10){
			return undefined;
		}
		return ret;
	}
	else if( typeof num === 'number'){
		if( num > 10 || num < 1){
			return undefined;
		}
		ret = '';
		if( num === 10){
			ret += 'X';
			num -= 10;
		}
		if( num >= 9){
			ret += 'IX';
			num -= 10;
		}
		if( num >= 5){
			ret += 'V';
			num -= 5;
		}
		if(num >= 4){
			ret += 'IV';
			num -= 4;
		}
		while( num >= 1){
			ret += 'I';
			num -= 1;
		}
		return ret;
	}
	else{
		return undefined;
	}
}





function lettersThatFollow(text,ch){
	var ret = "";
	for(var i = 0 ; i < text.length; i +=1){
		if( text.charAt(i) === ch){
			//checking to see if in ret yet      -1 should be a no?
			if( ret.indexOf(text.charAt(i+1)) === -1){
				//will += work?
				ret += text.charAt(i+1);
			}
		}
	}
	return ret;
}

console.log(lettersThatFollow("I nearly laughed when the fat man sat on his hat",""));





function props(list, propertyName){
	var ret = [];
	for( var i=0; i < list.length; i +=1){
		ret.push(list[i][propertyName]);
	}
	return ret;
}

var testing = [{a:3,b:'Cat',c:true},{a:12,b:'Hat',c:false},{cat:3,hat:'3',rat:false}];
console.log(props(testing,'cat'));





function toHTML( list, isOrdered){
	var ret = '<ul>';
	var end = '</ul>';
	if(isOrdered){
		ret = '<ol>';
		end = '</ol>';
	}
	for( var i = 0; i < list.length; i +=1){
	    ret += '<li>'
	    if(typeof list[i] === 'object'){
	        ret += toHTML(list[i],isOrdered);
	    }
	    else{
	      ret += list[i];
	    }
	    ret += '</li>'
	}
	ret += end;
	return ret;
}

console.log(toHTML([1,2,[3,4,5]],true));





function repeat(text,n){
    if(n <= 0){
        return "";
    }
    var ret = "";
    for(var i =0; i < n; i+=1){
        ret += text;   
    }
    return ret;
}

console.log(repeat('alf',-5));





function count(text,phrase){
	var ret = 0;
	if( phrase === "")
	{
		return text.length;
	}
	while( text.indexOf(phrase) != -1){
		text = text.substr(text.indexOf(phrase)+1,text.length-1);
		ret +=1;
	}
	return ret;
}


console.log(count("alfalfa",""));



function partition(list,partitioner){
    var retlist = {};
    for(var i = 0; i < list.length; i+=1){
        var result = partitioner(list[i]);
        if(result in retlist){
            retlist[result].push(list[i]);
        }
        else{
            retlist[result] = [list[i]];
        }
    }
    return retlist;
}

console.log(partition([1.3,5.1,1.1,4.3,5.5],Math.floor));





function eachOne(list){
	var ret = true;
	for( var i = 0; i < list.length; i+=1){
		ret = list[i] && true;
		if( ret !== true){
			return ret;
		}
	}
	return ret;
}

console.log(eachOne([1,2,3,4]));





function justOnce(f){
    var global = undefined;
    var test = function(){
        if( global === undefined){
            global = arguments;
        }
        return f.apply(null,global);
    }
    return test;
}