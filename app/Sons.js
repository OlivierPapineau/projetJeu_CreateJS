define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sons = /** @class */ (function () {
        function Sons(strUrlson, arrExtAlt, idSon, maxNumber, loops) {
            this._strURLson = ""; //chemin vers le son
            this._idSon = null; //identifiant du son
            this._finChargement = false; //booléen de préchargement terminé
            this._instanceSon = null; //instance du son attaché
            this._maxNumber = 0; //nombre de pistes pour ce son
            this._nbLoops = 0; //nombre de boucles
            this._strURLson = strUrlson;
            //Identifiant du son
            this._idSon = idSon;
            //Nombre de piste maximum pour ce son...
            this._maxNumber = maxNumber;
            this._nbLoops = loops;
            createjs.Sound.alternateExtensions = arrExtAlt;
            //Précharge le son.
            createjs.Sound.addEventListener("fileload", this.finirChargement.bind(this));
            //Enregistre le son auprès de l'objet Sound
            createjs.Sound.registerSound(this._strURLson, this._idSon, this._maxNumber);
        }
        Sons.prototype.finirChargement = function () {
            createjs.Sound.removeEventListener("fileload", this.finirChargement.bind(this));
            this._finChargement = true;
        };
        Sons.prototype.demarrerSon = function () {
            if (this._finChargement == true) {
                this._instanceSon = createjs.Sound.play(this._idSon, { loop: this._nbLoops });
            }
            else {
                console.log("Son non chargé, en attente...");
            }
        };
        Sons.prototype.arreterSon = function () {
            if (this._instanceSon != null) {
                this._instanceSon.stop();
                this._instanceSon = null;
            }
        };
        return Sons;
    }());
    exports.Sons = Sons;
});
//# sourceMappingURL=Sons.js.map