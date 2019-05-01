define(["require", "exports", "./Protagoniste", "./Assiette", "./Cuillere", "./DecorFixe", "./DecorDefilant", "./Projectile"], function (require, exports, Protagoniste_1, Assiette_1, Cuillere_1, DecorFixe_1, DecorDefilant_1, Projectile_1) {
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
            this.tDecorDefilant = [];
            this.decorFixe = null;
            //Gestion des personnages
            this.refMinuterieAssiette = null;
            this.refMinuterieCuillere = null;
            this.nbAssiettes = 2;
            this.nbCuilleres = 3;
            this.tAssiettes = [];
            this.tCuilleres = [];
            //Gestion des munitions
            this.vitesseProjectile = 7;
            this.munitionMoutarde = null;
            //Gestion du protagoniste
            this.protagoniste = null;
            this.refScene = refScene;
            this.demarrer();
        }
        Jeu.prototype.demarrer = function () {
            this.estDemarre = true;
            //Decors
            this.creerDecorFixe();
            this.creerDecorDefilant();
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
            this.protagoniste = new Protagoniste_1.Protagoniste(this.refScene, 125, 400, this.tCuilleres, this.tAssiettes, this);
        };
        Jeu.prototype.creerAssiette = function () {
            var yHasard = Math.floor(Math.random() * 600) + 300;
            if (this.tAssiettes.length == this.nbAssiettes - 1) {
                console.log('nombre maximal atteint');
                window.clearInterval(this.refMinuterieAssiette);
            }
            this.tAssiettes.push(new Assiette_1.Assiette(this.refScene, 800, yHasard, 2));
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
        Jeu.prototype.creerDecorFixe = function () {
            this.decorFixe = new DecorFixe_1.DecorFixe(this.refScene, 0, 0, this, 2);
        };
        Jeu.prototype.creerDecorDefilant = function () {
            this.tDecorDefilant[0] = new DecorDefilant_1.DecorDefilant(this.refScene, 800, 0, 1, this, 2);
            this.tDecorDefilant[1] = new DecorDefilant_1.DecorDefilant(this.refScene, 1600, 0, 1, this, 2);
        };
        Jeu.prototype.creerProjectile = function (posX, posY) {
            this.munitionMoutarde = new Projectile_1.Projectile(this.refScene, posX, posY, this.vitesseProjectile);
        };
        //En construction...
        Jeu.prototype.arreter = function () {
            this.estDemarre = false;
            this.refMinuterieAssiette = null;
            for (var i = 0; i < this.tAssiettes.length; i++) {
                this.tAssiettes[i].arreterAssiette();
            }
            this.tAssiettes = null;
            this.refMinuterieCuillere = null;
            for (var i = 0; i < this.tCuilleres.length; i++) {
                this.tCuilleres[i].arreterCuillere();
            }
            this.tCuilleres = null;
            for (var i = 0; i < this.tDecorDefilant.length; i++) {
                this.tDecorDefilant[i].arreterDefilant();
            }
            this.tDecorDefilant = null;
            this.protagoniste = null;
        };
        return Jeu;
    }());
    exports.Jeu = Jeu;
});
//# sourceMappingURL=Jeu.js.map