# css-modules

Following https://css-tricks.com/css-modules-part-1-need/ on CSS Modules.

## What are CSS Modules?

CSS Modules is not an _official spec_ or an _implementation in the browser_ but rather a process in a build step (webpack or browserify) that changes class names and selectors to be scoped.

But why?

Remember how HTML and CSS normally work.  A class is applied in HTML:

```html
<h1 class="title">My Great Blog Post</h1>
```

Title styled in CSS:

```css
.title {
  background-color: red;
}
```

The browser will turn the background red, no processing required.

For modules though, all of the markup goes into a JS file:

```javascript
import styles from "./styles.css"

element.innerHTML = 
  `<h1 class="${styles.title}">
    No one blogs like me!
  </h1>`;
```

Here a build step would be required which would generate something like this HTML:

```html
<h1 class="_styles__title_309571057">
  More Fun in the Sun This Summer!
<h1>
```

And something like this CSS:
```css
._styles__title_309571057 {
  background-color: red
}
```

This "scopes" the CSS with an entirely new string; the original CSS is not served to the browser at all.  The styles are scoped to particular templates.  

The article then links to [this article](https://www.sitepoint.com/understanding-css-modules-methodology/), the following of which is in the "understanding-css-modules-methodology" folder in this repo.

But why do this?  Why?  I already asked this question above, but here is the answer, allegedly.

## Why should we use CSS Modules?

Because then we can guarantee that all of the styles for a single component:

1.  Live in one place
2.  Only apply to that component and nothing else

Plus, any component can hava a true dependency, like:

```javascript
import buttons from "./buttons.css";
import padding from "./padding.css";

element.innerHTML = `<div class="${buttons.red} ${padding.large}">`;
```

**Modules fix the problem of the _global scope_ in CSS**
  
Big "have you ever done / wondered / slapped" list here, leading to bad code.

But with CSS Modules everything is in **local scope by default** and so no more bad code!

## The "composes" keyword

Take this CSS:

```css
  .serif-font {
    font-family: Georgia, serif;
  }

  .display {
    composes: serif-font;
    font-size: 30px;
    line-height: 35px;
  }
```

We can declare these classes in our template thusly:

```javascript
import type from "./type.css";

element.innerHTML = 
  `<h1 class ="${type.display}">
    Send More Cops!
  </h1>`
```

Once again giving us a class with a name like:

```html
<h1 class="_type__display_78323472 _type__serif_381763">
  Send More Cops!
<h1>
```

Awesome!  Wait, what?  Why?  Because both classes have been bound to the element by the use of the `composes` keyword, which is so much better than any other way of doing it.  You can even compose in a separate file.

```css
.element {
  composes: dark-red from "./colors.css";
  font-size: 72px;
  line-height: 1.2;
}
```

We don't need to use [BEM](https://css-tricks.com/bem-101/)!  And I'm not going to read about that because I don't know that BEM is. Or, I do, but I've never used it and I don't think it's really used any more anyway.

[And there's so many more great reasons to use modules!](https://glenmaddern.com/articles/css-modules)

[There's also a further reading section here.](https://css-tricks.com/css-modules-part-1-need/#further-reading)