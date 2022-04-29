# Interactive Wheel/Pie Chart Thing &trade; &reg; &copy;
### Author: Justin Higgs
### Version: 4.20.69
### Stack: SCSS, DartSass, Vanilla JS, HTML, SVG
### Requires: programmer socks, Ikea shark, hot chip, wet/dry sandpaper (120, 220, 320, 400, 600, 1500 grits), love
---

## What the fuck is it?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsum assumenda officia quaerat. Amet aut eos fugit reiciendis possimus, voluptatum assumenda atque! Voluptates, enim eos unde cum quae accusantium dolore quia eius voluptate quo inventore? Voluptates dicta ipsum, repellat odit enim eius laborum itaque corrupti facere nobis velit eum fuga.

## How the cock does it work?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsum assumenda officia quaerat. Amet aut eos fugit reiciendis possimus, voluptatum assumenda atque! Voluptates, enim eos unde cum quae accusantium dolore quia eius voluptate quo inventore? Voluptates dicta ipsum, repellat odit enim eius laborum itaque corrupti facere nobis velit eum fuga.

## How do I make my own, senpai?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsum assumenda officia quaerat. Amet aut eos fugit reiciendis possimus, voluptatum assumenda atque! Voluptates, enim eos unde cum quae accusantium dolore quia eius voluptate quo inventore? Voluptates dicta ipsum, repellat odit enim eius laborum itaque corrupti facere nobis velit eum fuga.

## Warnings:
- This is an incredibly finicky and tedious component to make. Once you've done it once, it is still finicky and tedious but nowhere near as confusing.
- You need to have some vector software (I used Affinity Designer which I strongly recommend as an alternative to Adobe Illustrator [it's literally like $50 for a lifetime license and has 97% the same features]). Wherever you get the original SVGs from, you want to use something like SVGOMG to remove all the extra shit in the SVG markup. Using something straight from a vector app or Figma will very likely cause problems.
- Writing the styles in vanilla CSS will be annoying as fuck. I strongly recommend you use SCSS or PostCSS or something. This project has DartSass and SCSS going for it so just `npm i` and `npm run sass`.
- Whatever your shapes, you need to make what I call 'ghosts' of them to use with the CSS `clip-path` property. Using `clip-path` lets you provide an SVG `<path>` that is the same (or different if you wanted?) shape and only registers mouse events when the cursor is inside the visible shape, whereas if you just did basic `<img>` with mouse hover it's a bunch of jankily overlapping rectanlge as far as mouse events goes. Anyways, generating the ghosts is a little fiddly. See instructions.
