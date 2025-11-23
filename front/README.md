# 🎨 PRESENTACIÓN TABLE - REACT APP MODERNA

**Rebeca Pérez-Flores | Proyecto TELAR | MESA México**

---

## 📦 ¿QUÉ SE HA CREADO?

He transformado tu presentación en una **aplicación React moderna y profesional** con:

### ✨ CARACTERÍSTICAS PRINCIPALES

1. **Diseño Vibrante y Profesional**
   - Colores vibrantes (verdes, azules, naranjas)
   - Gradientes modernos
   - Efectos glassmorphism
   - Animaciones suaves con Framer Motion

2. **Navegación Completa**
   - Botones anterior/siguiente
   - Barra de progreso animada
   - Thumbnails laterales
   - Atajos de teclado

3. **Notas del Speaker**
   - Panel deslizable con tu texto a leer
   - Duración estimada por slide
   - Fácil de mostrar/ocultar

4. **Controles Profesionales**
   - Auto-avance (play/pause)
   - Pantalla completa
   - Indicador de sección y tiempo

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
front/
├── public/
│   └── Images/              ← Aquí van tus imágenes
│       ├── logos/
│       ├── mapas/
│       ├── fotos/
│       └── graficas/
│
├── src/
│   ├── apps/
│   │   └── PresentationApp.jsx    ← App principal
│   │
│   ├── components/
│   │   └── slides/                ← Componentes de cada slide
│   │       ├── TitleSlide.jsx
│   │       ├── ProfileSlide.jsx
│   │       ├── TelarProjectSlide.jsx
│   │       └── ...
│   │
│   ├── styles/
│   │   ├── PresentationApp.css    ← Estilos principales
│   │   └── slides.css             ← Estilos de slides
│   │
│   └── assets/
│       └── images/                ← Imágenes importadas
│
└── README.md                      ← Este archivo
```

---

## 🚀 INSTALACIÓN

### PASO 1: Instalar Node.js

**¿Qué es Node.js?**
Es un entorno para ejecutar JavaScript fuera del navegador. Necesario para React.

**Descargar:**
- Ve a: https://nodejs.org/
- Descarga la versión **LTS** (recomendada)
- Instala siguiendo el asistente

**Verificar instalación:**
```bash
node --version
npm --version
```

Deberías ver números de versión (ejemplo: `v18.17.0` y `9.6.7`)

---

### PASO 2: Instalar Dependencias

Abre la terminal en la carpeta `front/` y ejecuta:

```bash
npm install
```

**¿Qué hace esto?**
Instala todas las librerías necesarias:
- `react` - La librería principal
- `react-dom` - Para renderizar en el navegador
- `framer-motion` - Para animaciones
- `lucide-react` - Para iconos

**Nota:** Este proceso puede tardar 2-3 minutos.

---

### PASO 3: Iniciar la Presentación

```bash
npm start
```

**¿Qué pasa?**
1. Se compila la aplicación
2. Se abre automáticamente en tu navegador
3. La URL es: `http://localhost:3000`

**¿No se abrió automáticamente?**
Abre manualmente: http://localhost:3000

---

## 🎮 CÓMO USAR LA PRESENTACIÓN

### CONTROLES CON MOUSE/TRACKPAD

| Acción | Botón |
|--------|-------|
| Siguiente slide | Botón → verde abajo |
| Anterior slide | Botón ← verde abajo |
| Ver notas | Botón 📄 arriba izquierda |
| Auto-avance | Botón ▶ arriba izquierda |
| Pantalla completa | Botón ⛶ arriba izquierda |
| Ir a slide específico | Click en número lateral derecho |

---

### ATAJOS DE TECLADO

| Tecla | Acción |
|-------|--------|
| `→` o `Espacio` | Siguiente slide |
| `←` | Slide anterior |
| `N` | Mostrar/ocultar notas |
| `F` | Pantalla completa |
| `Esc` | Cerrar notas o salir pantalla completa |

