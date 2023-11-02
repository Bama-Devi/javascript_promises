function order(time, work) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(work());
        }, time);
    });
}
function productionStart() {

    let stocks = {

        liquid: ["ice", "water"],
    };

    //selecting order by customer
    let flavourValue = document.getElementById("flavour").value;
    let fruitValue = document.getElementById("fruit").value;

    let selectedHolder = document.querySelector('input[name="holder"]:checked');
    let holderValue = selectedHolder ? selectedHolder.value : '';

    let selectedSyrup = document.querySelector('input[name="syrup"]:checked');
    let syrupValue = selectedSyrup ? selectedSyrup.value : '';

    let selectedToppings = document.querySelectorAll('input[name="toppings[]"]:checked');
    let toppingsValue = Array.from(selectedToppings).map((topping) => topping.value);

    var selectedValue = document.querySelector('input[name="availability"]:checked');

    if (selectedValue) {
        selectedValue = selectedValue.value;

        let result = selectedValue;
        let orderPromise;

        if (result === "open") {
            orderPromise = order(100, () => console.log("Hi!,Have your seat please"));
            orderPromise
            .then(() => {
                return order(500, () => console.log(`${flavourValue} flavour was selected`))
            })
            .then(() => {
                return order(500, () => console.log(`${fruitValue} fruit was selected`))
            })
            .then(() => {
                return order(1000, () => console.log("fruit get chopped"))
            })
            .then(() => {
                return order(1500, () => console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} was mixed`))
            })
            .then(() => {
                return order(1000, () => console.log("machine get started"))
            })
            .then(() => {
                return order(500, () => console.log(`${holderValue} holder was selected`))
            })
            .then(() => {
                return order(2000, () => console.log(`${flavourValue} flavour scoop was added`))
            })
            .then(() => {
                return order(1000, () => console.log("selected fruit was added"))
            })
            .then(() => {
                return order(500, () => console.log( `${toppingsValue} toppings was selected`))
            })
        
            .then(() => {
                return order(1000, () => console.log("toppings was added"))
            })
            .then(() => {
                return order(500, () => console.log(`${syrupValue} syrup was selected`))
            })
            .then(() => {
                return order(1000, () => console.log("syrup was added"))
            })
            .then(() => {
                return order(500, () => console.log("your odered icecream was served,Enjoy your icecream!💩"))
            })
           
            .finally(()=>{
                console.log("Have a wonderful day!💜")
            })

                // .then(() => order(500, () => console.log(`${flavourValue} flavour was selected`)))
                // .then(() => order(500, () => console.log(`${fruitValue} fruit was selected`)))
                // .then(() => order(1000, () => console.log("Fruit get chopped")))
                // .then(() => order(1500, () => console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} was mixed`)))
                // .then(() => order(1000, () => console.log("Machine started")))
                // .then(() => order(500, () => console.log(`${holderValue} holder was selected`)))
                // .then(() => order(2000, () => console.log(`${flavourValue} scoop was added`)))
                // .then(() => order(1000, () => console.log("Fruit was added")))
                // .then(() => order(500, () => console.log(`${toppingsValue} toppings was selected`)))
                // .then(() => order(1000, () => console.log("Toppings was added")))
                // .then(() => order(500, () => console.log(`${syrupValue} syrup was selected`)))
                // .then(() => order(1000, () => console.log("Syrup was added")))
                // .then(() => order(500, () => console.log("Your ordered ice cream was served. Enjoy your ice cream! 💩")))
               
                // .finally(() => console.log("Have a wonderful day! 💜"));
        } else {
            orderPromise = Promise.reject("Shop is closed.");

            orderPromise
            .catch(()=>{
                console.log("Sorry we missed you today! Swing by tomorrow, we'll be here!🤗")
            })
            .finally(()=>{
                console.log("Have a wonderful day!💜")
            })
                // .catch(() => console.log("Sorry, we missed you today! Swing by tomorrow, we'll be here! 🤗"))
                // .finally(() => console.log("Have a wonderful day! 💜"));
        }
    }
    else {
        alert("Please select shop availability");
    }
}
