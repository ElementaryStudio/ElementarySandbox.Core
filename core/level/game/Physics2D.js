
go.onStart = function() {
    Physics2D.autoSimulation = false;
}

go.onUpdate = function() {
    if(Physics2D.IsUseExternalCommandModule)
        return;

    if(Physics2D.autoSimulation)
        return;

    var fps = Physics2D.getFPS();
    var lag = fps / sys.app.targetFPS();
    
    if (lag <= 0.5) return;
    if (lag >= 1.0) lag = 1;

    Physics2D.Simulate(sys.fixedDelta() * lag);
}
