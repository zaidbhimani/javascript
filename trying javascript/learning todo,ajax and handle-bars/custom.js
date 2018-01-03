$(document).ready(function(){

    var $addTodo = $('#addTodo');
    var $listgroup = $('.list-group');
    var URL = "http://localhost:3000/todos";

	//Template
	var source = $("#listitemtemplate").html();
	var template = Handlebars.compile(source);

//ADD TO DO
    $addTodo.on('submit', function(evt){
       evt.preventDefault();
      var todo = $addTodo.find('input').val();
      // console.log(data)
     // console.log(listli)
    $addTodo.find('input').val('');

    $.ajax({
      url: URL,
      method: "POST",
      data:{
        text:todo,
        completed:false
      }
    }).done(function(todo){
      // console.log(newtodo)
     var listli =  template({
        text:todo.text
      });
    $listgroup.append(listli);
    }).fail(function(){
      //err
    });
  });//end of submit event
   
    $.ajax({
      url: URL,
      method: "GET",
    }).done(function(data){
      data.forEach(function(dataitem){
        // console.log(dataitem)
      var displaystoredtodo = template({
          text:dataitem.text,
          id:dataitem.id
        });
       
    $listgroup.append(displaystoredtodo)
      });
    }).fail(function(){
       // err
    });

    $('.list-group').on('click','.delete',function(evt){
      
       var listitem = $(evt.target).closest('.list-item');
       var id = listitem.attr('id');
       // console.log(id)
       listitem.remove();
       $.ajax({
      url: URL +'/' + id,
      method: "DELETE",
    })
    });//end of delete event

    var editsource = $("#newlistitemtemplate").html();
  var edittemplate = Handlebars.compile(editsource);
    
$('.list-group').on('click','.edit',function(evt){
    
       var listitem = $(evt.target).closest('.content');
       // var id = listitem.attr('id');
       // console.log(id)
       listitem.find('.list-item').hide();
        
      var oldtext = listitem.find('span').html();
         // console.log(oldtext)
         var setvalue = edittemplate({
           text:oldtext
         })
        // console.log(setvalue)
        listitem.append(setvalue);

      
});//end of edit event
      $('.list-group').on('click','.save',function(evt){
         var listitem = $(evt.target).closest('.content');
         var newlistitem = $(evt.target).closest('.new-list-item');
       // var id = listitem.attr('id');
       // console.log(id)
         var newtext = newlistitem.find('input').val();
        // console.log(zaid)
         
         newlistitem.remove();
         
         var setnewtextvalue = listitem.find('span').html(newtext);
         
         var setnewvalue = template({
           text:setnewtextvalue
         })

         // console.log(setnewvalue)

      listitem.find('.list-item').show();
      //  var catchid = $(evt.target).closest('.list-item');
      var id = listitem.find('.list-item').attr('id');
      // var id = catchid.attr('id');
      // console.log(id)

       $.ajax({
      url: URL +'/' + id,
      method: "PUT",
      data:{
        text:newtext
      }
         });

});//end of save event

$('.list-group').on('click','span',function(evt){
// console.log($(evt.target))
// $(evt.target).addClass('active');

// if($(evt.target).hasClass('active')){
//   $(evt.target).removeClass('active');
//  }
// else{
//   $(evt.target).addClass('active');
// }

  $(evt.target).toggleClass('active');
  // $.ajax({
  //     url: URL +'/' + id,
  //     method: "PUT",
  //     data:{
  //       status:
  //     }
  //        });

});


});//main ending