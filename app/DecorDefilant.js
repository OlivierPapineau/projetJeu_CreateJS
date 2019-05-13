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
    var DecorDefilant = /** @class */ (function (_super) {
        __extends(DecorDefilant, _super);
        function DecorDefilant(refScene, posX, posY, vitesse, refJeu, niveau, redimMax) {
            var _this = _super.call(this, refScene, posX, posY, redimMax) || this;
            _this.vitesse = null;
            _this.sens = -1;
            _this.avancer_lier = _this.avancer.bind(_this);
            _this.limiteScene = -800;
            _this.vitesse = vitesse;
            _this.gotoAndStop("niveau_" + niveau);
            _this.addEventListener('tick', _this.avancer_lier);
            return _this;
        }
        DecorDefilant.prototype.dessiner = function () {
            window.lib.clipDecorDefilant.call(this);
            this.frameBounds = window.lib.clipDecorDefilant.prototype.framebounds;
        };
        DecorDefilant.prototype.avancer = function () {
            if (this.x == this.limiteScene) {
                this.x = 800;
            }
            this.x += this.sens * this.vitesse;
        };
        DecorDefilant.prototype.gererFinScene = function () {
        };
        DecorDefilant.prototype.arreterDefilant = function () {
            this.vitesse = 0;
            this.sens = 0;
        };
        return DecorDefilant;
    }(ObjVisible_1.ObjVisible));
    exports.DecorDefilant = DecorDefilant;
});
//# sourceMappingURL=DecorDefilant.js.map