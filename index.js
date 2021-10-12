// Synchronous
let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let order = (fruitname, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruitname]} was selected.`);

    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log('Production has started.');
  }, 0000);

  setTimeout(() => {
    console.log('The fruite has been chopped');

    setTimeout(() => {
      console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} have been added.`);
    }, 1000);

    setTimeout(() => {
      console.log(
        `The ${stocks.holder[0]} was used as container and the ${stocks.Fruits[0]} icecream was placed on top.`
      );

      setTimeout(() => {
        console.log(`${stocks.Fruits[0]} was added as toppings.`);
      }, 1000);
      setTimeout(() => {
        console.log(`${stocks.toppings[1]} is served.`);
      }, 2000);
    }, 2000);
  }, 5000);
};
order(0, production);
