define(["require", "exports", "./Protagoniste"], function (require, exports, Protagoniste_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Jeu = /** @class */ (function () {
        function Jeu(refScene) {
            /*
             * @Todo: creer les fichiers de classe pour les elements de la scene
             */
            this.protagoniste = null;
            this.tAssiettes = null;
            this.tCuilleres = null;
            this.refScene = null;
            this.estDemarre = false;
            this.refScene = refScene;
            this.demarrer();
        }
        Jeu.prototype.demarrer = function () {
            this.estDemarre = true;
            //Protagoniste
            this.protagoniste = new Protagoniste_1.Protagoniste(this.refScene, 125, 125);
        };
        return Jeu;
    }());
    exports.Jeu = Jeu;
});
//# sourceMappingURL=Jeu.js.map