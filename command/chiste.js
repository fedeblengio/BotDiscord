module.exports = {
    description: 'Repite los argumentos dados',
    run: async (message) => {
        
        const chistes = [
            "¿Por qué los estadounidenses son malos jugadores de ajedrez? Porque perdieron dos torres.",
            "A mis parientes mayores les gustaba burlarse de mí en las bodas, diciendo: '¡Tú serás el siguiente!'. Pero dejaron de hacerlo enseguida cuando empecé a hacer lo mismo yo en los funerales.",
            "El médico en la consulta. 'Tengo buenas y malas noticias'. 'Deme primero las buenas', dice el paciente. 'Han llegado los resultados de sus pruebas y solo le quedan dos días de vida'. '¿Esas son las buenas noticias? ¿Y cuál es la mala?', dice el paciente. 'Llevo dos días intentando localizarle'.",
            "¿Qué es peor que seis niños colgados de un árbol? Un niño colgado de seis árboles.",
            "Un tipo se adentra con un niño en el bosque. Este se dirige a él y le dice: 'Oiga señor, está oscureciendo mucho y tengo miedo'. El hombre responde: '¿Cómo crees que me siento yo que tengo que volver caminando solo?'.",
            "Somos suficientes en este planeta como para empezar a disminuir un poco la manada. No estoy diciendo que debamos cazar a los estúpidos. Digo que dejemos que se suiciden. Quitemos algunas advertencias. Quitemos el 'no ingerir' de los botes de pintura. ¡Cómetela! ¿Quieres comerla? ¡Cómetela! Dale de comer a tus hijos tontos también. Nosotros tampoco los queremos. (Chris Porter)",
            "Mi novia, hablando de astronomía, me preguntó cómo mueren las estrellas. 'Normalmente por sobredosis', le dije.",
            "La vida es una mierda, cuando la miras. La vida es una risa y la muerte es una broma, es verdad. Verás que todo es un espectáculo. Haz que se rían a tu paso. Tan solo recuerda que la última risa es a tu costa. (Monty Python)",
            "Nunca le rompas el corazón a alguien, solo tienen uno. Rómpele los huesos mejor, tienen 206.",
            "Yo... solía tener un hijo. Solía tener un hijo de dos años, pero murió. De la misma manera que murió el hijo de Eric Clapton. Para conseguir inspiración. (...) Es un chiste complicado, hay que saber muchas cosas. Este chiste es como una cebolla. Tienes que saber quién es Eric Clapton. No es algo garantizado a día de hoy. Tienes que saber sobre su hijo. Tienes que saber lo torpe que era ese muchacho. Tienes que conocer esa maldita canción. Y luego tienes que pensar que todo esto es gracioso. (Anthony Jeselnik)",
            "Dos cazadores están en el bosque cuando uno de ellos se desmaya. Su compañero llama inmediatamente a emergencias. 'Mi amigo no respira', grita al teléfono. '¿Qué debo hacer?'. 'Tranquilo', le dice el operador. 'Puedo ayudarle. Primero, asegurémonos de que está muerto'. Se hace el silencio y luego suena un disparo. El tipo vuelve a coger el teléfono y dice: 'Vale, ¿y ahora qué?'.",
            "El otro día estaba en el parque una madre se sentó a mi lado. Después de un rato, se inclinó y preguntó: '¿Cuál es el tuyo?'. La miré y le dije: 'Todavía no lo he decidido'.",
            "Quiero morir tranquilamente mientras duermo, como mi abuelo. No gritando, como los pasajeros de su autobús.",
            "Si alguna vez viera que ahorcan a un amputado, me pondría a gritarle letras. (Demetri Martin)",
            "Los chistes de humor negro son como los niños de los antivacunas, nunca se hacen viejos.",
            "Su humor era tan negro que le disparaba la policía.",
            "El dentista al paciente: 'Esto le va a doler un poco'. 'Vale', contesta este. Y el dentista añade: 'Me estoy tirando a su mujer'.",
            "El humor negro es como los esclavos, hoy en día muy pocos tenemos uno.",
            "Incluso la gente que no sirve para nada tiene la capacidad de sacarte una sonrisa. Por ejemplo, cuando los empujas por las escaleras.",
            "Si donas un riñón, todo el mundo te quiere y eres un héroe. Pero dona cinco y de repente todo el mundo se pone a gritar.",
            "Un hombre va a la biblioteca y pide un libro sobre cómo suicidarse. El bibliotecario le responde, 'no te lo presto, que no me lo devuelves'.",
            "Nunca olvidaré las últimas palabras de mi abuelo justo antes de morir. '¿Sigues sosteniendo la escalera?'.",
            "¿Qué tienen en común Miguel Ángel y Kurt Cobain? Que los dos usaros sus cerebros para pintar el techo.",
            "El secreto para que una chica caiga rendida a tus pies es regalarle flores. Ayuda que las flores huelan mucho a cloroformo. (David Suárez)",
            "En un avión el piloto anuncia por megafonía que el avión se va a estrellar y que no queda ninguna esperanza de salvarse. Entonces una pasajera del vuelo se pone en pie y grita: '¿Hay alguien aquí lo suficientemente hombre para hacerme sentir mujer una última vez?'. Entonces un tipo se levanta, se arranca la camiseta y le dice: 'Toma, plancha esto'.",
            "¿Qué tienen en común el tofu y un consolador? Ambos son sustitutos de la carne.",
            "Estaba cavando un hoyo en nuestro jardín y encontré un cofre lleno de monedas de oro. Quería ir corriendo a casa a contárselo a mi marido. Entonces recordé por qué estaba cavando un hoyo en nuestro jardín.",
            "¿Qué tiene mi padre en común con Nemo? No se puede encontrar a ninguno de los dos.",
            "Mi mayor héroe es Nelson Mandela. Qué hombre. Encarcelado durante 25 años, fue liberado en 1990 y no ha reincidido. Creo que se está enderezando, lo que demuestra que la cárcel sí funciona. (Ricky Gervais)",
            "He visitado a mi amigo en su nuevo apartamento. Me dijo que me sintiera como en casa. Así que le eché. Odio tener visitas.",
            "No necesitas un paracaídas para hacer paracaidismo. Necesitas un paracaídas para hacer paracaidismo dos veces.",
            "¿Recuerdas cuando eras joven y pensabas que tu padre era Superman? Y luego creces y te das cuenta de que sólo es un borracho que lleva una capa. (Dave Attell)",
            "El perro de mi novia se murió, así que le compré otro idéntico. Ella me gritó y me dijo: '¿Qué voy a hacer con dos perros muertos?'.",
            "¿Conoces la frase 'la basura de un hombre es el tesoro de otro'? Maravilloso dicho, horrible manera de descubrir que fuiste adoptado.",
            "Un hombre va al médico para un chequeo, y este le dice: 'Tengo malas noticias, usted tiene cáncer y alzheimer'. El hombre le responde: '¡Gracias a Dios que no tengo cáncer!'.",
            "Si tuviera diez centavos por cada vez que un indigente me ha pedido dinero, seguiría diciendo que no. (Bo Burnham)",
            "Mi terapeuta acaba de morir. Era tan bueno que ni siquiera me importa.",
            "Hoy le he preguntado a mi teléfono: 'Siri, ¿por qué sigo soltero?'. Y ha activado la cámara frontal.",
            "A medida que me hago mayor, me acuerdo de toda la gente que he perdido por el camino. Quizá mi carrera de guía turístico no fue la elección correcta.",
            "¿Quieres saber cómo convertir cualquier ensalada en una ensalada César? Apuñálala veintitrés veces.",
            "Cuando veo los nombres de los enamorados grabados en un árbol, no me parece bonito ni romántico. Me parece raro la cantidad de gente que se lleva cuchillos a sus citas.",
            "Dale a un hombre una cerilla y se calentará durante unas horas. Préndele fuego, y estará caliente el resto de su vida.",
            "Un sacerdote pregunta al asesino en la silla eléctrica: '¿Tiene alguna última petición?'. 'Sí', responde el asesino. '¿Puede cogerme la mano, por favor?'.",
            "Los estadounidenses solo compran cosas que provienen del sufrimiento. Simplemente disfrutan más cuando saben que alguien sale herido. (Louis CK)",
            "Acabo de leer que en Nueva York alguien es apuñalado cada 52 segundos. Pobre hombre.",
            "¿Qué es rojo y malo para los dientes? Un ladrillo.",
            "¿Cuántos humoristas se necesitan para cambiar una bombilla? Tienen que ser más de cuatro porque si no, mi mazmorra no estaría tan oscura.",
            "Mi abuelo decía que mi generación depende demasiado de la última tecnología. Así que le desconecté de la respiración asistida.",
            "Odio el doble rasero. Quema un cuerpo en un crematorio, estás 'siendo un amigo respetuoso'. Hazlo en casa y estás 'destruyendo pruebas'.",
            "Le compré a mi amigo ciego un rallador de queso por su cumpleaños. Después me dijo que era el libro más violento que había leído.",
            "Mi novio me dejó, así que le robé la silla de ruedas. Adivina quién volvió arrastrándose...",
            "'¡Di NO a las drogas!'. Bueno, si estoy hablando con mis drogas, probablemente ya dije que sí.",
            "'Papá, ¿ya tienes los resultados de la prueba de ADN?'. 'Llámame Andrés'.",
            "La esposa al marido: 'Quiero otro bebé'. 'Vaya, qué alivio, a mí tampoco me gusta el que ya tenemos'.",
            "¿Por qué los cigarrillos son buenos para el medio ambiente? Matan gente.",
            "Estaba en Rusia escuchando a un cómico burlándose de Putin. Los chistes no eran tan buenos, pero la ejecución fue de primera.",
            "Doctor: 'Pronto estarás en paz'. Hombre: '¿Me estoy muriendo?'. Doctor: 'No, pero su esposa sí'.",
            "¿Dónde fue José Luis después de perderse en un campo minado? A todas partes.",
            "Me encanta ir al patio de la escuela y ver a todos los niños pequeños saltar, correr y gritar como locos. No saben que solo estoy usando balas de fogueo. (Emo Philips)",
            "¡Tengo un pez que sabe bailar breakdance! Vale, solo durante 20 segundos, y solo una vez.",
            "Estaba jugando al ajedrez con mi amigo y me dijo: 'Hagamos esto interesante'. Así que dejamos de jugar al ajedrez.",
            "Mis padres me criaron como hijo único, lo que fue una putada para mi hermano pequeño.",
            "No eres un completo inútil. Siempre puedes ser utilizado como un mal ejemplo.",
            "Dicen que el mejor camino hacia el corazón de un hombre es a través del estómago. Pero yo creo que apuñalarle directamente en la caja torácica es mucho más fácil.",
            "Un médico entra en una habitación con un paciente moribundo y le dice: 'Lo siento, pero solo te quedan diez'. El paciente le pregunta: '¿Diez qué, doctor? ¿Horas? ¿Días? ¿Semanas?'. El médico lo mira con calma y dice: 'Nueve'.",
            "Hace unos años lancé un bumerán. Ahora vivo en un miedo constante...",
            "Pensé que abrir una puerta para una dama era de buenos modales, pero ella simplemente me gritó y salió volando del avión.",
            "Mi abuela me trata como una estrella de rock. Supongo que por eso me deja firmarle las tetas. (Zach Galifianakis)",
            "¿Por qué los amigos se parecen mucho a la nieve? Si haces pis sobre ellos, desaparecen.",
            "El otro día, mi mujer me pidió que le pasara su lápiz de labios, pero accidentalmente le pasé una barra de pegamento. Todavía sigue sin hablarme.",
            "Dale a un hombre un billete de avión y volará durante un día. Empújale desde un avión a 10.000 metros y volará durante el resto de su vida.",
            "Abuela: 'La mayoría de las personas de tu edad ya están casadas, ¿por qué tú no?'. Yo: 'La mayoría de las personas de tu edad ya están muertas, ¿por qué tú no?'.",
            "'Ay, doctor, estoy muy nervioso. Esta es mi primera operación'. 'No se preocupe. La mía también'.",
            "¿Cuál es la diferencia entre un Lamborghini y un cadáver? No tengo un Lamborghini en el garaje.",
            "¿Por qué Michael Jackson no puede acercarse a menos de 500 metros de una escuela? Porque está muerto.",
            "¿Qué es peor que morder una manzana y encontrar un gusano? Morder una manzana y encontrar medio gusano.",
            "Decir que no crees en la magia pero sí en Dios es un poco como decir que no tienes sexo con perros, excepto los labradores. (Jimmy Carr)",
            "¿En qué se parece una mujer a un condón? Ambos pasan más tiempo con tu cartera que con tu polla.",
            "¿Qué le dijo el elefante al hombre desnudo? ¿Cómo respiras a través de esa cosa tan pequeña?",
            "Una hija le preguntó a su madre: 'Mamá, ¿cómo se escribe escroto?'. Y su madre le responde: 'Cariño, deberías habérmelo preguntado anoche: lo tenía en la punta de la lengua'.",
            "¿Cuántos chicos Emo hacen falta para enroscar una bombilla? Ninguno, todos se sientan en la oscuridad y lloran.",
            "¿Cuántos hombres hacen falta para abrir una cerveza? Ninguno. Debería estar abierta para cuando ella la traiga.",
            "¿En qué se parece el vello púbico al perejil? Lo apartas a un lado antes de empezar a comer.",
            "¿Oíste lo del tipo que murió de una sobredosis de Viagra? No pudieron cerrar su ataúd.",
            "¡Nadie pensó que Mel Gibson pudiera interpretar a un escocés pero míralo ahora! ¡Alcohólico y racista!. (Frankie Boyle)",
            "Después de pedírselo a mi psiquiatra, pedí una segunda opinión después de que dijera que estaba loco. También me dijo que era feo.",
            "¿Cuál es la diferencia entre Michael Jackson y una bolsa de supermercado? Una está hecha de plástico y es peligrosa para que los niños jueguen con ella. La otra sirve para llevar la compra.",
            "¿Qué es mejor que ganar la medalla de oro en los Juegos Paralímpicos? Tener brazos y piernas.",
            "¿Cuál es la diferencia entre Jesucristo y un cuadro de Jesucristo? El cuadro se puede colgar con un solo clavo.",
            "Un ciego entra en una pescadería y dice: '¡Hola, señoras!'.",
            "Trabajo con animales, le dice el tipo a su cita. Qué tierno, responde ella. Me encantan los hombres que se preocupan por los animales. ¿Dónde trabajas?. Soy carnicero, dice él.",
            "Hoy ha sido un día terrible. Un autobús ha atropellado a mi ex. ¡Y me han echado de mi trabajo como conductor de autobús!",
            "Una manzana al día mantiene alejado al médico. O al menos lo hace si la tiras lo suficientemente fuerte.",
            "¿Adónde me lleva exactamente, doctor?, pregunta el paciente. A la morgue, responde el médico. ¿Qué? ¡Pero si aún no estoy muerto!. Sí, y aún no hemos llegado.",
            "El tipo que me robó el diario acaba de morir. Mis pensamientos están con su familia.",
            "Un marido vuelve del trabajo y encuentra a su mujer viendo el canal de cocina. Le pregunta: '¿Por qué ves eso? Sigues sin saber cocinar', y la mujer responde: '¿Y tú por qué ves porno? Sigues sin saber follar'.",
            "Un hombre despierta de un coma. Su mujer se cambia de ropa negra y se queja: 'No me puedo fiar de ti para nada, ¿verdad?'.",
            "La forma más fácil de saber que eres feo es cuando te pasan la cámara cada vez que hay una foto de grupo.",
            "¿Por qué Monica Lewinsky no votó a Hilary Clinton? La última presidencia de Clinton le dejó mal sabor de boca.",
            "¿Qué es lo último que pasa por la cabeza de un mosquito cuando choca contra un parabrisas? Su trasero.",
            "¿En qué se parecen un pedo y un político corrupto? Ambos huelen mal, pero uno es una flatulencia y el otro una 'mal flatulencia'.",
            "¿Cómo se dice psicoanalista en japonés? Sakudo Tukoko.",
            "Pues la postura favorita de mi mujer en la cama es la del pez. ¿La del pez? Pues esa no la conozco. Sí hombre. Se da la vuelta y... ¡nada!",
            "¿Por qué las pilas son mejores que los hombres? Porque al menos las pilas tienen un lado positivo.",
            "¿Cómo es 'eyaculación precoz' en chino? Yatta. ¿Y cómo se llama la mujer? Komoke Yatta.",
            "Peluquero: ¿Le pongo champú al huevo? Cliente: No, gracias. Limítese a mi cabeza.",
            "Hemos mantenido la habitación exactamente igual que el día que desapareció, hace ya 6 años, agente. Señora, hay un esqueleto detrás de la cama. ¡No jodas: Timmy!",
            "Cari, hoy comemos en casa de mi madre. Este mensaje fue eliminado. Este mensaje fue eliminado. Este mensaje fue eliminado. Este mensaje fue eliminado. Este mensaje fue eliminado. ¿Cari? Ok.",
            "¡¡TENED CUIDADO: HAY UN VIRUS EN UNA PÁGINA PORNO QUE DEJA LAS LETRAS MAYÚSCULAS ACTIVADAS!!",
            "¿Qué tienes puesto, guapa? Supervivientes. Digo de ropa. Ah, una lavadora de blanca.",
            "¿Cómo mantienes a un tonto ocupado? (lee abajo) ¿Cómo mantienes a un burro distraído? (lee arriba)",
            "¿Por qué un adivino no puede tener hijos? Porque tiene las bolas de cristal.",
            "Persona A: Pues a mí el Frenadol me deja medio tonto todo el día. Persona B: Claro, es que alivia los síntomas.",
            "¿Cuál es el animal más antiguo? La suegra, porque existía antes de que inventaran el sarcasmo.",
            "¿Qué tienen en común un niño y un globo? Los dos estallan cuando los pinchas.",
            "¿Cuál es el colmo de un sordo? Llamarse Casimiro y trabajar en un taller de música.",
            "Papá, ¿qué es el humor negro? ¿Ves ese hombre sin brazos? Dile que aplauda. Pero soy ciego. Pues eso.",
            "¡Doctor, doctor! ¿Qué tal ha ido la operación? ¿Operación, no era una autopsia?",
            "Los hijos del vecino me desafiaron a una pelea de globos de agua. Y aquí estoy revisando mi Facebook rápidamente mientras hierve la tetera.",
            "Drácula visita a su médico y le dice: 'Doctor, estoy realmente preocupado. Desde hace un tiempo, no encuentro sangre en mis heces'."
        ];

        const chisteRandom = obtenerElementoAleatorio(chistes);
        message.channel.send(chisteRandom);
    }
}

function obtenerElementoAleatorio(arr) {
    const indiceAleatorio = Math.floor(Math.random() * arr.length);
    return arr[indiceAleatorio];
}