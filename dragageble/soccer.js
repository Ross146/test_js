document.onmouseover = function(e) {
    var target = e.target;
    if (target.classList.contains('draggable')){
        var field = document.getElementById('field');
        var fieldCoords = getCoords(field);
        target.onmousedown = function(e) {
            console.log(target);
            document.onmousemove = function(e) {
                target.style.position = 'absolute';
                var newleft = e.pageX - target.offsetWidth/2 - fieldCoords.left;
                var newtop = e.pageY - target.offsetHeight/2 ;
                console.log(e.pageX)
                console.log(e.pageY)
//                console.log(newtop);
//                cons
                target.style.left = newleft + 'px';
                target.style.top = newtop + 'px';
            }
            document.onmouseup = function() {
                document.onmousemove = null;
                 target.onmouseup = null;
            }
        }
        target.ondragstart = function() {
        return false;
      }
      function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
         left: box.left - pageXOffset,
          top: box.top - pageYOffset
        }
      }
    }
}