# Building a Reponsive landing page with Angular

Building a responsive website can be a challenging task. However, users expects every format - from mobile to large screen - to be supported. And the better we as front-end developers do it, the more trust we build with your user. So let's dive into my approach.

## The challange

The easiest way to get around build a responsive website, if one was equipped with one tool, is by use of css media queries.

Media queries are as such benign, but they may compromise readability of your css. I often get lost in managing and maintaining media queries across classes and components.

To alleviate this, an adequate use of CSS grid (especially with grid area) may reduce the need for media queries at a structural level. I tend to apply `display: grid` a the top level of a component, that is supposed to be modified across screen sizes, to ease the render modifications across screens.

But there is more we can do.

## The Angular ingredients

Two concepts in Angular enhances responsiveness:

- scss
- attribute directives

### scss

[Scss is css with super powers] (https://github.com/angular/angular-cli)

Scss is a css extention that allows one to use variables, mixins, functions, loop-logic etc.

With respect to responsiveness I use scss to write utility classes that combines very screen size with very element in a pre-defined set of property values. Let take an example.

Suppose you are able to generate a utility class that allow you to set a certain `font-weight` associated with a certain screen size. So that applying this utility class, say, `fw-md-400`, you set a `font-weight: 400` for screen sizes of `md` (medium) and above. Scss allows us to do that efficiently across font-weights and screen sizes. Take a look at this snippet:

![Here we loop over six different screen sizes and nine different font-weights](https://atrib-landing-page.netlify.app/assets/readme/carbon.png)

Applying the utility classes on html elements is then done like this:

![Applying utility classes on html elements](https://atrib-landing-page.netlify.app/assets/readme/carbon.png)

### Angular Directives

As you can see, the class list may seem extensive if multiple properties is modified across screen sizes. And this may too require cumbersome maintainance if you have several html elements using the same class list. This is where Angular Attribute Directives enters the game.

Attribute directives in Angular allows you to fix a class list to an html element via the `@Hostbinding` decorator. So if I have several instances of an html element with the same extensive class list attached, I can just associate the elements to the attribute directive that binds to the class list.

![Show the @hostbinding here](https://atrib-landing-page.netlify.app/assets/readme/carbon.png)

Thus, any change/adjustments in the class list will propagate immidiately to all elements with the directive associated to it.

In my opinion an added benefit to this approach is that it will encourage you, as a developer, to think in terms of structural layouts and reusability in design. A mindset buys me confidens, reliability and robustness in the responsive design process. However, maybe that the cost of full flexibility in design and being an economist by education this was never binding restriction for me.

### A Third Angular Feature to Support Responsiveness

We often encounter situations where we truncate width of our containers in case of wide screens - too much space to be used meaningfully. It common practise to enforce this truncation via `max-width` on our containers.

But as Angular encourage splitting code into constituent components, securing identical `max-width` across the component tree involves maintainance too.

In order to align `max-width` across the component tree, I grew fond of using Angular's Dependency Injection mechanism to inject a centralised configuration object into an over-arching directive which I in turn bind to all elements where the global `max-width` applies.

It looks like this:

![Show the use of DI in config max-width](https://atrib-landing-page.netlify.app/assets/readme/carbon.png)

## Conclusion

Angular greatly simplifies implementation of responsive design via:

- Scss
- Attribute Directives
- (Dependency Injection)
