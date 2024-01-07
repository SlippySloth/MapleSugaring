

var sapvolume ;
var syrupvolume ;
var concentration ;


function calcSugarContent(){
	sapvolume = document.getElementById('startquant').value ;
	syrupvolume = document.getElementById('finishquant').value ;
	
	//check there is valid input for the numbers
	if (checkValidInputs() == false) {
		console.log("invalid entry");
		return; //exits the function
	} 
	
	concentration = 0.67 * 16 * syrupvolume / sapvolume ; //67% final sugar and 16 cups per gallon
	concentration = concentration.toFixed(1); //round to 1 decimal place
	
	
	//write the result to the document. Add it to the results section. 
	const x = document.createElement("p");
	x.innerHTML = "If "+sapvolume+" gallons of sap yielded "+syrupvolume+" cups of syrup, then your original sugar content was "+concentration+"%";
	x.className = "calcResult"
	document.getElementById("results").appendChild(x);
}

function checkValidInputs(){
	//checks that the sap and syrup input values are numbers
	sapvolume = document.getElementById('startquant').value ;
	syrupvolume = document.getElementById('finishquant').value ;
	
	if (isNumber(sapvolume) && isNumber(syrupvolume)) {
		return true;
	} else if (isNumber(sapvolume)) { 
		alert("Invalid input for syrup volume");
		return false;
	} else if (isNumber(syrupvolume)) { 
		alert("Invalid input for sap volume");
		return false;
	} else {
		alert("Invalid input for syrup and sap volume");
		return false;
	}
}

function isNumber(value) {
	value = Number(value);
	if (isNaN(value)) {
		console.log(value)
		console.log("isNumber is false")
		return false ;
	} else if (!value) {
		console.log(value)
		console.log("isNumber is empty")
		return false
	} else {
		console.log(value)
		console.log("isNumber is true")
		return true ;
	}
}






function pressD(elem){
	document.getElementById('spanD').innerHTML = 'Ahhh you found me!';
	document.getElementById('spanD').innerHTML = elem.innerHTML;
	//el.style.background = #CCCCCC;
}

function hidediv(){
	/*
	document.getElementById('div1').innerHTML = 'changed it here';
	*/
	x=document.getElementById("div1");
	x.style.display="none";
	console.log("Hid div");
	
	//Option 2: 
	//x.className="closed;" //This would need the class closed to be created I think
	
}
