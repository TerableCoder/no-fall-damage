module.exports = function drop(dispatch){
dispatch.hook('C_PLAYER_LOCATION', 1, event => {
        if(event.type == 2 || event.type == 10) return false;        
})
;
}