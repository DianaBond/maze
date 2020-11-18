export class hero{
    constructor(x,y) {
        this.x = x;
        this.y = y

    }
    up() {
        this.y++;
    }
    down(){
        this.y--;
    }
    left(){
        this.x--;
    }
    right(){
        this.x++
    }
}
