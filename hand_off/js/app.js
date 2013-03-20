
define('app/subA',[], function(subC) {
    console.log('subA loaded...');
});

require(['app/subA'], function(subA, subB) {
    alert('required app with subA as a dependencies...');
});

define("app", function(){});
