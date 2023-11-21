#Episode-1 #React Fundamentals #Inception

->React is nothing but a javascript library, It makes things easy for us , especially in development.
->javascript can be added to html using script tag
->In order to use React which is a library we need to include that somehow , which we can do by CDN links.
->The Order of code always matters
->Understading of why we are writing crossorigin for the script tags we used to include the CDN links is very important
->React can even run on a small portion of our App since its a library and not a framework

Follow up :- Learn about crossorigin and CDN



#Episode-2 #React Fundamentals #IgnitingTheApp

->Making the App production ready requires lot of ground work like   minification , chunking.
->There are several packages online which does this job and these are called Bundlers
->Some popular ones are webpack , parcel  etc
->npm is a package manager which helps us add the above package to our project
->package.json is used by the npm to know about the dependencies required for the project
->package-lock.json is to maintain a record of the exact versions of the dependencies
->caret and tilda are means to either update the dependencies when minor and major version changes happen
->.gitignore tells git which files it should ignore while
->In our app , we are using parcel which does DevBuild , HMR , Caching , Image Optimisation , uses File watching algorithm 
-> To run the app using parcel :- npx parcel index.html
->To make the production build using parcel :- npx parcel build index.html
->Our app stores all the built code in dist folder
->parcel-cache caches the builds to make the build easy when we change something in the project.
->browserList is an npm package which will allow us to specify on which version of browsers should our app work
->We just have to add it in the package.json

Follow up :- Reading about script types and Learning about Parcel and importance of entry point in package.json



#Episode-3 #React Fundamentals #LayingTheFoundation

->We can build and run our app through scripts in package.json
->JSX makes the developers life easy by simpler syntax
->parcel has Babel to convert the syntax into ReactElement
->Babel is a js compiler / transpiler and it converts the js into browser-compatible js
->CamelCase has to be used to mention attributes in JSX
->paranthesis is used when we want to write JSX in multiple lines
->React Component :- Functional Component and Class Component
-> Funtional Component = Any function which returns a React Element
-> Component Composition is a Component having another Component inside nested.
-> Javascript expressions and React Elemensts can be included in JSX with the help of {} braces.

Follow up :- Learning about what npm run start is doing behind the scenes