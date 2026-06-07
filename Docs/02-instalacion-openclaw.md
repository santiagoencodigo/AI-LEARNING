# OpenClaw

Este documento reúne mis apuntes y primeras reflexiones sobre la instalación y uso de OpenClaw en un computador personal. La idea es comprender su funcionamiento, configurarlo correctamente y explorar formas prácticas de utilizarlo como un agente de inteligencia artificial funcional dentro de mi entorno de trabajo.

**Enlaces recomendados**

**Contextualización**

* https://www.wired.com/story/clawdbot-moltbot-viral-ai-assistant/
* https://www.cnet.com/tech/services-and-software/from-clawdbot-to-moltbot-to-openclaw/
* https://clawbot.ai/es/peter-steinberger-founder.html

**Instalación**

* OpenClaw desde cero: Todo lo que necesitas saber para empezar — MoureDev  
  https://www.youtube.com/watch?v=OYvMB3gZOUY

* https://platzi.com/cursos/curso-openclaw/
* https://github.com/openclaw/openclaw
* https://openclaw.ai/

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Openclaw-logo-text-dark.svg/500px-Openclaw-logo-text-dark.svg.png?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail">

*Imagen tomada de Wikipedia:*  
https://es.wikipedia.org/wiki/OpenClaw

> Muy recomendable revisar la página de OpenClaw en Wikipedia para comprender mejor el contexto del proyecto.

---

**¿Por qué OpenClaw llama tanto la atención?**

Uno de los aspectos más interesantes de OpenClaw es la posibilidad de crear un agente de inteligencia artificial personal capaz de ejecutar tareas, automatizar procesos y actuar como asistente dentro de un entorno local.

> En este documento se explorará la instalación local de OpenClaw, su configuración y la manera en que un agente puede trabajar para el usuario de forma automatizada.

---

**Posibilidades de un agente de IA**

Se explorarán diferentes integraciones y automatizaciones, por ejemplo:

* Integración con Google Calendar.
* Automatización de investigaciones.
* Conexión con Telegram.
* Gestión de sesiones y contexto.
* Configuración de personalidad, reglas y capacidades del agente.

La idea es convertir el agente en un asistente realmente útil dentro del flujo de trabajo diario.

Además, también se abordarán conceptos relacionados con seguridad y buenas prácticas.

---

**¿Qué se puede automatizar?**

Imagina la siguiente situación:

> Estás fuera de tu espacio de trabajo y recibes una llamada o mensaje solicitando un pequeño cambio en una página web que estabas desarrollando.

Entonces podrías enviarle un mensaje a tu agente para que:

1. Realice los cambios necesarios.
2. Ejecute el deploy automáticamente.
3. Tome capturas de pantalla como evidencia.
4. Informe el resultado final del proceso.

Un agente correctamente configurado podría realizar estas tareas de forma rápida y automatizada.

---

**Temas que se explorarán**

* Instalación de OpenClaw.
* Configuración local.
* Manejo de agentes.
* SoulMD.
* Identity.
* Sesiones.
* Automatizaciones.
* Integraciones externas.
* Seguridad y permisos.

<img src="https://docs.openclaw.ai/og/reference/templates/IDENTITY.png">

*Imagen Tomada De: https://docs.openclaw.ai/og/reference/templates/IDENTITY.png*










---










## Tabla de Contenido

