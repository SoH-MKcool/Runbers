import Rank from "../rank.js";
import Utilities from "../utilities.js";
let rank = new Rank;
let r = {
    rank: "Bronze Tier",
    className: "tier Bronze"
};

let r1 = {
    rank: "Emerald Tier",
    className: "tier Emerald"
};

let u = new Utilities;

console.log(rank.updateRank(20))
console.log(r);

console.log(`updateRank() TEST:\n
Test 1(true): ${u.isEqual(r, rank.updateRank(20))} \n
Test 2(false): ${u.isNotEqual(r, rank.updateRank(20))} \n
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n
test 3(false): ${u.isEqual(r1, rank.updateRank(20))}\n
test 4(true): ${u.isNotEqual(r1, rank.updateRank(20))}\n
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n
test 5(true): ${u.isEqual(r1, rank.updateRank(75))}\n
test 6(false): ${u.isNotEqual(r1, rank.updateRank(75))}\n
test 7(): ${u.isEqual(r1, rank.updateRank(""))}
`);

// console.log(`opperations(add) TEST:\n
// Test 1(true):${u.opperations(4,8,"add")}, ${u.isEqual(12, u.opperations(4,8,"add"))}\n
// Test 2(true):${u.opperations(5,8,"addition")}, ${u.isEqual(13, u.opperations(5,8,"addition"))}\n
// Test 3(true):${u.opperations(10,10,"+")}, ${u.isEqual(20, u.opperations(10,10,"+"))}\n
// Test 4(false):${u.opperations(10,50,"+")}, ${u.isEqual(20, u.opperations(10,50,"+"))}\n`);

// console.log(`opperations(sub) TEST:\n
// Test 1(true):${u.opperations(4,8,"sub")}, ${u.isEqual(-4, u.opperations(4,8,"sub"))}\n
// Test 2(true):${u.opperations(10,8,"subtraction")}, ${u.isEqual(2, u.opperations(10,8,"subtraction"))}\n
// Test 3(true):${u.opperations(10,10,"-")}, ${u.isEqual(0, u.opperations(10,10,"-"))}\n
// Test 4(false):${u.opperations(10,50,"-")}, ${u.isEqual(20, u.opperations(10,50,"-"))}\n`);

// console.log(`opperations(multiplication) TEST:\n
// Test 1(true):${u.opperations(4,8,"multiplication")}, ${u.isEqual(32, u.opperations(4,8,"multiplication"))}\n
// Test 2(true):${u.opperations(10,8,"*")}, ${u.isEqual(80, u.opperations(10,8,"*"))}\n
// Test 3(true):${u.opperations(10,10,"x")}, ${u.isEqual(100, u.opperations(10,10,"x"))}\n
// Test 4(false):${u.opperations(10,50,"x")}, ${u.isEqual(50, u.opperations(10,50,"x"))}\n`);

// console.log(`opperations(division) TEST:\n
// Test 1(true):${u.opperations(4,8,"divide")}, ${u.isEqual(0.5, u.opperations(4,8,"divide"))}\n
// Test 2(true):${u.opperations(10,8,"division")}, ${u.isEqual(1.25, u.opperations(10,8,"division"))}\n
// Test 3(true):${u.opperations(10,10,"/")}, ${u.isEqual(1, u.opperations(10,10,"/"))}\n
// Test 4(false):${u.opperations(10,50,"/")}, ${u.isEqual(50, u.opperations(10,50,"/"))}\n
// Test 6(true):${u.opperations(0,0,"/")}, ${u.isEqual(NaN, u.opperations(0,0,"/"))}\n
// Test 7(true):${u.opperations(2,0,"/")}, ${u.isEqual(Infinity, u.opperations(2,0,"/"))}\n
// `);

// console.log(`opperations(error cases) TEST:\n
// Test 1(a not a number):${u.isEqual(0.5, u.opperations(true,8,"divide"))}`);

// console.log(`Test 2(b not a number):${u.isEqual(1.25, u.opperations(10,"sixteen","division"))}`);

// console.log(`Test 3(c a number):${u.isEqual(1, u.opperations(10,10,0))}`);

// console.log(`Test 4(c a non-existent opperation):${u.isEqual(50, u.opperations(10,50,"dividient"))}`);


