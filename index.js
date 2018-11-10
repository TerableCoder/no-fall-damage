module.exports = function drop(dispatch){
        var enabled = true;
        var currZone;
        
        dispatch.command.add('fall', ()=>{
                enabled = !enabled;
                dispatch.command.message("Fall damage has been " + (enabled?"enabled.":"disabled."));
        });
        
        dispatch.hook('S_LOAD_TOPO', 3, e=>{
                currZone = e.zone;
        });
        
        dispatch.hook('C_PLAYER_LOCATION', 5, e=>{
                return !([2, 10].includes(e.type) && (currZone < 10 || currZone > 200));       
        });
}
