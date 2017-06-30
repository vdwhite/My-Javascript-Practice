$("#add").on("click",function(){
    $("ul").append("<li id='item'> "+$("#itemName").val()+"</li>");
    $("#itemName").val("");
});


$("#generate").on("click", function(){
  var str=
  "<p>Hi "
  +$("#receiver").val()
  +",<br/>"
  +"Our records show that the following item(s) are overdue:<br/></p>"
  +listStr()
  +footerStr();
  var add = mail();
  console.log(add);
  $("#mail").html(str);
  $("#address").html(add);
});

function listStr(){
    var listStr = "";
    $("ul li").each(function(i){
      listStr=  listStr+ "<b>"+$(this).text()+"</b><br/>";
    });
    return listStr;
}

function footerStr(){
  var footer=
  "<p>Please return the item(s) to the Mills International Center"
  +" as soon as possible or reply to this email to renew the item(s)."
  +"<br/>Thank you for using our lending library!<br/>"
  +"<br/>"+$("#name").val()+"<br/>"
  +"Mills International Center <br/>"
  +"M102 Erb Memorial Union<br/>"
  +"mills@uoregon.edu<br/>"
  +"(541) 346-0887</p>";
  return footer;
}

function mail(){
  var mailAdd = "<a href='mailto:" + $("#email").val()+"'>"+$("#email").val()+"</a>";
  return mailAdd;
}
