function ans()
{
    var str = document.getElementById('str').value;

    var cpstr = str.charAt(0).toUpperCase() + str.slice(1);

    document.getElementById('rs').innerHTML = `Capitalized String : ${cpstr}`;
}
