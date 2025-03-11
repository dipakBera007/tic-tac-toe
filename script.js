* {
    margin: 0;
    padding: 0;
}

/* body{
    background-color: rgb(62, 62, 62)
} */
header {
    display: flex;
    height: 13vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-size: 27px;
}

main {
    height: 80vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

}

.container {
    height: 350px;
    width: 350px;
    /* background-color: rgb(123, 123, 123); */
    /* border: 1px solid black; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* position: absolute; */
    /* bottom: 40px; */
    position: relative;
}

.box {
    /* margin: .5px; */
    box-sizing: border-box;
    height: 33.33%;
    width: 33.33%;
    /* background-color: rgba(19, 44, 91, 0.222); */
    border: 2px solid rgb(255, 255, 255);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: inset 0px 1px 23px 11px rgb(11, 29, 42); */
    cursor: pointer;
}

.box:hover {
    box-shadow: inset 0px 1px 20px 1px rgb(69 69 69);
    /* background-color: rgb(68 123 207 / 44%); */
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 85vw;
    background-color: rgb(0 0 0 / 85%);
    /* background-color: rgba(1, 7, 18, 0.852); */
    /* background-color: rgba(19, 44, 91, 0.852); */
    border-radius: 15px;
    position: relative;
    flex-direction: column;
    /* z-index: 2; */
}

.curent-player {
    display: flex;
    width: 100%;
    justify-content: center;
    height: 12%;
    align-items: flex-start;
    gap: 4px;
    margin: 7px;
}

.curent-player img {
    height: 40px;
    filter: invert(1);
}

.symbol {
    height: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

.symbol p {
    margin-top: 10px;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    /* filter: invert(1); */
    color: rgb(255, 255, 255);
}


.curent-player img:nth-child(1) {
    transition: 1s all ease-in-out;
    position: absolute;
}

.curent-player img:nth-child(2) {
    position: absolute;
    transition: 1s all ease-in-out;
    left: -100%;

}

.main-container {
    height: 78%;
}

.box img {
    height: 90px;
    filter: invert(1);
}

.box img:nth-child(1) {
    position: absolute;
    /* left: -100%; */
    display: none;
}

.box img:nth-child(2) {
    position: absolute;
    /* left: -100%; */
    display: none;
}

.main-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
}

.details {
    position: absolute;
    height: 40%;
    width: 370PX;
    left: 40px;
    /* background-color: aliceblue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.details img {
    height: 30px;
}

.player1 {
    border: 1px solid rgb(255, 255, 255);
    width: 150px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 7px;
    /* background-color: rgb(47, 120, 154); */
}

.details img {
    filter: invert(1);
}

.player2 {
    border: 1px solid rgb(255, 255, 255);
    width: 150px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 7px;
    /* background-color: rgba(81, 109, 122, 0); */
}

.points {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    width: 50%;
    color: white;
}

.popup {
    height: 150px;
    width: 300px;
    position: absolute;
    /* bottom: 40%; */
    right: 65px;
    /* width: 370PX; */
    /* background-color: rgb(80, 131, 208); */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 12;
    border-radius: 10px;
    border: 1px solid white;
    font-family: "Poppins", sans-serif;
    flex-direction: column;
    /* display: none; */
}

