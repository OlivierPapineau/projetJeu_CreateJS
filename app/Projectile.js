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
        function Projectile(refScene, posX, posY, vitesse, tCuillere) {
            var _this = _super.call(this, refScene, posX, posY) || this;
            _this.avancer_lier = _this.avancer.bind(_this);
            _this.ref_tCuilleres = [];
            Projectile.vitesse = vitesse;
            _this.ref_tCuilleres = tCuillere;
            console.log(_this.ref_tCuilleres);
            window.setInterval(_this.detecterCollision.bind(_this), 1000 / 10);
            _this.addEventListener('tick', _this.avancer_lier);
            _this.play();
            return _this;
        }
        Projectile.prototype.dessiner = function () {
            window.lib.clipMunition.call(this);
            this.frameBounds = window.lib.clipMunition.prototype.framebounds;
        };
        Projectile.prototype.avancer = function () {
            this.x += Projectile.vitesse;
            if (this.x > 800) {
                this.arreter();
            }
        };
        Projectile.prototype.detecterCollision = function () {
            var hitBox = this.getTransformedBounds();
            for (var i = 0; i < this.ref_tCuilleres.length; i++) {
                var hitBoxCuillere = this.ref_tCuilleres[i].getTransformedBounds();
                if (hitBox.intersects(hitBoxCuillere)) {
                    this.ref_tCuilleres[i].arreterCuillere();
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