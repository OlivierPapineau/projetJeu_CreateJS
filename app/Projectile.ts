import {Cuillere} from './Cuillere';
import {Jeu} from './Jeu';
import {ObjVisible} from './ObjVisible';

export class Projectile extends ObjVisible {

    private avancer_lier = this.avancer.bind(this);
    private static vitesse = null;
    private ref_tCuilleres:Array<Cuillere> = [];

    public constructor(refScene:createjs.Stage, posX:number, posY:number, vitesse:number, tCuillere:Array<Cuillere>) {
        super(refScene, posX, posY);

        Projectile.vitesse = vitesse;
        this.ref_tCuilleres = tCuillere;
        console.log(this.ref_tCuilleres);


        window.setInterval(this.detecterCollision.bind(this), 1000/10);
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

    private detecterCollision():void {
        const hitBox = this.getTransformedBounds();

        for(let i = 0; i < this.ref_tCuilleres.length; i++) {
            let hitBoxCuillere = this.ref_tCuilleres[i].getTransformedBounds();

            if(hitBox.intersects(hitBoxCuillere)) {
                this.ref_tCuilleres[i].arreterCuillere();
            }
        }
    }

    private transpercer():void {
        
    }

    public arreter():void {
        super.arreter();
    }
}