---

## 🎨 PALETA DE COLORES

Los colores han sido elegidos cuidadosamente para ser:
- **Profesionales** - Adecuados para presentación académica
- **Vibrantes** - Captan la atención
- **Accesibles** - Buen contraste para lectura

### Colores Principales

**Verdes (Naturaleza, Sostenibilidad)**
- Verde oscuro: `#064e3b`
- Verde brillante: `#10b981`
- Verde claro: `#6ee7b7`

**Azules (Tecnología, Confianza)**
- Azul oscuro: `#1e3a8a`
- Azul brillante: `#3b82f6`
- Azul claro: `#93c5fd`

**Acentos (Energía, Llamadas de Atención)**
- Naranja: `#f97316`
- Amarillo dorado: `#fbbf24`
- Rosa: `#ec4899`
- Púrpura: `#a855f7`

---

## 📝 ESTRUCTURA DEL CÓDIGO

### `PresentationApp.jsx` - App Principal

**¿Qué hace?**
- Controla toda la presentación
- Maneja navegación entre slides
- Muestra/oculta notas
- Gestiona atajos de teclado

**Conceptos clave para principiantes:**

```javascript
// ESTADO: Información que puede cambiar
const [currentSlide, setCurrentSlide] = useState(0);
// currentSlide = número del slide actual
// setCurrentSlide = función para cambiarlo

// FUNCIÓN: Bloque de código reutilizable
const nextSlide = () => {
  setCurrentSlide(currentSlide + 1);
};
// Cuando llamas nextSlide(), avanza un slide

// EFECTO: Código que se ejecuta automáticamente
useEffect(() => {
  // Este código se ejecuta cuando cambia currentSlide
}, [currentSlide]);
```

---

### `PresentationApp.css` - Estilos

**¿Qué hace?**
- Define colores, tamaños, posiciones
- Crea animaciones
- Hace la presentación responsive

**Conceptos clave:**

```css
/* VARIABLE CSS: Valor reutilizable */
:root {
  --primary-500: #10b981;
}

/* CLASE: Estilo aplicable a elementos */
.nav-button {
  background: var(--primary-500);  /* Usa la variable */
  border-radius: 50%;              /* Hace círculo */
}

/* ANIMACIÓN: Movimiento definido */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## 🎬 ANIMACIONES

Todas las animaciones usan **Framer Motion**.

### Tipos de Animaciones

1. **Entrada de Slides**
   - Slide entra desde la derecha
   - Desvanecimiento suave
   - Duración: 500ms

2. **Botones**
   - Hover: Crece ligeramente
   - Click: Se encoge
   - Transición suave

3. **Barra de Progreso**
   - Llena de izquierda a derecha
   - Efecto shimmer (brillo)
   - Sincronizada con navegación

4. **Panel de Notas**
   - Sube desde abajo
   - Fondo difuminado (blur)
   - Cierre con rotación

---

## 🖼️ CÓMO AGREGAR IMÁGENES

### PASO 1: Colocar Imágenes

Pon tus imágenes en:
```
front/public/Images/
├── logos/
│   ├── unam.png
│   ├── iis.png
│   └── table.png
│
├── mapas/
│   ├── mapa_actores.png
│   └── mapa_tensiones.png
│
├── fotos/
│   ├── mesa_a.jpg
│   ├── tarjetas_verdes.jpg
│   └── keken.jpg
│
└── graficas/
    ├── mentimeter.png
    └── industria.png
```

---

### PASO 2: Usar en Slides

En cualquier componente de slide:

```javascript
// Imagen desde public/Images/
<img src="/Images/mapas/mapa_tensiones.png" alt="Mapa de Tensiones" />

// Con estilos
<img
  src="/Images/fotos/mesa_a.jpg"
  alt="Mesa A en CEPHCIS"
  style={{
    width: '100%',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  }}
