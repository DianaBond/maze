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
