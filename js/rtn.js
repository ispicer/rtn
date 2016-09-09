function readTextFile(file, callback)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                callback(allText);
            }
        }
    }
    rawFile.send(null);
}

window.onload = function() {
  var fileDisplayArea = document.getElementById('names');
  readTextFile("http://remembertheir.name/names.txt", function(text){

    // Add names
    var textArray = text.split('.');
    textArray.forEach(function(txtItem, i){
      textArray[i] = ('<b class="name">'+txtItem);
    });
    var finalText = textArray.join('.</b>');
    fileDisplayArea.innerHTML = finalText;
  });
}

$(document).ready(function fadeScroll(){
  $('.name').scrollex({
    scroll: function(progress) {

      // Progressively increase a name's opacity as we scroll through it.
      $(this).css('opacity', Math.max(0, Math.min(1, progress + 1)));

    }
  });
});
