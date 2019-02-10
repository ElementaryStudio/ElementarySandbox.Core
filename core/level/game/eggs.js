go.onAwake = function() {
    self.EnablePhysicsContact();
    self.GetComponent("PhysicsComponent").onTriggerEnter.AddListener(function(g) {
        var clip = game.Resources("Sound/effects/voice/NarratorVoice_targetOutOfRange");

        if(!game.audio.IsAvailable(g))
            game.audio.EnableSource(g);
        game.audio.PlayShot(g, clip);
    });
}