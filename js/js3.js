/* Заполнение лабиринта */
export function Maze(n,m) {
    let field = [];
    let sch = 0;
    for(let i = 0; i<n; i++){
        field[i]= new Array(m);

        for(let j = 0; j<m; j++){
            if (m-j === 1 || j === 0 || i === 0 )/* Генерация персонажа */
            {
                if (sch === 0){

                    field[i][j]= Math.floor(Math.random()*(2));

                    if ( field[i][j] === 0){
                        field[i][j]=5;
                        sch++;
                    }
                }
                else{
                    field[i][j]= 1;
                }

            }
            /* Генерация выхода */
            else if (n-i === 1 ){
                if (sch === 1){
                    field[i][j]= Math.floor(Math.random()*(2));
                    if ( field[i][j] === 0){
                        sch++;
                    }
                }
                else{
                    field[i][j]= 1;
                }
            }
            else{
                field[i][j]= Math.floor(Math.random()*(2));
            }


        }

    }
    return field;
}


export function visualization(cellType){
    let div = document.createElement("div");
    switch (cellType){
        case 0:
            div.className = "one";
            break;
        case 1:
            div.className = "null";
            break;
        case 2:
            div.className = "exit";
            break;
        case 5:
            div.className = "hero";
            break;
    }
    return div;
}

// Гениратор ходов человечка в лабиринте;
class hero{
    constructor(x,y) {
        this.x = x
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


/* Вывод лабиринта */
export function fieldOut(Lab, hero) {

    document.body.write();

    for (let i = 0; i < Lab.length; i++) {
        let rowConteiner = document.createElement("div");
        rowConteiner.className = "rowContainer";
        document.body.append(rowConteiner);
        for (let j = 0; j < Lab[i].length; j++) {
            let cellType = Lab[i][j];
            console.log(Lab[i][j]);
            if (hero.x === i && hero.y === j){
            cellType = 5;
            }
            let div = visualization(cellType);
            rowConteiner.append(div);
        }
        console.log(Lab);
    }
}

