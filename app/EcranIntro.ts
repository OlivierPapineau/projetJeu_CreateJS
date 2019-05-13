import {Jeu} from './Jeu';
import { ObjVisible } from './ObjVisible';

export class EcranIntro extends ObjVisible {

    private refJeu:Jeu = null;
    private pageSuivant_lier = this.pageSuivant.bind(this);
    private pagePrecedent_lier = this.pagePrecedent.bind(this);
    private commencerJeu_lier = this.commencerJeu.bind(this);

    public constructor(refScene:createjs.Stage, posX:number, posY:number, refJeu:Jeu, redimMax:number) {
        super(refScene, posX, posY, redimMax);

        this.refJeu = refJeu;

        this['fleche_suivant'].addEventListener('click', this.pageSuivant_lier);
        this['fleche_precedent'].addEventListener('click', this.pagePrecedent_lier);
        this['bouton_commencer'].addEventListener('click', this.commencerJeu_lier);
    }

    protected dessiner() {
        window.lib.clipEcranTuto.call(this);
        this.frameBounds = window.lib.clipEcranTuto.prototype.frameBounds;
    }

    private pageSuivant():void {
        this.gotoAndStop('etat2');
    }

    private pagePrecedent():void {
        this.gotoAndStop('etat1');
    }

    private commencerJeu():void {
        this.refJeu.montrerNiveau();
        this.arreterEcranIntro();
    }

    public arreterEcranIntro():void {
        super.arreter();
        this.removeEventListener('click', this.pageSuivant_lier);
        this.removeEventListener('click', this.pagePrecedent_lier);
        this.removeEventListener('click', this.commencerJeu_lier);
    }

}