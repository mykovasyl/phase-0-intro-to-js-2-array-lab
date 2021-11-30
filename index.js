let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    let newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    let againNewCats = [name, ...cats];
    return againNewCats;
}

function removeLastCat() {
    let loseLastCat = [...cats];
    loseLastCat.pop();
    return loseLastCat
}

function removeFirstCat() {
    let loseFirstCat = [...cats];
    loseFirstCat.shift();
    return loseFirstCat;
}