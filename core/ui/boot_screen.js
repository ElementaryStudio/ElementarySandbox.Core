//# low-js
ui.createImage({
    name: "main_image",
    sprite: none,
    color: "#FFFFFF",
    raycast:{
        target: true
    },
    anchor: "/core/shared/anchors/fullScreen.json"
});
ui.createText({
    text: "Elementary Sandbox",
    color: "#323232",
    font: {
        name: "/core/shader/font/lw3.ttf",
        spacing: 1.2
    },
    paragraph:{
        alig: "MiddleCenter",
        overflow: "wrap,truncate"
    },
    anchor: "/core/shared/anchors/topSide.json",
    navigation: "/core/shared/nav/standalone.nav"
});
