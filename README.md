# Combined dependencies

This is a proof of concept to see if the compiler will complain if two dependcies are already combined in one file.

Lets say I have a project
    www/
        * index.html
        * js/
            * app/
                * subA.js
                * subB.js
                * subC.js
            * app.js

Lets say app defines subA as a dependency.  subA defines subB and subC as dependencies.  Will requirejs complain if subC is include in app?  Will the optimizer complained?
