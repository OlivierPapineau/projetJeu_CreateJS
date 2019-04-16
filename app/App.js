define(["require", "exports", "./Jeu"], function (require, exports, Jeu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=App.js.map