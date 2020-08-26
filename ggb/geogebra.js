var ggbApp = new GGBApplet({"appName": "classic", "filename":"contoh1.ggb", "width": 700, "height": 700}, true);
    window.addEventListener("load", function() { 
        ggbApp.inject('ggb-element');
});