const mongoose = require('mongoose')

const bracketSchema = new mongoose.Schema({
    title: String,

    A1: String,
    A2: String,
    B1: String,
    B2: String,
    C1: String,
    C2: String,
    D1: String,
    D2: String,
    E1: String,
    E2: String,
    F1: String,
    F2: String,
    G1: String,
    G2: String,
    H1: String,
    H2: String,

    match49: 'A1 C2',
    match50: 'C1 A2',
    match51: 'E1 G2',
    match52: 'G1 E2',
    match53: 'B1 D2',
    match54: 'D1 B2',
    match55: 'F1 H2',
    match56: 'H1 F2',

    match57: 'W49 W51',
    match58: 'W50 W52',
    match59: 'W52 W55',
    match60: 'W54 W56',

    match61: 'W57 W58',
    match62: 'W59 W60',

    match63: 'L61 L62',

    match64: 'W61 W62'
})

const Brackets = mongoose.model('Bracket', bracketSchema)

module.exports = Brackets