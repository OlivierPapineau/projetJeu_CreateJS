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
        function Protagoniste(refScene, posX, posY) {
            var _this = _super.call(this, refScene, posX, posY) || this;
            _this.gererToucheDown_lier = _this.gererToucheDown.bind(_this);
            _this.gererToucheUp_lier = _this.gererToucheUp.bind(_this);
            _this.perdreVie_lier = _this.perdreVie.bind(_this);
            _this.refMinuterie = null;
            _this.tTouches = null;
            window.onkeydown = _this.gererToucheDown_lier;
            window.onkeyup = _this.gererToucheUp_lier;
            _this.tTouches = new Array();
            //tAssiettes
            //tCuilleres
            _this.addEventListener('tick', _this.perdreVie_lier);
            for (var intCpt = 0; intCpt <= 3; intCpt++) {
                _this.tTouches[intCpt] = false;
            }
            return _this;
        }
        Protagoniste.prototype.dessiner = function () {
            window.lib.clipTimmy.call(this);
            this.frameBounds = window.lib.clipTimmy.prototype.frameBounds;
        };
        Protagoniste.prototype.gererToucheDown = function (e) {
            if (this.refMinuterie === null) {
                this.refMinuterie = window.setInterval(this.faireBougerProtago.bind(this), 35);
            }
            switch (e.keyCode) {
                case 37:
                    this.tTouches[0] = true;
                    e.preventDefault();
                    break;
                case 38:
                    this.tTouches[1] = true;
                    e.preventDefault();
                    break;
                case 39:
                    this.tTouches[2] = true;
                    e.preventDefault();
                    break;
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
                case 37:
                    this.tTouches[0] = false;
                    e.preventDefault();
                    break;
                case 38:
                    this.tTouches[1] = false;
                    e.preventDefault();
                    break;
                case 39:
                    this.tTouches[2] = false;
                    e.preventDefault();
                    break;
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
                this.x = this.x - 4;
            }
            if (this.tTouches[1] == true) {
                this.y = this.y - 4;
            }
            //flèche droite
            if (this.tTouches[2] == true) {
                this.x = this.x + 4;
            }
            //flèche bas
            if (this.tTouches[3] == true) {
                this.y = this.y + 4;
            }
        };
        Protagoniste.prototype.perdreVie = function () {
        };
        Protagoniste.prototype.tirerProjectile = function () {
            console.log('Nouveau projectile');
        };
        return Protagoniste;
    }(ObjVisible_1.ObjVisible));
    exports.Protagoniste = Protagoniste;
});
//# sourceMappingURL=Protagoniste.js.map