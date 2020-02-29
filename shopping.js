
<!DOCTYPE html>
<html>
<body>

  <tr><td>Name</td></tr>
  <tr><td>Price</td></tr>
  <tr><td>Count</td></tr>

<p id="shoppingList"></p>

<script>
window.onload= function(){

    var name = prompt("What would you like to buy?")
    var price = prompt("What is its price?");
    var count = prompt("How many do you want?");

    if (name + price + count != null) {
      document.getElementById("shoppingList").innerHTML =
      "<tr><td>" + name +  "</td> <td>" + price +"</td> <td>"+ count + '</td></tr>'+"Your total is" + price * count;
  }
}
</script>

</body>
</html>
