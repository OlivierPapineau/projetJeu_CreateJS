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
    var Afficheur = /** @class */ (function (_super) {
        __extends(Afficheur, _super);
        function Afficheur(refScene, posX, posY, refJeu) {
            var _this = _super.call(this, refScene, posX, posY) || this;
            _this.score = 0;
            _this.refJeu = null;
            _this.refJeu = refJeu;
            _this.gotoAndStop('normal');
            return _this;
        }
        Afficheur.prototype.dessiner = function () {
            window.lib.clipAfficheur.call(this);
            this.frameBounds = window.lib.clipAfficheur.prototype.framebounds;
        };
        Afficheur.prototype.gererVies = function (nbVies, nbPoints) {
            this['afficheur_vies'].gotoAndStop(nbVies + "_vies_" + nbPoints + "_points");
        };
        Afficheur.prototype.incrementerScore = function (iScore) {
            this.score += iScore;
            this['afficheur_score']['score'].text = this.score;
            console.log("score: " + this.score);
            this.refJeu.gererNiveaux(this.score);
        };
        Afficheur.prototype.reset = function () {
            _super.prototype.arreter.call(this);
        };
        return Afficheur;
    }(ObjVisible_1.ObjVisible));
    exports.Afficheur = Afficheur;
});
//# sourceMappingURL=Afficheur.js.map