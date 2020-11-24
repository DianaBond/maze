import { visualization } from "./visualization.js";

export function fieldOut(Lab, hero) {
    document.body.innerHTML = '';
    for (let i = 0; i < Lab.length; i++) {
        let rowConteiner = document.createElement("div");
        rowConteiner.className = "rowContainer";
        document.body.append(rowConteiner);
        for (let j = 0; j < Lab[i].length; j++) {
            let cellType = Lab[i][j];
            console.log(Lab[i][j]);
            if (hero.x === i && hero.y === j ){
                cellType = 5;
            }
            let div = visualization(cellType);
            rowConteiner.append(div);
        }
        console.log(Lab);
    }
}
