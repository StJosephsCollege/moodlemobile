var templates = [
    "root/externallib/text!root/plugins/tmail/theme.css",
    "root/externallib/text!root/plugins/tmail/login.html",
    "root/externallib/text!root/plugins/tmail/program.html"
];

define(templates, function (theme, loginForm, program) {
    var plugin = {
        settings: {
            name: "TMail",
            type: "general",
            menuURL: "#tmail",
            icon: "plugins/events/icon.png",
            lang: {
                component: "core"
            }
        },

        routes: [
            ["tmail", "show_program", "showProgram"]
        ],

        showProgram: function() {
            var tpl = {};
            var html = MM.tpl.render(program, tpl);
            MM.panels.show('center', html, {title: MM.lang.s("tmail")});
        }
    };
