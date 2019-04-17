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
    var Assiette = /** @class */ (function (_super) {
        __extends(Assiette, _super);
        function Assiette(refScene, posX, posY) {
            return _super.call(this, refScene, posX, posY) || this;
        }
        Assiette.prototype.dessiner = function () {
            window.lib.clipAssiette.call(this);
            this.frameBounds = window.lib.clipAssiette.prototype.framebounds;
        };
        return Assiette;
    }(ObjMobile_1.ObjMobile));
    exports.Assiette = Assiette;
});
//# sourceMappingURL=Assiette.js.map