function var_ii(){
    var gta5 = document.getElementById("gta5");
    var minecraft = document.getElementById("minecraft");
}

function link_ii(){
    gta5.onclick = function(){
        window.open("gta5.html","_parent");
    };

    minecraft.onclick = function(){
        window.open("minecraft.html","_parent");
    };
}

var_ii();
link_ii();