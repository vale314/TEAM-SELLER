class Meal {
  constructor(
    id,
    categoryIds,
    title,
    estandar,
    imageUrl,
    precio,
    ingredients,
    descripcion,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.descripcion = descripcion;
    this.precio = precio;
    this.estandar = estandar;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