.popup-message {
    height: 35%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.popup-button {
    height: 65%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* cursor: pointer; */
    position: absolute;
    bottom: -20px;
}

.pop-button {
    padding: 6px 25px;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    border-radius: 34px;
    background-color: #4f55567d;
    height: 20px;
    width: 20px;
    color: rgb(255, 255, 255);
}

.line1 {
    position: absolute;
    top: 58px;
    left: 13px;
    border-radius: 10px;
    height: 316px;
    width: 6px;
    background-color: #3ebfe7;
    /* position: absolute; */
    transform-origin: top;
    transform: rotate(270deg);
    box-shadow: 0px 0px 6px 0px #83d7e6;
    display: none;
}

.line2 {
    position: absolute;
    top: 175px;
    left: 13px;
    border-radius: 10px;
    height: 316px;
    width: 6px;
    background-color: #3ebfe7;
    /* position: absolute; */
    transform-origin: top;
    transform: rotate(270deg);
    box-shadow: 0px 0px 6px 0px #83d7e6;
    display: none;
}

.line3 {
    position: absolute;
    top: 290px;
    left: 13px;
    border-radius: 10px;
    height: 316px;
    width: 6px;
    background-color: #3ebfe7;
    /* position: absolute; */
    transform-origin: top;
    transform: rotate(270deg);
    box-shadow: 0px 0px 6px 0px #83d7e6;
    display: none;
}

.line4 {
    position: absolute;
    top: 15px;
    left: 59px;
    border-radius: 10px;
    height: 316px;
    width: 6px;
    background-color: #3ebfe7;
    /* position: absolute; */
    transform-origin: top;
    transform: rotate(360deg);
    box-shadow: 0px 0px 6px 0px #83d7e6;
    display: none;
}

.line5 {
    position: absolute;
    top: 15px;
    left: 171px;
    border-radius: 10px;
    height: 316px;
    width: 6px;
    background-color: #3ebfe7;
    /* position: absolute; */
    transform-origin: top;
    transform: rotate(360deg);
    box-shadow: 0px 0px 6px 0px #83d7e6;
    display: none;
}

.line6 {
    position: absolute;
    top: 15px;
    left: 286px;
    border-radius: 10px;
    height: 316px;
    width: 6px;
    background-color: #3ebfe7;
    /* position: absolute; */
    transform-origin: top;
    transform: rotate(360deg);
    box-shadow: 0px 0px 6px 0px #83d7e6;
    display: none;
}

.line7 {
    position: absolute;
    top: 15px;
    left: 15px;
    border-radius: 10px;
    height: 450px;
    width: 6px;
    background-color: #3ebfe7;
    /* position: absolute; */
    transform-origin: top;
    transform: rotate(315deg);
    box-shadow: 0px 0px 6px 0px #83d7e6;
    display: none;
}

.line8 {
    position: absolute;
    top: 15px;
    right: 15px;
    border-radius: 10px;
    height: 450px;
    width: 6px;
    background-color: #3ebfe7;
    /* position: absolute; */
    transform-origin: top;
    transform: rotate(45deg);
    box-shadow: 0px 0px 6px 0px #83d7e6;
    display: none;
}

.reset {
    height: 42px;
    border-radius: 75px;
    width: 160px;
    position: absolute;
    bottom: 50px;
    background-color: #4f55567d;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    font-family: "Poppins";
    cursor: pointer;
}

.popup-message {
    position: absolute;
    left: -16%;
    height: 50px;
    width: 390px;
    top: -60%;
    /* top: 17%; */
    /* background-color: green; */
    font-size: 65px;
    /* font-size: 24px; */
    font-family: "Poppins", sans-serif;
    color: #3ebfe7;
    text-shadow: 0px 0px 6px 0px #83d7e6;
    ;
    font-weight: 700;
    transition: .6s all;
}

.me {
    position: absolute;
    top: 5px;
    /* left: 45%; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(126, 126, 126);
    font-family: "Poppins", sans-serif;
    font-size: 12px;
}
.pop-button{
    cursor: pointer;
}

/* responsiveNess */

@media screen and (max-width:500px) {
    .details {
        position: unset;
        flex-direction: row;
        height: 20%;
        width: 80%;
        gap: 10px;
        justify-content: space-evenly;
    }

    .player1 {
        height: 60px;
    }

    .player2 {
        height: 60px;
    }

    .popup-message {
        width: 400px;
    }

    .symbol {
        margin-top: 0px;
    }

    .curent-player {
        height: 8%;
    }

    .container {
        height: 270px;
        width: 270px;
    }

    .popup {
        height: 120px;
        width: 80%;
        position: absolute;
        bottom: 5%;
        right: 10%;
    }

    .popup-button {
        gap: 0px;
        /* cursor: pointer; */
        position: absolute;
        bottom: -8px;
    }

    .reset {
        bottom: -50px;
    }

    header {
        height: 10vh;
    }

    .popup-message {
        position: absolute;
        top: -5%;
        /* top: 17%; */
        left: -26%;
        /* fon */
        font-size: 55px;
    }

    .box img {
        height: 72px;
        filter: invert(1);
    }

    .line1 {
        top: 47px;
        left: 12px;
        height: 243px;
        /* display: none; */
    }

    .line2 {
        top: 136px;
        left: 12px;
        height: 243px;
        /* display: none; */
    }

    .reset {
        background-color: rgba(1, 7, 18, 0.852);
    }

    .line3 {
        top: 224px;
        left: 12px;
        height: 243px;
        /* display: none; */
    }

    .line4 {
        top: 13px;
        left: 47px;
        height: 243px;
        /* display: none; */
    }

    .line5 {
        top: 13px;
        left: 134px;
        height: 243px;
        /* display: none; */
    }

    .line6 {
        top: 13px;
        left: 220px;
        height: 243px;
        /* display: none; */
    }

    .line7 {
        height: 336px;
    }

    .line8 {
        height: 336px;
        /* display: none; */
    }

    .me {
        position: absolute;
        top: 2px;
        font-size: 11px;
        font-family: "Poppins", sans-serif;
        color: rgb(126, 126, 126);
        left: 0px;
        width: 100vw;
        display: flex;
        justify-content: center;
    }

    main {
        height: 75vh;
    }
}
