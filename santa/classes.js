class Factory{
    constructor(){
        this.manoList = [];
    }
    manoAdd(mano){
        this.manoList.push(mano);
    }
    // TODO 9, 10
}
   
class Companion{
    constructor(id, kerNev, vezNev, reszleg){
        this.id = id;
        this.kerNev = kerNev;
        this.vezNev = vezNev;
        this.reszleg = reszleg;
        this.productList = [];
    }
    nevGet(){
        return this.kerNev + " " + this.vezNev;
    }
    productAdd(newProduct){
        this.productList.push(newProduct);
    }
}