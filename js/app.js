window.addEventListener('load',function(){


	var btn = document.getElementById("btn_geolocalizar");



	btn.addEventListener('click',function(){
		let input_ip  = document.getElementById("search-ip");

		let ip = input_ip.value;

		 fetch('https://geo.ipify.org/api/v1?apiKey=at_tckw35GQSKAbqbhhhQAqNkfo2BRTs&ipAddress='+ip).then(function(response){return response.json()}).then(data => {   
		 	console.log(data);

		 	ip_element.innerHTML = data.ip;
  	 	    location_element.innerHTML = data.location.region;
  	 	    time_zone_element.innerHTML = data.location.timezone;
  	 	    isp_element.innerHTML = data.isp;


		 	setMap(data.location.lat,data.location.lng);

  	 	    


  	 }).catch(error => {
  	 	console.log(error);
  	 })

	});

});
