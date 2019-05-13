import { ObjVisible } from "./ObjVisible";
import {Jeu} from "./Jeu";

export class DecorFixe extends ObjVisible {

    //private niveau:number = null;

    public constructor(refScene:createjs.Stage, posX:number, posY:number, refJeu:Jeu, niveau:number, redimMax:number) {
        super(refScene, posX, posY, redimMax);

        //this.dessiner();

        this.gotoAndStop(`niveau_${niveau}`);
    }

    protected dessiner() {
        window.lib.clipDecorFixe.call(this);
        this.frameBounds = window.lib.clipDecorFixe.prototype.framebounds;
    }
}