//Defining variables

let currentPlayer = "X";
const threeInaRow = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let tiles = document.querySelectorAll("td");
tiles = Array.from(tiles);

//Functions

hideMe = (e) => {
  const firstPage = document.getElementById("popup1");
  firstPage.style.display = "none";
  const form = document.getElementById("form");
  form.style.display = "block";
};

// The pair of hide me functions hide the respective name forms after submission

hideMe2 = (e) => {
  const firstPage = document.getElementById("popup1");
  firstPage.style.display = "none";
  const form = document.getElementById("form2");
  form2.style.display = "block";
};

showName = (e) => {
  let pName1 = document.getElementById("name1").value;
  let pName2 = document.getElementById("name2").value;
  document.getElementById("showName1").innerText = ` ${pName1} Vs ${pName2} `;
  const form = document.getElementById("form");
  form.style.display = "none";
  return pName1&&pName2
};
//showName captures text input and places it in span elements

showName2 = (e) => {
  let pName3 = document.getElementById("name3").value;
  document.getElementById("showName3").innerText = ` ${pName3} Vs Computer `;
  const form2 = document.getElementById("form2");
  form2.style.display = "none";
  return pN
};

//Checks entire board to see if a threeInaRow has been met
gameOver = () => {
  threeInaRow.forEach((combination) => {
    let check = combination.every(
      (indx) => tiles[indx].innerText === currentPlayer
    );
    if (check) {
      alert('Humans are the winner!');
    }
  });
};

//Listens for clicks and switches between X&&O, if an X||O already exists no input is allowed
tiles.forEach(function (tile) {
  tile.addEventListener("click", function () {
    if (tile.innerText === "X" || tile.innerText === "O") {
      return;
    }
    tile.innerText = currentPlayer;
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
    gameOver();
  });
});
