import React from "react";
import "./assets/about.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContactsIcon from "@mui/icons-material/Contacts";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
	return (
		<div className="container">
			<div className="row mt-4">
				{/* FAQ */}
				<section className="FAQ">
					<h2>Preguntas Frecuentes y Recomendaciones</h2>
					<p>
						<b>RECOMENDACIONES</b>
						<br></br>
						<ul>
							<li>
								Antes de empezar a hacer ejercicio físico con asiduidad, te recomendamos
								acudir al médico para una buena revisión. Él es el mejor profesional
								para indicarte qué tipo de actividad es la más adecuada para ti. Te
								recomendamos que empieces de forma gradual.
							</li>
							<li>
								Prepara un espacio adecuado para hacer la actividad (unos 2 metros).
							</li>
							<li>
								Antes de visualizar los vídeos, lee con atención la información
								específica de cada sala.
							</li>
							<li>
								IMPORTANTE: Para un buen funcionamiento de la plataforma, aconsejamos
								cargar la página con el Navegador Google Chrome
							</li>
						</ul>
						<b>PREGUNTAS FRECUENTES </b> <br />
						<b>
							¿Cuánto vale registrarse en Gymo?
							<br />
						</b>
						Nada. Es totalmente gratis. <br />
						<b>¿Qué sesiones puedo ver después de registrarme en Gymo?</b>
						<br />
						Podrás ver la primera sesión de cada una de las salas. <br />
						<b>¿Cuántas veces puedo ver una sesión?</b>
						<br />
						Todas las que quieras. Puedes entrar en cualquier sala en cualquier
						momento y repetir la sesión las veces que quieras. <br />
						<b>¿En qué dispositivos puedo ver las sesiones de Gymo?</b> <br />
						En tu ordenador, tablet o smartphone. <br />
						<b>¿Habrá sesiones nuevas?</b>
						<br />
						En Gymo dispondremos de sesiones nuevas. <br />
						<b> ¿Qué hago si no veo los vídeos o no me cargan bien?</b>
						<br /> Nuestros vídeos se almacenan en la caché del ordenador, eso quiere
						decir que si alguna vez se ha cargado mal el vídeo (falta velocidad,
						problemas de conexión,etc..), posiblemente nos dé problemas para
						visualizarlo. Cuando pase esto, lo mejor es "borrar la caché o historial"
						(Borrar datos de navegación) y volver a cargar la página. <br />
						<b>IMPORTANTE:</b> Para un buen funcionamiento de la plataforma,
						aconsejamos cargar la página con el Navegador Google Chrome (actualizado)
						<br />
						<b>¿Cómo sé el nivel que tiene cada sesión?</b>
						<br /> En la ficha de cada sesión hay un icono en la parte inferior
						derecha que indica el nivel. Hay cinco: n1, n2, n3, n4 y n5. Escoge el
						nivel que más se adecue a tus objetivos y condición física.
					</p>
				</section>
				{/* Requisitos técnicos */}
				<section className="requisitos_técnicos">
					{/* Ordenador */}
					<div className="row">
						<h2>Ordenador</h2>
						<div className="col-md-2 d-flex">
							<img
								src="https://www.ictiva.com/file/729/03.png"
								alt="Compu"
								className="pc"
							/>
						</div>
						<div className="col">
							<p>
								<b className="title">
									MUY IMPORTANTE - NAVEGADOR ACTUALIZADO Y CONFIGURADO
								</b>
								<br />
								<br />
								La herramienta de acceso a Internet (navegadores como: Internet
								Explorer, Google Chrome, Opera, etc.) debe ir siempre actualizado con la
								última versión disponible.
							</p>
						</div>
					</div>
					{/* Celular */}
					<div className="row">
						<h2>Teléfono Móvil</h2>
						<div className="col-md-2 d-flex">
							<img
								src="https://www.ictiva.com/file/728/02.png"
								alt="Compu"
								className="pc"
							/>
						</div>
						<div className="col">
							<p>
								La mayoría de smartphone del mercado disponen de o bien conectores
								microHDMI o adaptadores para el modelo de conector del teléfono a HDMI,
								sólo debemos comprobar que tipo de salida tenemos: <br />
								Algunos teléfonos llevan una salida miniHDMI para poder conectarlo a las
								pantallas con un cable "microHDMI a HDMI", muy sencillo y practico, en
								el caso de que nuestro smartphone lleve una salida DVI podremos conectar
								solo la imagen a la pantalla con un adaptador de "DVI a HDMI”.
								<br />
								También existe la salida MHL (para teléfonos HTC) en cuyo caso
								necesitaremos un adaptador de MHL a HDMI. Para evitar interrupciones
								durante nuestra sesión recomendamos conectar el cable de corriente
								alterna en los dispositivos para evitar que el dispositivo entre en modo
								descanso o ahorro energético
							</p>
						</div>
					</div>
					{/* Tablets */}
					<div className="row">
						<h2>Tablets</h2>
						<div className="col-md-2 d-flex">
							<img
								src="https://www.ictiva.com/file/730/04.png"
								alt="Compu"
								className="pc"
							/>
						</div>
						<div className="col">
							<p>
								La mayoría de tablets del mercado disponen de o bien conectores
								microHDMI o adaptadores para el modelo de conector de la tablet a HDMI,
								sólo debemos comprobar que tipo de salida tenemos: Algunas tablets
								llevan una salida miniHDMI para poder conectarlo a las pantallas con un
								cable "microHDMI a HDMI", muy sencillo y practico. En el caso de que
								nuestra tablet lleve una salida DVI podremos conectar solo la imagen a
								la pantalla con un adaptador de "DVI a HDMI”. *Para evitar
								interrupciones durante nuestra sesión recomendamos conectar el cable de
								corriente alterna en los dispositivos para evitar que el dispositivo
								entre en modo descanso o ahorro energético.
							</p>
						</div>
					</div>
				</section>
				{/* Contacto */}
				<section className="contact">
					<div className="row">
						<h2>Contacto</h2>
					</div>
					<div className="row">
						<div className="col">
							<div class="card bg-dark mb-3">
								<div class="card-body">
									<h5 class="card-title">
										<ContactsIcon /> CARLOS SEBASTIAN SOBERÓN MATEUS
									</h5>
									<h5>
										<a href="https://www.facebook.com/sebastian.soberonmateus">
											<FacebookIcon /> Facebook
										</a>
									</h5>

									<h5>
										<a href="https://github.com/Chsebas98">
											<GitHubIcon /> GitHub
										</a>
									</h5>
								</div>
							</div>
						</div>
						<div className="col">
							<div class="card bg-dark mb-3">
								<div class="card-body">
									<h5 class="card-title">
										<ContactsIcon /> THALIA ALEJANDRA TORRES CHIMBO
									</h5>
									<h5>
										<a href="https://www.facebook.com/thaliaa.torres.501">
											<FacebookIcon /> Facebook
										</a>
									</h5>

									<h5>
										<a href="https://github.com/tatorres1">
											<GitHubIcon /> GitHub
										</a>
									</h5>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Redes Sociales */}
				<section className="red_sociales">
					<div className="container text-center mt-1 mb-5">
						<a href="https://www.facebook.com">
							<FacebookIcon></FacebookIcon>
						</a>
						<a href="https://twitter.com">
							<TwitterIcon></TwitterIcon>
						</a>
					</div>
				</section>
			</div>
		</div>
	);
};

export default About;
