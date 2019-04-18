"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var ObjMobile_1 = require("./ObjMobile");
var Cuillere = /** @class */ (function (_super) {
    __extends(Cuillere, _super);
    function Cuillere(refScene, posX, posY, vitesse) {
        return _super.call(this, refScene, posX, posY, vitesse) || this;
    }
    Cuillere.prototype.dessiner = function () {
        window.lib.clipCuillere.call(this);
        this.frameBounds = window.lib.clipCuillere.prototype.framebounds;
    };
    Cuillere.prototype.gererFinScene = function () {
        //super.arreter();
    };
    /**
    *
    * METHODE SPECIFIQUES A L'ANTAGONISTE
    *
    */
    Cuillere.prototype.attaquer = function () {
    };
    return Cuillere;
}(ObjMobile_1.ObjMobile));
exports.Cuillere = Cuillere;
