var d,m,y;

function getDateFunction(date){
	d = Number(date.value);
}
function getMonthFunction(month){
	m = Number(month.value);
	if(m==4 || m==6 || m==9 || m==11 ){
		if(d>=31){
			alert("Invalid Date");
		}
	}
}
function getYearFunction(year){
	y = Number(year.value);

	if(y<1000){
		alert("Invalid Year");
		year.value="";
	}
	else{
		y = Number(year.value);
	}


}
function finalFunction(){
	
	var day;
	var now = new Date();
	now.setDate(d);
	now.setMonth(m-1);
	now.setFullYear(y);
	var x = now.getDay();
	
	switch(x){
		case 0:day="Sunday";
			   break;
		case 1:day="Monday";
			   break;
		case 2:day="Tuesday";
			   break;
		case 3:day="Wednesday";
			   break;
		case 4:day="Thurday";
			   break;
		case 5:day="Friday";
			   break;
		case 6:day="Saturday";
			   break;
	}
	if(m==2){
		if(d<=28){
			alert(d+"/"+(m)+"/"+y+" is "+day);
		}
		else if (d==29 && y%4==0){
			alert(d+"/"+(m)+"/"+y+" is "+day);
		}
		else{
			alert("Invalid Date");
		}
	}
	else{
		alert(d+"/"+(m)+"/"+y+" is "+day);
	}
	}
