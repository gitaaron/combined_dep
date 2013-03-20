define('app/subC',[], function() {
    console.log('subA loaded with subC as dependency...');
});
define(['./subC'], function(subC) {
    console.log('subA loaded with subC as dependency...');
});
