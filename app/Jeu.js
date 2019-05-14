define(["require", "exports", "./Protagoniste", "./Assiette", "./Cuillere", "./DecorFixe", "./DecorDefilant", "./Projectile", "./Afficheur", "./EcranNiveau", "./EcranIntro", "./EcranRetro", "./ProjectileSpecial"], function (require, exports, Protagoniste_1, Assiette_1, Cuillere_1, DecorFixe_1, DecorDefilant_1, Projectile_1, Afficheur_1, EcranNiveau_1, EcranIntro_1, EcranRetro_1, ProjectileSpecial_1) {
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
            this.tProjectilesSpeciaux = [];
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
            //Gestion des tableaux
            this.tCuilleres = [];
            this.tAssiettes = [];
            this.tDecorDefilant = [];
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
            this.ecranIntro = new EcranIntro_1.EcranIntro(this.refScene, 0, 0, this, -1);
        };
        Jeu.prototype.montrerNiveau = function () {
            var niveau = this.intNiveau;
            this.ecranNiveau = new EcranNiveau_1.EcranNiveau(this.refScene, 0, 0, this, niveau, -1);
            window.setTimeout(this.demarrer.bind(this), 3000);
            // if(this.ecranIntro != null || this.ecranIntro != undefined) {
            //   window.setTimeout(this.ecranNiveau.arreterEcranNiveau(), 3000);
            // }
        };
        /*************************************************************/
        //GESTION DE LA PROFONDEUR
        /*************************************************************/
        // private gererProfondeur():void {
        //   this.refScene.sortChildren(this.comparerY.bind(this));
        // }
        // private comparerY(a:any, b:any):number {
        //   if(a.y > b.y)
        //     return 1;
        //   else if (a.y < b.y)
        //     return -1;
        //   else
        //     return 0;
        // }
        /*************************************************************/
        //GESTION DE L'INTERFACE
        /*************************************************************/
        Jeu.prototype.creerGUI = function () {
            this.GUI = new Afficheur_1.Afficheur(this.refScene, 0, 0, this, -1);
        };
        /*************************************************************/
        //GESTION DU PROTAGONISTE
        /*************************************************************/
        Jeu.prototype.creerProtagoniste = function () {
            this.protagoniste = new Protagoniste_1.Protagoniste(this.refScene, 125, 400, this.tCuilleres, this.tAssiettes, this, this.GUI, 1);
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
            this.tAssiettes.push(new Assiette_1.Assiette(this.refScene, 800, yHasard, 2, 1));
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
            this.tCuilleres.push(new Cuillere_1.Cuillere(this.refScene, 800, yHasard, 4, this, -1));
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
            this.tCuilleres.push(new Cuillere_1.Cuillere(this.refScene, 800, yHasard, 4, this, 1));
        };
        /*************************************************************/
        //GESTION DES DECORS
        /*************************************************************/
        Jeu.prototype.creerDecorFixe = function () {
            this.decorFixe = new DecorFixe_1.DecorFixe(this.refScene, 0, 0, this, this.intNiveau, -1);
        };
        Jeu.prototype.creerDecorDefilant = function () {
            this.tDecorDefilant[0] = new DecorDefilant_1.DecorDefilant(this.refScene, 800, 0, 1, this, this.intNiveau, -1);
            this.tDecorDefilant[1] = new DecorDefilant_1.DecorDefilant(this.refScene, 1600, 0, 1, this, this.intNiveau, -1);
        };
        Jeu.prototype.creerProjectile = function (posX, posY) {
            this.tProjectiles.push(new Projectile_1.Projectile(this.refScene, posX, posY, this.vitesseProjectile, this, this.tCuilleres, 1));
        };
        Jeu.prototype.creerProjectileSpecial = function (posX, posY) {
            this.tProjectilesSpeciaux.push(new ProjectileSpecial_1.ProjectileSpecial(this.refScene, posX, posY, this.vitesseProjectile, this, this.tCuilleres, 1));
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
                if (score >= 1000) {
                    this.arreter();
                    this.intNiveau = 2;
                    this.montrerNiveau();
                    window.setTimeout(this.demarrer.bind(this), 3000);
                }
            }
            if (this.intNiveau == 2) {
                if (score >= 2000) {
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
            this.tAssiettes = null;
            console.log(this.tAssiettes);
            this.refMinuterieCuillere = null;
            for (var i = 0; i < this.tCuilleres.length; i++) {
                this.tCuilleres[i].arreterCuillere();
            }
            this.tCuilleres = null;
            for (var i = 0; i < this.tDecorDefilant.length; i++) {
                this.tDecorDefilant[i].arreterDefilant();
            }
            this.tDecorDefilant = null;
            this.protagoniste.arreterProtagoniste();
            this.protagoniste = null;
        };
        return Jeu;
    }());
    exports.Jeu = Jeu;
});
//# sourceMappingURL=Jeu.js.map