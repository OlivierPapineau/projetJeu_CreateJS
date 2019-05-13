define(["require", "exports", "./Protagoniste", "./Assiette", "./Cuillere", "./DecorFixe", "./DecorDefilant", "./Projectile", "./Afficheur", "./EcranNiveau", "./EcranIntro", "./EcranRetro"], function (require, exports, Protagoniste_1, Assiette_1, Cuillere_1, DecorFixe_1, DecorDefilant_1, Projectile_1, Afficheur_1, EcranNiveau_1, EcranIntro_1, EcranRetro_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Jeu = /** @class */ (function () {
        function Jeu(refScene) {
            /*
             * @Todo: creer les fichiers de classe pour les elements de la scene
             */
            //Gestion de l'interface graphique
            this.GUI = null;
            //Gestion des ecrans tierces
            this.ecranIntro = null;
            this.ecranNiveau = null;
            this.ecranRetroaction = null;
            //Gestion du jeu
            this.refScene = null;
            this.estDemarre = false;
            this.tDecorDefilant = [];
            this.decorFixe = null;
            this.intNiveau = 1;
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
            this.tProjectiles = [];
            //Gestion du protagoniste
            this.protagoniste = null;
            this.refScene = refScene;
            this.introduire();
            //this.demarrer();
        }
        /*************************************************************/
        //GESTION DU DEBUT DU JEU
        /*************************************************************/
        Jeu.prototype.demarrer = function () {
            this.estDemarre = true;
            //Decors
            this.creerDecorFixe();
            this.creerDecorDefilant();
            //Interface graphique
            this.creerGUI();
            //Antagoniste
            if (this.refMinuterieCuillere === null) {
                this.refMinuterieCuillere = window.setInterval(this.creerCuillere.bind(this), 1000 * 1.2);
            }
            //Protagoniste
            this.creerProtagoniste();
            //Obstacle
            if (this.refMinuterieAssiette === null) {
                this.refMinuterieAssiette = window.setInterval(this.creerAssiette.bind(this), 1000 * 1.7);
            }
        };
        Jeu.prototype.introduire = function () {
            this.ecranIntro = new EcranIntro_1.EcranIntro(this.refScene, 0, 0, this);
        };
        Jeu.prototype.montrerNiveau = function () {
            var niveau = this.intNiveau;
            this.ecranNiveau = new EcranNiveau_1.EcranNiveau(this.refScene, 0, 0, this, niveau);
            window.setTimeout(this.demarrer.bind(this), 3000);
            // if(this.ecranIntro != null || this.ecranIntro != undefined) {
            //   window.setTimeout(this.ecranNiveau.arreterEcranNiveau(), 3000);
            // }
        };
        /*************************************************************/
        //GESTION DE L'INTERFACE
        /*************************************************************/
        Jeu.prototype.creerGUI = function () {
            this.GUI = new Afficheur_1.Afficheur(this.refScene, 0, 0, this);
        };
        /*************************************************************/
        //GESTION DU PROTAGONISTE
        /*************************************************************/
        Jeu.prototype.creerProtagoniste = function () {
            this.protagoniste = new Protagoniste_1.Protagoniste(this.refScene, 125, 400, this.tCuilleres, this.tAssiettes, this, this.GUI);
        };
        /*************************************************************/
        //GESTION DES OBSTACLES
        /*************************************************************/
        Jeu.prototype.creerAssiette = function () {
            var yHasard = Math.floor(Math.random() * 600) + 300;
            if (this.tAssiettes.length == this.nbAssiettes - 1) {
                console.log('nombre maximal atteint');
                window.clearInterval(this.refMinuterieAssiette);
            }
            this.tAssiettes.push(new Assiette_1.Assiette(this.refScene, 800, yHasard, 2));
        };
        /*************************************************************/
        //GESTION DES ANTAGONISTES
        /*************************************************************/
        Jeu.prototype.creerCuillere = function () {
            var yHasard = Math.floor(Math.random() * 600) + 300;
            //Gestion de la generation d'antagonistes
            if (this.tCuilleres.length == this.nbCuilleres - 1) {
                console.log('nombre maximal de cuilleres atteint');
                window.clearInterval(this.refMinuterieCuillere);
            }
            //Instanciation de l'objet
            this.tCuilleres.push(new Cuillere_1.Cuillere(this.refScene, 800, yHasard, 4, this));
            //console.log(`Tableau de cuilleres: ${this.tCuilleres}`);
        };
        Jeu.prototype.detruireCuillere = function (index) {
            var indexCuillere = this.tCuilleres.indexOf(index);
            this.tCuilleres.splice(indexCuillere, 1);
            //this.creerCuillere();
            window.setTimeout(this.ressusciterCuillere.bind(this), 1000);
        };
        Jeu.prototype.ressusciterCuillere = function () {
            var yHasard = Math.floor(Math.random() * 600) + 300;
            this.tCuilleres.push(new Cuillere_1.Cuillere(this.refScene, 800, yHasard, 4, this));
        };
        /*************************************************************/
        //GESTION DES DECORS
        /*************************************************************/
        Jeu.prototype.creerDecorFixe = function () {
            this.decorFixe = new DecorFixe_1.DecorFixe(this.refScene, 0, 0, this, this.intNiveau);
        };
        Jeu.prototype.creerDecorDefilant = function () {
            this.tDecorDefilant[0] = new DecorDefilant_1.DecorDefilant(this.refScene, 800, 0, 1, this, this.intNiveau);
            this.tDecorDefilant[1] = new DecorDefilant_1.DecorDefilant(this.refScene, 1600, 0, 1, this, this.intNiveau);
        };
        Jeu.prototype.creerProjectile = function (posX, posY) {
            this.tProjectiles.push(new Projectile_1.Projectile(this.refScene, posX, posY, this.vitesseProjectile, this, this.tCuilleres));
        };
        //Gestion des scores
        Jeu.prototype.gererScore = function (iScore) {
            //console.log('incrementation du score');
            this.GUI.incrementerScore(iScore);
        };
        /*************************************************************/
        //GESTION DES NIVEAUX
        /*************************************************************/
        Jeu.prototype.gererNiveaux = function (score) {
            if (this.intNiveau == 1) {
                if (score == 150) {
                    this.arreter();
                    this.intNiveau = 2;
                    this.montrerNiveau();
                    window.setTimeout(this.demarrer.bind(this), 3000);
                }
            }
            if (this.intNiveau == 2) {
                if (score == 300) {
                    this.arreter();
                    this.ecranRetroaction = new EcranRetro_1.EcranRetro(this.refScene, 0, 0, this, 'victoire');
                }
            }
        };
        Jeu.prototype.perdrePartie = function () {
            this.ecranRetroaction = new EcranRetro_1.EcranRetro(this.refScene, 0, 0, this, 'defaite');
        };
        /*************************************************************/
        //DESTRUCTEUR
        /*************************************************************/
        Jeu.prototype.arreter = function () {
            this.estDemarre = false;
            this.GUI.reset();
            this.GUI = null;
            this.refMinuterieAssiette = null;
            for (var i = 0; i < this.tAssiettes.length; i++) {
                this.tAssiettes[i].arreterAssiette();
            }
            this.tAssiettes.splice(0);
            this.refMinuterieCuillere = null;
            for (var i = 0; i < this.tCuilleres.length; i++) {
                this.tCuilleres[i].arreterCuillere();
            }
            this.tCuilleres.splice(0);
            for (var i = 0; i < this.tDecorDefilant.length; i++) {
                this.tDecorDefilant[i].arreterDefilant();
            }
            this.tDecorDefilant = [];
            this.protagoniste.arreterProtagoniste();
            this.protagoniste = null;
        };
        return Jeu;
    }());
    exports.Jeu = Jeu;
});
//# sourceMappingURL=Jeu.js.map