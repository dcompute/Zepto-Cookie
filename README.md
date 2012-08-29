# Zepto Cookie Plugin

A simple plugin to read, set, and delete cookies. This plugin extends [Zepto.js](https://github.com/madrobby/zepto) with a `$.cookie` method.

It is a modification of the [jQuery-Cookie](https://github.com/carhartl/jquery-cookie) plugin made to work with Zepto.


## Loading

Simply include the script in your site's template after zepto.min.js:

    <script type="text/javascript" src="zepto.min.js"></script>
    <script type="text/javascript" src="zepto.cookie.min.js"></script>

Alternatively, you can build the plugin directly into the Zepto library itself.
To do so, copy `zepto.cookie.js` into the `zepto/src/` folder of the
[Zepto project](https://github.com/madrobby/zepto). Then build Zepto as you
normally would using the `rake concat` command:

`rake concat[zepto.cookie] dist`

This will result in a build the default Zepto library, with the inclusion of
Zepto Cookie. Grab the regular or minified version of zepto.js from the
`zepto/dist/` folder and include the library as you normally would.

    <script type="text/javascript" src="zepto.min.js"></script>

You can then use Zepto Cookie as you normally would.

## Usage

Use as such: `$.fn.cookie(key, value, options);`

`key` (string), The name of the cookie you want to read/ set.

`value` (string), The value of the cookie you're setting.

`options` (object), Additional cookie parameters such as expires, path, or domain.


## Examples

`$.fn.cookie('foo', 'bar');`

Sets a cookie with the name of `foo` to the value of `bar`.

`$.fn.cookie('foo');`

Reads the value of a cookie. If ran after the first example, would return `bar`.

`$.fn.cookie('foo', 'bar', { expires: 7 });`

Sets the cookie `foo` with value `bar`, set to expire in 7 days.

## Options

The `options` argument is an object which supports the following properties:

`{ expires : 7 }`

The lifespan of the cookie in days. Takes an integer. Defaults to being a
session cookie.

`{ path: '/foo' }`

The path for which the cookie is valid. If not specified, the cookie defaults to
the path on which the cookie was set.

`{ domain: 'example.com' }`

The domain for which the cookie is valid. If not specified, the cookie defaults
to the domain on which the cookie was set.

`{ secure: true }`

Whether the cookie requries a secure connection (https). Defaults to false.

`{ raw: true }`

Whether or not to URI encode the cookie value. Defaults to false.