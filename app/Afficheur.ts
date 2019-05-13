import {Protagoniste} from './Protagoniste';
import {Jeu} from './Jeu';
import {Cuillere} from './Cuillere';
import {ObjVisible} from './ObjVisible';

export class Afficheur extends ObjVisible {

    private score:number = 0;
    private refJeu:Jeu = null;

    public constructor(refScene:createjs.Stage, posX:number, posY:number, refJeu:Jeu) {
        super(refScene, posX, posY);

        this.refJeu = refJeu;

        this.gotoAndStop('normal');
    }

    protected dessiner():void {
        window.lib.clipAfficheur.call(this);
        this.frameBounds = window.lib.clipAfficheur.prototype.framebounds;
    }

    public gererVies(nbVies:number, nbPoints:number):void {
        this['afficheur_vies'].gotoAndStop(`${nbVies}_vies_${nbPoints}_points`);
    }

    public incrementerScore(iScore:number):void {
        this.score += iScore;

        this['afficheur_score']['score'].text = this.score;
        console.log(`score: ${this.score}`);

        this.refJeu.gererNiveaux(this.score);
    }

    public reset():void {
        super.arreter();
    }
}