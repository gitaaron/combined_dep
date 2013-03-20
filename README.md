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

Lets say app depends on subA.  subA and subB both depend on subC.  Will requirejs complain with a 404 if subC is included already in subA as a module?  Will the optimizer complain?
