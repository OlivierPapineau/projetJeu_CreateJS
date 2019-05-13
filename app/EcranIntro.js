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
    var EcranIntro = /** @class */ (function (_super) {
        __extends(EcranIntro, _super);
        function EcranIntro(refScene, posX, posY, refJeu, redimMax) {
            var _this = _super.call(this, refScene, posX, posY, redimMax) || this;
            _this.refJeu = null;
            _this.pageSuivant_lier = _this.pageSuivant.bind(_this);
            _this.pagePrecedent_lier = _this.pagePrecedent.bind(_this);
            _this.commencerJeu_lier = _this.commencerJeu.bind(_this);
            _this.refJeu = refJeu;
            _this['fleche_suivant'].addEventListener('click', _this.pageSuivant_lier);
            _this['fleche_precedent'].addEventListener('click', _this.pagePrecedent_lier);
            _this['bouton_commencer'].addEventListener('click', _this.commencerJeu_lier);
            return _this;
        }
        EcranIntro.prototype.dessiner = function () {
            window.lib.clipEcranTuto.call(this);
            this.frameBounds = window.lib.clipEcranTuto.prototype.frameBounds;
        };
        EcranIntro.prototype.pageSuivant = function () {
            this.gotoAndStop('etat2');
        };
        EcranIntro.prototype.pagePrecedent = function () {
            this.gotoAndStop('etat1');
        };
        EcranIntro.prototype.commencerJeu = function () {
            this.refJeu.montrerNiveau();
            this.arreterEcranIntro();
        };
        EcranIntro.prototype.arreterEcranIntro = function () {
            _super.prototype.arreter.call(this);
            this.removeEventListener('click', this.pageSuivant_lier);
            this.removeEventListener('click', this.pagePrecedent_lier);
            this.removeEventListener('click', this.commencerJeu_lier);
        };
        return EcranIntro;
    }(ObjVisible_1.ObjVisible));
    exports.EcranIntro = EcranIntro;
});
//# sourceMappingURL=EcranIntro.js.map