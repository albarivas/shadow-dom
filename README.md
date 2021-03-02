# shadow-dom

LWC app with examples to understand Shadow DOM

1. Clone the repo:

    ```
    git clone git@github.com:albarivas/shadow-dom.git
    ```

1. If you haven't already done so, authorize with your hub org and provide it with an alias (**myhuborg** in the command below):

    ```
    sfdx force:auth:web:login -d -a myhuborg
    ```

1. Create a scratch org and provide it with an alias (**shadow-dom** in the command below):

    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a shadow-dom
    ```

1. Push the app to your scratch org:

    ```
    sfdx force:source:push
    ```

1. Assign the **Working_with_Data** permission set to the default user:

    ```
    sfdx force:user:permset:assign -n shadow_dom_examples
    ```

1. Open the scratch org and navigate to the "Shadom DOM Examples" app:

    ```
    sfdx force:org:open
    ```
