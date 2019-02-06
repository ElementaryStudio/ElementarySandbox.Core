particle.getMass = function() {
    return 200.776;
}
particle.getLifeTime = function() {
    return 4.4E-27;
}
particle.getQuantumNumber = function(n) {
    switch(n){
        case "S": return 1;
        case "C": return 1;
        case "B": return 1;
    }
}
particle.getQuarkGrid = function() {
    return "[u|u|u]";
}