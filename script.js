// Current symbol
let currSymbol = "cross";

let arr = ["", "", "",
          "", "", "",
          "", "", ""];

// Click event for each box ---
document.querySelectorAll(".box").forEach((e, index) => {
    e.addEventListener("click", () => {

        if (e.dataset.taken) return;
        else if (currSymbol == "cross") {
            e.children[0].style.display = "block";
            currSymbol = "circle";
            e.style.backgroundColor = "rgb(68 123 207 / 44%)";
            e.dataset.taken = true;
            document.querySelector(".curent-player").children[1].style.left = "unset";
            document.querySelector(".curent-player").children[0].style.left = "-100%";
            console.log(index);
            arr[index] = "X";

        }
        else if (currSymbol == "circle") {
            e.children[1].style.display = "block";
            currSymbol = "cross";
            e.style.backgroundColor = "rgb(68 123 207 / 44%)";
            e.dataset.taken = true;
            document.querySelector(".curent-player").children[0].style.left = "unset";
            document.querySelector(".curent-player").children[1].style.left = "-100%";
            // console.log(index);
            arr[index] = "O";
        }

        getWinner();
    })
})

function getWinner() {

    let winnerCombination = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let pattern of winnerCombination) {
        let [a, b, c] = pattern;
        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            console.log(arr[a], arr[b], arr[c]);
            setTimeout(() => {
                document.querySelector(".popup-message").innerText = `Winner : ${arr[a]}`;
                document.querySelector(".popup").style.display = "block";
            }, 500);
            setTimeout(() => {
                document.querySelector(".popup-message").style.position = "relative";
                document.querySelector(".popup-message").style.fontSize = "24px";
                document.querySelector(".popup-message").style.top = "14%";
                // document.querySelector(".popup-message").style.top = "14%";
                // document.querySelector(".popup-message").style.display = "block";
            }, 1000);

            scoreUpdate(arr[a]);
            document.querySelector(".pop-button").addEventListener("click", () => {
                clearBoard();
            })

        }


        if (arr[0] && arr[0] === arr[1] && arr[0] == arr[2]) {
            document.querySelector(".line1").style.display = "block";
        }
        else if (arr[3] && arr[3] === arr[4] && arr[3] == arr[5]) {
            document.querySelector(".line2").style.display = "block";
        }
        else if (arr[6] && arr[6] === arr[7] && arr[6] == arr[8]) {
            document.querySelector(".line3").style.display = "block";
        }
        else if (arr[0] && arr[0] === arr[3] && arr[0] == arr[6]) {
            document.querySelector(".line4").style.display = "block";
        }
        else if (arr[1] && arr[1] === arr[4] && arr[1] == arr[7]) {
            document.querySelector(".line5").style.display = "block";
        }
        else if (arr[2] && arr[2] === arr[5] && arr[2] == arr[8]) {
            document.querySelector(".line6").style.display = "block";
        }
        else if (arr[0] && arr[0] === arr[4] && arr[0] == arr[8]) {
            document.querySelector(".line7").style.display = "block";
        }
        else if (arr[2] && arr[2] === arr[4] && arr[2] == arr[6]) {
            document.querySelector(".line8").style.display = "block";
        }

    }

}

// Score update
// Score update
function scoreUpdate(a) {
    setTimeout(() => {
        let player1 = document.getElementById("p-1");
        let player2 = document.getElementById("p-2");

        if (a === "X") {
            let score = (Number(player1.innerText) + 1);
            player1.innerText = score;  // Directly update innerText
            console.log(`X Score: ${score}`);
        } else {
            let score = (Number(player2.innerText) + 1);
            player2.innerText = score;  // Directly update innerText
            console.log(`O Score: ${score}`);
        }
    }, 400)
}


//clear board after every match
function clearBoard() {

    currSymbol = "cross";
    arr = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".box").forEach((e) => {
        e.children[1].style.display = "none";
        // console.log("hii")
        e.children[0].style.display = "none";
        e.style.backgroundColor = "";
        delete e.dataset.taken;
    })
    document.querySelector(".curent-player").children[0].style.left = "unset";
    document.querySelector(".curent-player").children[1].style.left = "-100%";
    document.querySelector(".line1").style.display = "none";
    document.querySelector(".line2").style.display = "none";
    document.querySelector(".line3").style.display = "none";
    document.querySelector(".line4").style.display = "none";
    document.querySelector(".line5").style.display = "none";
    document.querySelector(".line6").style.display = "none";
    document.querySelector(".line7").style.display = "none";
    document.querySelector(".line8").style.display = "none";
    document.querySelector(".popup-message").style.top = "-60%";
    document.querySelector(".popup-message").style.fontSize = "65px";
    // document.querySelector(".popup-message").style.display = "none";
    document.querySelector(".popup-message").innerText = "";
    document.querySelector(".popup").style.display = "block";
}


document.querySelector(".reset").addEventListener("click", () => {
    clearBoard();
    document.getElementById("p-1").innerText = "0";
    document.getElementById("p-2").innerText = "0";
})






