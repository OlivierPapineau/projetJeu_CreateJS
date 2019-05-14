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
define(["require", "exports", "./Sons"], function (require, exports, Sons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SonFX = /** @class */ (function (_super) {
        __extends(SonFX, _super);
        function SonFX(strUrlson, arrExtAlt, idSon, maxNumber) {
            var _this = _super.call(this, strUrlson, arrExtAlt, idSon, maxNumber, 0) || this;
            console.log("sonfx");
            return _this;
        }
        SonFX.prototype.demarrerSon = function () {
            _super.prototype.demarrerSon.call(this);
        };
        SonFX.prototype.arreterSon = function () {
            //console.log("decharger");
        };
        return SonFX;
    }(Sons_1.Sons));
    exports.SonFX = SonFX;
});
//# sourceMappingURL=SonFX.js.map