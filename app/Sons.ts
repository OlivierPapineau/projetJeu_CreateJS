import Sound = createjs.Sound;
import AbstractSoundInstance = createjs.AbstractSoundInstance;

export class Sons {

    protected _strURLson:string="";         //chemin vers le son
    protected _idSon:string=null;           //identifiant du son
    protected _finChargement:boolean=false; //booléen de préchargement terminé
    protected _instanceSon:AbstractSoundInstance=null; //instance du son attaché
    protected _maxNumber=0;                 //nombre de pistes pour ce son
    protected _nbLoops=0;                   //nombre de boucles

    public constructor(strUrlson:string, arrExtAlt:Array<string>, idSon:string, maxNumber:number, loops:number){
        this._strURLson=strUrlson;
        //Identifiant du son
        this._idSon=idSon;
        //Nombre de piste maximum pour ce son...
        this._maxNumber=maxNumber;
        this._nbLoops=loops;
        createjs.Sound.alternateExtensions = arrExtAlt;
        //Précharge le son.
        createjs.Sound.addEventListener("fileload", this.finirChargement.bind(this));
        //Enregistre le son auprès de l'objet Sound
        createjs.Sound.registerSound(this._strURLson, this._idSon, this._maxNumber);
    }

    protected finirChargement(){
        createjs.Sound.removeEventListener("fileload", this.finirChargement.bind(this));
        this._finChargement=true;
    }

    public demarrerSon(){
        if(this._finChargement==true){
            this._instanceSon= createjs.Sound.play(this._idSon, {loop:this._nbLoops});
        }
        else{
            console.log("Son non chargé, en attente...");
        }
    }

    public arreterSon(){
        if(this._instanceSon!=null){
            this._instanceSon.stop();
            this._instanceSon=null;
        }
    }
}