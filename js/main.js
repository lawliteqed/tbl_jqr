$(function(){
  var idx = 3;
  //
  $('#btn1').click(function(event){
    $('#tbl1').append('<tr><td>' + (++idx) + '</td><td><input type="text" name="example1"></td> <td><input type="text" name="example1"></td> <td>✓</td></tr> ');
  });
  //
  $('#tbl1').on("click", "tr", function(event){
    alert('削除しても??')
    
    $(this).remove();
  });

});

