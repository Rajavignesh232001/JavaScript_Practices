let amt = 1000;
switch (true) {
  case amt > 60000:
    console.log("Buy iPhone");
    break;
  case amt > 30000:
    console.log("Buy Flagship Mobile");
    break;
  case amt > 10000:
    console.log("Buy Android Phone");
    break;
  case amt > 5000 && amt <= 10000:
    console.log("Buy Basic Mobile");
    break;
  case amt < 5000:
    console.log("Buy Button Phone");
    break;
  default:
    console.log("Error");
}
