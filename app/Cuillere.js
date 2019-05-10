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
define(["require", "exports", "./ObjMobile"], function (require, exports, ObjMobile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Cuillere = /** @class */ (function (_super) {
        __extends(Cuillere, _super);
        function Cuillere(refScene, posX, posY, vitesse, jeu) {
            var _this = _super.call(this, refScene, posX, posY, vitesse) || this;
            _this.ref_Jeu = null;
            _this.ref_Jeu = jeu;
            _this.gotoAndPlay('marche');
            return _this;
        }
        Cuillere.prototype.dessiner = function () {
            window.lib.clipCuillere.call(this);
            this.frameBounds = window.lib.clipCuillere.prototype.framebounds;
        };
        Cuillere.prototype.mourir = function () {
            this.gotoAndPlay('mort');
            window.clearInterval();
            this.ref_Jeu.detruireCuillere(this);
            window.setTimeout(this.arreter.bind(this), 1500);
        };
        Cuillere.prototype.gererFinScene = function () {
            //super.arreter();
        };
        Cuillere.prototype.arreterCuillere = function () {
            console.log('ARRETER CUILLERE');
            _super.prototype.arreter.call(this);
        };
        return Cuillere;
    }(ObjMobile_1.ObjMobile));
    exports.Cuillere = Cuillere;
});
//# sourceMappingURL=Cuillere.js.map