module.exports = function drop(mod){
        var enabled = true;
        var currZone;
        
        mod.command.add('fall', ()=>{
                enabled = !enabled;
                mod.command.message("Fall damage has been " + (enabled?"enabled.":"disabled."));
        });
        
        mod.hook('S_LOAD_TOPO', 3, e=>{
                currZone = e.zone;
        });
        
        mod.hook('C_PLAYER_LOCATION', 5, e=>{
                return !([2, 10].includes(e.type) && (currZone < 10 || currZone > 200));       
        });
}
