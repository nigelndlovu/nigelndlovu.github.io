// 1)
let selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);

// 2)
let newOption = new Option("Classic", "classic");
genres.append(newOption);

// 3)
newOption.selected = true;
