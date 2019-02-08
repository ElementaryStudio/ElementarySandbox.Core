go.onAwake = function(){
    $("Canvas>BlockMenu>Reset>[Button]").onClick.AddListener(function() {
        game.control.loadLevel(2);
    });
    $("Canvas>BlockMenu>Exit>[Button]").onClick.AddListener(function() {
        game.control.loadLevel(1);
    });
    $("Canvas>BlockMenu>Save>[Button]").interactable = false;

    
    if(light.IsAvailable())
    {
        light.GetGlobal().intensity = 250;

        game.animation.SmoothChange(250, 0.5, 3, function(x){
            light.GetGlobal().intensity = x;
        })
    }
}


