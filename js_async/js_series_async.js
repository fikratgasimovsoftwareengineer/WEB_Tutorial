const getZeroAsync = async function(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Http request error received!: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.error(`Error fetching 0 data: ${err.message}`);
    throw err;
  }
};
const getFirstAsync = async function function1(url){
	try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Http request error received!: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.error(`Error fetching 0 data: ${err.message}`);
    throw err;
  }
};

const getSecondAsync = async function function2(url){
try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Http request error received!: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.error(`Error fetching 0 data: ${err.message}`);
    throw err;
  }

}

const getThirdAsync = async function function3(url){
try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Http request error received!: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.error(`Error fetching 0 data: ${err.message}`);
    throw err;
  }
}


async function executeAllInSeries(){
	
  const listOfFunctions = [getZeroAsync, getFirstAsync, getSecondAsync, getThirdAsync];
	const urls =["/", "/2/", "/3/", "/4/"];
  
  for (let i =0; i < listOfFunctions.length; i++){
  	try{
    	await setTimeout(listOfFunctions[i](urls[i]), 2000);
    
    }	catch(err){
    	
      console.error(`Error in function ${i}: ${err.message}`);
    }
  }
}

executeAllInSeries();


