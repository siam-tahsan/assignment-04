Question:1-------------
 getElementById vs getElementsByClassName
 getElementById: whenever we have to find one specific item then we used 'getElementById' with unique id name.
 getElementsByClassName: whenever we have to find group of similar items then we used 'getElementsByClassName' with unique id name.

 querySelector & querySelectorAll:
 these are uses for CSS style selectors like .class, #id, or div.
 querySelector: it's return the first element that matches.
 querySelectorAll: Returns all matching elements



Question:2-------------
 To create and insert a new element into the DOM. Firstly, Use document .createElement() to create a new tag then add content, classe, ID to acts them. Atlast appendChild() the element as the last child of a parent. 




Question:3-------------
 Event bubbling is when an event (like a click) starts at the specific item you touched and then "bubbles up" to its parent elements one by one. Imagine dropping a stone in a pool; the ripple starts at the center and moves outward to the edges. This happens automatically, meaning if you click a button inside a box, the box also feels the click. You can use event.stopPropagation() if you want to stop the ripple from reaching the outer layers.





 Question:4-------------
 Event Delegation is a JavaScript technique where you add one event listener to a parent element instead of adding listeners to many child elements. It works because events “bubble up” from the child to the parent in the DOM. This makes your code faster and cleaner since you use fewer event listeners. It is especially useful when elements are added dynamically to the page.





Question:5-------------
 preventDefault() stops the browser’s default action for an event. For example, it prevents a form from submitting or a link from opening.

 stopPropagation() stops the event from moving (bubbling) up or down the DOM tree. This means parent elements will not receive the event.

 In short, preventDefault() stops the default behavior, while stopPropagation() stops the event flow.
