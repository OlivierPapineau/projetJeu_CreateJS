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
    var DecorFixe = /** @class */ (function (_super) {
        __extends(DecorFixe, _super);
        //private niveau:number = null;
        function DecorFixe(refScene, posX, posY, refJeu, niveau, redimMax) {
            var _this = _super.call(this, refScene, posX, posY, redimMax) || this;
            //this.dessiner();
            _this.gotoAndStop("niveau_" + niveau);
            return _this;
        }
        DecorFixe.prototype.dessiner = function () {
            window.lib.clipDecorFixe.call(this);
            this.frameBounds = window.lib.clipDecorFixe.prototype.framebounds;
        };
        return DecorFixe;
    }(ObjVisible_1.ObjVisible));
    exports.DecorFixe = DecorFixe;
});
//# sourceMappingURL=DecorFixe.js.map