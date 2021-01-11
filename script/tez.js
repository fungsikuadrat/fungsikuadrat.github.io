let dat = new XMLHttpRequest();
dat.onreadystatechange = function () {

    if (dat.readyState == 4 && dat.status == 200) {
        let dataku = JSON.parse(this.responseText);
    }
}
dat.open('GET', '../db/kuis1.json', true);
dat.send();