function addEntry(){
  var entry = document.createElement("li");
  var dateEntry = document.createElement("div");
  dateEntry.className = "listDiv";
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getYear();
  var hour = date.getHours();
  var min = date.getMinutes();
  var time = day + "/" + month + "/" + year + " " + hour + ":" + min;
  var timeText = document.createTextNode(time);
  dateEntry.appendChild(timeText);
  entry.appendChild(dateEntry);
  var input = document.getElementById("inputTask").value;
  var txt = document.createTextNode(input);
  entry.appendChild(txt);
  if(input == ""){
    alert("Please enter something!")
  }else{
    document.getElementById("entries").appendChild(entry);
  }
  document.getElementById("inputTask").value = "";

  var removeBtn = document.createElement("button");
  var btnText = document.createTextNode("Remove");
  removeBtn.appendChild(btnText);
  entry.appendChild(removeBtn);

  removeBtn.className = "remove"
  var remove = document.getElementsByClassName("remove");
   for(var i=0;i<remove.length;i++){
    remove[i].onclick = function(){
    this.parentElement.remove();
    
    }
  }

}