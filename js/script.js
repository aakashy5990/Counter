// let count = 0;
// const outputbtn = document.getElementById("output");
// const increasebtn = document.getElementById("increase-btn");
// const decreasebtn = document.getElementById("decrease-btn");
// let increaseInterval;
// let decreaseInterval;

// const startIncrement = () => {
//     increaseInterval = setInterval(() => {
//         count = count + 1;
//         outputbtn.innerHTML = count;
//     }, 100);
// }

// const stopIncrement = () => {
//     clearInterval(increaseInterval);
// }

// const startDecrement = () => {
//     decreaseInterval = setInterval(() => {
//         count = count - 1;
//         outputbtn.innerHTML = count;
//     }, 100);
// }

// const stopDecrement = () => {
//     clearInterval(decreaseInterval);
// }

// increasebtn.addEventListener('mousedown', startIncrement);
// document.addEventListener('mouseup', stopIncrement);

// decreasebtn.addEventListener('mousedown', startDecrement);
// document.addEventListener('mouseup', stopDecrement);

// function mode(event) {
//     event.preventDefault();
//     const currentColor = document.body.style.backgroundColor;
//     const mode = document.getElementById("mode");
//     const con1 = document.getElementById("con1");
//     const pera_head = document.getElementById("pera_head");

//     if (currentColor === "rgb(29, 29, 29)") {
//         document.body.style.backgroundColor = "#fff";
//         mode.style.color = "#000";
//         con1.style.backgroundColor = "#EDEDED";
//         pera_head.style.color = "#000"
//         pera_head.style.backgroundColor = "#DCDCDC";
//     } else {
//         document.body.style.backgroundColor = "#1D1D1D";
//         mode.style.color = "#fff";
//         con1.style.backgroundColor = "#575757";
//         pera_head.style.color = "#464646"
//         pera_head.style.backgroundColor = "#BEBEBE";
//     }
// }





let count = 0;
        const outputbtn = document.getElementById("output");
        const decreasebtn = document.getElementById("decrease-btn");
        const resetbtn = document.getElementById("reset-btn");
        const increasebtn = document.getElementById("increase-btn");

        const dec = () =>{
            count = count - 1;
            outputbtn.innerHTML = count;
        }

        const res = () =>{
            count = 0;
            outputbtn.innerHTML = count;
        }

        const inc = () =>{
            count = count + 1;
            outputbtn.innerHTML = count;
        }

        function mode(event){
            event.preventDefault();
            const currentColor = document.body.style.backgroundColor;
            const mode = document.getElementById("mode");
            const con1 = document.getElementById("con1");
            const pera_head = document.getElementById("pera_head");

                if (currentColor === "rgb(29, 29, 29)") {
                    document.body.style.backgroundColor = "#fff";
                    mode.style.color = "#000";
                    con1.style.backgroundColor = "#EDEDED";
                    pera_head.style.color = "#000"
                    pera_head.style.backgroundColor = "#DCDCDC";
                } else {
                    document.body.style.backgroundColor = "#1D1D1D";
                    mode.style.color = "#fff";
                    con1.style.backgroundColor = "#575757";
                    pera_head.style.color = "#464646"
                    pera_head.style.backgroundColor = "#BEBEBE";

                }
        }