class Character{
    _life = 1;
    maxLife = 1;
    attack = 0;
    deffense = 0;

    constructor(name){
        this.name = name;
    }

    get life(){
        return this._life
    }

    set life (newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Cavaleiro extends Character{ 
    constructor(){
        super('Cavaleiro');
        this.life = 100;
        this.attack = 10;
        this.deffense = 10;
        this.maxLife = this.life;
    }
}

class Mago extends Character{ 
    constructor(){
        super('Mago');
        this.life = 80;
        this.attack = 15;
        this.deffense = 8;
        this.maxLife = this.life;
    }
}

class Marombeiro extends Character{ 
    constructor(){
        super('Marombeiro');
        this.life = 99;
        this.attack = 12;
        this.deffense = 3;
        this.maxLife = this.life;
    }
}

class GarotoDePrograma extends Character{ 
    constructor(){
        super('Garoto de Programa');
        this.life = 60;
        this.attack = 22;
        this.deffense = 10;
        this.maxLife = this.life;
    }
}

class Homi extends Character{ 
    constructor(){
        super('Homi');
        this.life = 100;
        this.attack = 7;
        this.deffense = 20;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character{ 
    constructor(){
        super("Little Monster");
        this.life = 60;
        this.attack = 4;
        this.deffense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character{ 
    constructor(){
        super("Big Monster");
        this.life = 120;
        this.attack = 16;
        this.deffense = 7;
        this.maxLife = this.life;
    }
}

class FinalBoss extends Character{ 
    constructor(){
        super("Final Boss");
        this.life = 300;
        this.attack = 30;
        this.deffense = 1;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 =fighter1;
        this.fighter2 =fighter2;
        this.fighter1El =fighter1El;
        this.fighter2El =fighter2El;
        this.log = logObject;
    }

    start(){
        this.update();

        this.fighter1El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1));

    }

    update(){
        //1
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector(".bar").style.width = `${f1Pct}%`

        //2
        this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`

    }

    doAttack(attacking, attacked){
        if (attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage("Acabou a luta");
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let deffenseFactor = (Math.random() * 2).toFixed(2);
        let actualAttack = attacking.attack * attackFactor;
        let actualDeffense = attacked.deffense * deffenseFactor;

        if(actualAttack > actualDeffense){
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        } else {
            this.log.addMessage(`${attacked.name} conseguiu defender.`)
        }
        this.update();


    }
}

class Log {
    list = [];
    constructor(listEl) {
        this.listEl = listEl;

    }

    addMessage(msg) {
        this.list.push(msg);
        this.render();

    }

    render() {
        this.listEl.innerHTML = '';
        for (let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
} 