# Zepto Cookie Plugin

A simple plugin to read, set, and delete cookies. This plugin extends [Zepto.js](https://github.com/madrobby/zepto) with a `$.cookie` method.

It is a modification of the [jQuery-Cookie](https://github.com/carhartl/jquery-cookie) plugin made to work with Zepto.


## Usage

Simply include the script in your site's templates, after zepto.min.js:

    <script type="text/javascript" src="zepto.cookie.min.js"></script>

Use as such: `$.cookie(key, value, options);`

`key` (string), The name of the cookie you want to read/ set.

`value` (string), The value of the cookie you're setting.

`options` (object), Additional cookie parameters such as expires, path, or domain.


## Examples

`$.cookie('user', 'johnd');`

Sets the cookie 'user' to 'johnd'.


`$.cookie('user');`

Returns the value of the 'user' cookie. After the example above, the result would be 'johnd'.