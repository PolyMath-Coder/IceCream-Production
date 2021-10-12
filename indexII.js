let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

const is_shop_open = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log('We are closed for the day...'));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected.`))
  .then(() => {
    return order(2000, () => console.log('The fruit was chopped.'));
  })

  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} were added.`)
    );
  })

  .then(() => {
    return order(1000, () => console.log('Kickstart the machine Already'));
  })

  .then(() => {
    return order(1000, () =>
      console.log(`Icecream placed on ${stocks.holder[0]}`)
    );
  })

  .then(() => {
    return order(1000, () => console.log('Icecream is served.'));
  })

  .catch(() => {
    console.log('Customer left');
  })

  .finally(() => {
    console.log('The day is over and so, the shop is closed already!');
  });
