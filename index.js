import chalk from "chalk";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";


class Pokemon {

    constructor(pokemon, health, magic){
        this.pokemon = pokemon;
        this.health = health;
        this.magic = magic;
        this.skills = []

    }


    learnAttackSkill(skills) {

        this.skills.push(skills)

        console.log(chalk.cyan.bold(`${this.pokemon} learned `),chalk.red.bold(`${skills.attackName}`),chalk.cyan.bold(`!! Yaayyy 🤩🤩`))
    }

    showStatus() {
        if(this.health < 40){

            console.log(gradient.pastel(`${this.pokemon} has ${this.health} health and ${this.magic} magic power. CRITICAL HEALTH LEVEL!! USE A POTION OR CHANGE THE POKEMON!!!`))
            console.log(chalk.blue.bold('---------------------'));

        } else if (this.magic < 40) {

            console.log(gradient.pastel(`${this.pokemon} has ${this.health} health and ${this.magic} magic power. CRITICAL MAGIC POWER!! USE A MAGIC STONE OR CHANGE THE POKEMON!!!`))
            console.log(chalk.green.bold('---------------------'));

        } else {

            console.log(gradient.pastel(`${this.pokemon} has ${this.health} health and ${this.magic} magic power. POKEMON IS FINE!!`))
            console.log(chalk.green.bold('---------------------'));
        }
    }
    // findIdx(x) {

    //     console.log(this.skills[x].magicConsume)
    //     console.log(this.magic)
    // }
    attack (idx, pokemon) {


        if (this.skills[idx] === undefined) {

            console.log("The pokemon is not able to use this skill!")

        } else if(this.skills[idx].magicConsume <= this.magic) {

           this.magic = this.magic - this.skills[idx].magicConsume;
           pokemon.health = pokemon.health - this.skills[idx].damage;

           console.log(chalk.yellow(`${(this.skills[idx].attackName).toUpperCase()}!! ${this.pokemon}'s attack is successful. 👊👊👊👊`))
            if (pokemon.health <= 0) {
                pokemon.health = 0;
                console.log(chalk.bgRed.strikethrough(`${pokemon.pokemon} is DEAD!!! 💀💀💀`))
            } else {
                console.log(chalk.yellow(`${pokemon.pokemon} has ${pokemon.health} health left. 🤯🤯🤯`))
            }
           

           console.log(chalk.redBright.bold(`${this.pokemon} has ${this.magic} magic power now! 🪄 🪄 🪄 🪄  `))

                if (this.magic === 0) {

                    console.log(chalk.red(`${this.pokemon} has no magic power left. USE A MAGIC STONE OR CHANGE THE POKEMON!!!`))
                }
                console.log(chalk.green.bold('---------------------'));


        } else {

            console.log(chalk.bgWhite(`${this.pokemon} has no magic power for this attack!!!`))
            console.log(chalk.green.bold('---------------------'));
        }
    }

    fightStart(pokemon) {

        console.log(gradient.pastel(`${this.pokemon} will fight against ${pokemon.pokemon}. \n          The battle will start soon!!`))
        console.log(chalk.green.bold('---------------------'));
    }

    magicStone (n = 50) {

        this.magic = this.magic + n;

        console.log(chalk.cyan.italic(`You used a magic stone. ${this.pokemon}'s magic power has been increased to ${this.magic}!!`))
        console.log(chalk.green.bold('---------------------'));
    }

    healthPotion (n = 60) {

        this.health = this.health + n;

        console.log(chalk.greenBright.italic(`You used a health potion. ${this.pokemon}'s health has been increased to ${this.health}!!`))
        console.log(chalk.green.bold('---------------------'));
    }

    goToPokeCenter() {

        if(this.pokemon === "Pikachu") {
            this.health = 120;
            this.magic = 80;

            console.log(chalk.red.bold(`Pikachu's health and magic power are full now!! 💥💥💥`))
            console.log(chalk.green.bold('---------------------'));
        }

        if(this.pokemon === "Bulbasaur") {
            this.health = 100;
            this.magic = 100;
            console.log(chalk.red.bold(`Bulbasaur's health and magic power are full now!!💥💥💥`))
            console.log(chalk.green.bold('---------------------'));
        }

        if(this.pokemon === "Charmander") {
            this.health = 120;
            this.magic = 110;
            console.log(chalk.red.bold(`Charmander's health and magic power are full now!!💥💥💥`))
            console.log(chalk.green.bold('---------------------'));
        }

    }
}

class AttackSkill {

    constructor(attackName, damage, magicConsume){
        this.attackName = attackName,
        this.damage = damage,
        this.magicConsume = magicConsume

    }

}




const pikachu = new Pokemon ("Pikachu", 120, 100)
const bulbasaur = new Pokemon ("Bulbasaur", 100, 100)
const charmander = new Pokemon ("Charmander", 120, 110)
console.log(pikachu)

const lightning = new AttackSkill("Lightning", 40, 35);
const megaPunch = new AttackSkill("Mega Punch", 20, 20)
const poisonSeed = new AttackSkill("Poison Seed", 30, 20)
const razorLeaves = new AttackSkill("Razor Leaves", 40, 40)
const flameThrower = new AttackSkill("Flame Thrower", 40, 35)
const megaKick = new AttackSkill("Mega Kick", 30, 30)
const thunderBolt = new AttackSkill("Thunder Bolt", 45, 40)

console.log(lightning)


pikachu.learnAttackSkill(lightning)
bulbasaur.learnAttackSkill(poisonSeed)
bulbasaur.learnAttackSkill(razorLeaves)
pikachu.learnAttackSkill(megaPunch)
pikachu.learnAttackSkill(thunderBolt)
charmander.learnAttackSkill(flameThrower)
charmander.learnAttackSkill(megaKick)
console.log(pikachu)

pikachu.showStatus()

pikachu.fightStart(bulbasaur)

pikachu.attack(1, bulbasaur)
bulbasaur.attack(1, pikachu)
pikachu.attack(2, bulbasaur)
bulbasaur.attack(0, pikachu)
pikachu.attack(0, bulbasaur)
pikachu.magicStone()
bulbasaur.healthPotion()
// // // console.log(bulbasaur)
pikachu.goToPokeCenter()
console.log("Health:", pikachu.health, "\nMagic Power:", pikachu.magic)






const pokeFiglet = figlet(("POKEMON"), function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});



const rainbow = chalkAnimation.rainbow("------------ Gotta Catch 'Em All ------------");

setTimeout(() => {
    rainbow.stop();
}, 1000);

setTimeout(() => {
    rainbow.start();
}, 1000);

