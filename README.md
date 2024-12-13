# Piggy-Edu

---

## **Requisitos Previos**

1. **Node.js** (versión 16 o superior).
2. **NPM** o **Yarn** (incluido con Node.js).
3. **Git** instalado en tu sistema.
4. Claves y configuración para interactuar con **ZKsync Testnet**.
5. Una cuenta en **GitHub** con acceso al repositorio.

---

## **Instalación**

### 1. Clonar el Repositorio
```bash
git clone https://github.com/mili-cornidez/piggy-edu.git
cd piggy-edu
```

### 2. Instalar Dependencias
Instala las dependencias del frontend y backend:

Para el backend:
```bash
cd backend
npm install
```

Para el frontend:
```bash
cd frontend
npm install
```

---

## **Configuración**

### 1. Variables de Entorno
Crea un archivo `.env` en la carpeta backend y añade las siguientes variables:
```env
PRIVATE_KEY=<tu_clave_privada_para_ZKsync>
INFURA_API_KEY=<tu_api_key_de_infura_para_eth_goerli>
ZKSYNC_TESTNET_URL=https://zksync2-testnet.zksync.dev
CONTRACT_ADDRESS=<direccion_del_contrato_principal>
```

---

## **Ejecución del Proyecto**

### 1. Levantar el Backend
Inicia el servidor backend:
```bash
npm run start:backend
```
Esto ejecutará el servidor en `http://localhost:3000` (por defecto).

### 2. Iniciar el Frontend
Inicia el cliente frontend:
```bash
npm run start:frontend
```
Esto ejecutará la interfaz en `http://localhost:3001` (por defecto).

---


## **Tecnologías Utilizadas**
- **Node.js**: Backend.
- **Hardhat**: Desarrollo y pruebas de contratos inteligentes.
- **Ethers.js**: Interacción con blockchain.
- **ZKsync Era**: Red blockchain Layer 2.

---