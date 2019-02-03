// Dirty but works
const e = {
    tabs: () => {
        var textareas = document.getElementsByTagName('textarea');
        var count = textareas.length;
        for (var i = 0; i < count; i++) {
            textareas[i].onkeydown = function (e) {
                if (e.keyCode == 9 || e.which == 9) {
                    e.preventDefault();
                    var s = this.selectionStart;
                    this.value = this.value.substring(0, this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
                    this.selectionEnd = s + 1;
                }
            }
        }
    },
    lines: () => {
        var count = $("textarea")[0].value.split(/\r|\r\n|\n/).length;
        var html = "";
        for (var i = 1; i <= count; i++) {
            html += "<div>" + i + "</div>";
        }
        $("div.lines").html(html);
    }
};