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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ObjVisible = /** @class */ (function (_super) {
        __extends(ObjVisible, _super);
        function ObjVisible(refScene, posX, posY) {
            var _this = _super.call(this) || this;
            _this.scene = null;
            _this.dessiner();
            _this.scene = refScene;
            _this.gotoAndStop(0);
            refScene.addChild(_this);
            _this.x = posX;
            _this.y = posY;
            return _this;
        }
        /**
         * Fonction retournerMonClip
         * @return retourne l'objet
         */
        ObjVisible.prototype.retournerMonClip = function () {
            return this;
        };
        ObjVisible.prototype.retournerScene = function () {
            return this.scene;
        };
        ObjVisible.prototype.arreter = function () {
            this.scene.removeChild(this);
        };
        return ObjVisible;
    }(createjs.MovieClip));
    exports.ObjVisible = ObjVisible;
});
//# sourceMappingURL=ObjVisible.js.map