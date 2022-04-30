const Block=require('./bloque')
const Transaction=require('./transacciones')

module.exports=class BlockChain {
    constructor(){
        this.chain=[this.crearBloqueGenesis()]
        this.dificultad=5
        this.pendingTransactions=[]
        this.miningReward=100
    }
    crearBloqueGenesis(){
        return new Block('01/01/2018', 'Bloque Genesis', '0')
    }

    getUltimoBloque(){
        return this.chain[this.chain.length-1]
    }
    // agregarBloque(nuevoBloque){
    //     nuevoBloque.hashAnterior=this.getUltimoBloque().hash
    //     // nuevoBloque.hash=nuevoBloque.calcularHash()
    //     nuevoBloque.minarBloque(this.dificultad)
    //     this.chain.push(nuevoBloque)
    // }
    agregarTransaction(transaction){
        this.pendingTransactions.push(transaction)
    }

    minarTransaccionesPendientes(addressMinero){
        let block = new Block(Date.now(), this.pendingTransactions)
        block.hashAnterior=this.getUltimoBloque().hash
        block.minarBloque(this.dificultad)
        console.log("Se ha minado correctamente el bloque")
        this.chain.push(block)
        this.pendingTransactions=[
            new Transaction(null, addressMinero, this.miningReward)
        ]
    }

    getBalanceOfAddress(address){
        let balance=0
        for(const block of this.chain){
            for(const trans of block.transactions){
                if(trans.fromAddress==address){
                    balance-=trans.amount
                }
                if(trans.toAddress == address){
                    balance+=trans.amount
                }
            }
        }
        return balance
    }

    validarChain(){
        for(let i=1; i<this.chain.length; i++){
            const bloqueActual=this.chain[i]
            const bloqueAnterior=this.chain[i-1]
            if(bloqueActual.hash != bloqueActual.calcularHash()){
                return false
            }
            if(bloqueActual.hashAnterior != bloqueAnterior.hash){
                return false
            }
        }
        return true
    }
}

