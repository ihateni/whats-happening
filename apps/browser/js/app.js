function changeUrlBar(){
    document.getElementById("url-bar").value=document.getElementsByClassName("content-iframe")[0]document.innerHTML =
        '<iframe src="https://womginx.arph.org/main/' +
        url +
        '" style="position:fixed;top:100;bottom:100;left:100;right:100;width:100%;height:100%;border:100%;margin:0;padding:0%;z-index:999999;">Your browser does not support iframes</iframe>';
}

function goToBack(){
    parent.history.back()
}

function goToForward(){
    parent.history.forward()
}

function openNewTab(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function showBookmarks(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function goTo(){
    if (window.event.keyCode == '13'){
        document.getElementsByClassName("content-iframe")[0].src=document.getElementById("url-bar").value;
    }
}


function showMenu(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function reloadWebpage(){
    document.getElementsByClassName("content-iframe")[0].src=document.getElementsByClassName("content-iframe")[0].src;
}
