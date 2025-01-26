"use strict";
class DVDPlayer {
    on() {
        console.log("DVD Player is ON");
    }
    play(movie) {
        console.log(`Playing "${movie}" on DVD Player`);
    }
    off() {
        console.log("DVD Player is OFF");
    }
}
class Projector {
    on() {
        console.log("Projector is ON");
    }
    setInput(input) {
        console.log(`Projector input set to ${input}`);
    }
    off() {
        console.log("Projector is OFF");
    }
}
class SoundSystem {
    on() {
        console.log("Sound System is ON");
    }
    setVolume(level) {
        console.log(`Setting volume to ${level}`);
    }
    off() {
        console.log("Sound System is OFF");
    }
}
class Lights {
    dim(level) {
        console.log(`Dimming lights to ${level}%`);
    }
}
// Facade Class: Home Theater
class HomeTheaterFacade {
    constructor(dvdPlayer, projector, soundSystem, lights) {
        this.dvdPlayer = dvdPlayer;
        this.projector = projector;
        this.soundSystem = soundSystem;
        this.lights = lights;
    }
    watchMovie(movie) {
        console.log("\nSetting up home theater...");
        this.lights.dim(30);
        this.soundSystem.on();
        this.soundSystem.setVolume(50);
        this.projector.on();
        this.projector.setInput("DVD Player");
        this.dvdPlayer.on();
        this.dvdPlayer.play(movie);
        console.log("Movie is now playing...\n");
    }
    endMovie() {
        console.log("\nShutting down home theater...");
        this.dvdPlayer.off();
        this.projector.off();
        this.soundSystem.off();
        this.lights.dim(100);
        console.log("Home theater is off.\n");
    }
}
const dvd = new DVDPlayer();
const projector = new Projector();
const soundSystem = new SoundSystem();
const lights = new Lights();
const homeTheater = new HomeTheaterFacade(dvd, projector, soundSystem, lights);
homeTheater.watchMovie("Shawsank Redemption");
homeTheater.endMovie();
