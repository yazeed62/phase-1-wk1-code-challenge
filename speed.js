function speedDectotor(speed){
    const speedlimit =70;
    const points = 1;
    if (speed <= speedlimit){
        return "Ok";
    } else {
        let points= Math.floor((speed-speedlimit)/5)
        if (points <= 12){
            return points;
        }else{
            return "Licenced suspended";
        }
    }
}
console.log (speedDectotor(""))