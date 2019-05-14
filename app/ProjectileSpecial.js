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
define(["require", "exports", "./Projectile"], function (require, exports, Projectile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProjectileSpecial = /** @class */ (function (_super) {
        __extends(ProjectileSpecial, _super);
        function ProjectileSpecial(refScene, posX, posY, vitesse, refJeu, ref_tCuilleres, redimMax) {
            var _this = _super.call(this, refScene, posX, posY, vitesse, refJeu, ref_tCuilleres, redimMax) || this;
            _this.nombreVies = 2;
            console.log(_this.nombreVies);
            return _this;
        }
        ProjectileSpecial.prototype.dessiner = function () {
            window.lib.clipMunitionSpeciale.call(this);
            this.frameBounds = window.lib.clipMunitionSpeciale.prototype.frameBounds;
        };
        ProjectileSpecial.prototype.detecterCollision = function () {
            console.log("SpecialBounds: " + this.getBounds);
            var hitBox = this.getTransformedBounds();
            for (var i = 0; i < this.tCuilleres.length; i++) {
                var hitBoxCuillere = this.tCuilleres[i].getTransformedBounds();
                if (hitBox.intersects(hitBoxCuillere)) {
                    console.log('COLLISION SPECIALE');
                    this.tCuilleres[i].mourir();
                    //this.refJeu.detruireCuillere(i);
                    this.refJeu.gererScore(100);
                    this.nombreVies -= 1;
                    if (this.nombreVies < 1) {
                        this.arreterMunitionSpeciale();
                    }
                }
            }
        };
        ProjectileSpecial.prototype.arreterMunitionSpeciale = function () {
            _super.prototype.arreter.call(this);
        };
        return ProjectileSpecial;
    }(Projectile_1.Projectile));
    exports.ProjectileSpecial = ProjectileSpecial;
});
//# sourceMappingURL=ProjectileSpecial.js.map