/*
Developed by: Waseem Ahmed and Aslam Hasan Khan
Company: Sofyrus Technology
Date: 6 Sept 2016
*/
function numberToWord(n){

	if(isNaN(n) || n>999999999999999){
		return "Not a valid Range or Number"
	}
	var x = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var y = ["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];
    
    var trillion = Math.floor(n/10000000000000);
    n=n-trillion*10000000000000;
    var billion = Math.floor(n/1000000000);
    n=n-billion*1000000000;
    var million = Math.floor(n/1000000);
    n=n-million*1000000;
    var thousand = Math.floor(n/1000);
    n=n-thousand*1000;
    var hundred = Math.floor(n/100);
    n=n-hundred*100;
    var tens = Math.floor(n/10);
    n=n-tens*10;
    var ones = n;

    var result="";

    if(trillion){
    	result = result + numberToWord(trillion) +" trillion ";
    }
    if(billion){
    	result = result + numberToWord(billion) +" billion ";
    }

    if(million){
    	result = result + numberToWord(million) +" million ";
    }
    if(thousand){
    	result = result + numberToWord(thousand) +" thousand ";
    }
    if(hundred){
    	result = result + numberToWord(hundred) +" Hundred ";
    }
    if(tens && tens<2){
    	
    		result = result + x[tens*10+ones];
    }
    else
    {	
    	
    	result = result + y[tens] ;
    	if(tens && ones){
    		result=result+"-"
    	}
    	if(ones)
    	result = result+""+ x[ones];
    }
    if(result.length<=1){
    	result="zero";
    }

 return result;

}

