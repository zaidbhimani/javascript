$(document).ready(function() {
	var URL = "http://localhost:3000/todos";
	var cars = [];
     // var likesincrement = (cars[indexNum].likes += 1);
	// var postimage = $('.post-image').attr('src');
	// var postname = $('.post-name').html();
	// var postcartype = $('.post-cartype').html();
	// var postlikesofcar = $('.post-likes-of-car').html();

	// $.ajax({
	// 	url: URL,
	// 	method: "POST",
	// 	data: {
	// 		image:postimage,
	// 		name:postname,
	// 		carclass:postcartype,
	// 		likes:postlikesofcar
	// 	}
	// });
	$(".add-new-car").on("click", function() {
		// alert()
		var postimage = $(".post-image").val(); 
		var postname = $(".post-name").val();
		var postcartype = $(".post-cartype").val();
		// var number = parseInt("0");
		// console.log(number)

		// console.log(postname)
		// console.log(postcartype)
		$.ajax({
			url: URL,
			method: "POST",
			data: {
				image:postimage,
				name: postname,
				carclass: postcartype,
				likes: 0
			}
		}).done(function(newdata){
            // console.log("newdata",newdata)
            cars.push(newdata)
            $(".post-image").val(''); 
		    $(".post-name").val('');
		    $(".post-cartype").val('');
            // console.log(cars)
		})
	}); //end of adding

	$.ajax({
		url: URL,
		method: "GET"
	})
		.done(function(info) {
			cars = info;
			// var arraydata = info
			// cars.push(info)
		})
		.fail(function() {
			// err
		});

	// console.log(cars);

	// var $div = $('.resultDiv > img');
	var $div = $(".resultDiv > img");

	var result = "";
	var indexNum = -1;
	// var likestorage = 0;
	$(".change").on("click", function() {
		indexNum++;
		
		if (indexNum == cars.length) {
			indexNum = 0;
		}

		$div.attr("src", cars[indexNum].image);

		result =
			"Name:-" +
			cars[indexNum].name +
			"</br>" +
			"carClass:-" +
			cars[indexNum].carclass;
		$("span").html(cars[indexNum].likes);
		$(".resultDiv1").html(result);
	}); //end of change event

	$(".like-button").on("click", function() {

	    cars[indexNum].likes = parseInt(cars[indexNum].likes) +  1;
		var selectedcard = cars[indexNum];
		
		
		var id = selectedcard.id;
		var image = selectedcard.image;
		
		var name = selectedcard.name;
		var carclass = selectedcard.carclass;

		// $("span").html(likesincrement);
		$("span").html(selectedcard.likes);
		
		$.ajax({
			url: URL + "/" + id,
			method: "PUT",
			data: {
				image: image,
				name: name,
				carclass: carclass,
				likes: selectedcard.likes
			}
		});
		
	});//END OF LIKE BUTTON

$('.delete-button').on('click', function(){
     var selectedcard = cars[indexNum];
     // console.log(selectedcard)
     // console.log(indexNum)
	var id = selectedcard.id;
	// console.log(id)
     $.ajax({
			url: URL + "/" + id,
			method: "DELETE"	
		}).done(function(){
			cars.splice(indexNum, 1);

			if (indexNum == cars.length) {
			indexNum = 0;
		    }
		    else{
			indexNum++;	
		    }
			$div.attr("src", cars[indexNum].image);

		result =
			"Name:-" +
			cars[indexNum].name +
			"</br>" +
			"carClass:-" +
			cars[indexNum].carclass;
		$("span").html(cars[indexNum].likes);
		$(".resultDiv1").html(result);

          // console.log(del)

		}).fail(function(){
          //err
		});




});//end of delete button

}); //main ending
