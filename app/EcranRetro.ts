import {Jeu} from './Jeu';
import { ObjVisible } from './ObjVisible';

export class EcranRetro extends ObjVisible {

    private refJeu:Jeu = null;
    private recommencer_lier = this.recommencer.bind(this);

    public constructor(refScene:createjs.Stage, posX:number, posY:number, refJeu:Jeu, etat:string) {
        super(refScene, posX, posY);

        this.refJeu = refJeu;

        this.gotoAndStop(`${etat}`);
        this['bouton_recommencer'].addEventListener('click', this.recommencer_lier);
    }

    protected dessiner() {
        window.lib.clipRetroaction.call(this);
        this.frameBounds = window.lib.clipRetroaction.prototype.frameBounds;
    }

    private recommencer():void {
        document.location.reload(true);
    }

    public arreterEcranRetroaction():void {
        super.arreter();
    }

}