function getRandomDescription()
{
    switch(Random.Range(0, 11))
    {
        case 0: return "Catching electrons!";
        case 1: return "Creates thermonuclear fusion!";
        case 2: return "Makes BOOM BLYAT!";
        case 3: return "Splits gravitons!";
        case 4: return "Connects anti-quarks!";
        case 5: return "Licks singularity!";
        case 6: return "Modifies neutrino!";
        case 7: return "Plants gravity on graviton!";
        case 8: return "Synthesizes synthesized synthesis!";
        case 9: return "Highlights photons!";
        case 10: return "Traveling in the subatomic world!";
        case 11: return "Playing with quantum particles!";
    }
}

function UpdatePreset()
{
    game.discord().SetPreset("In sandbox mode", getRandomDescription());
}



go.onAwake = function(){
    time.timeScale = 1;
    var btn = $("Canvas>BlockMenu>Reset>[Button]");
    btn.onClick.AddListener(function() {
        btn.interactable = false;
        // fix sound clip play :D
        game.TaskManager().AddTask(0.2, function(){
            game.control.loadLevel(2);
        });
    });
    $("Canvas>BlockMenu>Exit>[Button]").onClick.AddListener(function() {
        game.TaskManager().AddTask(0.2, function(){
            game.control.loadLevel(1);
        });
    });

    
    if(light.IsAvailable())
    {
        light.GetGlobal().intensity = 250;

        game.animation.SmoothChange(250, 0.5, 3, function(x){
            light.GetGlobal().intensity = x;
        })
    }
}

go.onStart = function(){
    if(game.discord().IsAuthed())
        UpdatePreset();
    else 
    {
        game.discord().onConnect.AddListener(function(){
            UpdatePreset();
        })
    }
}


export { getRandomDescription, UpdatePreset }