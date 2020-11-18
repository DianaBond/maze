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



