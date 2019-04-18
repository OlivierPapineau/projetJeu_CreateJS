"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jeu_1 = require("./Jeu");
var App = /** @class */ (function () {
    function App() {
        //Attributs
        this.scene = null;
        this.composite = null;
        //Importation des medias de la bibliotheque animate
        window.init(this);
    }
    App.prototype.initialiser = function (refScene) {
        this.scene = refScene;
        createjs.Ticker.framerate = 30;
        this.composite = new Jeu_1.Jeu(this.scene);
    };
    return App;
}());
exports.App = App;
