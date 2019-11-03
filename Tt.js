
document.getElementById("abc").addEventListener("click", function(){
  var table = document.getElementById("myTable");
  var row= document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");    
  var td4 = document.createElement("td");
  td1.innerHTML = document.getElementById("text1").value;
  td2.innerHTML  = document.getElementById("text2").value;
  td3.innerHTML  = document.getElementById("text3").value;
  td4.innerHTML  = document.getElementById("text4").value;
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  myTable.children[0].appendChild(row);
});