/>
```

---

## 🛠️ PERSONALIZACIÓN

### Cambiar Colores

Edita `front/src/styles/PresentationApp.css`:

```css
:root {
  /* Cambia estos valores */
  --primary-500: #10b981;    /* Tu color preferido */
  --accent-orange: #f97316;  /* Otro color */
}
```

Los colores se actualizan automáticamente en toda la app.

---

### Cambiar Timing de Animaciones

En el mismo archivo CSS:

```css
:root {
  --transition-base: 300ms;   /* Más rápido: 150ms, Más lento: 500ms */
}
```

---

### Cambiar Auto-Avance

En `PresentationApp.jsx`, línea ~150:

```javascript
const timer = setTimeout(() => {
  nextSlide();
}, 5000);  // Cambia 5000 (5 segundos) al tiempo que quieras
```

---

## 📚 PRÓXIMOS PASOS

### LO QUE FALTA CREAR

Necesito crear los componentes de slides individuales.

**¿Qué necesito de ti?**

1. **Materiales visuales** (los que pedí antes):
   - Mapa de Tensiones
   - Mapa de Actores
   - Fotos del evento
   - Concept Notes

2. **Confirmación de contenido**:
   - ¿El texto está bien?
   - ¿Algo que cambiar?

**¿Qué haré yo?**

Crear ~23 componentes de slides, cada uno con:
- Diseño único y atractivo
- Animaciones específicas
- Integración de imágenes
- Texto del contenido

---

## ⚠️ SOLUCIÓN DE PROBLEMAS

### "npm: command not found"

**Problema:** Node.js no está instalado.

**Solución:** Instala Node.js desde https://nodejs.org/

---

### "Cannot find module 'react'"

**Problema:** Dependencias no instaladas.

**Solución:**
```bash
cd front/
npm install
```

---

### "Port 3000 is already in use"

**Problema:** Ya hay algo corriendo en puerto 3000.

**Solución:**
```bash
# Encuentra qué está usando el puerto
lsof -i :3000

# Mata ese proceso
kill -9 <PID>

# O usa otro puerto
PORT=3001 npm start
```

---

### La página está en blanco

**Problema:** Error en el código JavaScript.

**Solución:**
1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Console"
3. Busca errores en rojo
4. Compárteme el error

---

## 📧 NOTAS IMPORTANTES

### Para Presentar en TABLE

**Opción A: Presentar desde tu computadora**
1. Inicia la app: `npm start`
2. Abre en pantalla completa (botón o tecla F)
3. Comparte pantalla en Zoom/Teams
4. Usa atajos de teclado para navegar

**Opción B: Exportar a PDF (si prefieres)**
1. Abre la presentación en pantalla completa
2. Usa la función de "Imprimir" del navegador (Ctrl/Cmd + P)
3. Selecciona "Guardar como PDF"
4. Ajusta cada slide en una página

**Opción C: Deploy online (avanzado)**
Te puedo ayudar a publicarla en internet (Vercel, Netlify)
para que puedas acceder desde cualquier lugar.

---

## 🎯 VENTAJAS DE ESTA VERSIÓN

vs. PowerPoint tradicional:

✅ **Más moderna y profesional**
✅ **Animaciones suaves y naturales**
✅ **Controles personalizados**
✅ **Notas integradas**
✅ **No necesitas PowerPoint**
✅ **Funciona en cualquier navegador**
✅ **Código abierto y personalizable**
✅ **Fácil de actualizar**

---

## 💡 PRÓXIMO MENSAJE

**Dime:**
1. ¿Pudiste instalar Node.js?
2. ¿Funciona `npm start`?
3. ¿Tienes los materiales visuales listos?
4. ¿Algún cambio al texto?

**Entonces yo:**
- Creo todos los componentes de slides
- Integro tus imágenes
- Hago ajustes que necesites
- Te doy versión final lista para presentar

---

**¿Listo para empezar?** 🚀

Prueba correr `npm start` en la carpeta `front/` y cuéntame cómo te va!
