var first_click = true;

function showmenu(){

    if (first_click) {
        // do stuff for first click
        document.getElementById("navmenu").style.display="block";
        first_click = false;
    } else {
        // do stuff for second click
        document.getElementById("navmenu").style.display="none";
        first_click = true;


    }
    


}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
      img.removeAttribute('data-src');
    };
  });