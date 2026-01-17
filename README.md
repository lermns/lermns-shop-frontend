# 🛍️ Lermns Shop  

Aplicación de e-commerce en construcción desarrollada con React + TypeScript para la gestión y venta de productos de moda.

El frontend está desplegado en **Netlify** y consume un backend desarrollado en **NestJS**, desplegado en **Render**, con base de datos PostgreSQL en **Neon**.

Debido al plan gratuito de Render, el backend se suspende por inactividad, por lo que la web puede tardar aproximadamente 30-40 segundos en arrancar.  
🔗 **Demo:** [lermns-shop-react.netlify.app](https://lermns-shop-react.netlify.app/)  
🔗 **Backend:** NestJS (Render)

## 📌 Estado del proyecto  

⚠️ **Este proyecto está en desarrollo activo.** Las funcionalidades actuales son estables y funcionales, pero se están agregando nuevas características continuamente.  

**Versión actual:** v1.0.0  
**Última actualización:** Enero 2025  

## 🚀 Tecnologías utilizadas  

### Frontend  

- **React** + **TypeScript**  
- **Tailwind CSS** + **shadcn/ui**  
- **React Router** (v7)  
- **React Hook Form** - Manejo de formularios  
- **TanStack React Query** - Gestión de estado del servidor  
- **Lucide React** - Iconos  
- **Axios** - Cliente HTTP  

### Backend  

- **NestJS** - Framework Node.js  
- **PostgreSQL** (Neon) - Base de datos  
- **TypeORM** - ORM para PostgreSQL  
- **Cloudinary** - Almacenamiento de imágenes  
- **JWT** - Autenticación  
- **Bcrypt** - Encriptación de contraseñas  

---

## ✨ Funcionalidades principales

### Para usuarios  

- 🛒 Catálogo de productos con imágenes  
- 🔍 Filtrado por género (Hombre, Mujer, Niño, Unisex)  
- 📱 Diseño responsive  
- 🔐 Autenticación de usuarios    

### Para administradores  

- ➕ Crear y editar productos  
- 📸 Subida múltiple de imágenes con drag & drop  
- 📊 Gestión de inventario (stock, tallas, precios)  
- 🏷️ Sistema de etiquetas personalizadas  
- 👁️ Vista previa de imágenes antes de guardar  
- ✅ Validación de formularios en tiempo real  
- 📋 Listado completo de productos con paginación  

### 🔑 Credenciales de prueba

**Usuario administrador:**
```
Email: test1@google.com
Password: Abc123
```

**Usuario regular:**
```
Email: test2@google.com
Password: Abc123
```  

---

## 🏗️ Estructura del proyecto  
```
lermns-shop/  
├── src/  
│   ├── admin/              # Módulo de administración  
│   │   ├── components/     # Componentes admin  
│   │   ├── pages/          # Páginas admin  
│   │   └── layout/         # Layout del admin  
│   ├── api/                # Configuración de API  
│   ├── auth/               # Módulo de autenticación  
│   ├── components/         # Componentes compartidos  
│   │   ├── custom/         # Componentes personalizados  
│   │   └── ui/             # Componentes de shadcn/ui  
│   ├── interfaces/         # Tipos e interfaces TypeScript  
│   ├── products/           # Módulo de productos  
│   │   ├── actions/        # Acciones del servidor  
│   │   ├── components/     # Componentes de productos  
│   │   └── pages/          # Páginas de productos  
│   ├── router/             # Configuración de rutas  
│   └── store/              # Zustand stores  
├── public/                 # Archivos estáticos  
└── ...  
```

---

## 🚀 Levantar el entorno de desarrollo  

### 1️⃣ Clonar el repositorio  
```bash
git clone https://github.com/lermns/lermns-shop.git  
cd lermns-shop  
```

### 2️⃣ Configurar variables de entorno  

Crear el archivo `.env` basándose en `.env.template`:
```env
VITE_API_URL=http://localhost:3000/api  
```

### 3️⃣ Instalar dependencias  
```bash
npm install  
```

### 4️⃣ Levantar el servidor de desarrollo  
```bash
npm run dev  
```

La aplicación estará disponible en `http://localhost:5173`

---

## ⚙️ Backend (Requisitos)  

⚠️ **Es necesario tener el backend en ejecución** para que la aplicación funcione correctamente.

### Clonar y configurar el backend:
```bash
git clone https://github.com/lermns/lermns-shop-backend.git
cd lermns-shop-backend
```

### Variables de entorno del backend (.env):
```env
STAGE=dev

DB_PASSWORD=MySecr3tPassWord@as2
DB_NAME=TesloDB
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres

PORT=3000
HOST_API=http://localhost:3000/api

JWT_SECRET=Est3EsMISE3Dsecreto32s
```

### Levantar el backend:

#### Instalar dependencias  
```bash
npm install  
```

#### Levantar base de datos con Docker  
```bash
docker compose up -d  
```

#### Ejecutar servidor de desarrollo  
```bash
npm run start:dev  
```

#### Ejecutar seed inicial  
```bash
# Hacer petición GET a:
http://localhost:3000/api/seed  
```

---

## 📦 Scripts disponibles  
```bash
# Desarrollo
npm run dev              # Levantar servidor de desarrollo

# Build
npm run build            # Compilar para producción
npm run preview          # Vista previa del build
```

---

## 🌐 Despliegue  

### Frontend (Netlify)  

1. Conectar repositorio de GitHub  
2. Configurar variables de entorno: `VITE_API_URL`  
3. Desplegar  

🔗 **Demo:** [LermnsShop](https://lermns-shop-react.netlify.app/)  

### Backend (Render)  

1. Conectar repositorio de GitHub  
2. Configurar variables de entorno del backend  
3. Desplegar  

### Base de datos (Neon)  

1. Crear proyecto en Neon  
2. Copiar connection string  
3. Configurar en variables de entorno del backend  

---

## 👨‍💻 Autor  

**Leonardo Ramos B.**

- [GitHub](https://github.com/lermns)  
- [LinkedIn](https://www.linkedin.com/in/leonardo-ramos-barrenozo-37107128b)  

---

## 🙏 Agradecimientos  

- Curso de NestJS por [Fernando Herrera](https://github.com/Klerith)  
- Curso de React por [Fernando Herrera](https://github.com/Klerith)  
- Diseño inspirado en tiendas modernas de e-commerce  
- shadcn/ui por los componentes de interfaz
