# Combined dependencies

This is a spike to think about how to solve the problem of having third party modules depending on a module that is already minified in a base project.

Lets say I create a project (original):


    www/
        * index.html
        * js/
            * app/
                * subA.js
            * app.js



where app depends on subA.

I then run the optimizer (outputs to hand_off):

    node build/r.js -o original/app.build.json

and hand the project off to another developer that proceeds to add their submodule :

    cp -R hand_off hand_off_customized

you can see the result of their work under hand_off_customized :

    www/
        * index.html
        * js/

            * custom_app/
                * subB.js
            * app.js (includes subA)

They update the project to include their 'custom_app' directory and update app to include subB as a dependency.


Will requirejs complain with a 404 if subA is already included in app as a module?  Will the optimizer complain?


# Results

This workflow works because app is loaded first. So we should be fine as long as we don't end up with a project structure similar to one found under not_works :


    www/
        * index.html
        * js/
            * app/
                * subA.js (includes subC)
            * custom_app/
                * subB.js (depends on subC)
            * app.js 


