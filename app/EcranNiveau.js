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
    var EcranNiveau = /** @class */ (function (_super) {
        __extends(EcranNiveau, _super);
        function EcranNiveau(refScene, posX, posY, refJeu, niveau, redimMax) {
            var _this = _super.call(this, refScene, posX, posY, redimMax) || this;
            _this.refJeu = null;
            _this.refJeu = refJeu;
            console.log(niveau);
            console.log("Niveau: niveau_" + niveau);
            _this.gotoAndStop("niveau_" + niveau);
            window.setTimeout(_this.arreterEcranNiveau.bind(_this), 3000);
            return _this;
        }
        EcranNiveau.prototype.dessiner = function () {
            window.lib.clipNiveaux.call(this);
            this.frameBounds = window.lib.clipNiveaux.prototype.frameBounds;
        };
        EcranNiveau.prototype.arreterEcranNiveau = function () {
            console.log('ceci est mort dans loeuf');
            _super.prototype.arreter.call(this);
        };
        return EcranNiveau;
    }(ObjVisible_1.ObjVisible));
    exports.EcranNiveau = EcranNiveau;
});
//# sourceMappingURL=EcranNiveau.js.map