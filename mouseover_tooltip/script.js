// элемент TD, внутри которого сейчас курсор
var currentElem = null;

table.onmouseover = function(event) {
    
//    console.log(currentElem);
    console.log('2:'+this);
    console.log('1:'+event.target);
  if (currentElem) {
 
    return;
  }

  // посмотрим, куда пришёл курсор
  var target = event.target;

  // уж не на TD ли?
  while (target != this) {
    if (target.tagName == 'TD') break;
    target = target.parentNode;
  }
  if (target == this) return;

  // да, элемент перешёл внутрь TD!
  currentElem = target;
  target.style.background = 'pink';
  console.log('shit');
};


table.onmouseout = function(event) {
  // если курсор и так снаружи - игнорируем это событие
  if (!currentElem) return;

  // произошёл уход с элемента - проверим, куда, может быть на потомка?
  var relatedTarget = event.relatedTarget;
  if (relatedTarget) { // может быть relatedTarget = null
    while (relatedTarget) {
      // идём по цепочке родителей и проверяем,
      // если переход внутрь currentElem - игнорируем это событие
      if (relatedTarget == currentElem) return;
      relatedTarget = relatedTarget.parentNode;
    }
  }

  // произошло событие mouseout, курсор ушёл
  currentElem.style.background = '';
  currentElem = null;
};