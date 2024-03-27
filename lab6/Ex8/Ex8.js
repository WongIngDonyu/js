function addItem() {
    var newText = document.getElementById("newItemText").value;
    var newValue = document.getElementById("newItemValue").value;
    var menu = document.getElementById("menu");
    var option = document.createElement("option");
    option.text = newText;
    option.value = newValue;
    menu.add(option);
}