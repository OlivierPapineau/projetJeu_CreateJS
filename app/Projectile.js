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
    var Projectile = /** @class */ (function (_super) {
        __extends(Projectile, _super);
        function Projectile(refScene, posX, posY, vitesse, refJeu, ref_tCuilleres) {
            var _this = _super.call(this, refScene, posX, posY) || this;
            _this.avancer_lier = _this.avancer.bind(_this);
            _this.refJeu = null;
            _this.tCuilleres = [];
            Projectile.vitesse = vitesse;
            _this.refJeu = refJeu;
            _this.tCuilleres = ref_tCuilleres;
            //this.setBounds(this.x, this.y, 50, 29.2);
            _this.addEventListener('tick', _this.avancer_lier);
            //window.setInterval(this.detecterCollision.bind(this), 1000/30);
            _this.play();
            return _this;
        }
        Projectile.prototype.dessiner = function () {
            window.lib.clipMunition.call(this);
            this.frameBounds = window.lib.clipMunition.prototype.framebounds;
        };
        Projectile.prototype.avancer = function () {
            if (this.x <= 800) {
                this.x += Projectile.vitesse;
                this.detecterCollision();
            }
            else {
                console.log('limites du jeu atteintes');
                this.arreter();
                //this.refJeu.arreterProjectile();
            }
        };
        Projectile.prototype.detecterCollision = function () {
            console.log("Bounds: " + this.getBounds());
            var hitBox = this.getTransformedBounds();
            //console.log(hitBox);
            for (var i = 0; i < this.tCuilleres.length; i++) {
                var hitBoxCuillere = this.tCuilleres[i].getTransformedBounds();
                if (hitBox.intersects(hitBoxCuillere)) {
                    console.log('COLLISION');
                    this.tCuilleres[i].arreterCuillere();
                    this.refJeu.detruireCuillere(i);
                    this.refJeu.gererScore(50);
                }
            }
        };
        Projectile.prototype.transpercer = function () {
        };
        Projectile.prototype.arreter = function () {
            _super.prototype.arreter.call(this);
        };
        Projectile.vitesse = null;
        return Projectile;
    }(ObjVisible_1.ObjVisible));
    exports.Projectile = Projectile;
});
//# sourceMappingURL=Projectile.js.map