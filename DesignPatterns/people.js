function Person ( name, msgsToSend, bcastHub) {
     this.myName=name ;
     this.msgs=msgsToSend
     this.hub=bcastHub
     this.hub.AddObserver(this)
}
//----------------------------------
Person.prototype.summary=function() {
   return this.myName + " has " + this.msgs.length + " messages to send"
}

//----------------------------------
Person.prototype.sendMsgs=function() {
    for (i=0 ; i<this.msgs.length; i++ ) {
        this.hub.Notify( this.myName  + "-> " + this.msgs[i])
    }
}
//----------------------------------
Person.prototype.Update=function(someMsg) {
   console.log (this.myName + " IN: " + someMsg )
}