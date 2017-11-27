<p align="center"><img src="http://res.cloudinary.com/skydavis/image/upload/v1510628919/FriendlyAtomsLogo_small_azrv73.svg"/></p>
<h1 align="center"> FriendlyAtoms</h1>
<p align="center"> A friendly-vibes CSS framework designed for those whose eyes sparkle at the sight of a rounded typeface and saturated colors.</p>

[![Build Status](https://travis-ci.org/skydavis/friendly-atoms.svg?branch=master)](https://travis-ci.org/skydavis/friendly-atoms)

## [Documentation]
See documentation here: [here](https://getfriendlyatoms.com/#docs)

## Find a bug?

Submit it in the [issues](https://github.com/skydavis/friendly-atoms/issues)

## License

Licensed under the [MIT License](https://skydavis.github.io/license) by [Sky Davis](http://mynameisskydavis.com)

### FriendlyAtoms Next Up

- [ ] Navigation
- [ ] List UL
- [ ] Card Groups
- [ ] Tabs
- [ ] Grid Update

### FriendlyAtoms Refactor List

- [ ] For buttons add scss map ie:
```css
@each $color in $theme-colors {
.btn-#{$color} {
background-color: map-get($theme-colors, #{$color}) !important;
}
```
- [ ] Refactor gradients.scss into a mixin