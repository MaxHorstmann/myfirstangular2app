// https://angular.io/docs/js/latest/guide/setup.html


function AppComponent() {}
AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'my-app'
  }),
  new angular.ViewAnnotation({
  	templateUrl: 'myTemplate.html'
  })
];
document.addEventListener('DOMContentLoaded', function() {
  angular.bootstrap(AppComponent);
});
