# Building a Reponsive Landing Page with Angular

Building a responsive website can be a challenging task. Users expects every format - from mobile to large screens - to be supported. And the better we are able to execute on responsiveness, the more trust we build with your users. So let's dive into my approach to responsiveness of this [simple landing page](https://atrib-landing-page.netlify.app)

## The Challange

The easiest way to get around building a responsive website is by use of CSS media queries. One efficient tool.

Media queries are benign and definitely have a place in any responsive style sheet. But they may compromise readability of the CSS over time. I often get lost in managing and maintaining media queries across classes and components as my layout expands and complexity increases.

To alleviate this, an adequate use of CSS grid (especially with grid area) is a fast way to reduce the number of media queries required. I tend to apply `display: grid` a the top most level in the component tree that is modified when screen size changes.

But there is more we can do.

## The Role of Angular

Three concepts in Angular further supports responsiveness:

- SCSS
- Attribute Directives
- Dependency Injection

### SCSS

[SCSS is CSS with super powers](https://sass-lang.com/). It allows you to define variables, mixins, functions, loop in order to write proper CSS logic that simplifies CSS at the component level.

With respect to responsiveness, I specifically use SCSS to write utility classes that combines every screen size with every element over a pre-defined set of property values. Let take an example.

Suppose you want to generate a utility class that sets a certain `font-weight` when the screen size is within a specific range. So that when applying this utility class, say, `fw-md-400`, you set a `font-weight: 400` for screen sizes of `md` (medium) and above.

Take a look at this snippet:

![Here we loop over six different screen sizes and nine different font-weights](https://atrib-landing-page.netlify.app/assets/readme/scss.png)

Here we loop over six breaks in screen sizes to potentially set a different `font-size` for six different screens. All we need is to tag our elements with classes that captures the required style/screen size combination. And like that, you are able to control CSS properties `font-size`, `padding`, `margin`, etc. across screen sizes.

### Angular Directives

Class list on elements may grown if multiple properties are modified across screen sizes. And this may too require cumbersome maintainance if you have several html elements using the same class list. This is where Angular Attribute directives enters the game.

Attribute directives in Angular allows you to fix a class list to an html element via the `@Hostbinding()` decorator. We can then reuse the class list defined in the directive if we have several instances of an html element with the same rendering. Just tag the directive to the elements in order to bind to the class list.

From then on any change in the class list will propagate immidiately to all elements with the directive tagged to it.

In my opinion, an added benefit to this approach is that it will encourage you, as a developer, to think in terms of structural layouts and reusability in design. A mindset that buys me confidence in the responsive design process.

### Angular Dependency Injection

We often encounter situations where we truncate `width` of our containers in case of very wide screens. Too much space is hard to use in a meaningfully way, and in general we want to reduce the number of screen size breaks to maintain. Therefore, it common practice to enforce width truncation via `max-width` on our containers.

But as Angular encourage splitting code into constituent components, securing identical `max-width` across the component tree involves maintainance too. And hard coded `max-width` properties several places in your different style sheets, do occur.

In order to align `max-width` across the component tree, I use Angular's Dependency Injection mechanism to inject a centralised configuration object into a `max-width` directive. The configuration object live at the global level and is injected into all elements where the global `max-width` applies.

![Show the use of DI in config max-width](https://atrib-landing-page.netlify.app/assets/readme/DI.png)

Alternatively, one could define the `max-width` in the root style, or in a `@mixin`, but I prefere the directive solution, because of its closer attachment to the component being 'max-width'ed. Thus, enhancening readibility of code and maintainance.

## Conclusion

Angular greatly simplifies implementation of responsive design by use of:

- SCSS
- Directives
- Dependency Injection

These three features will help you build responsive design in a maintainable and fun way, by allowing you to:

- Create resuable SCSS utility classes
- Create attribute directives that simplifies class list maintainance
- Inject configuration objects to centralise dimension alignment at a global level
