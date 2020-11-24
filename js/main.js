import { Maze } from "./js3.js";
import  { Hero } from "./hero.js";
import { fieldOut } from "./fieldOut.js";
import { checker } from "./checker_js/finish.js";

let n = 12;
let m = 20;

let Lab = Maze(n, m);
const user = new Hero(0, 2);
fieldOut(Lab, user);

document.body.addEventListener('keydown', (e) => {
    switch(e.key){
        case "ArrowUp":
            user.up();
            break;
        case "ArrowDown":
            user.down();
            break;
        case "ArrowLeft":
            user.left();
            break;
        case "ArrowRight":
            user.right();
            break;
    }
    fieldOut(Lab, user);
});
