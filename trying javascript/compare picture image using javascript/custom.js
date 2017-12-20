$(document).ready(function(){

var imagebox = [
{
	name:'zaid',
	age:'24'
},
{
	name:'akshay',
	age:'26'
},
{
	name:'uchit',
	age:'26'
},
{
	name:'kranti',
	age:'24'
}
]

var indexNum = 0;

var indexNum2 = 0;

// var result = 'Name:-' + imagebox[indexNum].name +'</br>'+'age:-' + imagebox[indexNum].age;
var result = '';
var result2 = '';

document.getElementById('divResult').addEventListener('click', function(){
// console.log(result)
   result = 'Name:-' + imagebox[indexNum].name +'</br>'+'age:-' + imagebox[indexNum].age;
    indexNum++;
   // $('#divResulttwo').html(result);

    if( indexNum > 4){
    	alert('')
    	// result = '';
    	// var zaid = '';
    	// $('#divResulttwo').html(zaid);
    }

   else{
	   $('#divResulttwo').html(result);
     }
   // indexNum++;
    console.log('indexNum',indexNum)
  

});

document.getElementById('divResulttwo').addEventListener('click', function(){
result2 = 'Name:-' + imagebox[indexNum2].name +'</br>'+'age:-' + imagebox[indexNum2].age;
   $('#divResult').html(result2);
    indexNum2++;
    // if(indexNum2 > 3){
    
    // 	$('#divResult').html('');
    // }
    console.log('indexNum2',indexNum2)
});





});//main ending