# Building a Reponsive landing page with Angular

Building a responsive website can be a challenging task. Users expects every format - from mobile to large screens - to be supported. And the better we are able to execute on responsiveness, the more trust we build with your users. So let's dive into my approach to responsiveness of this simple landing page:

[Website](https://atrib-landing-page.netlify.app)

## The challange

The easiest way to get around building a responsive website is by use of css media queries. One efficient tool.

Media queries are benign, but they may compromise readability of your css over time. I often get lost in managing and maintaining media queries across classes and components as my layout expands.

To alleviate this, an adequate use of CSS grid (especially with grid area) is a fast way to reduce the number of media queries need. I tend to apply `display: grid` a the top level of a component which is supposed to be modified across screen sizes.

But there is more we can do.

## The Angular ingredients

Three concepts in Angular further enhances responsiveness:

- Use of **SCSS**
- Use of Angular **Attribute Directives**
- Use of Angular **Dependency Injection**

### SCSS

[SCSS is css with super powers](https://sass-lang.com/) that allows one to use variables, mixins, functions, loop-logic etc.

With respect to responsiveness, I use SCSS to write utility classes that combines every screen size with every element over a pre-defined set of property values. Let take an example.

Suppose you are able to generate a utility class that allow you to set a certain `font-weight` when the screen size is within a specific range. So that when applying this utility class, say, `fw-md-400`, you set a `font-weight: 400` for screen sizes of `md` (medium) and above.

Scss allows us to do that efficiently across font-weights and screen sizes. Take a look at this snippet:

![Here we loop over six different screen sizes and nine different font-weights](https://atrib-landing-page.netlify.app/assets/readme/scss.png)

Then all we need is to tag our elements with classes that captures the required style/screen size combination. And like that you are able to control `font-size`,
`padding`, `margin`, etc. across screen sizes.

### Angular Directives

Class list on elements may grown if multiple properties is modified across screen sizes. And this may too require cumbersome maintainance if you have several html elements using the same class list. This is where Angular Attribute Directives enters the game.

Attribute directives in Angular allows you to fix a class list to an html element via the `@Hostbinding()` decorator. We can then reuse the class list defined in the directive if we have several instances of an html element with the same rendering. I simply just tag the directive to the elements in order to bind to the class list.

Thus, any change/adjustments in the class list will propagate immidiately to all elements with the directive tagged to it.

In my opinion an added benefit to this approach is that it will encourage you, as a developer, to think in terms of structural layouts and reusability in design. A mindset that buys me confidens in the responsive design process. However, maybe that the cost of full flexibility in design.

### Angular Dependency Injection

We often encounter situations where we truncate width of our containers in case of wide screens - too much space to be used meaningfully. It common practise to enforce this truncation via `max-width` on our containers.

But as Angular encourage splitting code into constituent components, securing identical `max-width` across the component tree involves maintainance too.

In order to align `max-width` across the component tree, I use Angular's Dependency Injection mechanism to inject a centralised configuration object into an over-arching directive. In turn this directive is tagged to all elements where the global `max-width` applies.

![Show the use of DI in config max-width](https://atrib-landing-page.netlify.app/assets/readme/DI.png)

## Conclusion

Angular greatly simplifies implementation of responsive design by use of:

- Scss
- Directives
- Dependency Injection

These feature will help you build responsive design in a maintainable way.
