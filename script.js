var str = '';
var count = 0;

function displayData(ch) {
    if (ch == 'AC') {
        str = '';
        document.getElementById('display-main').innerHTML = 0;
        document.getElementById('display-operations').innerHTML = 0;
    } else if (ch == 'CE') {
        str = str.substr(0, str.length - 1);
        document.getElementById('display-operations').innerHTML = str;
    } else if (ch == '=') {
        ans = eval(str);
        str = JSON.stringify(ans);
        document.getElementById('display-main').innerHTML = ans;
    } else if (ch == '%') {
        str = JSON.stringify(eval(str) / 100);
        document.getElementById('display-main').innerHTML = str;
        document.getElementById('display-operations').innerHTML = str;
    } else {
        if (str == '') {
            if (ch == '*' || ch == '/') {
                str = str;
            } else {
                str += ch;
            }

        } else {
            if (str.substr(-1) == '+' || str.substr(-1) == '-' || str.substr(-1) == '*' || str.substr(-1) == '/') {
                if (ch == '+' || ch == '-' || ch == '*' || ch == '/') {
                    str = str;
                } else {
                    str += ch;
                }
            } else {
                str += ch;
            }
        }
    }
    document.getElementById('display-operations').innerHTML = str;
}