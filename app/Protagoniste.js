var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./ObjVisible"], function (require, exports, ObjVisible_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Protagoniste = /** @class */ (function (_super) {
        __extends(Protagoniste, _super);
        //private tAssiettes = null;
        //private tCuilleres = null;
        //private refVies = null;
        function Protagoniste(refScene, posX, posY, tCuilleres, tAssiettes, jeu, gui) {
            var _this = _super.call(this, refScene, posX, posY) || this;
            _this.nombreVies = 3;
            _this.nombrePointsVies = 3;
            _this.invincible = false;
            //Liaison de fonctions
            _this.gererToucheDown_lier = _this.gererToucheDown.bind(_this);
            _this.gererToucheUp_lier = _this.gererToucheUp.bind(_this);
            //Pointeurs
            _this.refMinuterie = null;
            _this.refJeu = null;
            _this.refAfficheur = null;
            //Tableaux
            _this.tTouches = null;
            _this.tCuilleres = [];
            _this.tAssiettes = [];
            //Animations
            _this.gotoAndPlay('marche');
            //Attribution de pointeurs
            _this.tCuilleres = tCuilleres;
            _this.tAssiettes = tAssiettes;
            _this.refJeu = jeu;
            _this.refAfficheur = gui;
            //Attribution de methodes
            window.onkeydown = _this.gererToucheDown_lier;
            window.onkeyup = _this.gererToucheUp_lier;
            _this.tTouches = new Array();
            //Ecouteurs d'evenements
            //this.addEventListener('tick', this.perdrePointVie_lier);
            window.setInterval(_this.detecterCollision.bind(_this), 1000 / 5);
            for (var intCpt = 0; intCpt <= 3; intCpt++) {
                _this.tTouches[intCpt] = false;
            }
            return _this;
        }
        /*************************************************************/
        //GESTION DES COLLISIONS
        /*************************************************************/
        Protagoniste.prototype.detecterCollision = function () {
            if (this.invincible !== true) {
                var hitBox = this.getTransformedBounds();
                for (var i = 0; i < this.tCuilleres.length; i++) {
                    var hitBoxCuillere = this.tCuilleres[i].getTransformedBounds();
                    if (hitBox.intersects(hitBoxCuillere)) {
                        this.etreInvincible();
                    }
                }
                for (var i = 0; i < this.tAssiettes.length; i++) {
                    var hitBoxAssiette = this.tAssiettes[i].getTransformedBounds();
                    if (hitBox.intersects(hitBoxAssiette)) {
                        this.etreInvincible();
                    }
                }
            }
        };
        /*************************************************************/
        //GESTION DES POINTS DE VIE
        /*************************************************************/
        Protagoniste.prototype.etreInvincible = function () {
            this.invincible = true;
            window.setTimeout(this.arreterInvincible.bind(this), 1000);
            this.perdrePointVie();
            this.gotoAndPlay("collision");
        };
        Protagoniste.prototype.arreterInvincible = function () {
            this.invincible = false;
        };
        Protagoniste.prototype.perdrePointVie = function () {
            if (this.nombrePointsVies > 0) {
                this.nombrePointsVies -= 1;
                console.log("Nombre de points de vie: " + this.nombrePointsVies);
                this.gererAffichageVies(this.nombreVies, this.nombrePointsVies);
            }
            if (this.nombrePointsVies === 0) {
                this.perdreVie();
                if (this.nombreVies > 0) {
                    this.nombrePointsVies = 3;
                    console.log(this.nombrePointsVies);
                    this.gererAffichageVies(this.nombreVies, this.nombrePointsVies);
                }
            }
        };
        Protagoniste.prototype.perdreVie = function () {
            if (this.nombreVies > 0) {
                this.nombreVies -= 1;
                console.log("Nombre de vies: " + this.nombreVies);
                this.gererAffichageVies(this.nombreVies, this.nombrePointsVies);
            }
            if (this.nombreVies === 0) {
                console.log('GAME OVER');
                this.gotoAndPlay('mort');
                window.setTimeout(this.mourir.bind(this), 1500);
            }
        };
        Protagoniste.prototype.gererAffichageVies = function (nbVies, nbPoints) {
            this.refAfficheur.gererVies(nbVies, nbPoints);
        };
        //Destructeur du protagoniste
        Protagoniste.prototype.mourir = function () {
            _super.prototype.arreter.call(this);
            window.clearInterval();
            window.onkeydown = null;
            window.onkeyup = null;
            this.refJeu.arreter();
            this.refJeu.perdrePartie();
        };
        /*************************************************************/
        //GESTION DES PROJECTILES
        /*************************************************************/
        Protagoniste.prototype.tirerProjectile = function () {
            console.log('Nouveau projectile');
            this.gotoAndPlay('tir');
            this.refJeu.creerProjectile(this.x, this.y - 80);
        };
        /*************************************************************/
        //GESTION DU CLAVIER
        /*************************************************************/
        Protagoniste.prototype.dessiner = function () {
            window.lib.clipTimmy.call(this);
            this.frameBounds = window.lib.clipTimmy.prototype.frameBounds;
            console.log('hamburger dessiner');
        };
        Protagoniste.prototype.gererToucheDown = function (e) {
            if (this.refMinuterie === null) {
                this.refMinuterie = window.setInterval(this.faireBougerProtago.bind(this), 35);
            }
            switch (e.keyCode) {
                case 65:
                case 37:
                    this.tTouches[0] = true;
                    e.preventDefault();
                    break;
                case 87:
                case 38:
                    this.tTouches[1] = true;
                    e.preventDefault();
                    break;
                case 68:
                case 39:
                    this.tTouches[2] = true;
                    e.preventDefault();
                    break;
                case 83:
                case 40:
                    this.tTouches[3] = true;
                    e.preventDefault();
                    break;
                case 32:
                    //Creation d'un nouveau projectile
                    this.tirerProjectile();
                    break;
            }
        };
        Protagoniste.prototype.gererToucheUp = function (e) {
            switch (e.keyCode) {
                case 65:
                case 37:
                    this.tTouches[0] = false;
                    e.preventDefault();
                    break;
                case 87:
                case 38:
                    this.tTouches[1] = false;
                    e.preventDefault();
                    break;
                case 68:
                case 39:
                    this.tTouches[2] = false;
                    e.preventDefault();
                    break;
                case 83:
                case 40:
                    this.tTouches[3] = false;
                    e.preventDefault();
                    break;
                // case 32 :
                //   this.tTouches[4] = false;
                //   e.preventDefault();
                //   break;
            }
            if (e.keyCode == null) {
                window.clearInterval(this.refMinuterie);
                this.refMinuterie = null;
            }
        };
        Protagoniste.prototype.faireBougerProtago = function () {
            if (this.tTouches[0] == true) {
                if (this.x >= Protagoniste.tLimitesDeplacements.gauche) {
                    this.x = this.x - 4;
                }
            }
            if (this.tTouches[1] == true) {
                if (this.y >= Protagoniste.tLimitesDeplacements.haut) {
                    this.y = this.y - 4;
                }
            }
            //flèche droite
            if (this.tTouches[2] == true) {
                if (this.x <= Protagoniste.tLimitesDeplacements.droite) {
                    this.x = this.x + 4;
                }
            }
            //flèche bas
            if (this.tTouches[3] == true) {
                if (this.y <= Protagoniste.tLimitesDeplacements.bas) {
                    this.y = this.y + 4;
                }
            }
        };
        Protagoniste.prototype.arreterProtagoniste = function () {
            window.clearInterval(1000 / 5);
            window.onkeydown = null;
            window.onkeyup = null;
            _super.prototype.arreter.call(this);
        };
        Protagoniste.tLimitesDeplacements = {
            haut: 300,
            bas: 600,
            gauche: 0,
            droite: 800
        };
        return Protagoniste;
    }(ObjVisible_1.ObjVisible));
    exports.Protagoniste = Protagoniste;
});
//# sourceMappingURL=Protagoniste.js.map