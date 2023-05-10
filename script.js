let log = new Log(document.querySelector(".log"));

let character = new Cavaleiro();
let monster = new LittleMonster();

let stage = new Stage(
    character,
    monster,
    document.querySelector('#character'),
    document.querySelector('#monster'),
    log
);

stage.start();