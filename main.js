// https://angular.io/docs/js/latest/guide/setup.html


function AppComponent() {}
AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'my-app'
  }),
  new angular.ViewAnnotation({
    template: '<h1>Hello world! It\'s me, Angular 2!</h1>'
  })
];
document.addEventListener('DOMContentLoaded', function() {
  angular.bootstrap(AppComponent);
});
