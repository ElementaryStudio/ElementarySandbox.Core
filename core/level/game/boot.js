go.onAwake = function(){
    var btn = $("Canvas>BlockMenu>Reset>[Button]");
    btn.onClick.AddListener(function() {
        btn.interactable = false;
        // fix sound clip play :D
        game.TaskManager().AddTask(0.2, function(){
            game.control.loadLevel(2);
        });
    });
    $("Canvas>BlockMenu>Exit>[Button]").onClick.AddListener(function() {
        game.control.loadLevel(1);
    });

    
    if(light.IsAvailable())
    {
        light.GetGlobal().intensity = 250;

        game.animation.SmoothChange(250, 0.5, 3, function(x){
            light.GetGlobal().intensity = x;
        })
    }
}


