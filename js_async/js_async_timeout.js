async function fetchData(url, timeout=5000){

	const controller = new AbortController();
  const signal = controller.signal;

	const timeoutId = setTimeout(() => controller.abort(), timeout);
	
try{
		/* if fetch is not done withing specified time , then tim
    timeout is invoked */
	  var getData = await fetch(url, {signal});
    
    
    // if data is received successfuly, then 
    // prevent abort to make timeout or abort the system!
    clearTimeout(timeoutId);
    
    
    if (!getData.ok()){
 
      throw new Error("http get failed : ${getData.status}");
    }
    return await getData.json();
  }catch(err){
   console.error("Data fetch is not recieved ${err.message}");
  	throw new err;
  }
};


fetchData("/tutorial/get-data")
.then(data=> {
	console.log('Response data', data);
})
.catch(error=> {
	console.log('Error: ', error.message)
});
setTimeout(function(){
fetchData.abort()
}, 3000);

