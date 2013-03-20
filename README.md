# Combined dependencies

This is a spike to think about how to solve the problem of having third party modules depending on a module that is already minified in a base project.

Lets say I create a project :
    www/
        * index.html
        * js/
            * app/
                * subA.js
            * app.js



Lets say app depends on subA.

I then hand the project to another developer that proceeds to add their submodule :
    www/
        * index.html
        * js/

            * custom_app/
                * subB.js
            * app.js (includes subA)

They update the project to include their 'custom_app' directory and update app to include subB as a dependency.


Will requirejs complain with a 404 if subA is already included in app as a module?  Will the optimizer complain?


# Results

This workflow works because app is loaded first.  
