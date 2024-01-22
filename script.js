let saldo = 0;
const saldoElement = document.getElementById('saldo');
const bedragElement = document.getElementById('bedrag');
const stortenButton = document.getElementById('storten');
const opnemenButton = document.getElementById('opnemen');

function updateSaldo() {
    saldoElement.textContent = saldo;
}

function storten() {
    let bedrag = parseFloat(bedragElement.value);
    if (bedrag > 0) {
        saldo += bedrag;
        updateSaldo();
    }
}

function opnemen() {
    let bedrag = parseFloat(bedragElement.value);
    if (bedrag > 0 && bedrag <= saldo) {
        saldo -= bedrag;
        updateSaldo();
    }
}

stortenButton.addEventListener('click', storten);
opnemenButton.addEventListener('click', opnemen);