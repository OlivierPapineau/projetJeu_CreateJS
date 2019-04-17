define(["require", "exports", "./Protagoniste", "./Assiette"], function (require, exports, Protagoniste_1, Assiette_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Jeu = /** @class */ (function () {
        function Jeu(refScene) {
            /*
             * @Todo: creer les fichiers de classe pour les elements de la scene
             */
            this.refMinuterieAssiette = null;
            this.nbAssiettes = 3;
            this.protagoniste = null;
            this.tAssiettes = [];
            this.tCuilleres = null;
            this.refScene = null;
            this.estDemarre = false;
            this.refScene = refScene;
            if (this.refMinuterieAssiette === null) {
                this.refMinuterieAssiette = window.setInterval(this.creerAssiette.bind(this), 1000 * 1.7);
            }
            this.demarrer();
        }
        Jeu.prototype.demarrer = function () {
            this.estDemarre = true;
            //Protagoniste
            this.protagoniste = new Protagoniste_1.Protagoniste(this.refScene, 125, 125);
        };
        Jeu.prototype.creerAssiette = function () {
            if (this.tAssiettes.length == this.nbAssiettes - 1) {
                console.log('nombre maximal atteint');
                window.clearInterval(this.refMinuterieAssiette);
            }
            //Assiettes
            var yHasard = Math.floor(Math.random() * 600);
            this.tAssiettes.push(new Assiette_1.Assiette(this.refScene, 800, yHasard));
            console.log("Tableau d'assiettes: " + this.tAssiettes);
        };
        return Jeu;
    }());
    exports.Jeu = Jeu;
});
//# sourceMappingURL=Jeu.js.map