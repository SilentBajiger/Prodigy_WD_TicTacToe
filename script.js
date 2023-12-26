let box = document.getElementById("d1");
let turn = document.getElementById("turn");
const parent = document.getElementById("gamebox");
let divclass = document.querySelectorAll(".div1");
console.log(divclass);
let btn = document.getElementById("btn");
let d1 = document.getElementById("d1");
const pairsList = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let Xinput = [];
let Oinput = [];
let toggle = 1;
let count = 0;
let winNumber = [];
function Add() {
  divclass.forEach((element) => {
    const clickHandler = (e) => {
      handleclick(e.target);
    };
    element.style.borderColor = "white";
    console.log("handleclick");

    element.addEventListener("click", clickHandler);
    element.clickHandler = clickHandler;
  });
}
function Remove() {
  divclass.forEach((element) => {
    console.log("handleclick1212");
    console.log(
      "REmoving",
      element.removeEventListener("click", element.clickHandler)
    );
  });
}
function check(list) {
  let res = false;
  pairsList.forEach((ele) => {
    let result = ele.every((e) => list.includes(e));
    if (result) {
      console.log(ele);
      winNumber = ele;
      res = result;
      return result;
    }
  });
  return res;
}
function endgame(list) {
  if (list) {
    if (list === "x") {
      turn.textContent = "X win the Game";
      btn.textContent = "Beat X";

      console.log(" X win the Game");
    } else {
      console.log(" O win the Game");
      turn.textContent = "O win the Game";
      btn.textContent = "Beat O";
    }
    btn.style.visibility = "visible";
  } else {
    turn.textContent = "Better Luck Next Time!!!";
    // turn.innerHTML=`<button>reset</button>`
    btn.style.visibility = "visible";
    console.log("No one win the game");
  }
  Remove();
}
const handleclick = (element) => {
  console.log(parseInt(element.id[1]), element.value);
  if (element.textContent === "") {
    count++;
    if (toggle == 0) {
      Oinput.push(parseInt(element.id[1]));
      toggle = 1;
      console.log("Oinput:", Oinput);
      element.textContent = "O";
      if (check(Oinput)) {
        console.log("OWin");
        endgame("o");
        return;
      }
      turn.textContent = "Now its 'X's Turn";
    } else {
      Xinput.push(parseInt(element.id[1]));
      toggle = 0;
      console.log("Xinput:", Xinput);
      element.textContent = "X";
      if (check(Xinput)) {
        console.log("xWin");
        endgame("x");
        return;
      }
      turn.textContent = "Now its 'O's Turn";
    }
  }
  if (count == 9) {
    endgame();
  }
  console.log("end");
  btn.textContent = "Reset";
  return;
};
btn.addEventListener("click", () => {
  console.log("BUTTON");
  if (btn.textContent === "Play") {
    turn.textContent = "Now its 'X's Turn";
    btn.style.visibility = "hidden";
    Add();
  } else {
    console.log("delete");
    Remove();
    location.reload();
  }
});
