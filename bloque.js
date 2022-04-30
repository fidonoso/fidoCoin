const SHA256=require('crypto-js/sha256')

module.exports=class Block{
    constructor(timestamp, transactions, hashAnterior=''){
        this.timestamp=timestamp;
        this.transactions=transactions;
        this.hashAnterior=hashAnterior;
        this.hash=this.calcularHash()
        this.picotazos=0

    }
    calcularHash(){
        return SHA256(this.timestamp+this.hashAnterior+JSON.stringify(this.transactions)+this.picotazos).toString()
    }
    minarBloque(dificultad){
        while(this.hash.substring(0, dificultad) != Array(dificultad+1).join('0')){
            this.picotazos++;
            this.hash=this.calcularHash()
        }
        console.log(`Bloque minado : ${this.hash}`)
    }
}