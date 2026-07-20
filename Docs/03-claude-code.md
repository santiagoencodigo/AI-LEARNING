# Claude Code

## Tabla de Contenidos

- [Introducción](#introducción)
- [1. Instalación y Configuración Inicial](#1-instalación-y-configuración-inicial)
- [2. Conceptos Fundamentales](#2-conceptos-fundamentales)
- [3. Análisis de Arquitectura y Codebase](#3-análisis-de-arquitectura-y-codebase)
- [4. Planificación de Implementación](#4-planificación-de-implementación)
- [5. Implementación: Backend](#5-implementación-backend)
- [6. Implementación: Frontend](#6-implementación-frontend)
- [7. Testing y Validación](#7-testing-y-validación)
- [8. Seguridad](#8-seguridad)
- [9. Integración con GitHub](#9-integración-con-github)
- [10. Gestión de Costos](#10-gestión-de-costos)
- [11. Actualización y Nuevas Funcionalidades (v2.0)](#11-actualización-y-nuevas-funcionalidades-v20)
- [12. Comandos de Claude Code](#12-comandos-de-claude-code)
- [Conclusión](#conclusión)

---

## Introducción

Claude Code transforma el desarrollo de software de una tarea de escribir código línea por línea a una conversación técnica con contexto completo. La promesa no es "codificar más rápido", sino decidir mejor: analizar impactos sistémicos, diseñar con intención y validar continuamente antes de ejecutar.

Recomiendo mucho visitar los siguientes sitios:

- [https://claude.com/product/claude-code](https://claude.com/product/claude-code)
- [https://code.claude.com/docs/es/overview](https://code.claude.com/docs/es/overview)

<img src="https://mintcdn.com/claude-code/-YhHHmtSxwr7W8gy/images/vs-code-extension-interface.jpg?w=1100&fit=max&auto=format&n=-YhHHmtSxwr7W8gy&q=85&s=1d90021d58bbb51f871efec13af955c3" alt="Interfaz de Claude Code en VS Code">

*Imagen tomada de: https://code.claude.com/docs/es/vs-code*

### Filosofía de trabajo

- **Análisis → Planificación → Ejecución**: flujo repetible que prioriza comprensión antes que velocidad.
- **Contexto sobre prompts perfectos**: diseñar un espacio de pensamiento compartido con los datos adecuados.
- **Colaboración conversacional**: iterar requisitos, validar cambios y evolucionar el diseño con feedback inmediato.
- **Calidad sobre cantidad**: menos código, mejor pensado, vale más que velocidad bruta.

---

## 1. Instalación y Configuración Inicial

### Objetivo

Preparar el entorno de desarrollo con Claude Code operativo en CLI y editor, con autenticación lista y diagnóstico correcto.

Lectura recomendada: [https://code.claude.com/docs/en/cli-reference](https://code.claude.com/docs/en/cli-reference)

### Instalación global con npm

```bash
npm install -g claude-code
```

Disponible en todo el sistema desde cualquier carpeta. Evita reinstalación por proyecto.

### Comandos de diagnóstico

| Comando | Descripción |
|---------|-------------|
| `claude` | Abre modo interactivo (REPL) |
| `help` | Muestra comandos disponibles |
| `status` | Reporta estado del setup y sesión activa |
| `doctor` | Verifica instalación y settings |
| `login` | Autenticación con Anthropic |

### Autenticación

Dos opciones:

1. **Suscripción de Anthropic**: acceso a app de escritorio + Claude Code
   - Plan Pro: Sonnet, tokens limitados.
   - Plan Max: Opus + más tokens.
2. **Consola de Anthropic**: compra de tokens para uso corporativo.

Es obligatorio crear una cuenta de usuario en la aplicación de Anthropic (o consola) para poder utilizar la herramienta.

### Integración con editor (Cursor/VS Code)

- Instalar extensión Claude Code desde marketplace.
- Interfaz gráfica dentro del editor (v2.0+).
- Contexto compartido entre código y conversación.
- Flujo más ágil: terminal para Claude, editor para código, navegador para validación.

### Relevancia

La configuración correcta determina la calidad del contexto y la experiencia de trabajo. La integración en el editor potencia el análisis multiarchivo y reduce cambios de contexto.

---

## 2. Conceptos Fundamentales

### Ventana de Contexto

**Objetivo**: Entender la memoria de trabajo de Claude Code para optimizar su uso.

#### Características

- Capacidad: 200,000 tokens por defecto; opción de 1,000,000 tokens.
- Contenido: código, conversación y resultados de herramientas.
- Gestión automática: limpia lo irrelevante, conserva lo útil.

#### Mejores prácticas

- Usar referencias con `@` en lugar de pegar código.
- Reiniciar sesión si olvida decisiones importantes.
- Mantener intercambio limpio de información innecesaria.
- Comandos de gestión: `context`, `compact`, `reset`.

### Subagentes Especializados

**Objetivo**: Dividir responsabilidades complejas en especialistas con contexto y herramientas propias.

#### Tipos de subagentes

- **Architect**: análisis de estructura y visión del sistema.
- **Backend**: implementación de APIs, modelos y servicios.
- **Frontend**: componentes de interfaz y experiencia de usuario.
- **QA**: pruebas y validación de calidad.

#### Ventajas

- Especialización por tarea para mayor precisión.
- Contextos separados que no saturan la conversación principal.
- Flujo modular similar a un equipo real.
- Ejecución en paralelo para acelerar entregas.

#### Configuración

Archivos en `.claude/agents/` con formato markdown:
- YAML front matter: nombre, descripción, modelo, color.
- System prompt: define responsabilidades y formato de salida.
- Tools: permisos específicos (read, edit, bash, grep).
- Modelos: Sonnet 4.5 (general), Opus (complejo), Haiku (rápido).

#### Invocación

- **Explícita**: `@architect`, `@backend`, `@frontend`.
- **Implícita**: redactar prompt para que Claude Code decida qué subagentes activar.

#### Consumo de contexto

Cada subagente mantiene su propio historial de conversación. Si un agente consume muchos más tokens que los demás, suele indicar que ha acumulado más interacciones y análisis en su contexto, no que tenga mayor prioridad ni que ejecute más herramientas MCP. Para optimizar, se puede usar `compact` en ese agente específico.

### Model Context Protocol (MCP)

**Objetivo**: Extender capacidades de Claude Code conectándolo con herramientas externas como si fueran funciones nativas.

#### Componentes

- **Tools**: acciones ejecutables con permisos explícitos.
- **Resources**: entradas de datos externos.
- **Prompts**: plantillas de interacción.

#### Transportes soportados

- HTTP Server-Sent Events (SSE).
- Standard input/output (stdio).

#### Gestión

```bash
claude mcp help
claude mcp list
```

#### Integraciones comunes

**Playwright**: navegación automatizada, screenshots, detección de errores de consola.
- [https://github.com/microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp)
- [https://www.npmjs.com/package/@playwright/mcp](https://www.npmjs.com/package/@playwright/mcp)
- [https://playwright.dev/docs/getting-started-mcp](https://playwright.dev/docs/getting-started-mcp)
- [https://claude.com/plugins/playwright](https://claude.com/plugins/playwright)

**Notion**: lectura de documentación del equipo como contexto.
- [https://www.notion.com/es/help/notion-mcp](https://www.notion.com/es/help/notion-mcp)

**Linear**: consulta y actualización de issues y tareas.
- [https://linear.app/integrations/github](https://linear.app/integrations/github)

**Bases de datos**: consultas directas sin cambiar de herramienta.

### Context Engineering

**Objetivo**: Diseñar el espacio de pensamiento compartido con los datos adecuados, sin necesidad de prompts perfectos.

#### Principios

- Evitar instrucciones vagas que generan ruido.
- Definir propósito, límites y criterios de calidad.
- Usar referencias a archivos (`@archivo`) en lugar de pegar código.
- Indicar patrones a seguir o evitar.
- Limpiar información innecesaria del contexto.

### Relevancia

Estos conceptos son la base del trabajo profesional con Claude Code. La ventana de contexto determina qué puede "ver" y "recordar"; los subagentes permiten escalar complejidad; MCP conecta con el ecosistema real; y context engineering asegura resultados precisos sin necesidad de ingeniería de prompts compleja.

---

## 3. Análisis de Arquitectura y Codebase

### Objetivo

Obtener una comprensión profunda del sistema existente antes de modificarlo, identificando componentes, relaciones y flujos.

### Proceso de análisis

#### Big Picture de la arquitectura

1. Cargar proyecto con menciones a carpetas (`@backend`, `@frontend`, `@mobile`).
2. Solicitar análisis de arquitectura completa.
3. Autorizar comandos de lectura seguros.
4. Recibir informe estructurado.

#### Qué detecta Claude Code

- **Backend**: framework, base de datos, modelos, endpoints.
- **Frontend**: framework, SSR/SSG, patrones de diseño, integración con API.
- **Mobile**: plataformas, ciclo de vida de requests.
- **Flujo end-to-end**: desde cliente hasta base de datos y vuelta.

### Memoria persistente (claude.md)

- Guardar análisis en archivo markdown en raíz del proyecto.
- Documentar arquitectura, stacks, estructura y relaciones.
- Servir como referencia continua para equipo y futuras automatizaciones.

### Análisis de impacto de features

#### Modos de pensamiento

- **Think**: análisis estándar.
- **Think deeply**: análisis profundo (recomendado para features medianos).
- **Ultrathink**: máximo razonamiento (tareas muy complejas).

Activación en v2.0: Tecla Tab (on/off), Control+O para ver razonamiento.

#### Salida del análisis

- Componentes afectados.
- Archivos a modificar.
- Complejidad estimada.
- Tiempo estimado.
- Consideraciones críticas.
- Implementación recomendada.
- Impacto estimado.

### Configuración de entorno local

#### Flujo con Docker y Make

1. Verificar versiones de docker y docker-compose.
2. Detectar Makefile y proponer comandos disponibles.
3. Iniciar servicios con `make start`.
4. Resolver problemas (ej: daemon de Docker no activo).
5. Ejecutar migraciones y seeds.
6. Validar endpoints con curl.

#### Permisos y seguridad

- Claude Code solicita aprobación para cada comando.
- Usuario mantiene control final.
- Opciones: permitir una vez, permitir durante sesión, permitir comandos de tipo específico, rechazar.

### Relevancia

El análisis previo evita sorpresas, mantiene coherencia arquitectónica y reduce retrabajo. La memoria persistente centraliza conocimiento del equipo. Los modos de pensamiento permiten profundizar según complejidad de la tarea.

---

## 4. Planificación de Implementación

### Objetivo

Diseñar un plan de implementación sólido, por fases, con criterios de validación claros antes de escribir código.

### Creación del plan con Architect

#### Configuración del subagente Architect

```markdown
---
name: Architect
model: sonnet-4.5
color: yellow
---
# System Prompt
Eres un arquitecto de software especializado en análisis de impacto y planificación de features.

## Responsabilidades
- Analizar impacto técnico del feature
- Identificar componentes afectados
- Proponer fases de implementación
- Considerar performance, testing y escalabilidad

## Formato de salida
- Análisis técnico del feature
- Problema identificado
- Impacto en el sistema
- Propuesta de solución
- Plan de implementación por fases
```

#### Invocación con contexto

- Usar `resume` para retomar conversación con análisis previo.
- Invocar `@architect` con contexto existente.
- Solicitar plan de implementación detallado.

#### Documentación del plan

- Guardar en carpeta `spec/` en raíz.
- Nomenclatura: `00-nombre-feature.md`, incrementando número.
- Incluir: fases, consideraciones de performance, testing y escalabilidad.

### Planificación paralela con múltiples subagentes

#### Creación de subagentes especializados

**Backend Agent** (`backend.md`):
- Stack: FastAPI, Python, SQLAlchemy.
- Responsabilidades: base de datos, migraciones, modelos, servicios, endpoints.

**Frontend Agent** (`frontend.md`):
- Stack: Next.js, React, TypeScript.
- Responsabilidades: componentes, tipos, interfaces, patrones de UI.

#### Ejecución en paralelo

- **Invocación implícita**: Claude Code decide qué agentes activar.
- Prompt: "analizar resultado del arquitecto y crear plan de implementación para backend y frontend en paralelo".
- Solicitar explícitamente: no generar código, solo fases claras.

#### Monitoreo de progreso

- `Ctrl+T`: visualizar to-dos en progreso.
- `context`: mostrar uso de memoria por agente.
- Aislamiento: cada subagente opera con contexto separado.

#### Salida

Archivos de especificación en `spec/`:
- `01-backend-ratings.md`
- `02-frontend-ratings.md`
- Fases independientes y verificables.
- Sin código, solo especificaciones detalladas.

### Relevancia

La planificación previa evita improvisación, identifica riesgos temprano y facilita la división de trabajo. Los subagentes especializados aceleran el análisis en paralelo sin saturar contexto. La documentación persistente alinea al equipo completo.

---

## 5. Implementación: Backend

### Objetivo

Ejecutar el plan de backend con calidad de producción: migraciones, modelos, servicios, endpoints y validación continua.

### Fase 1: Base de Datos

#### Migraciones con Alembic

- Activar plan mode para revisar antes de ejecutar.
- Crear migración para nueva tabla (ej: `course_rating`).
- Incluir constraints e índices para performance.
- Ejecutar migración con comando de Makefile.
- Validar en Postgres que se aplicó correctamente.
- Documentar comando de downgrade para rollback.

#### Modos de ejecución

- **Modo por defecto**: pide confirmación antes de cada paso.
- **Plan mode**: muestra el plan completo antes de ejecutar.
- **Auto accept**: aprueba automáticamente (solo en entornos seguros).

#### Validación

- Ejecutar unit tests después de migración.
- Verificar que no se rompió funcionalidad existente.
- Consultar endpoint de health.

### Fase 2: Modelos y Servicios

#### Service Layer

- Implementación de métodos según documentación del plan.
- Uso de SQLAlchemy para ORM.
- Validaciones de negocio.

#### Esquemas Pydantic

- Creación de directorio `schemas/`.
- Definición de modelos de entrada/salida.
- Validación de tipos.

### Fase 3: Endpoints

#### Implementación de API

- Endpoints para crear, leer y actualizar datos.
- Respeto a convenciones REST.
- Manejo de errores y logging.

#### Testing

- Cobertura de funcionalidad con unit tests.
- Ejecución en contenedor de Docker: `docker compose exec api pytest`.

### Aceleración con Dangerously Skip Permissions

**Cuándo usar**:
- Entornos aislados (VMs o contenedores).
- Con capacidad de restauración completa.
- Sin acceso directo a Internet desde el contenedor.

**Beneficio**: evita aprobaciones constantes y acelera entrega.
**Riesgo**: solo en entornos controlados y restaurables.

### Persistencia de configuración

#### Comando hash (`#`)

Guardar en memoria del proyecto configuraciones persistentes:
```
# Todo se ejecuta en Docker
# Usar comandos del Makefile
```

### Gestión de contexto en sesiones largas

#### Métricas

- Sonnet 4.5 permite sesiones de hasta 30 horas.
- Uso típico: ~66% de 200k tokens en backend completo.
- Aviso al quedar 9% restante.

#### Comandos

- `context`: mostrar uso de memoria.
- `compact`: reducir conversación preservando hallazgos clave.
- `reset`: limpiar y arrancar conversación nueva.

### Validación integral

- Tests unitarios: todos en verde.
- Contenedor activo y saludable.
- Endpoints respondiendo correctamente.
- Health check: OK.

### Relevancia

La implementación por fases con validación continua reduce riesgos. Los tests previenen regresiones. Docker aísla el entorno. Makefile estandariza comandos. El contexto persistente mantiene coherencia en sesiones largas.

---

## 6. Implementación: Frontend

### Objetivo

Construir UI intuitiva y funcional conectada al backend, con validación visual y datos reales.

### Fase 1: Configuración del entorno

#### Preparación

- Revisar README.md para instrucciones.
- Instalar dependencias: `yarn install`.
- Levantar servidor: `yarn dev`.
- Enviar a background con `Control+B` (funcionalidad nativa de Claude Code para gestionar procesos).
- Validar en localhost:3000.

#### Coordinación con backend

- Si falla por falta de datos, levantar backend con `make start`.
- Mantener ambos servicios activos.

### Fase 2: Componente de UI (datos mock)

#### Limitación de alcance

> En el caso de estudio

- Implementar primero en lista de cursos.
- Luego extender a vista de detalle y clases.
- Pedir explícitamente uso de datos mock para validar UI primero.

#### Creación del componente

- Star rating interactivo.
- Modo read-only para lista (solo visualización).
- Modo editable para detalle del curso.
- Promedio visual (ej: 3.5 estrellas).
- Contador de valoraciones.
- Datos mock por curso para probar estados visuales.

#### Validación visual con capturas

1. Capturar pantalla y copiar al portapapeles.
2. Pegar en Claude Code con Control+V.
3. Solicitar análisis: Claude identifica componente, estilos, espaciados.
4. Iterar CSS según feedback: colores, tamaños, hover, focus.

**Ventaja**: ajuste fino sin ciclos de prueba manuales.

### Fase 3: Integración con API

#### Contexto multi-proyecto

Cuando frontend y backend están en carpetas separadas:
```bash
cd backend
pwd  # copiar ruta absoluta
```
En Claude Code: `adddir /ruta/absoluta/a/backend` (el comando correcto es `adddir` con dos 'd').

Es fundamental usar `pwd` para obtener la ruta absoluta y luego `adddir` para incorporar la carpeta externa al contexto activo. Esta secuencia es la práctica recomendada en los apuntes.

#### Documentación de API con Swagger

- Abrir localhost:8000/docs.
- Acceder a openapi.json.
- Copiar JSON como contexto para Claude Code.
- Alternativamente: pedir curl automático `curl http://localhost:8000/openapi.json`.

Hacer `curl` al `openapi.json` es una técnica correcta y recomendada para extraer la definición de endpoints sin acceder al código fuente, proporcionando la fuente de verdad del contrato de la API.

#### Ajustes coordinados

- Modificar backend para incluir rating en lista de cursos.
- Actualizar frontend para consumir nueva respuesta.
- Validar datos reales en navegador.

#### Validación de integración

- Total de ratings por curso.
- Promedio correcto del API.
- Consistencia entre lista y detalle.
- Manejo de estados: loading, error, vacío.

### Relevancia

La validación visual acelera iteraciones de diseño. Los datos mock permiten probar UI independientemente del backend. El contexto multi-proyecto coordina cambios en ambos lados. Swagger documenta contratos de API sin ambigüedad.

---

## 7. Testing y Validación

### Objetivo

Garantizar comportamiento correcto, detectar regresiones y asegurar calidad antes de producción.

### Unit Tests en contenedores

#### Ejecución

```bash
docker compose exec api pytest
```

#### Flujo de validación

1. Ejecutar tests antes de cambios (baseline).
2. Implementar feature.
3. Ejecutar tests después de cambios.
4. Confirmar que todo está en verde.
5. Si hay fallos, investigar y corregir antes de continuar.

#### Dependencias comunes

Ejemplo de error típico: falta `httpx` o `pytest-asyncio`.
- Agregar a dependencias opcionales.
- Reconstruir con UV.
- Reintentar ejecución.

### Validación de endpoints

#### Health check

```bash
docker compose exec api curl /health
```

#### Endpoints principales

```bash
curl http://localhost:8000/api/courses
curl http://localhost:8000/api/ratings/1
```

### Playwright con MCP

#### Instalación

```bash
claude mcp add playwright
```

#### Uso

"Utilizando el MCP de Playwright, visita http://localhost:3000"

#### Capacidades

- Navegación automatizada.
- Screenshots automáticos.
- Detección de errores de consola.
- Scroll y video recording.
- Contexto visual para análisis.

#### Casos de uso

- Validar interfaz end-to-end.
- Detectar imágenes no cargadas.
- Verificar interacciones (click, hover, focus).
- Comprobar responsive design.

### Relevancia

Los tests unitarios previenen regresiones. La validación en contenedores aísla el entorno. Playwright automatiza pruebas de interfaz y genera evidencia visual. El flujo de validación continua asegura calidad incremental.

---

## 8. Seguridad

### Objetivo

Identificar y corregir vulnerabilidades antes de producción, alineado con estándares como OWASP.

### Security Review automático

#### Comando

```bash
security review
```

#### Proceso

1. Analiza el código actual vs rama base.
2. Identifica vulnerabilidades potenciales.
3. Clasifica según OWASP (ej: Broken Access Control).
4. Asigna nivel de confianza (%).
5. Propone mitigaciones.

#### Documentación

Genera archivo markdown en `spec/` (ej: `03-security-findings.md`):
- Resumen ejecutivo.
- Lista hallazgos priorizados.
- Detalla riesgos y recomendaciones.

#### Ejemplo de hallazgo crítico

- **Vulnerabilidad**: Bypass de autorización en operaciones de rating.
- **Clasificación**: Broken Access Control (OWASP).
- **Confianza**: 95%.
- **Mitigación**:
  - Validar que el usuario autenticado sea dueño del rating antes de modificarlo.
  - Implementar middleware de autorización.
  - Agregar tests de seguridad específicos.

### Iteración de correcciones

1. Usar archivo markdown para planear correcciones.
2. Implementar cambios.
3. Ejecutar `security review` nuevamente.
4. Iterar hasta cerrar todas las vulnerabilidades.

### Buenas prácticas durante implementación

- Evitar command injection.
- Prevenir XSS.
- Validar inputs.
- Sanitizar queries SQL.
- No exponer secrets en código.

### Relevancia

La revisión de seguridad automatizada detecta problemas antes de producción. La documentación estructurada facilita priorización. La iteración continua asegura que las correcciones son efectivas.

---

## 9. Integración con GitHub

### Objetivo

Automatizar code review y habilitar colaboración conversacional directamente desde pull requests e issues.

### Instalación de Claude Code en GitHub

#### Método rápido (recomendado)

1. Ejecutar comando de instalación desde Claude Code.
2. Confirmar repositorio actual.
3. En navegador, configurar app en organización/repo.
4. Habilitar permisos:
   - Lectura/escritura en código.
   - Lectura/escritura en issues.
   - Lectura/escritura en pull requests.
   - Acceso a Actions.
5. Autorizar e iniciar sesión en consola de Anthropic.
6. Elegir forma de invocación: handle de Claude o review automático.
7. Hacer merge del PR que agrega workflows.

#### Requisitos

- Ser admin del repositorio.
- Tener CLI de GitHub instalado (`gh`).
- Poder agregar secrets.

#### Resultado

Dos workflows en `.github/workflows/`:
- `claude.yml`: invocación por handle.
- `claude-code-review.yml`: review automático.

### Code Review automático

#### Activación

Se ejecuta automáticamente al crear un pull request.

#### Qué hace

- Revisa código enviado en el PR.
- Detecta code smell.
- Identifica posibles fallas de seguridad.
- Publica resumen con hallazgos en el PR.
- Marca tareas como completadas durante ejecución.

### Invocación por comentarios

#### Uso

En el PR, comentar: `@claude explícame los cambios que están en esta rama`.

#### Comportamiento

- Claude confirma recepción.
- Crea nuevo job en GitHub Actions.
- Analiza PR y base de código.
- Enumera y ejecuta tareas.
- Publica respuesta en comentario del PR.

### Gestión desde la terminal

#### Consultar comentarios del PR

```bash
pr comments
```

#### Resolución de feedback

1. Traer comentarios del PR a Claude Code.
2. Implementar correcciones conversacionalmente.
3. Push de cambios.
4. Validar nueva ejecución de workflows.

### Gestión de secrets

Después del merge, Claude Code guarda automáticamente el API Key de Anthropic como secreto del repositorio.
Verificación: Settings > Actions > Secrets.

### Relevancia

La integración con GitHub centraliza colaboración. El code review automático detecta problemas temprano. La invocación por comentarios facilita contribuciones de todo el equipo. Los workflows mantienen calidad sin esfuerzo manual.

---

## 10. Gestión de Costos

### Objetivo

Monitorear y controlar el uso de tokens para optimizar gasto según el método de autenticación.

### Vista de sesión actual

#### Información disponible

- Costo de la conversación en dólares.
- Input tokens.
- Output tokens.
- Tiempo en API.
- Tiempo de espera.

**Limitación**: solo sesión activa, no historial.

### Herramienta ccusage

#### Instalación y uso

```bash
npx ccusage
```

#### Reporte generado

- Tabla con uso diario entre fechas.
- Tokens de input y output.
- Caché creado y leído.
- Total de tokens.
- Costo total.

Ejemplo: 19,453,000 tokens con gasto de $15.99 gracias al caché.

### Modelos y precios

#### Comando

```bash
claude model
```

#### Opciones y precios (por millón de tokens)

| Modelo | Input | Output |
|--------|-------|--------|
| Sonnet 4.5 (recomendado) | $3 | $15 |
| Opus (tareas muy complejas) | $15 | $75 |
| Sonnet 1M contexto | $6 | $22.50 |
| Haiku (rápido y simple) | $1 | $5 |

#### Selección según necesidad

- Mucho razonamiento y alta complejidad: Opus.
- Análisis simple y rápido: Haiku.
- Balance capacidad/precio: Sonnet 4.5.

### Impacto del caché

#### Funcionamiento

- Guarda contexto una vez con costo completo.
- Lecturas posteriores cuestan fracción mínima.
- Permite usar millones de tokens con gasto bajo.

Ejemplo práctico: contexto de proyecto completo cacheado una vez, reutilizado en múltiples sesiones.

### Métodos de autenticación y su impacto

#### Suscripción a Claude

- No cobra por millón de tokens.
- Cantidad predeterminada con límite diario.
- Comando `usage` muestra límite y cuándo se resetea.
- Enfoque: gestionar límite diario más que costo.

#### Consola de Anthropic

- Cobra por millón de tokens.
- Sin límite diario.
- Comando `usage` no disponible.
- Enfoque: monitorear costo con `ccusage`.

### Relevancia

El monitoreo de costos previene sorpresas. La selección de modelo según tarea optimiza gasto. El caché reduce drásticamente costos en proyectos reales. El método de autenticación determina la estrategia de control.

---

## 11. Actualización y Nuevas Funcionalidades (v2.0)

### Objetivo

Aprovechar mejoras de interfaz, productividad y estabilidad de Claude Code 2.0 con Sonnet 4.5.

### Actualización

#### CLI

```bash
claude update
```
Compara versión actual con la más reciente y actualiza automáticamente.

#### Plugin de VS Code

1. Abrir extensiones.
2. Buscar "claude".
3. Hacer clic en actualizar.
4. Verificar versión 2.0.14+.

### Interfaz gráfica

**Cambio principal**: de consola embebida a interfaz gráfica completa dentro del editor.

**Ventajas**:
- Mayor claridad visual.
- Mejor organización de tareas.
- Acceso rápido a historial.
- Integración más natural con el editor.

### Checkpoints

**Objetivo**: Revertir cambios con precisión sin Git.

#### Uso

1. Hacer modificación.
2. Presionar Escape dos veces para ver historial.
3. Seleccionar punto previo con flechas.
4. Presionar Enter.
5. Elegir qué restaurar:
   - Código y conversación.
   - Solo conversación.
   - Solo código.

**Ventaja**: deshacer granular sin commits.

### Modos de pensamiento simplificados

#### Cambios en v2.0

- **Antes**: palabras clave "think", "think deeply", "ultrathink".
- **Ahora**:
  - Tecla Tab para activar/desactivar.
  - Control+O: mostrar/ocultar razonamiento interno.
  - Modo ultrathink sigue disponible con indicador visual.

### Sonnet 4.5

#### Mejoras

- Sesiones de hasta 30 horas consecutivas.
- Mejor memoria a lo largo de la sesión.
- Rendimiento superior en benchmarks vs Opus 4.1, GPT-5 Codex, Gemini 2.5 Pro (según blog post oficial con 500 ejecuciones).

### Búsqueda en historial

#### Comando

`Control+R`: búsqueda recursiva del historial de prompts.

#### Uso

1. Presionar Control+R.
2. Escribir pista del prompt anterior.
3. Seleccionar resultado.
4. Presionar Enter para reejecutar en nueva conversación.

### Interrupción de ejecución

`Escape`: detiene cualquier ejecución en curso.

### Relevancia

Los checkpoints aceleran experimentación sin temor a romper código. Los modos de pensamiento son más intuitivos. Sonnet 4.5 permite sesiones largas sin pérdida de contexto. La búsqueda en historial reutiliza conocimiento previo.

---

## 12. Comandos de Claude Code

### Sesión y autenticación

| Comando | Descripción |
|---------|-------------|
| `claude` | Abrir modo interactivo (REPL) |
| `login` | Autenticarse con Anthropic (suscripción o consola) |
| `status` | Mostrar estado de sesión y configuración actual |
| `doctor` | Verificar instalación y diagnosticar problemas |

### Ayuda y documentación

| Comando | Descripción |
|---------|-------------|
| `help` | Mostrar comandos disponibles y ayuda básica |
| `/help` | Obtener ayuda dentro de Claude Code |

### Gestión de contexto

| Comando | Descripción |
|---------|-------------|
| `context` | Mostrar uso de memoria conversacional y recursos |
| `compact` | Reducir conversación preservando hallazgos clave |
| `reset` | Limpiar contexto y arrancar conversación nueva |
| `resume` | Listar y retomar conversaciones previas |
| `adddir /ruta/` | Agregar directorio externo como contexto (usar ruta absoluta) |
| `@archivo` | Referenciar archivo específico en el prompt |
| `@carpeta` | Referenciar carpeta completa en el prompt |

### Gestión de subagentes

| Comando | Descripción |
|---------|-------------|
| `agents` | Crear o gestionar agentes especializados |
| `@nombreagente` | Invocar subagente específico explícitamente |

### Model Context Protocol (MCP)

| Comando | Descripción |
|---------|-------------|
| `claude mcp help` | Ayuda sobre gestión de servidores MCP |
| `claude mcp list` | Listar servidores MCP y su estado de conexión |
| `claude mcp add` | Agregar nuevo servidor MCP |
| `claude mcp remove` | Remover servidor MCP |

### Modelos y costos

| Comando | Descripción |
|---------|-------------|
| `claude model` | Ver modelos disponibles y precios por millón de tokens |
| `usage` | Mostrar uso del límite diario (solo con suscripción) |
| `npx ccusage` | Reporte de costos diario entre fechas (requiere instalación) |

### Actualización

| Comando | Descripción |
|---------|-------------|
| `claude update` | Actualizar Claude Code a la última versión |

### Modo Plan

| Comando | Descripción |
|---------|-------------|
| `Plan mode` | Mostrar plan completo antes de ejecutar (activar en configuración) |
| `Auto accept` | Aprobar automáticamente acciones (solo en entornos seguros) |

### Bash y ejecución

| Comando | Descripción |
|---------|-------------|
| `!comando` | Ejecutar comando bash directamente (ej: `!pwd`) |
| `Control+B` | Enviar proceso a background (funcionalidad nativa de Claude Code) |
| `Escape` | Interrumpir ejecución en curso |

### Interfaz (v2.0+)

| Comando | Descripción |
|---------|-------------|
| `Tab` | Activar/desactivar modo de pensamiento |
| `Control+O` | Mostrar/ocultar razonamiento interno |
| `Escape` (2 veces) | Ver historial de instrucciones (checkpoints) |
| `Control+R` | Búsqueda recursiva en historial de prompts |
| `Ctrl+T` | Visualizar lista de to-dos en progreso |

### GitHub

| Comando | Descripción |
|---------|-------------|
| `pr comments` | Traer comentarios de pull request a la conversación |
| `@claude` | Mencionar a Claude en comentario de PR para invocarlo |

### Seguridad

| Comando | Descripción |
|---------|-------------|
| `security review` | Analizar código actual vs rama base, identificar vulnerabilidades |

### Persistencia

| Comando | Descripción |
|---------|-------------|
| `# comentario` | Guardar configuración persistente en memoria del proyecto |
| `export` | Exportar conversación para copiar a otra sesión |

### Navegación y edición de contexto

| Comando | Descripción |
|---------|-------------|
| `command option K` | Mencionar líneas seleccionadas como contexto (macOS) |
| `Control+V` | Pegar captura de pantalla para análisis visual |

---

## Conclusión

El flujo completo de desarrollo con Claude Code transforma la programación en una conversación técnica con contexto completo:

- **Setup inicial**: Instalación, configuración y diagnóstico.
- **Análisis**: Big picture de arquitectura y análisis de impacto.
- **Planificación**: Diseño con subagentes especializados en paralelo.
- **Implementación**: Backend y frontend con validación continua.
- **Testing**: Unit tests, integración y validación visual con Playwright.
- **Seguridad**: Security review automatizado con clasificación OWASP.
- **Integración continua**: Workflows de GitHub para code review automático.
- **Gestión**: Monitoreo de costos, modelos y contexto.

La promesa no es escribir más rápido, sino decidir mejor: con análisis profundo, diseño intencional y validación continua. Claude Code amplifica tu criterio técnico, no lo sustituye.

> Gracias por leer!