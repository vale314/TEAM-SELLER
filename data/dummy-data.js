import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
  new Category("c1", "Italian", "#f5428d"),
  new Category("c2", "Quick & Easy", "#f54242"),
  new Category("c3", "Hamburgers", "#f5a442"),
  new Category("c4", "German", "#f5d142"),
  new Category("c5", "Light & Lovely", "#368dff"),
  new Category("c6", "Exotic", "#41d95d"),
  new Category("c7", "Breakfast", "#9eecff"),
  new Category("c8", "Asian", "#b9ffb0"),
  new Category("c9", "French", "#ffc7ff"),
  new Category("c10", "Summer", "#47fced"),
];

export const MEALS = [
  new Meal(
    "m1",
    ["c1", "c2"],
    "Spaghetti with Tomato Sauce",
    "Cheap",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    20,
    [
      "4 Tomatoes",
      "1 Tablespoon of Olive Oil",
      "1 Onion",
      "250g Spaghetti",
      "Spices",
      "Cheese (optional)",
    ],
    [
      `Sed nisl purus, dapibus quis suscipit et, tempor efficitur lorem. Proin efficitur tristique metus, lobortis ultrices ligula tempus quis. Nulla sodales diam gravidafeugiat eros non, vehicula ex. Donec facilisis tellus tellus, nec dapibus libero porttitor pretium. Vestibulum sit amet turpis velit. Donec ante nunc, ultrices dignissim eleifend quis, aliquet sed ligula. Praesent sit amet risus ex. Cras sodales, tellus vel euismod ultrices, mi sem consequat est, nec pellentesque metus turpis quis purus. Pellentesque id urna non orci ornare eleifend. Vestibulum pulvinarurna sed mauris ornare faucibus. Curabitur sed nunc vitae ligula lobortis suscipit quis ac magna. Nullam porttitor sagittis mi id dictum. In hac habitasse platea dictumst`,
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    "m2",
    ["c2"],
    "Toast Hawaii",
    "Cheap",
    "https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg",
    10,
    [
      "1 Slice White Bread",
      "1 Slice Ham",
      "1 Slice Pineapple",
      "1-2 Slices of Cheese",
      "Butter",
    ],
    [
      `Sed nisl purus, dapibus quis suscipit et, tempor efficitur lorem. Proin efficitur tristique metus, lobortis ultrices ligula tempus quis. Nulla sodales diam gravidafeugiat eros non, vehicula ex. Donec facilisis tellus tellus, nec dapibus libero porttitor pretium. Vestibulum sit amet turpis velit. Donec ante nunc, ultrices dignissim eleifend quis, aliquet sed ligula. Praesent sit amet risus ex. Cras sodales, tellus vel euismod ultrices, mi sem consequat est, nec pellentesque metus turpis quis purus. Pellentesque id urna non orci ornare eleifend. Vestibulum pulvinarurna sed mauris ornare faucibus. Curabitur sed nunc vitae ligula lobortis suscipit quis ac magna. Nullam porttitor sagittis mi id dictum. In hac habitasse platea dictumst`,
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    "m3",
    ["c3"],
    "Classic Hamburger",
    "Expensive",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    45,
    [
      "300g Cattle Hack",
      "1 Tomato",
      "1 Cucumber",
      "1 Onion",
      "Ketchup",
      "2 Burger Buns",
    ],
    [
      `Sed nisl purus, dapibus quis suscipit et, tempor efficitur lorem. Proin efficitur tristique metus, lobortis ultrices ligula tempus quis. Nulla sodales diam gravidafeugiat eros non, vehicula ex. Donec facilisis tellus tellus, nec dapibus libero porttitor pretium. Vestibulum sit amet turpis velit. Donec ante nunc, ultrices dignissim eleifend quis, aliquet sed ligula. Praesent sit amet risus ex. Cras sodales, tellus vel euismod ultrices, mi sem consequat est, nec pellentesque metus turpis quis purus. Pellentesque id urna non orci ornare eleifend. Vestibulum pulvinarurna sed mauris ornare faucibus. Curabitur sed nunc vitae ligula lobortis suscipit quis ac magna. Nullam porttitor sagittis mi id dictum. In hac habitasse platea dictumst`,
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    "m4",
    ["c4"],
    "Wiener Schnitzel",
    "Normal",
    "https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg",
    60,
    [
      "8 Veal Cutlets",
      "4 Eggs",
      "200g Bread Crumbs",
      "100g Flour",
      "300ml Butter",
      "100g Vegetable Oil",
      "Salt",
      "Lemon Slices",
    ],
    [
      `Sed nisl purus, dapibus quis suscipit et, tempor efficitur lorem. Proin efficitur tristique metus, lobortis ultrices ligula tempus quis. Nulla sodales diam gravidafeugiat eros non, vehicula ex. Donec facilisis tellus tellus, nec dapibus libero porttitor pretium. Vestibulum sit amet turpis velit. Donec ante nunc, ultrices dignissim eleifend quis, aliquet sed ligula. Praesent sit amet risus ex. Cras sodales, tellus vel euismod ultrices, mi sem consequat est, nec pellentesque metus turpis quis purus. Pellentesque id urna non orci ornare eleifend. Vestibulum pulvinarurna sed mauris ornare faucibus. Curabitur sed nunc vitae ligula lobortis suscipit quis ac magna. Nullam porttitor sagittis mi id dictum. In hac habitasse platea dictumst`,
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    "m5",
    ["c2", "c5", "c10"],
    "Salad with Smoked Salmon",
    "Normal",
    "https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg",
    15,
    [
      "Arugula",
      "Lamb's Lettuce",
      "Parsley",
      "Fennel",
      "200g Smoked Salmon",
      "Mustard",
      "Balsamic Vinegar",
      "Olive Oil",
      "Salt and Pepper",
    ],
    [
      `Sed nisl purus, dapibus quis suscipit et, tempor efficitur lorem. Proin efficitur tristique metus, lobortis ultrices ligula tempus quis. Nulla sodales diam gravidafeugiat eros non, vehicula ex. Donec facilisis tellus tellus, nec dapibus libero porttitor pretium. Vestibulum sit amet turpis velit. Donec ante nunc, ultrices dignissim eleifend quis, aliquet sed ligula. Praesent sit amet risus ex. Cras sodales, tellus vel euismod ultrices, mi sem consequat est, nec pellentesque metus turpis quis purus. Pellentesque id urna non orci ornare eleifend. Vestibulum pulvinarurna sed mauris ornare faucibus. Curabitur sed nunc vitae ligula lobortis suscipit quis ac magna. Nullam porttitor sagittis mi id dictum. In hac habitasse platea dictumst`,
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    "m6",
    ["c6", "c10"],
    "Delicious Orange Mousse",
    "Cheap",
    "https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg",
    240,
    [
      "4 Sheets of Gelatine",
      "150ml Orange Juice",
      "80g Sugar",
      "300g Yoghurt",
      "200g Cream",
      "Orange Peel",
    ],
    [
      `Sed nisl purus, dapibus quis suscipit et, tempor efficitur lorem. Proin efficitur tristique metus, lobortis ultrices ligula tempus quis. Nulla sodales diam gravidafeugiat eros non, vehicula ex. Donec facilisis tellus tellus, nec dapibus libero porttitor pretium. Vestibulum sit amet turpis velit. Donec ante nunc, ultrices dignissim eleifend quis, aliquet sed ligula. Praesent sit amet risus ex. Cras sodales, tellus vel euismod ultrices, mi sem consequat est, nec pellentesque metus turpis quis purus. Pellentesque id urna non orci ornare eleifend. Vestibulum pulvinarurna sed mauris ornare faucibus. Curabitur sed nunc vitae ligula lobortis suscipit quis ac magna. Nullam porttitor sagittis mi id dictum. In hac habitasse platea dictumst`,
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    "m7",
    ["c7"],
    "Pancakes",
    "Cheap",
    "https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg",
    20,
    [
      "1 1/2 Cups all-purpose Flour",
      "3 1/2 Teaspoons Baking Powder",
      "1 Teaspoon Salt",
      "1 Tablespoon White Sugar",
      "1 1/4 cups Milk",
      "1 Egg",
      "3 Tablespoons Butter, melted",
    ],
    [
      `Sed nisl purus, dapibus quis suscipit et, tempor efficitur lorem. Proin efficitur tristique metus, lobortis ultrices ligula tempus quis. Nulla sodales diam gravidafeugiat eros non, vehicula ex. Donec facilisis tellus tellus, nec dapibus libero porttitor pretium. Vestibulum sit amet turpis velit. Donec ante nunc, ultrices dignissim eleifend quis, aliquet sed ligula. Praesent sit amet risus ex. Cras sodales, tellus vel euismod ultrices, mi sem consequat est, nec pellentesque metus turpis quis purus. Pellentesque id urna non orci ornare eleifend. Vestibulum pulvinarurna sed mauris ornare faucibus. Curabitur sed nunc vitae ligula lobortis suscipit quis ac magna. Nullam porttitor sagittis mi id dictum. In hac habitasse platea dictumst`,
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    "m8",
    ["c8"],
    "Creamy Indian Chicken Curry",
    "Expensive",
    "https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg",
    35,
    [
      "4 Chicken Breasts",
      "1 Onion",
      "2 Cloves of Garlic",
      "1 Piece of Ginger",
      "4 Tablespoons Almonds",
      "1 Teaspoon Cayenne Pepper",
      "500ml Coconut Milk",
    ],
    [
      `Sed nisl purus, dapibus quis suscipit et, tempor efficitur lorem. Proin efficitur tristique metus, lobortis ultrices ligula tempus quis. Nulla sodales diam gravidafeugiat eros non, vehicula ex. Donec facilisis tellus tellus, nec dapibus libero porttitor pretium. Vestibulum sit amet turpis velit. Donec ante nunc, ultrices dignissim eleifend quis, aliquet sed ligula. Praesent sit amet risus ex. Cras sodales, tellus vel euismod ultrices, mi sem consequat est, nec pellentesque metus turpis quis purus. Pellentesque id urna non orci ornare eleifend. Vestibulum pulvinarurna sed mauris ornare faucibus. Curabitur sed nunc vitae ligula lobortis suscipit quis ac magna. Nullam porttitor sagittis mi id dictum. In hac habitasse platea dictumst`,
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    "m9",
    ["c9"],
    "Chocolate Souffle",
    "Cheap",
    "https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg",
    45,
    [
      "1 Teaspoon melted Butter",
      "2 Tablespoons white Sugar",
      "2 Ounces 70% dark Chocolate, broken into pieces",
      "1 Tablespoon Butter",
      "1 Tablespoon all-purpose Flour",
      "4 1/3 tablespoons cold Milk",
      "1 Pinch Salt",
      "1 Pinch Cayenne Pepper",
      "1 Large Egg Yolk",
      "2 Large Egg Whites",
      "1 Pinch Cream of Tartar",
      "1 Tablespoon white Sugar",
    ],
    [
      `Sed nisl purus, dapibus quis suscipit et, tempor efficitur lorem. Proin efficitur tristique metus, lobortis ultrices ligula tempus quis. Nulla sodales diam gravidafeugiat eros non, vehicula ex. Donec facilisis tellus tellus, nec dapibus libero porttitor pretium. Vestibulum sit amet turpis velit. Donec ante nunc, ultrices dignissim eleifend quis, aliquet sed ligula. Praesent sit amet risus ex. Cras sodales, tellus vel euismod ultrices, mi sem consequat est, nec pellentesque metus turpis quis purus. Pellentesque id urna non orci ornare eleifend. Vestibulum pulvinarurna sed mauris ornare faucibus. Curabitur sed nunc vitae ligula lobortis suscipit quis ac magna. Nullam porttitor sagittis mi id dictum. In hac habitasse platea dictumst`,
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    "m10",
    ["c2", "c5", "c10"],
    "Asparagus Salad with Cherry Tomatoes",
    "Normal",
    "https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg",
    30,
    [
      "White and Green Asparagus",
      "30g Pine Nuts",
      "300g Cherry Tomatoes",
      "Salad",
      "Salt, Pepper and Olive Oil",
    ],
    [
      `Sed nisl purus, dapibus quis suscipit et, tempor efficitur lorem. Proin efficitur tristique metus, lobortis ultrices ligula tempus quis. Nulla sodales diam gravidafeugiat eros non, vehicula ex. Donec facilisis tellus tellus, nec dapibus libero porttitor pretium. Vestibulum sit amet turpis velit. Donec ante nunc, ultrices dignissim eleifend quis, aliquet sed ligula. Praesent sit amet risus ex. Cras sodales, tellus vel euismod ultrices, mi sem consequat est, nec pellentesque metus turpis quis purus. Pellentesque id urna non orci ornare eleifend. Vestibulum pulvinarurna sed mauris ornare faucibus. Curabitur sed nunc vitae ligula lobortis suscipit quis ac magna. Nullam porttitor sagittis mi id dictum. In hac habitasse platea dictumst`,
    ],
    true,
    true,
    true,
    true
  ),
];
