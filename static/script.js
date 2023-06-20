$(()=>{
	$("#but").on("click",()=>{
		$.ajax({
			url:"https://randomuser.me/api/",
			contentType:"application/json",
			dataType:'json',
			success:(result)=>{
				let data = result.results[0];
				let name = data.name;
				let address = data.location;
				let login = data.login;
				let dob = data.dob;
				let id = data.id;
				let contact = {email:data.email,phone:data.phone};
				let pic = data.picture;

				$('#con').html("<h1 class='cen'>"+name.title+" "+name.first+" "+name.last+"</h1>");
				$('#con').append("<img class='cen img' src="+pic.large+"><br>");
				$('#con').append("<p class='cen'>"+address.street.number+","+address.street.name+",<br>"+
					address.state+","+address.country+"-"+address.postcode+".</p>");
				$('#con').append("<p class='cen'>Latitude : "+address.coordinates.latitude+"<br>Longitude : "+address.coordinates.longitude+"</p><br>");
				$('#con').append("<p class='cen'>age : "+dob.age+"<br>dob : "+dob.date.slice(0,10)+"</p><br>");
				$('#con').append("<p class='cen'>user name : "+login.username+"<br>password : "+login.password+
					"<br>email : "+contact.email+"<br>phone : "+contact.phone+"</p><br>");
				if(id.name!==''){$('#con').append("<p class='cen'>"+id.name+" "+id.value+"</p><br>");}
			}
		});
	});
});