1. [OpenClaw](#openclaw)

2. [Introducción](#introducción)

3. [NodeJS](#nodejs)

3. [Google AI Studio - Gemini API key](#google-ai-studio---gemini-api-key)

4. [OpenClaw Page](#openclaw-page)

5. [Instalación de OpenClaw](#instalación-de-openclaw)

5. []()










---










## Introducción

OpenClaw tiene varias ventajas interesantes frente a herramientas tradicionales como ChatGPT o Claude. Entre las que más me llamaron la atención están las siguientes:

> 1. Tiene la capacidad de contactarte sin depender directamente de una conversación abierta en un chat.
>
> 2. Puede integrarse con diferentes medios de comunicación como WhatsApp, Discord, Telegram, entre otros.
>
> 3. Tiene acceso al navegador, archivos y diferentes herramientas del sistema.

Todo esto me generó bastante curiosidad, pero también me hizo cuestionarme algo:

> ¿Realmente debería instalar OpenClaw en mi computador?

Principalmente porque considero que mi equipo actual no es especialmente potente ni está pensado para este tipo de tareas relacionadas con inteligencia artificial y automatización.

Sin embargo, también pensé:

> Si no lo intento ahora, ¿cuándo lo haré?

Tengo mucha curiosidad por experimentar con esta herramienta, aprender cómo funciona y descubrir hasta dónde puede llegar. Incluso si el resultado no es perfecto o el rendimiento no es el mejor, al menos servirá como una primera experiencia. Y si no funciona correctamente en este computador, siempre existirá la posibilidad de volver a intentarlo más adelante en otro equipo con mejores capacidades.

---

**¿Cómo sacarle el máximo provecho a esta herramienta?**

Es importante tener en cuenta que este primer apartado estará muy basado en la documentación oficial de OpenClaw:

* https://docs.openclaw.ai/start/getting-started

La idea es comprender desde lo más básico:

* Cómo instalar OpenClaw.
* Cómo configurar un agente.
* Cómo funcionan las sesiones.
* Qué permisos necesita.
* Qué integraciones se pueden realizar.
* Y cómo aprovechar sus capacidades de automatización dentro de un entorno real.










---










## NodeJS

> Antes de comenzar con la instalación de OpenClaw, es necesario cumplir algunos requisitos básicos.

**1. Instalar Node.js**

OpenClaw requiere tener instalado Node.js para poder ejecutarse correctamente.

> Se recomienda utilizar una versión de Node.js superior a la 22.

Sitio oficial de descarga:

* https://nodejs.org/en

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg">

*Imagen tomada de Wikipedia:*  
https://es.wikipedia.org/wiki/Node.js











---











## Google AI Studio - Gemini API key

Para comenzar, es necesario dirigirse a la siguiente página:

* https://aistudio.google.com/

<img src="https://www.gstatic.com/aistudio-static/mobile/ais-logo.svg">

*Imagen tomada de:*  
https://aistudio.google.com/

La interfaz de Google AI Studio me parece muy interesante.

* Generalmente, los fondos, imágenes o videos que aparecen dentro de la plataforma tienen movimiento o algún tipo de dinámica visual.
* También se muestran diferentes proyectos creados con las herramientas de Google AI Studio.

Existe además una sección llamada:

> "Discover & remix games, websites, and digital experiences made with AI Studio"

La galería contiene una gran cantidad de proyectos que se pueden explorar, analizar e incluso reutilizar como inspiración.

Y sinceramente, esto me hizo pensar bastante:

> ¿Qué tipo de proyectos estoy construyendo actualmente?

<img src="https://codingbeautydev.com/wp-content/uploads/2026/05/Screenshot-2026-05-11-at-8.59.01-PM.png">

*Imagen tomada de:*  
https://codingbeautydev.com/blog/google-ai-studio-new-features/

Pero también hay un punto importante que analizar.

En cierto momento aparece una interfaz relacionada con los términos y condiciones de Google AI Studio, donde se menciona que no se debe subir información delicada, privada o personal.

Además, se explica que el contenido utilizado y generado dentro de la plataforma podría emplearse para entrenar modelos de inteligencia artificial.

> Entonces, ¿realmente habría que leer cuidadosamente estos términos?

* https://ai.google.dev/gemini-api/terms?hl=es-419

Luego aparece la interfaz de **BUILD**.

Es curioso porque en este espacio prácticamente se puede experimentar y construir de todo:

* aplicaciones,
* pruebas,
* automatizaciones,
* agentes,
* integraciones,
* y experimentos con modelos de IA.

> Sería interesante desarrollar algún proyecto utilizando este entorno.

<img src="https://learnprompting.org/blog/ai_studio_guide/ai_studio_image3.png">

*Imagen tomada de:*  
https://learnprompting.org/blog/guide_ai_studio

Después de ingresar a Google AI Studio, es necesario crear un proyecto para poder utilizar las herramientas y servicios relacionados con Gemini.

El proceso generalmente consiste en:

1. Crear o seleccionar un proyecto.
2. Configurar el acceso a la API.
3. Generar una API Key de Gemini.

La API Key funciona como una especie de credencial que permitirá conectar OpenClaw con los modelos de inteligencia artificial de Google.

> Esta clave es importante y debe manejarse con cuidado, ya que otorga acceso a los servicios asociados al proyecto.

Una vez generada la Gemini API Key, simplemente se debe copiar y posteriormente pegar dentro de la configuración de OpenClaw.

De esta manera, OpenClaw podrá conectarse a Gemini y utilizar sus capacidades para:

* generar respuestas,
* ejecutar tareas,
* automatizar procesos,
* y funcionar como un agente de inteligencia artificial conectado a un modelo real.

> En otras palabras, esta API Key es el puente entre OpenClaw y los modelos de Google Gemini.

Todo este proceso corresponde finalmente al ejercicio de obtener una API Key para utilizar Gemini y conectarlo posteriormente con OpenClaw.

<img src="https://static.beebom.com/wp-content/uploads/2023/12/copy-gemini-api-key.jpg?w=921">

*Imagen Tomada De: https://beebom.com/how-use-google-gemini-api-key/*










---










## OpenClaw Page

Ahora sí es momento de dirigirnos a la página principal de OpenClaw:

**https://openclaw.ai/**

<img src="https://cdn.prod.website-files.com/6088303c28a7c75678aa21d8/698de06412144c12f881565d_Captura%20de%20pantalla%202026-02-12%20a%20las%2015.14.35-p-1080.png">

*Imagen Tomada De: https://www.nocodehackers.es/herramientas-no-code/openclaw*

La interfaz resulta bastante llamativa desde el primer momento.

* Personalmente, me gusta mucho la combinación de colores y esa estética futurista con temática espacial.
* También aparece el mensaje **"Works with Everything"**, mostrando que OpenClaw cuenta con más de 50 integraciones diferentes.
* Además, se presentan distintos ejemplos de proyectos y automatizaciones creados con OpenClaw.

Entre ellos aparecen casos bastante interesantes, como:

> “15+ agentes ejecutándose en 3 máquinas”.

Los proyectos mostrados allí son ejemplos reales de personas utilizando OpenClaw para automatizar partes completas de su vida digital, flujos de trabajo y procesos relacionados con productividad o desarrollo de software.

Y sinceramente, aquí es donde OpenClaw empieza a parecerme realmente atractivo.

Porque deja de verse únicamente como un chatbot y comienza a sentirse más como:

> un sistema capaz de crear asistentes y trabajadores digitales automatizados.

Y a partir de este punto, empieza a surgir pensamientos bastantes interesantes:


    “15+ Agent Army Running Across 3 Machines”

    Aquí están hablando de un sistema con múltiples agentes trabajando al mismo tiempo en varios computadores.

    La descripción menciona cosas como:

    responder correos,
    revisar documentos,
    construir herramientas CLI,
    optimizar anuncios,
    coordinar workers,
    usar Discord como centro de control.

    La idea aquí es:

    No existe un solo agente, sino muchos agentes especializados.

    Por ejemplo:

    Agent 1 | Revisar correos
    Agent 2	| Programar tareas
    Agent 3	| Analizar métricas
    Agent 4	| Hacer deploys
    Agent 5	| Investigar información

    Y todos podrían comunicarse entre sí.

    Eso ya entra en conceptos de:

    multi-agent systems,
    automatización distribuida,
    orquestación,
    workers,
    pipelines de IA.

    Muy parecido a cómo funcionan sistemas empresariales modernos.

---

    “Personal Operating System With Daily Briefings”

    Este probablemente es uno de los casos más interesantes para productividad personal.

    La idea es crear una especie de:

    “Sistema operativo personal con IA”.

    El agente:

    revisa calendario,
    toma notas,
    prepara resúmenes,
    organiza reuniones,
    revisa pendientes,
    crea recordatorios,
    analiza conflictos del horario.

    Es como tener un:

    secretario,
    organizador,
    asistente ejecutivo,
    gestor de productividad,

    todo automatizado.

    Y aquí es donde OpenClaw se vuelve diferente a ChatGPT normal:

    El agente tiene memoria, acceso a herramientas y capacidad de actuar.

    No solo conversa.

---