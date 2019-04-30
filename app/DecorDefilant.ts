import {Jeu} from './Jeu';
import { ObjVisible } from './ObjVisible';

export class DecorDefilant extends ObjVisible {

    private vitesse:number = null;
    private sens:number = -1;
    private avancer_lier = this.avancer.bind(this);
    private limiteScene:number = -800;

    public constructor(refScene:createjs.Stage, posX:number, posY:number, vitesse:number, refJeu:Jeu, niveau:number) {
        super(refScene, posX, posY);

        this.vitesse = vitesse;

        this.gotoAndStop(`niveau_${niveau}`);

        this.addEventListener('tick', this.avancer_lier);
    }

    protected dessiner() {
        window.lib.clipDecorDefilant.call(this);
        this.frameBounds = window.lib.clipDecorDefilant.prototype.framebounds;
    }

    private avancer():void {
        if(this.x == this.limiteScene) {
            this.x = 800;
        }

        this.x += this.sens * this.vitesse;
    }

    protected gererFinScene() {

    }

    public arreterDefilant():void {
        this.vitesse = 0;
        this.sens = 0;
    }

}