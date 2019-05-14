import {Cuillere} from './Cuillere';
import {Jeu} from './Jeu';
import { Projectile } from './Projectile';

export class ProjectileSpecial extends Projectile {

    private nombreVies:number = 2;

    public constructor(refScene:createjs.Stage, posX:number, posY:number, vitesse:number, refJeu:Jeu, ref_tCuilleres:Array<Cuillere>, redimMax:number) {
        super(refScene, posX, posY, vitesse, refJeu, ref_tCuilleres, redimMax);
        console.log(this.nombreVies);
    }

    protected dessiner():void {
        window.lib.clipMunitionSpeciale.call(this);
        this.frameBounds = window.lib.clipMunitionSpeciale.prototype.frameBounds;
    }

    protected detecterCollision():void {
        console.log(`SpecialBounds: ${this.getBounds}`);
        const hitBox = this.getTransformedBounds();

        for(let i:number = 0; i < this.tCuilleres.length; i++) {
            let hitBoxCuillere = this.tCuilleres[i].getTransformedBounds();

            if(hitBox.intersects(hitBoxCuillere)) {
                console.log('COLLISION SPECIALE');
                this.tCuilleres[i].mourir();
                //this.refJeu.detruireCuillere(i);
                this.refJeu.gererScore(100);
                this.nombreVies -= 1;

                if(this.nombreVies < 1) {
                    this.arreterMunitionSpeciale();
                }
            }
        }
    }

    public arreterMunitionSpeciale():void {
        super.arreter();
    }

}