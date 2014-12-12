// Zepto.cookie plugin
// 
// Copyright (c) 2014
// @author siberiawolf
// http://weibo.com/siberiawolf0307
// 
// Dual licensed under the MIT and GPL licenses:
// http://www.opensource.org/licenses/mit-license.php
// http://www.gnu.org/licenses/gpl.html
(function($){
    $.extend($.fn, {
        /**
         * 设置、取得一个cookie
         *
         * @param key{String}
         *          cookie 的key值
         * @param value{String || null}
         *          cookie 的value值
         * @param options{Object}
         *          设置cookie参数
         *          expires 保存时间 默认为session 时间
         *          path    cookie有效路径  
         *          domain  cookie有效域名
         *          secure  cookie是否使用https
         *          raw     是否URI编码 默认false，进行编码
         */
        cookie : function (key, value, options) {
            var days,       // 保存天数的毫秒时间
                time,       // 保存时间
                result,     // 获取结果
                decode ;    // options.raw为false时进行uri编码

            // 指定参数
            if (arguments.length > 1 && String(value) !== "[object Object]") {  // 指定了一个以上参数、且不是对象才会设置cookie
                // 执行对象
                options = $.extend({}, options) ;   // 默认没有任何参数

                if (value === null || value === undefined){     // value指定为null时删除cookie
                    options.expires = -1 ;
                }

                if (typeof options.expires === 'number') {
                    days = (options.expires * 24 * 60 * 60 * 1000) ;        
                    time = options.expires = new Date() ;

                    time.setTime(time.getTime() + days) ;       // 这是保存时间
                }

                value = String(value);  

                return (document.cookie = [                         // 如果设置了cookie，就不执行后面
                    encodeURIComponent(key), '=',
                    options.raw ? value : encodeURIComponent(value),
                    options.expires ? '; expires=' + options.expires.toUTCString() : '',
                    options.path ? '; path=' + options.path : '',
                    options.domain ? '; domain=' + options.domain : '',
                    options.secure ? '; secure' : ''
                ].join('')) ;
            }

            // 指定了value并且是object
            options = value || {} ;     

            decode = options.raw ? function (s) { return s ;} : decodeURIComponent ;

            return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null ;
        }

    }) ;
})(Zepto) ;