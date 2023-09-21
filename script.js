//your code here!
const ol = document.getElementById("infi-list");
let i = 1
for(i;i<=10;i++){
	const li = document.createElement("li");
	li.innerText = `Item ${i}`;
	ol.append(li);
}

ol.addEventListener('scroll', function () {
	if (ol.scrollTop + ol.clientHeight >= ol.scrollHeight) {
		addListItem();
	}
});

function addListItem() {
	const newItem1 = document.createElement('li');
	const newItem2 = document.createElement('li');
    newItem1.textContent = `Item ${i}`
	i++;
	newItem2.textContent = `Item ${i}`
	i++;
    ol.appendChild(newItem1);
	ol.appendChild(newItem2);
}