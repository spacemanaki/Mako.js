;(function(window) {
    var roms = {};
    function loadAndExecuteRom(name) {
        if(roms[name]) {
            exec(roms[name]);
        } else {
            loadBytes('../roms/' + name + '.rom', function(data) {
                if(data) {
                    roms[name] = data;
                    exec(data);
                } else {
                    console.log('failed to load ROM');
                }
            });
        }
    }
    function handleClick(e) {
        var select = document.getElementById('romselect');
        var romName = select.options[select.selectedIndex].innerHTML;
        loadAndExecuteRom(romName);
    }
    function main() {
        var button = document.getElementById('loadbutton');
        button.addEventListener('click', handleClick);
        handleClick(null);
    }
    window.main = main;
})(window);
