
export abstract class ObjVisible extends createjs.MovieClip {
  private scene = null;
  private redimMax = 0;

  public constructor(refScene:createjs.Stage, posX:number, posY:number, uneRedimMax:number) {
    super();
    this.dessiner();
    this.scene = refScene;
    this.gotoAndStop(0);
    refScene.addChild(this);
    this.x = posX;
    this.y = posY;

    this.redimMax = uneRedimMax;

    if(this.redimMax != -1) {
      this.redimensionner();
    }
  }

  /**
   * Fonction retournerMonClip
   * @return retourne l'objet
   */

  protected redimensionner():void {
    let facteurRedim = this.redimMax * (this.y/window.lib.properties.height);
    this.scaleX = facteurRedim;
    this.scaleY = facteurRedim;
  }

  protected retournerMonClip():createjs.MovieClip {
    return this;
  }

  protected abstract dessiner():void;

  protected retournerScene():createjs.Stage {
    return this.scene;
  }

  protected arreter() {
    this.scene.removeChild(this);
  }
}
