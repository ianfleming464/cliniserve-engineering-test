# Cliniserve Test - additional questions

## How long did you spend on the coding test? What would you add to your solution if you had more time?

I spent circa 9 or 10 hours. If I had more time, I would have implemented a chart to visualise the weekly incidence rate. I would have
added some more interactivity (perhaps some dropdown menus to select between different info), as this would have allowed me to write
more in-depth tests.

## What alternative approaches/solutions to the user story did you consider when engineering your solution? What benefits/downsides would they have had compared to the selected solution?

I had originally planned to use functional components and hooks, and forgo classes entirely, but I felt that it would have been faster for me to complete the user story with the approach I am more experienced in (classes). As it stands, the App component is class-based, and the rest are stateless functions. Benefit - probably cleaner, shorter and easier to read code. Downside - it would have potentially taken me longer, as I am less comfortable with that approach. As an exercise, I plan to rewrite this app from scratch in the coming weeks using just hooks, and adding more visual elements. 

## What additional features/improvements do you think could help the customer gain more value from your application?

See previous answer - additional interactivity whereby all the information from the API (or, at least, most of the useful information) was made accessible and in a more engaging, visual form.

## Where do you see issues in your code that might cause issues in the future? How would you monitor the performance of your app?

Perhaps the amount of some of it..I was unable to destructure the information in the usual manner, because the Munich information object (upon digging in) has a key with a string which is a number - namely "09162". I couldn't proceed as normal and had to declare a variable with dot notation to reach "09162", access this with bracket notation, then move on from there; eg. index.js line 28 ### `const incArr = incObj.data.data["09162"].history;`

It looks a little unwieldy and isn't the clearest to read. I'm sure there probably is a way to destructure such a deeply nested JSON object without receiving errors for using octal literals in strict mode, and I look forward to finding out and getting better :) Upon hosting, I would use Lighthouse to test and monitor the performance of my app. I would also test it in different browsers and on different devices, both manually and using perhaps www.crossbrowsertesting.com or a similar tool.

## How would you improve the API that you just used or its documentation?

Its documentation was rather minimal, but functional. I would have added some information to explain some of the terms a little better. As I am no epidimiologist, I feel that (for example) the incidence / weekIncidence number / frozen-incidence numbers could be explained more clearly. On the whole, API performance was satisfactory; there were a couple of occasions where I made too many calls in a minute - but not too many occasions. 

## What did you think about this test? How interesting was it for you? How would you recommend us to improve the test?

I really enjoyed it. It was topical, do-able and helped stress to me the importance of having a clear plan made ahead of time, before sitting down to code. Regarding improvements, I cannot think of how it could be improved a whole lot..the brief was quite open-ended and there was a lot of freedom, in terms of what information could be displayed (along with the specifics of 90 day incidences and cases). Perhaps less freedom? So, for example, a time limit to submit (because I tend to end up thinking I need to do something else, without an imposed time limit). Although, that could be a personal thing.



