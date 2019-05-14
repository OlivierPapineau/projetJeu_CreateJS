import {Sons} from "./Sons";

export class Trame extends Sons{

    public constructor(strUrlson:string,arrExtAlt:Array<string>, idSon:string, maxNumber:number, loops:number){
        super(strUrlson,arrExtAlt,idSon, maxNumber, loops);
        console.log("trame");
    }

    public demarrerSon(){
        //Si une trame ne joue pas
        if(this._instanceSon==null){
            super.demarrerSon();
        }
    }

    public arreterSon(){
        if(this._instanceSon!=null){
            super.arreterSon();
        }
    }
}
