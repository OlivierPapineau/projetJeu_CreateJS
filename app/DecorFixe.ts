import { ObjVisible } from "./ObjVisible";
import {Jeu} from "./Jeu";

export class DecorFixe extends ObjVisible {

    public constructor(refScene:createjs.Stage, posX:number, posY:number, refJeu:Jeu) {
        super(refScene, posX, posY);

        this.dessiner();
    }

    protected dessiner() {
        window.lib.clipDecorFixe.call(this);
        this.frameBounds = window.lib.clipDecorFixe.prototype.framebounds;
    }
}