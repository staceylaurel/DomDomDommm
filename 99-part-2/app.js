document.addEventListener("DOMContentLoaded", function () {

    ///Sing! button on HTML button
    let btn = document.getElementsByClassName("btn");
    
    btn[0].addEventListener("click", function () {

    ///Friends from 99-Lines-of-Code project    
    let friends = ["Tony", "Bruce", "Steve", "Natasha", "Wanda"];
    
        for (i = 0; i < friends.length; i++) {
            ///div for friends and h3 containing friends        
            const div = document.createElement("div");
            const heading = document.createElement("h3");
            document.body.appendChild(div);
            div.className = "friend";
            const headingText = document.createTextNode(friends[i].toUpperCase())
            heading.appendChild(headingText)
            div.appendChild(heading)
            ///(p) for the song lyrics, including friends
            for (let j = 99; j > 0; j--) {

                if (j === 1) {
                    const p = document.createElement("p");
                    p.textContent = j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file";
                    div.appendChild(p);
                } else {
                    const p = document.createElement("p");
                    p.textContent = j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file";
                    div.appendChild(p);
                }

            };
        };
    })
})




// button.addEventListener('click', function () { 


// let friends = ["Bruce", "Steve", "Natasha", "Tony", "Wanda"];

// for (f = 0; f < friends.length; f++){
//     let friend = friends[f]; {
//         for (counter = 99; counter > 0; counter--) {
//             let minusOne = counter - 1;
//             if (counter > 1) {
//             console.log(counter + " lines of code in the file, " + counter + " lines of code; " + friend + " strikes one out, clears it all out, " + minusOne + " lines of code in the file");
//             } else  {
//             console.log("1 line of code in the file, 1 line of code; " + friend + " strikes one out, clears it all out, no more lines of code in the file");
//             }
//         }
//     }

// };
//document.body.appendChild(someElement);
//someOtherElement.appendChild(anotherElement)
