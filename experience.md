When writing the useFetch custom hook
I had a little of struggle on how to return something typed.
I have not yet go thorough the complete list of endpoint that the API has. I hope they are the same way which is

{
data : []
and more things here
}

#practice
I put in practice today the use of props in a component.

#Cors

I was not able to make it work locally the use of cors, and since I would need to make a similar work once the project is deployed, I will have the responses I need in different json files.

#Form
I learnt yesterday and today the use of react-hook-form
I am still not able how to make use of Invalid method when sending the form data, or in what ocassions it is useful
I need to be able to display good messages to the user, a good feedback so he knows what he is doing wrong.
Pattern on input validation is a great feature, even some say if you have a problem and try to resolve it with regular expressions, then you a another problem.

#Css
I suck on how to design a good html, excuse me for sucking hehe.

#Regular Expressions

I was able to use Regular expressions to tests for the name field, and learned about Unicode characters and how to test'em and also learned to test if current browser supports this feature.

#Zustand
I was able to apply Zustand to user detais data, and succesfully know that I could take away useState regarding such data, because it turned out to be obsolete at that point.
I see that create is now deprecated, unfortunately that was the only approach I know so far.

#Thoughts on commit 8f4d5de
#CSS
Once again CSS, I added red color to span to denote when an error in the form appears. It was difficult to add the CSS rule because of CSS rule applying and specificity.
It was kinda interesting that if the CSS rule for a span was placed before one for a label, the rule for span would not be applied.
Also I had some trouble on stacking the divs vertically, I knew about position:absolute thing; 0,0 correspond to the lower right corner of the screen and the values for top and left would offset the element's position to the Y and X axis accordingly.
So in this commit (8f4d5de) it was mostly CSS.

#Zustand 
For the commit (@Missing commit Id), I worked with the get status in Zustand, and I was able to retrieve the information for a user that had already filled his information and submitted the form.

#Zustand
I made the second use of Zustand, I learnt that not only it can be fired upon a form submit, just by calling a JS function is enough.

#Guid
I installed a package to make use of Guids easily.

#Src to images
I have been struggling on making images to displayed on the screen in prod. Commiting to see if they appear now.