
//#region imageshub
class ImagesHub {
    //#region chicken
    static chicken = {
        walking : [
            'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
            'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
            'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
        ],
        dead : [
            'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        ]
    }
    //#endregion

    //#region small Chicken
    static smallChicken = {
        walking : [
            'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
            'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
            'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
        ],
        dead : [
            'img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        ],
    }
    //#endregion

    //#region statusbars
    static statusbar = {
        health : [
            'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',   //0
            'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png', // 5
        ],
        coin : [
            'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
        ],
        bottle : [
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
        ],
        endboss : [
            'img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
            'img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
            'img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
            'img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
            'img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
            'img/7_statusbars/2_statusbar_endboss/orange/orange100.png',
        ],

    }
    //#endregion

    static bottle = {
        rotation : [
            'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
            'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
            'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
            'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
        ],
        splash : [
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
        ],
    }


    //#region character
    static character = {
        walking : [
            'img/2_character_pepe/2_walk/W-21.png',                                   // wir fügen unserem bildspiecer (JSON imageCache) einmal den path und eine value mit dem path hinzu
            'img/2_character_pepe/2_walk/W-22.png',
            'img/2_character_pepe/2_walk/W-23.png',
            'img/2_character_pepe/2_walk/W-24.png',
            'img/2_character_pepe/2_walk/W-25.png',
            'img/2_character_pepe/2_walk/W-26.png',
        ],
        jumping : [
            'img/2_character_pepe/3_jump/J-31.png',
            'img/2_character_pepe/3_jump/J-32.png',
            'img/2_character_pepe/3_jump/J-33.png',
            'img/2_character_pepe/3_jump/J-34.png',
            'img/2_character_pepe/3_jump/J-35.png',
            'img/2_character_pepe/3_jump/J-36.png',
            'img/2_character_pepe/3_jump/J-37.png',
            'img/2_character_pepe/3_jump/J-38.png',
            'img/2_character_pepe/3_jump/J-39.png',
        ],
        dead : [
            'img/2_character_pepe/5_dead/D-51.png',
            'img/2_character_pepe/5_dead/D-52.png',
            'img/2_character_pepe/5_dead/D-53.png',
            'img/2_character_pepe/5_dead/D-54.png',
            'img/2_character_pepe/5_dead/D-55.png',
            'img/2_character_pepe/5_dead/D-56.png',
            'img/2_character_pepe/5_dead/D-57.png',
        ],
        hurt : [
            'img/2_character_pepe/4_hurt/H-41.png',
            'img/2_character_pepe/4_hurt/H-42.png',
            'img/2_character_pepe/4_hurt/H-43.png',
        ],
        standing : [
            'img/2_character_pepe/1_idle/long_idle/I-11.png',
            'img/2_character_pepe/1_idle/long_idle/I-12.png',
            'img/2_character_pepe/1_idle/long_idle/I-13.png',
            'img/2_character_pepe/1_idle/long_idle/I-14.png',
            'img/2_character_pepe/1_idle/long_idle/I-15.png',
            'img/2_character_pepe/1_idle/long_idle/I-16.png',
            'img/2_character_pepe/1_idle/long_idle/I-17.png',
            'img/2_character_pepe/1_idle/long_idle/I-18.png',
            'img/2_character_pepe/1_idle/long_idle/I-19.png',
            'img/2_character_pepe/1_idle/long_idle/I-20.png',
        ],
        idle : [
            'img/2_character_pepe/1_idle/idle/I-1.png',
            'img/2_character_pepe/1_idle/idle/I-2.png',
            'img/2_character_pepe/1_idle/idle/I-3.png',
            'img/2_character_pepe/1_idle/idle/I-4.png',
            'img/2_character_pepe/1_idle/idle/I-5.png',
            'img/2_character_pepe/1_idle/idle/I-6.png',
            'img/2_character_pepe/1_idle/idle/I-7.png',
            'img/2_character_pepe/1_idle/idle/I-8.png',
            'img/2_character_pepe/1_idle/idle/I-9.png',
            'img/2_character_pepe/1_idle/idle/I-10.png',
        ],
    }
    //#endregion

    //#region endboss
    static endboss = {
        alert : [
            'img/4_enemie_boss_chicken/2_alert/G5.png',
            'img/4_enemie_boss_chicken/2_alert/G6.png',
            'img/4_enemie_boss_chicken/2_alert/G7.png',
            'img/4_enemie_boss_chicken/2_alert/G8.png',
            'img/4_enemie_boss_chicken/2_alert/G9.png',
            'img/4_enemie_boss_chicken/2_alert/G10.png',
            'img/4_enemie_boss_chicken/2_alert/G11.png',
            'img/4_enemie_boss_chicken/2_alert/G12.png',
        ],
        dead : [
            'img/4_enemie_boss_chicken/5_dead/G24.png',
            'img/4_enemie_boss_chicken/5_dead/G25.png',
            'img/4_enemie_boss_chicken/5_dead/G26.png',
        ],
        hurt : [
            'img/4_enemie_boss_chicken/4_hurt/G21.png',
            'img/4_enemie_boss_chicken/4_hurt/G22.png',
            'img/4_enemie_boss_chicken/4_hurt/G23.png',
            
        ],
        walking : [
            'img/4_enemie_boss_chicken/1_walk/G1.png',
            'img/4_enemie_boss_chicken/1_walk/G2.png',
            'img/4_enemie_boss_chicken/1_walk/G3.png',
            'img/4_enemie_boss_chicken/1_walk/G4.png',
        ],
    }


    //#endregion
}
//#endregion


//#region intervalhub
class IntervalHub {
    static allIntervals = [];                               // der array in dem wir alle intervalle speichern wollen

    static startInterval(func, timer){                      // methode um intervalle dem array hinzuzufügen
        const newInterval = setInterval(func, timer);       // das neue interval ist das interval welches wir übergeben
        IntervalHub.allIntervals.push(newInterval);         // wir pushen das neue interval in den array
    }

    static stopAllIntervals(){
        IntervalHub.allIntervals.forEach(clearInterval);    // wir gehen durch das array stoppen an jedem index das intervall
        IntervalHub.allIntervals = [];                      // wir leeren das intervall array es gibt kein intervalle mehr
    }

    
}
//#endregion

//#region soundhub
class Soundhub {
    static characterWalking = new Audio('audio/character/characterRun.mp3');
    static characterDamage = new Audio('audio/character/characterDamage.mp3');
    static characterJump = new Audio('audio/character/characterJump.wav');
    static characterSnoring = new Audio('audio/character/characterSnoring.mp3');
    static characterDead = new Audio('audio/character/characterDead.wav');
    static chickenDead = new Audio('audio/chicken/chickenDead.mp3');
    static collectBottle = new Audio('audio/collectibles/bottleCollectSound.wav');
    static collectCoin = new Audio('audio/collectibles/collectSound.wav');
    static bottleBreak = new Audio('audio/throwable/bottleBreak.mp3');
    static endbossAttack = new Audio('audio/endboss/endbossApproach.wav');
    static winGame = new Audio('audio/game/gameStart.mp3');

    static allSounds = [Soundhub.characterWalking, Soundhub.characterDamage, Soundhub.characterJump, Soundhub.characterSnoring, Soundhub.characterDead, Soundhub.chickenDead, Soundhub.collectBottle,
        Soundhub.collectCoin, Soundhub.bottleBreak, Soundhub.endbossAttack, Soundhub.winGame,
    ]

    static playSound(sound){
        sound.volume = 0.2; // Setzt die Lautstärke auf 0.2 = 20% / 1 = 100%
        sound.currentTime = 0; // Startet den Sound von Anfang
        sound.play();
    }

    static stopSound(sound){
        sound.pause();  // Pausiert den Sound
    }

    static stopAllSounds() {
        Soundhub.allSounds.forEach(sound => {
            sound.pause();  // Pausiert alle Sounds in allSounds
        });
        // document.getElementById('volume').value = 0.2;
    }
}


//#endregion