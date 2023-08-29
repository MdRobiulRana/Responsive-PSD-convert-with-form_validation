function validation(){
	var userName = document.getElementById('username'),
		userMail = document.getElementById('usermail');

	if(userName.value== ''){
		document.getElementById('name-error').innerHTML = 'Please Enter Your Name';
		return false;
	}
	else{
		document.getElementById('name-error').innerHTML = '';
	}
	if(userMail.value== ''){
		document.getElementById('mail-error').innerHTML = 'Please Enter Your Email';
		return false;
	}
	else{
		document.getElementById('mail-error').innerHTML = '';
	}

	/* -=-=-=-=-=-=-=-=-=-=-=-=-
			Home page end
	=-=-=-=-=-=-=-=-=-=-=-=-=- */
}
