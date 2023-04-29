const listOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const quantityOfItems = item.querySelectorAll("ul li");
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${quantityOfItems.length}`);
});
