module.exports = function drop(dispatch){
        const command = require('command')(dispatch);
        var enabled = true;
        var currZone;
        
        command.add('fall', ()=>{
                enabled = !enabled;
                command.message("Fall damage has been " + (enabled?"enabled.":"disabled."));
        });
        
        dispatch.hook('S_LOAD_TOPO', 2, e=>{
                currZone = e.zone;
        });
        
        dispatch.hook('C_PLAYER_LOCATION', 1, e=>{
                return !([2, 10].includes(e.type) && (currZone < 10 || currZone > 200));       
        });
}
