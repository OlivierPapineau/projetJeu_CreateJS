import {Cuillere} from './Cuillere';
import {Jeu} from './Jeu';
import { ObjVisible } from './ObjVisible';

export class Projectile extends ObjVisible {

    private avancer_lier = this.avancer.bind(this);
    private static vitesse = null;

    public constructor(refScene:createjs.Stage, posX:number, posY:number, vitesse:number) {
        super(refScene, posX, posY);

        Projectile.vitesse = vitesse;
        this.addEventListener('tick', this.avancer_lier);
        this.play();
    }

    protected dessiner():void {
        window.lib.clipMunition.call(this);
        this.frameBounds = window.lib.clipMunition.prototype.framebounds;
    }

    private avancer():void {
        this.x += Projectile.vitesse;

        if(this.x > 800) {
            this.arreter();
        }
    }

    public arreter() {
        super.arreter();
    }
}