
function storeValue(val) {
    //the "main" function sort to speak;
    //this calls all the necessary functions to store and override the date;



    console.log(checkEnabled("Array"));

    if(checkEnabled("Array") == true) { //if cookie has already been created
        updateCookie(val);
    } else { //no cookies have been created yet
        createCookie("Array", val, 200);
    }

    document.getElementById('newNote').value = "";

}

function updateCookie(val) {

    var list = getCookie("Array");

    list = val + "," + list;

    createCookie("Array", list, 200);

}

function getListOfCookies() {
    var cookies = { };
    if(document.cookie && document.cookie != '') {
        var split = document.cookie.split(';');
        for(var i = 0; i < split.length; i++) {
            var name_value = split[i].split("=");
            name_value[0] = name_value[0].replace(/^ /, '');
            cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
        }
    }

    var cookieList = [];

    for(var name in cookies) {
        cookieList.unshift(name);
    }

    return cookieList;
}

function checkEnabled() {
    var myCookie = getCookie("Array");

    if (myCookie == null) {
        return false;
    } else if(myCookie != null){
        return true;
    }

}

function getValue() {
    return document.getElementById('newNote').value;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function createCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

function createCookieArr() {
    var list = getCookie("Array");
    if(list == null){
        return [];
    }else {
        var meow = list.split(',');
        return meow;
    }
}
