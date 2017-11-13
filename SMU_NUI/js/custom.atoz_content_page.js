/**
 * Display some marketing content on the journals A to Z page.
 */

app.controller('prmJournalsAfterController', [function () {
  var vm = this;
}]);

app.component('prmJournalsAfter', {
  bindings: { parentCtrl: '<' },
  controller: 'prmJournalsAfterController',
  template: `
    <div>
      Hello World!
    </div>
  `
});
