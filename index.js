window.NutrientViewer.load({
  container: "#nutrient",
  document: "document.pdf"
})
.then(instance => {
  console.log("Nutrient loaded", instance);
})
.catch(error => {
  console.error(error.message);
});