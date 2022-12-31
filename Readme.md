# Simple CRUD Express JS with Typescript

## Feature :
- Authentication (JWT)
- Logging (Morgan)
- ORM (Sequelize)
- Mysql
- CRUD

### Api Documentation
coming soon


## How To Run Local

- Clone this repo
  ```sh
  git clone https://github.com/zenklot/typescript-dasar.git
  ```
- Install dependencies
  ```sh
  yarn install
  ```
- Run Watcher
  ```sh
  yarn ts
  ```
- Run Development
  ```sh
  yarn dev
  ```

## How to setup

Untuk Setup Typescript di Terminal ketikan :
```
./node_modules/.bin/tsc --init
```
Maka file `tsconfig.json` akan terbuat otomatis


---
Untuk Setup Sequelizerc pastikan buat terlebih dahulu file `.sequelizerc` dengan isian :
```
const path = require("path");
require("dotenv").config();

if (process.env.NODE_ENV == "development") {
  module.exports = {
    config: path.resolve("src/config", "database.js"),
    "models-path": path.resolve("src/db", "models"),
    "seeders-path": path.resolve("src/db", "seeders"),
    "migrations-path": path.resolve("src/db", "migrations"),
  };
} else {
  module.exports = {
    config: path.resolve("build/config", "database.js"),
    "models-path": path.resolve("build/db", "models"),
    "seeders-path": path.resolve("build/db", "seeders"),
    "migrations-path": path.resolve("build/db", "migrations"),
  };
}
```

karena ini konfig untuk typescript jadi dibuat 2, antara development dan production
setelah itu tinggal kita jalankan cli-nya di Terminal :
```
./node_modules/.bin/sequelize-cli init
```

---
command untuk membuat migration :
```
./node_modules/.bin/sequelize-cli model:generate --name user --attributes username:string,password:string --underscored
```

command untuk menjalankan migration :
```
./node_modules/.bin/sequelize-cli db:migrate
```