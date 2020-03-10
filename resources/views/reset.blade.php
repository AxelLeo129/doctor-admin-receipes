<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
	<tr>
		<td style="background-color: #ecf0f1; text-align: left; padding: 0">
			<a href="https://pharmazone.app">
				<img width="20%" style="display:block; margin: 1.5% 3%" src="https://pharmazone.app/images/logo/login/logo.png">
			</a>
		</td>
	</tr>
	
	<tr>
		<td style="background-color: #ecf0f1">
			<div style="color: #003DA5; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
				<h2 style="color: #003DA5; margin: 0 0 7px">Contraseña Reseteada</h2>
				<p style="margin: 2px; font-size: 15px">
					Hola {{$user->name}}<br>Hemos resetado tu contraseña.<br>Recomendamos que cambie su contraseña después de iniciar sesión.<br>Tus nuevas credenciales para acceder a la aplicación son las siguientes:</p>
				<ul style="font-size: 15px;  margin: 10px">
					<li>Usuario: {{$user->noCollegiate}} (También puedes usar tu email: {{$user->email}})</li>
					<li>Contraseña: {{$pass}}</li>
                </ul>
                <p style="margin: 10px; font-size: 15px">
					Atentamente: PHARMAZone.app</p>
                <br>
				<div style="width: 100%; text-align: center">
					<a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="https://pharmazone.app">Ir a la página</a>	
				</div>
				<p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">PHARMAZone 2020</p>
			</div>
		</td>
	</tr>
</table>