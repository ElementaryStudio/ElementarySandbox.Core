

go.IsAssigned = function() {
    return go.thisButton.interactable;
}
go.onAwake = function(){
    go.thisButton = go.GetComponent("Button");
    go.thisButton.onClick.AddListener(function(){
        if(!go.IsAssigned) return;
        go.UnselectAll();
        thisButton.GetComponent("Image").color = selectedColor;
        go.onClick.Invoke(go);
    })
}

go.UnselectAll = function(){
    go.grid.forEach(element => {
        element.Value.gameObject.GetComponent("Image").color = go.defaultColor;
    });
}