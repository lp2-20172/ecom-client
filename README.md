This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Rama master: Proyecto inicial
## Instalar o descargar dependencias:

```
>git clone https://github.com/lp2-20172/ecom-client.git
>cd ecom-client
ecom-client>npm install

```
## Run app:
```
ecom-client>npm start
```


# Rama reactcomponent: 
## Ejercicio 1: Title
No necesita nuevas librería
```

```
## Run app:
```
ecom-client>npm start
```

# Rama reactredux: 
## Ejercicio 2:
Desarrollar un componente para incrementar y decrementar un número entero

## Clonar para iniciar desde cero:
```
D:\dev\LP2-20172>git clone https://github.com/lp2-20172/ecom-client.git
Cloning into 'ecom-client'...
remote: Counting objects: 94, done.
remote: Compressing objects: 100% (64/64), done.
remote: Total 94 (delta 52), reused 70 (delta 28), pack-reused 0
Unpacking objects: 100% (94/94), done.

D:\dev\LP2-20172>cd ecom-client
```
## Visualizar ramas (branch) locales y remotos:
```

D:\dev\LP2-20172\ecom-client>git branch -a
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
  remotes/origin/reactcomponent
  remotes/origin/reactredux
```

## Moverse o cambiar de rama (branch): $ git checkout << nombre-rama >>
```
D:\dev\LP2-20172\ecom-client>git checkout reactredux
Switched to a new branch 'reactredux'
Branch reactredux set up to track remote branch reactredux from origin.

D:\dev\LP2-20172\ecom-client>
```



## Instalar dependencias:
```
D:\dev\LP2-20172\ecom-client>npm install
```

## Run app:
```
ecom-client>npm start
```

## (opcional) Para instalar manualmente si estás en un proyecto nuevo :
```
npm install --save react-router@2.0.0
npm install --save redux react-redux
```

## (opcional) Moverse para la rama reactcomponent
```
D:\dev\LP2-20172\ecom-client>git checkout reactcomponent
```

## (opcional) Moverse para la rama master descartando los cambios de la rama actual (reactcomponent)
```
D:\dev\LP2-20172\ecom-client>git checkout - f master
```
## (opcional) Si nuestro repo local está desactualizado, traer como:
```
D:\LP2-20172\ecom-client>git pull origin reactredux
From https://github.com/lp2-20172/ecom-client
 * branch            reactredux -> FETCH_HEAD
Updating 3022e84..b823874
Fast-forward
 README.md | 49 ++++++++++++++++++++++++++++++++++++++++++++-----
 1 file changed, 44 insertions(+), 5 deletions(-)

D:\LP2-20172\ecom-client>
```

# TAller 2 :

## Intalar axios:
```
npm install --save axios redux-thunk
```
## o bien :
```
npm install
```



# TAller 3 : Carrito de compras

## Traer la rama carrito 
```
D:\dev\LP2-20172\ecom-client>git pull origin carrito
```

## Moverse para la rama carrito
```
D:\dev\LP2-20172\ecom-client>git checkout carrito
```

## Intalar material-ui material-ui-icons, ejecutando el siguiente comando:

```
npm install
```

## Run app:
```
ecom-client>npm start
```