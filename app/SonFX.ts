import {Sons} from "./Sons";

export class SonFX extends Sons{

    public constructor(strUrlson:string,arrExtAlt:Array<string>, idSon:string , maxNumber:number){
        super(strUrlson,arrExtAlt,idSon, maxNumber, 0);
        console.log("sonfx");
    }
    public demarrerSon(){
        super.demarrerSon();
    }
    public arreterSon(){
        //console.log("decharger");
    }
}
