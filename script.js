function grabUserData() {
	fetch('https://dog.ceo/api/breeds/image/random',{

	})
	.then(function(response) {
	   return response.json()
	   // document.getElementById("hipsterisms")
	 })
	.then(function(response) {
	   console.log(response)
	   // document.getElementById('dog').src = response.message

	 })
	.catch(error => console.error(error));

  grabUserData();
