$("#add").on("click",function(){
  if($("ul").length>1){
    $("ul").append("<li id='item'> "+$("#itemName").val()+"</li>");
  }
  else{
    var name = $("#itemName");
    console.log(name.val());
    $("#item").text(name.val());
  }
  $("#itemName").val("");
});


$("#generate").on("click", function(){
  var str="<p>Hi "
  +$("#receiver").val()
  +",<br/>"
  +"Our records show that the following item(s) are overdue:<br/><br/>"
  +"<b>"+ $("#item").text() + "</b><br/><br/>"
  +"Please return the item(s) to the Mills International Center"
  +" as soon as possible or reply to this email to renew the item(s)."
  +"<br/>Thank you for using our lending library!<br/>"
  +"<br/>"+$("#name").val()+"<br/>"
  +"Mills International Center <br/>"
  +"M102 Erb Memorial Union<br/>"
  +"mills@uoregon.edu<br/>"
  +"(541) 346-0887</p>";
  $("#mail").html(str);
});

function itemList(list){
  $("")
}
