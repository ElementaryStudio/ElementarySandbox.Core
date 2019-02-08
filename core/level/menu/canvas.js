go.onAwake = function(){
    var rect = $("Canvas>Setup>[RectTransform]");


    game.animation.SmoothMove(rect, Vector3(-2000, 2000, 0), 0);
    // reset all child
    game.animation.SmoothAlpha($("Canvas>Menu>Start>[RectTransform]"), 0, 0);
    game.animation.SmoothAlpha($("Canvas>Menu>Exit>[RectTransform]"), 0, 0);
    game.animation.SmoothAlpha($("Canvas>Menu>Setting>[RectTransform]"), 0, 0);
    game.animation.SmoothAlpha($("Canvas>Setup>ContentGroup>GraphicContent>[RectTransform]"), 0, 0);
    game.animation.SmoothAlpha($("Canvas>Setup>ContentGroup>PhysicsContent>[RectTransform]"), 0, 0);
    game.animation.SmoothAlpha($("Canvas>Setup>ContentGroup>InfoContent>[RectTransform]"), 0, 0);
    $("Canvas>Setup>ContentGroup>InfoContent>Version>[Text]").text = `v${sys.app.version}`;
    $("Canvas>Setup>ContentGroup>InfoContent>Shadermodel>[Text]").text = `${game.info.GPU.ShaderLevel}`;
    $("Canvas>Setup>ContentGroup>InfoContent>SoftwareLicenseButton>[Button]").onClick.AddListener(function(){
        game.openURL(`file:${folder(`${_content}\\Licenses`)}`);
    });
    

    $("Canvas>Setup>Exit>[Button]").onClick.AddListener(function(){
        game.animation.SmoothMove(rect, Vector3(-1000, 1000, 0), 1);
    });
    $("Canvas>Setup>Save>[Button]").onClick.AddListener(function(){
        // TODO save setting
        game.animation.SmoothMove(rect, Vector3(-1000, 1000, 0), 1);
    });
    $("Canvas>Menu>Setting>[Button]").onClick.AddListener(function(){
        game.animation.SmoothMove(rect, Vector3(0, 0, 0), 0.5);
    })
    
}

var bindEvents = function() {
    $("Canvas>Menu>Exit>[Button]").onClick.AddListener(function() {
        //sys.app.quit();
        ui.error("Заебали блять пикать на эту кнопку, работает она, отъябитесь!");
    });
    $("Canvas>Menu>Start>[Button]").onClick.AddListener(function() {
        game.control.loadLevel(2);
    });
}
var showMenu = function(){
    $("Canvas>Popup").SetActive(false);
    game.animation.SmoothChange(7.0, 0.0, 3.0, (value) => {
        game.
            MainCamera().
            GetComponent("PostProcessVolume").profile.
            GetSetting("DepthOfField").focalLength.SetValue(value);
    });
   
    game.TaskManager().AddTask(3.0, function() {
        game.animation.SmoothAlpha($("Canvas>Menu>Start>[RectTransform]"), 1.0, 4.0);
        game.animation.SmoothAlpha($("Canvas>Menu>Exit>[RectTransform]"), 1.0, 4.0);
        game.animation.SmoothAlpha($("Canvas>Menu>Setting>[RectTransform]"), 1.0, 4.0);
    });
}

go.onLate = function(){
    bindEvents();
    
    var discordController = $("DiscordManager>[DiscordController]");
    var unlock = function() {
        var login = $("Canvas>Login>[Text]");
        if(game.isEditor)
            login.text = `dev#1337`;
        else
            login.text = `${game.discord.login()}`;
        $("GlobalCanvas>Version>[Text]").text = `v${sys.app.version}`;
        game.control.DontDestroy($("GlobalCanvas"));
        showMenu();
        discordController.SetPreset("In menu", "")
    };
    if(discordController.IsAuthed() || game.isEditor) 
        unlock();
    else 
        discordController.onConnect.AddListener(unlock);
}
