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
    var EcranRetro = /** @class */ (function (_super) {
        __extends(EcranRetro, _super);
        function EcranRetro(refScene, posX, posY, refJeu, etat) {
            var _this = _super.call(this, refScene, posX, posY) || this;
            _this.refJeu = null;
            _this.recommencer_lier = _this.recommencer.bind(_this);
            _this.refJeu = refJeu;
            _this.gotoAndStop("" + etat);
            _this['bouton_recommencer'].addEventListener('click', _this.recommencer_lier);
            return _this;
        }
        EcranRetro.prototype.dessiner = function () {
            window.lib.clipRetroaction.call(this);
            this.frameBounds = window.lib.clipRetroaction.prototype.frameBounds;
        };
        EcranRetro.prototype.recommencer = function () {
            document.location.reload(true);
        };
        EcranRetro.prototype.arreterEcranRetroaction = function () {
            _super.prototype.arreter.call(this);
        };
        return EcranRetro;
    }(ObjVisible_1.ObjVisible));
    exports.EcranRetro = EcranRetro;
});
//# sourceMappingURL=EcranRetro.js.map