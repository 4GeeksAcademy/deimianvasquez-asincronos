// let myPromise = new Promise((resolve, reject) => {
//     let numRandom = Math.floor(Math.random() * 10)

//     if (numRandom > 5) {
//         resolve("Todo esta perfect")
//     } else {
//         reject("todo mal")
//     }

// })

let myPromiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("probando")
    }, 1000)
})

//then
// myPromise.then((data) => {
//     console.log(data)
// }).catch((exploto) => {
//     console.log(exploto)
// })

// myPromiseTwo.then((data) => {
//     console.log(data)
// })






//async await

// function returnedPromiseHere() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Yo soy las imágenes que vienen de la base de datos");

//         }, 1000);
//     });
// }


// const useAsync = async () => { }



// async function useAsyncFunction() {
//     console.log("Soy una tarea rápida");

//     let result = await returnedPromiseHere();
//     console.log(result);
//     console.log("Tuve que esperar a que el await terminara");

// }

// useAsyncFunction();




function promise1() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Estoy resuelta como 1");

        }, 1000);

    });

}

function promise2() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Estoy resuelta como 2");

        }, 2000);

    });

}

function promise3() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Estoy resuelta como 3");

        }, 3000);

    });

}

const handlingAllPromises = async () => {
    try {
        let [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);

        console.log(first);
        console.log(second);
        console.log(third);

    } catch (error) {
        console.log(error)
    }

    // let first = await promise1();
    // let second = await promise2();
    // let third = await promise3();


}

handlingAllPromises();