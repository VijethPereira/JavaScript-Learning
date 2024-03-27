# JavaScript-Learning
demo repo to save the javascript programming learning in git

# DOM - Document Object Model
# window => 
its a object of a open window, created by a browser with many properties<br>

When  web page is loaded, the browser creates a DOM of the page<br>

```mermaid
graph TD;
window-->document;
document-->html;
html-->head;
html-->body;
head-->meta;
head-->META
head-->title;
head-->link;
body-->div;
body-->scipt;
div-->img;
div-->h1;
div-->p;
div-->DIV;
```

# DOM Manipulation
1. Selecting with ID - getElementById.<br>
2. Selecting with Class - getElement**s**ByClass.<br>
3. Selecting with tag - getElement**s**ByTagName.<br>


# better than above methods is Query selector methods
1. document.querySelector("id/class/tag")<br>
    returns the first element and for class . is used and for id # is used

2. document.querySelectorAll("id/class/tag")<br>
    returns a NodeList



# properties:
tagName : returns tag for element nodes<br>
innerText : returns the text content of the element and all its children (only text not tags)<br>
innerHTML : returns the plain text or HTML content in the element(text and tags also)<br>
textContent :  return textual content even for hidden elements.<br>