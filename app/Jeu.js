define(["require", "exports", "./Protagoniste", "./Assiette", "./Cuillere"], function (require, exports, Protagoniste_1, Assiette_1, Cuillere_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Jeu = /** @class */ (function () {
        function Jeu(refScene) {
            /*
             * @Todo: creer les fichiers de classe pour les elements de la scene
             */
            //Gestion du jeu
            this.refScene = null;
            this.estDemarre = false;
            //Gestion des personnages
            this.refMinuterieAssiette = null;
            this.refMinuterieCuillere = null;
            this.nbAssiettes = 3;
            this.nbCuilleres = 4;
            this.tAssiettes = [];
            this.tCuilleres = [];
            //Gestion du protagoniste
            this.protagoniste = null;
            this.refScene = refScene;
            this.demarrer();
        }
        Jeu.prototype.demarrer = function () {
            this.estDemarre = true;
            //Protagoniste
            this.creerProtagoniste();
            //Obstacle
            if (this.refMinuterieAssiette === null) {
                this.refMinuterieAssiette = window.setInterval(this.creerAssiette.bind(this), 1000 * 1.7);
            }
            //Antagoniste
            if (this.refMinuterieCuillere === null) {
                this.refMinuterieCuillere = window.setInterval(this.creerCuillere.bind(this), 1000 * 1.2);
            }
        };
        Jeu.prototype.creerProtagoniste = function () {
            this.protagoniste = new Protagoniste_1.Protagoniste(this.refScene, 125, 400, this.tCuilleres, this.tAssiettes);
        };
        Jeu.prototype.creerAssiette = function () {
            var yHasard = Math.floor(Math.random() * 600) + 300;
            //Gestion de la generation d'obstacles
            if (this.tAssiettes.length == this.nbAssiettes - 1) {
                console.log('nombre maximal atteint');
                window.clearInterval(this.refMinuterieAssiette);
            }
            //Instanciation de l'objet
            this.tAssiettes.push(new Assiette_1.Assiette(this.refScene, 800, yHasard, 2));
            //console.log(`Tableau d'assiettes: ${this.tAssiettes}`);
        };
        Jeu.prototype.creerCuillere = function () {
            var yHasard = Math.floor(Math.random() * 600) + 300;
            //Gestion de la generation d'antagonistes
            if (this.tCuilleres.length == this.nbCuilleres - 1) {
                console.log('nombre maximal de cuilleres atteint');
                window.clearInterval(this.refMinuterieCuillere);
            }
            //Instanciation de l'objet
            this.tCuilleres.push(new Cuillere_1.Cuillere(this.refScene, 800, yHasard, 4));
            //console.log(`Tableau de cuilleres: ${this.tCuilleres}`);
        };
        //En construction...
        Jeu.prototype.arreter = function () {
        };
        return Jeu;
    }());
    exports.Jeu = Jeu;
});
//# sourceMappingURL=Jeu.js.map