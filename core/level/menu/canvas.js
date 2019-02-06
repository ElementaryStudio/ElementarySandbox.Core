
go.onLate = function(){
    ui.log("go.onLate")
    $("Canvas>Exit>[Button]").onClick.AddListener(function() {
        //sys.app.quit();
        ui.error("Заебали блять пикать на эту кнопку, работает она, отъябитесь!");
    });
    $("Canvas>Start>[Button]").onClick.AddListener(function() {
        game.control.loadLevel(2);
    });
    var discordController = $("DiscordManager>[DiscordController]");
    var unlock = function() {
        $("Canvas>Login>[Text]").text = `${game.discord.login()}`;
        $("GlobalCanvas>Version>[Text]").text = `v${sys.app.version}`;
        game.control.DontDestroy($("GlobalCanvas"));
        $("Canvas>Popup").SetActive(false);
        
        discordController.SetPreset("In menu", "")
    };
    if(discordController.IsAuthed() || game.isEditor) 
        unlock();
    else 
        discordController.onConnect.AddListener(unlock);
}
