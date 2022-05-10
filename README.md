# CodeChallenge

Practica 5 semana 4 Launch X

Consiste en desarrollar un API con 3 endpoints con requerimientos especificos.

## Requerimientos

1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación `haveCertification`.
3. Habilitar un endpoint para consultar todos los estudiantes que tengan `credits` mayor a 500.

## API

El servidor se monta en `http://localhost:3000/`

|Endpoint|Response|
|:--|:--|
|`/v1/students`|Lista de todos los estudiantes con todas sus propiedades|
|`/v1/students/email/certification`|Lista de emails de estudiantes con propiedad `haveCertification` = true|
|`/v1/students/credits`|lista de nombres de estudiantes con propiedad `credits` > 500|

## Comandos

1. **Instalar dependencias:** `npm install`
2. **Correr test:** `npm test`
3. **Montar servidor:** `npm run server`
4. **Revision y correccion de sintaxis:** `npm run linter`, `npm run linter-fix`

## Tecnologias usadas

- Git
- GitHub
- Javascript
- Jest
- esLint
- NodeJS
