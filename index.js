module.exports = function drop(dispatch){
        const command = require('command')(dispatch);
        var enabled = true;
        
        command.add('fall', ()=>{
                enabled = !enabled;
                command.message("Fall damage has been " + (enabled?"enabled.":"disabled."));
        });
        
        dispatch.hook('C_PLAYER_LOCATION', 1, e=>{
                return !([2, 10].includes(e.type));       
        });
}
