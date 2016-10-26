var langArr =["en","es"];
(function() {
    var cache = {};
    this.tmpl = function(template_id, data) {
        var fn = cache[template_id];
        this.get = function(dataid) {
            var id = dataid.split(":")[0];
            var res = data[id] ? (dataid.charAt(dataid.length - 1) == ":" ? data[id] + ':' : data[id]) : 'null';
            return res;
        }

        if (!fn) {
            var template = document.getElementById(template_id).innerHTML;
            fn = new Function("data", "var p=[]; p.push('" +
                template
                .replace(/[\r\t\n]/g, " ")
                .split("'").join("\\'")
                .replace(/\${(.+?)}/g, "',this.get(\'$1\'),'")
                .split("${").join("');")
                .split("}").join("p.push('") + "');return p.join('');");
            cache[template_id] = fn;
        }
        return fn();
    };
})();

(function($) {
    $.fn.extend({
        replaceTpl: function() {
            return this.each(function() {
                $(this).replaceWith(tmpl($(this).attr("id"), resourceInfo));
            })
        }
    });
})(jQuery);
