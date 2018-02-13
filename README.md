I created this react app using `create-react-app`

To run it clone the repo and cd into it. Then run `npm start`.

When I was beginning this task I thought I would be able to save time by not using Redux. It turned out that this actually caused me more complications. When passing props/state between components I have always just used redux and therefore spent too much time playing with the passing of data between components which ended up being a waste of time.

If I were to do this challenge again I would use redux and each of the form components would be a separate component. This would allow me to show and hide components in a far easier way, and it would also make the code a lot less complex. Rather than being over 150 lines I would be able to break up the functionality and code into a number of components making it more readable. I think that separate components would have made it possible for me to do the data validation. Trying to include all of the fields in the validation function proved a mountain too tall for me.

All up I have spent about 2.5 hours on this. The first hour was a solid hour and the next 1.5 hours were off and on while I was doing a couple of things around the house. 

Initial commit - Committed the initial react app

Commit1 - Form component showing form. Begun adding validation. Regex is giving me some trouble.

Commit2 - Schema added. Fields appear and disappear when you change the relevant boolean in the schema. I used an npm module for the date picker. I couldnt work out how to get the input field to align with the rest of the fields. I tried to use !important, and also tried to modify the modules style.css which is where the styling is coming from, but it wouldnt work.