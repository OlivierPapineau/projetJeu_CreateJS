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
    var ObjMobile = /** @class */ (function (_super) {
        __extends(ObjMobile, _super);
        function ObjMobile(refScene, posX, posY, vitesse) {
            var _this = _super.call(this, refScene, posX, posY) || this;
            _this.vitesse = null;
            _this.sens = -1;
            _this.avancer_lier = _this.avancer.bind(_this);
            _this.vitesse = vitesse;
            _this.addEventListener('tick', _this.avancer_lier);
            return _this;
        }
        ObjMobile.prototype.avancer = function () {
            if (this.x == -100) {
                this.x = 800;
                this.y = Math.floor(Math.random() * 400) + ObjMobile.limiteY_scene;
            }
            this.x += this.sens * this.vitesse;
        };
        ObjMobile.prototype.arreter = function () {
            _super.prototype.arreter.call(this);
            this.removeEventListener('tick', this.avancer_lier);
        };
        ObjMobile.limiteY_scene = 300;
        return ObjMobile;
    }(ObjVisible_1.ObjVisible));
    exports.ObjMobile = ObjMobile;
});
//# sourceMappingURL=ObjMobile.js.map