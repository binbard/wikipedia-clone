document.documentElement.className = document.documentElement.className.replace(/(^|\s)no-js(\s|$)/, "$1js-enabled$2");

var rtlLangs = ['ar', 'arc', 'ary', 'arz', 'bcc', 'bgn', 'bqi', 'ckb', 'dv', 'fa', 'glk', 'he', 'kk-cn', 'kk-arab', 'khw', 'ks', 'ku-arab', 'lki', 'luz', 'mzn', 'nqo', 'pnb', 'ps', 'sd', 'sdh', 'skr', 'ug', 'ur', 'yi'],
    translationsHash = '8d2ead62',

    translationsPortalKey = 'wiki';

portalSearchDomain = 'wikipedia.org'

wmL10nVisible = {
    ready: false,
    makeVisible: function () {
        if (!wmL10nVisible.ready) {
            wmL10nVisible.ready = true;
            document.body.className += ' jsl10n-visible';
        }
    }
};
window.setTimeout(wmL10nVisible.makeVisible, 1000)



const iusername = document.getElementById('iusername');

function checkIfLoggedIn() {
    const userData = localStorage.getItem('user');
    if (userData) {
        const user = JSON.parse(userData);
        iusername.innerHTML = user.username;
    }
    else{
        window.location.href = './login.html';
    }
}

checkIfLoggedIn();

function handleLogout() {
    localStorage.removeItem('user');
    window.location.href = './login.html';
}