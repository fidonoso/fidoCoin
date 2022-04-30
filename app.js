const Block=require("./bloque")
const BlockChain=require("./blockChain")
const Transaction=require("./transacciones")

let fidoCoin=new BlockChain()

// console.log("Minando Bloque 1...")
// fidoCoin.agregarBloque(new Block('16/10/2018', {cantidad: 10}))

// console.log("Minando Bloque 2...")
// fidoCoin.agregarBloque(new Block('18/10/2018', {cantidad: 40}))

// console.log("Minando Bloque 3...")
// fidoCoin.agregarBloque(new Block('29/10/2018', {cantidad: 1}))

// console.log(fidoCoin.validarChain())

// fidoCoin.chain[1].data={cantidad: 200}
// fidoCoin.chain[1].hash=fidoCoin.chain[1].calcularHash()
// console.log(fidoCoin.validarChain())

fidoCoin.agregarTransaction(new Transaction('fidonoso', 'tecsia', 100))
fidoCoin.agregarTransaction(new Transaction('cristobal', 'leon', 50))

console.log('Comienza minado 1')
fidoCoin.minarTransaccionesPendientes('fidonoso')
console.log('Comienza minado 2')
fidoCoin.minarTransaccionesPendientes('fidonoso')
console.log('Comienza minado 3')
fidoCoin.minarTransaccionesPendientes('fidonoso')

console.log('El balance de fidonoso es:', fidoCoin.getBalanceOfAddress('fidonoso'))
console.log(JSON.stringify(fidoCoin, null, 4))