$(document).ready(function(){
var URL =  'http://localhost:3000/todos';
var source = $("#blog-container").html();
var template = Handlebars.compile(source);

var $listgroup = $(".listgroup");

$(".post-button").on("click", function(){
 var titletext =$('.title-input-tag').val();
 var descriptiontext =$('.description-input-tag').val();
 // console.log(titletext)
 // console.log(descriptiontext)
if (titletext.length == 0 && descriptiontext.length == 0){
 alert("plz fill blank field")
}
else{
	var setnewblog = template({
         title:titletext,
         description:descriptiontext
	});
	$listgroup.append(setnewblog);
}
$('.title-input-tag').val('');
$('.description-input-tag').val('');

$.ajax({
	url:URL,
	method:'POST',
	data:{
		title:titletext,
		description:descriptiontext
	}
})

});//END OF POST EVENT

$.ajax({
	url:URL,
	method:'GET'
}).done(function(data){
 // console.log(data)
 data.forEach(function(element){
     // console.log(element)
     getsettedblog = template({
         title:element.title,
         description:element.description,
         id:element.id
     });
     $listgroup.append(getsettedblog);
 });

}).fail(function(err){
// err
});

});//MAIN ENDING