camera.getKeys = function() {
    return "w,s";
}

camera.update = function() {
    if (Input.getKey(Key.W))
        camera.setPosition(+Vector3.up.mul(sys.deltaTime * 10))
    if (Input.getKey(Key.S))
        camera.setPosition(-Vector3.up.mul(sys.deltaTime * 10))
}