// Q34. Project Restaurant

let prompt = require("prompt-sync")();
let n;

do {
  console.log("\n--- Hotel Hawai ---");
  console.log("Cuisines");
  console.log("1] Indian");
  console.log("2] American");
  console.log("3] Italian");
  console.log("0] Exit");
  n = Number(prompt("Select Cuisine (0-3): "));
  switch (n) {
    case 1: {
      let j;
      console.log("\nIndian Dishes");
      console.log("1] Butter Chicken");
      console.log("2] Biryani");
      console.log("3] Shahi Paneer");
      console.log("0] Back");
      j = Number(prompt("Select an Indian Dish: "));
      switch (j) {
        case 1:
          console.log("You ordered Butter Chicken.");
          break;
        case 2:
          console.log("You ordered Biryani.");
          break;
        case 3:
          console.log("You ordered Shahi Paneer.");
          break;
        case 0:
          break;
        default:
          console.log("Invalid Dish Selection.");
      }
      break;
    }

    case 2: {
      let j;
      console.log("\nAmerican Dishes");
      console.log("1] Burger");
      console.log("2] Pizza");
      console.log("3] Hot Dog");
      console.log("0] Back");

      j = Number(prompt("Select an American Dish: "));

      switch (j) {
        case 1:
          console.log("You ordered Burger.");
          break;
        case 2:
          console.log("You ordered Pizza.");
          break;
        case 3:
          console.log("You ordered Hot Dog.");
          break;
        case 0:
          break;
        default:
          console.log("Invalid Dish Selection.");
      }
      break;
    }

    case 3: {
      let j;
      console.log("\nItalian Dishes");
      console.log("1] Pasta");
      console.log("2] Lasagna");
      console.log("3] Risotto");
      console.log("0] Back");

      j = Number(prompt("Select an Italian Dish: "));

      switch (j) {
        case 1:
          console.log("You ordered Pasta.");
          break;
        case 2:
          console.log("You ordered Lasagna.");
          break;
        case 3:
          console.log("You ordered Risotto.");
          break;
        case 0:
          break;
        default:
          console.log("Invalid Dish Selection.");
      }
      break;
    }

    case 0:
      console.log("Thank you for visiting Hotel Hawai!");
      break;

    default:
      console.log("Invalid Cuisine Selection.");
  }

} while (n !== 0);