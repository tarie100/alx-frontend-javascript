export default function getFullResponseFromAPI(success){
	return new Promise((resolve, reject) => {
		if (success){
			resolve({status: 200, body: 'Success'});
		}else{
			reject(new Error('The Fake API is bot working currently'));
		}
	});
}
