import {Jeu} from './Jeu';
import { ObjVisible } from './ObjVisible';

export class EcranNiveau extends ObjVisible {

    private refJeu:Jeu = null;

    public constructor(refScene:createjs.Stage, posX:number, posY:number, refJeu:Jeu, niveau:number, redimMax:number) {
        super(refScene, posX, posY, redimMax);

        this.refJeu = refJeu;

        console.log(niveau);
        console.log(`Niveau: niveau_${niveau}`);

        this.gotoAndStop(`niveau_${niveau}`);
        window.setTimeout(this.arreterEcranNiveau.bind(this), 3000);
    }

    protected dessiner() {
        window.lib.clipNiveaux.call(this);
        this.frameBounds = window.lib.clipNiveaux.prototype.frameBounds;
    }

    public arreterEcranNiveau():void {
        console.log('ceci est mort dans loeuf')
        super.arreter();
    }

}