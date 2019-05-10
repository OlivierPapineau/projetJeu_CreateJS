import {Cuillere} from './Cuillere';
import {Jeu} from './Jeu';
import {ObjVisible} from './ObjVisible';

export class Projectile extends ObjVisible {

    private avancer_lier = this.avancer.bind(this);
    private static vitesse = null;
    private refJeu:Jeu = null;
    private tCuilleres:Array<Cuillere> = [];

    public constructor(refScene:createjs.Stage, posX:number, posY:number, vitesse:number, refJeu:Jeu, ref_tCuilleres:Array<Cuillere>) {
        super(refScene, posX, posY);

        Projectile.vitesse = vitesse;
        this.refJeu = refJeu;
        this.tCuilleres = ref_tCuilleres;

        this.addEventListener('tick', this.avancer_lier);
        
        this.play();
    }

    protected dessiner():void {
        window.lib.clipMunition.call(this);
        this.frameBounds = window.lib.clipMunition.prototype.framebounds;
    }

    private avancer():void {
        if(this.x <= 800) {
            this.x += Projectile.vitesse;
            this.detecterCollision();
        }
        else {
            console.log('limites du jeu atteintes');
            this.arreter();
            //this.refJeu.arreterProjectile();
        }
    }

    private detecterCollision() {
        console.log(`Bounds: ${this.getBounds()}`);
        const hitBox = this.getTransformedBounds();
        //console.log(hitBox);

        for(let i:number = 0; i < this.tCuilleres.length; i++) {
            let hitBoxCuillere = this.tCuilleres[i].getTransformedBounds();

            if(hitBox.intersects(hitBoxCuillere)) {
                console.log('COLLISION');
                this.tCuilleres[i].mourir();
                //this.refJeu.detruireCuillere(i);
                this.refJeu.gererScore(50);

                this.arreter();
            }
        }
    }

    public arreter():void {
        this.removeEventListener('tick', this.avancer_lier);
        super.arreter();
    }
}