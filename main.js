let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanut"]
  };

let order = (Fruit_name, call_production) => {
    setTimeout(() => {
      console.log(`${stocks.Fruits[Fruit_name]} was selected`);
      call_production();
    }, 2000);
  };
  
  let production = () => {
    setTimeout(() => {
      console.log("production has started");
  
      setTimeout(() => {
        console.log("the fruit has been chopped");
  
        setTimeout(() => {
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
  
          setTimeout(() => {
            console.log("machine has been started");
  
            setTimeout(() => {
              console.log(`ice cream was placed in the ${stocks.holder[0]}`);
  
              setTimeout(() => {
                console.log(`${stocks.toppings[1]} was sprinkled on top`);
  
                setTimeout(() => {
                  console.log("Serve ice cream");
                }, 2000);
              }, 3000);
            }, 2000);
          }, 1000);
        }, 1000);
      }, 2000);
    }, 0000);
  };
  
  order(0, production);
  











  let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[1]} was selected`))
  .then(() => {
    return order(0000, () => console.log("production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("the fruit has been chopped"));
  })

  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)
    );
  })

  .then(() => {
    return order(1000, () => console.log("machine has been started"));
  })

  .then(() => {
    return order(2000, () =>
      console.log(`ice cream was poured into the ${stocks.holder[1]}`)
    );
  })
  .then(() => {
    return order(3000, () =>
      console.log(`${stocks.toppings[0]} was sprinkled on top`)
    );
  })
  .then(() => {
    return order(2000, () => console.log("serve the ice cream"));
  })
.catch(()=>{
  console.log("customer left")
})
