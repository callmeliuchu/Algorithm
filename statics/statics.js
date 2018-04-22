arrStr = `909 1086 1120 999 1320 1091 1071 1081 1130 1336 967 1572 825
914 992 1232 950 775 1203 1025 1096 808 1224 1044 875 1164 971 950 866 738`

const numInArr = (arr,kind='min')=>{
	let flag = true;
	let return_num=-1;
	for(let val of arr){
		if(flag){
			return_num = val;
			flag = false;
		}else{
			if(kind=='min'){
				if(return_num>val){
					return_num = val;
				}
			}else if(kind=='max'){
				if(return_num<val){
					return_num=val;
				}
			}else{
				console.info('not support '+kind+' now');
				return return_num;
			}
		}
	}
	return return_num;
}

const maxInArr = (arr) => {
	return numInArr(arr,'max');
}

const minInArr = (arr) => {
	return numInArr(arr,'min');
}

const print = (obj)=>{
	console.log(obj)
}

const initArr = (n,val)=>{
	let arr = [];
	for(let i=0;i<n;i++){
		arr.push(val);
	}
	return arr;
}
const sumOfArr = (arr) => {
	let returnVal = 0;
	for(let val of arr){
		returnVal = returnVal + val;
	}
	return returnVal;
} 
let inputArr = arrStr.split(/\s+|\n/).map((val)=>{return parseFloat(val)})
let splitN = 6

const generateArr = (inputArr,splitN) => {
	let minVal = minInArr(inputArr)
	let maxVal = maxInArr(inputArr)
	let rangeVal = maxVal - minVal;
	let span = Math.ceil(rangeVal/splitN)
	let startVal = minVal - 2
	span = span + 1
	let outputArr = initArr(splitN,0)
	for(let i=0;i<inputArr.length;i++){
		let index = Math.floor((inputArr[i] - startVal)/span);
		outputArr[index] ++;
	}
	let sum = sumOfArr(outputArr)
	return  outputArr.map((val)=>{return val/sum})
}
outputArr = generateArr(inputArr,splitN)
print(outputArr)