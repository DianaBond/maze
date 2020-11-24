import { Maze } from "./js3.js";


let n = 20;
let m = 20;
let check = Maze(n,m)
export class Hero{
    constructor(x,y) {
        this.x = x;
        this.y = y;

    }
    up() {
        let x = this.x;
        let y = this.y;
        if (check[x-1][y] === 0)
        {

        }
        else if(check[x-1][y] === 2)

        {
            this.x--;
            alert("YOU WIN");
            return 0;
        }
        else
        {
            this.x--;
        }

    }
    down() {
       let x = this.x;
        let y = this.y;

        if (check[x+1][y] === 0)
        {

        }

        else if(check[x+1][y] === 2)

        {
            this.x++;
            alert("YOU WIN");
            return 0;
        }
        else
        {
            this.x++;

        }

    }
    left() {
        let x = this.x;
        let y = this.y;
        if (check[x][y-1] === 0 || y-1<0)
        {

        }
        else if(check[x][y-1] === 2)

        {
            this.y--;
            alert("YOU WIN");
            return 0;
        }
        else
        {
            this.y--;
        }
    }
    right() {
        let x = this.x;
        let y = this.y;
        if (check[x][y+1] === 0 || y+1>=n)
        {

        }
        else if(check[x][y+1] === 2)

        {
            this.y++;
            alert("YOU WIN");
            return 0;
        }
        else
        {
            this.y++;
        }
    }
}
