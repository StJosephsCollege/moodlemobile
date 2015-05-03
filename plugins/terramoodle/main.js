var templates = [
    "root/externallib/text!root/plugins/terramoodle/theme.css",
    "root/externallib/text!root/plugins/terramoodle/login.html",
    "root/externallib/text!root/plugins/terramoodle/program.html"
];

define(templates, function (theme, loginForm, program) {
    var plugin = {
        settings: {
            name: "terramoodle",
            type: "general",
            menuURL: "#terramoodle",
            icon: "img/info.png",
            lang: {
                component: "core"
            }
        },

        routes: [
            ["terramoodle", "show_program", "showProgram"]
        ],

        showProgram: function() {
            var tpl = {};
            var html = MM.tpl.render(program, tpl);
            MM.panels.show('center', html, {title: MM.lang.s("Quick Links")});
        }
    };

    // Inject allways our custom theme.
    $("#mobilecssurl").html(theme);

    // Replace the sign-up form with our custom template.
    $("#add-site_template").html(loginForm);

    // Automatically use the URL of the moodle moot without further checks.
    MM.checkSite = function(e) {
        MM.addSite(e);
    };

    // Inject allways our custom theme.
    MM.loadCachedRemoteCSS = function(e) {
        $("#mobilecssurl").html(theme);
    };

    // Do not display the manage accounts page.
    MM._displayManageAccounts = function() {
        MM._displayAddSite();
    };

    MM.registerPlugin(plugin);

});
