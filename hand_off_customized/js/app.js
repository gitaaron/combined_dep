
define('app/subA',[], function() {
    console.log('subA loaded...');
});

require(['app/subA'], function(subA) {
    alert('required app with subA as a dependencies...');
});

define("app", function(){});
