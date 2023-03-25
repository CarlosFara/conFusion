# ConFusion
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1 and migrated to 13.3.12 using node v14.21.3 with npm 6.14.18

## Development server
Run `ng serve` for a dev server and navigate to `http://localhost:4200/` or use `ng s --o` instead.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/) (It will be **removed** in angular 14).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

You can get help migrating between Angular versions at [Angular Update Guide](https://update.angular.io/)

## Running json-server to view the entire App
Run `json-server --watch db.json` for a dev json-server
([Setting up a Server using json-server](https://www.npmjs.com/package/json-server)).

Aclaración: Toda la aplicación está cofigurada para levantar los datos desde el servidor (imagenes incluidas).

## Error en font-awesome
Simplemente hay que agregarle 'calc' a las líneas problematicas, por ejemplo --> width: calc(18em / 14);