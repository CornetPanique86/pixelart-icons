# [Work In Progress]

# Pixel art icons
My pixel art icons which you can use yourself by importing a single CSS file or a JS file!

In .SVG format so that you can manipulate the icons via CSS.

⚠️ This is made for myself so it's not as optimized as it could be and is a very small library.

## Installation/how to use

There are several methods of implementing the icon library:


| Method | Styling / Animations | HTTP requests                   | Caching | File size                   |
|--------|---------|---------------------------------|---------|-----------------------------|
| 1      | ✅       | 1                               | 🤷‍♂️ idk  | ++                          |
| 2      | ❌       | Amount of times you use icons           | ✅       | +                           |
| 3      | ❌       | 1                               | ❌       | +++ (icons encoded in data URI) |
| 4      | ✅       | Amount of times you use icons | 🤷‍♂️ idk  | No file           |

### 1. ⭐ using the single js file:

All the icon SVGs are stored in the JS file, and it replaces every `<i>` tag by the corresponding SVG.

Host it on your website by downloading the [latest js file](https://github.com/CornetPanique86/pixelart-icons/releases/latest),

or use a CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/CornetPanique86/pixelart-icons/dist/pixelarticons.js"></script>
```

To apply styling:

```html
<i class="pxico-iconname" style="color: red; /* etc... */"></i>
```

Use an animated version *(note: it means the SVG has special classes and its paths are split up. You have to add the animations yourself via CSS or get the default animations file in dist/pixelarticons_anim.css)*:

```html
<i class="pxico-iconname_anim"></i>
```

&nbsp;

### 2. using the js file which uses external SVG files:

Each `<i>` tag is replaced by a `<img>` tag with the link to the SVG file.

Host it on your website by downloading the [latest js file](https://github.com/CornetPanique86/pixelart-icons/releases/latest),

or use a CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/CornetPanique86/pixelart-icons/dist/pixelarticons_ext.js"></script>
```

**Configuration:**

In the .js file change `baseURL` to the URL path before the filename (without putting a slash at the end). Leave empty for a relative link.

Change `fileExtension` to false to remove the ".svg" at the end of the URL.

To add classes to the `<img>` elements write them in `classList`

&nbsp;

### 3. using the single css file:

Every icon is stored in the .CSS in background-image url's encoded in data URI.

Host it on your website by downloading the [latest css file](https://github.com/CornetPanique86/pixelart-icons/releases/latest),

or use a CDN:

```html
<link rel='stylesheet' type='text/css' crossorigin="anonymous" href='https://cdn.jsdelivr.net/gh/CornetPanique86/pixelart-icons/dist/pixelarticons.css'>
```

&nbsp;

### For methods 1, 2, 3:

Use an icon by putting a `<i>` tag in your HTML, for example:

```html
<i class="pxico-iconname"></i>
```

Some icons have a colored version, meaning their color cannot be changed by CSS but they have more than 1 color. To use the colored version of the icon, place the "color" suffix after the icon name:

```html
<i class="pxico-iconnamecolor"></i>
```

&nbsp;

&nbsp;

### 4. importing every icon statically:

Get the file icon from jsdelivr or host the icons on your website.

```html
<img src="https://cdn.jsdelivr.net/gh/CornetPanique86/pixelart-icons/res/svg/optimized/filename.svg">
```

Or insert plain SVG code into your HTML.

&nbsp;

&nbsp;

&nbsp;

## Credits

- [Pixels to SVG](https://codepen.io/shshaw/pen/XbxvNj) to convert .PNG pixel arts to .SVG properly.

- SVGO and [SVGOMG](https://svgomg.net/) to optimize .SVG's.

- ⭐ endereyes202#5828 ([YouTube](https://www.youtube.com/@endereyes202), [Twitch](https://www.twitch.tv/endereyes202), [Twitter](https://twitter.com/endereyes202)): made the twitter and reddit logos, clipboard, picture colored version.

- SVG to data URI function in build.js is extracted from the repository:
[svg-to-data-uri](https://github.com/heyallan/svg-to-data-uri) by heyallan under the [MIT License](https://github.com/heyallan/svg-to-data-uri/blob/master/LICENSE).

### List of icons

- [x] Arrow
- [x] Youtube
- [x] Discord
- [x] Twitter
- [x] Reddit
- [x] Github
- [x] Download
  - [x] Download anim
- [x] Clipboard
- [x] External Link
  - [x] External Link anim
- [x] Picture
  - [x] Picture color
- [x] Cross
- [x] Search
- [x] Info
- [x] Question
- [x] Exclamation
- [x] Warning
- [x] Link
- [x] Burger
- [x] Caret