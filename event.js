var events=require('events');
var eventEmitter=new events.EventEmitter();
var connectHandler=function connected(s){
    console.log('ITs',s);
}
eventEmitter.on('date_received',function(name)
{
    console.log(name,"understood event driver ");

});
eventEmitter.emit('data_recevied',"PETER");
eventEmitter.on('conncetion',connectHandler);
eventEmitter.emit('connection',"SIMPLESOLUTION");
console.log("program ended");