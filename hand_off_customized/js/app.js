
define('app/subA',[], function() {
    console.log('subA loaded...');
});

require(['app/subA', 'custom_app/subB'], function(subA, subB) {
    alert('required app with subA and subB as a dependencies...');
});

define("app", function(){});
