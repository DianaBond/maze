import { Maze } from "./js3.js";
import { visualization } from "./visualization.js";
import { hero } from "./hero.js";
import { fieldOut } from "./fieldOut.js";
import { checker } from "./checker_js/finish.js";

let n = 20;
let m = 20;

let Lab = Maze(n, m);

fieldOut(Lab);
