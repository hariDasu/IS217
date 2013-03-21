chatters=["John","Mary","Harry"] ;
		msgsToSend= [ "Hello world", "Bye world" ]
		hub=new Subject()
		chatObjects=[]
		for (i=0 ; i<chatters.length ; i++ ) {
	    	chatterName=chatters[i]
	   	 	chatter=new Person( chatterName, msgsToSend, hub)
	   		chatObjects[i]=chatter
			}
	
		
	    	chatObjects[0].sendMsgs()