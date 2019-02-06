$("Canvas>BlockMenu>Reset>[Button]").onClick.AddListener(function() {
    game.control.loadLevel(2);
});
$("Canvas>BlockMenu>Exit>[Button]").onClick.AddListener(function() {
    game.control.loadLevel(1);
});
$("Canvas>BlockMenu>Save>[Button]").interactable = false;


