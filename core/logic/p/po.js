particle.getMass = function() {
    return 0.776;
}
particle.getLifeTime = function() {
    return 4.4E-27;
}
particle.getQuantumNumber = function(n) {
    switch(n){
        case "S": return 0;
        case "C": return 0;
        case "B": return 0;
    }
}
particle.getQuarkGrid = function() {
    return "[u|d-]";
}