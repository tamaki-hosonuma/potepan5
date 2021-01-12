 $(document).ready(function(){ 
 
 searchWord = function(){
    var searchText = $(this).val(), 
        targetText;

    $('.target-box > li').each(function() {
      targetText = $(this).text();

 
      if (targetText.indexOf(searchText) != -1) {
      　$(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });
  };

  $('#search-text').on('input', searchWord);
});

