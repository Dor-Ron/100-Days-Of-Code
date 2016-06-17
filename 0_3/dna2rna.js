$(() => {
  $('input').on('click', () => {
    let seq = $('textarea').val();
    let conversionType = $('select').val();
    let output = "";
    if (conversionType === "d2r") {
      output = seq.replace(/t/gi, "u");
    } else {
      output = seq.replace(/u/gi, "t");
    } $('#output').html("<strong> Your Result: </strong><br/>" + output);
  });
});
