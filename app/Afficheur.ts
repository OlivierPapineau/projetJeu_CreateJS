import {Protagoniste} from './Protagoniste';
import {Jeu} from './Jeu';
import {Cuillere} from './Cuillere';
import {ObjVisible} from './ObjVisible';

export class Afficheur extends ObjVisible {

    private score:number = 0;

    public constructor(refScene:createjs.Stage, posX:number, posY:number) {
        super(refScene, posX, posY);

        this.gotoAndStop('normal');
    }

    protected dessiner():void {
        window.lib.clipAfficheur.call(this);
        this.frameBounds = window.lib.clipAfficheur.prototype.framebounds;
    }

    public gererVies(nbVies:number, nbPoints:number):void {
        this['afficheur_vies'].gotoAndStop(`${nbVies}_vies_${nbPoints}_points`);
    }
}