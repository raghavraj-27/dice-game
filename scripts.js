const img_1 = "/images/dice1";
const img_2 = "/images/dice1";
const img_3 = "/images/dice1";
const img_4 = "/images/dice1";
const img_5 = "/images/dice1";
const img_6 = "/images/dice1";

var load_1, load_2;

function check(val) {
    if(val === 1) {
        return img_1;
    } else if(val == 2) {
        return img_2;
    } else if(val === 3) {
        return img_3;
    } else if(val === 4) {
        return img_4;
    } else if(val === 5) {
        return img_5;
    } 
    return img_6;
}

function refresh() {
    var p1 = Math.random(); 
    var p1 = floor(p1) * 6 +1;

    var p2 = Math.random(); 
    var p2 = floor(p2) * 6 +1;

    load_1 = check(p1);
    load_2 = check(p2);
}