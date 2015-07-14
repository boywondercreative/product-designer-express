jQuery(document).ready(function(){

  var yourDesigner = $('#clothing-designer').fancyProductDesigner({
    editorMode: false,
    fonts: ['Arial', 'Fearless', 'Helvetica', 'Times New Roman', 'Verdana', 'Geneva', 'Gorditas'],
    customTextParameters: {
      colors: false,
      removable: true,
      resizable: true,
      draggable: true,
      rotatable: true,
      autoCenter: true,
      boundingBox: "Base"
    },
    customImageParameters: {
      draggable: true,
      removable: true,
      colors: '#000',
      autoCenter: true,
      boundingBox: "Base"
    }
  }).data('fancy-product-designer');

  //print button
  $('#print-button').click(function(){
    yourDesigner.print();
    return false;
  });

  //create an image
  $('#image-button').click(function(){
    var image = yourDesigner.createImage();
    return false;
  });

  //create a pdf with jsPDF
  $('#pdf-button').click(function(){
    var image = new Image();
    image.src = yourDesigner.getProductDataURL('jpeg', '#ffffff');
    image.onload = function() {
      var doc = new jsPDF();
      doc.addImage(this.src, 'JPEG', 0, 0, this.width * 0.2, this.height * 0.2);
      doc.save('Product.pdf');
    }
    return false;
  });

  //checkout button with getProduct()
  $('#checkout-button').click(function(){
    var product = yourDesigner.getProduct();
    console.log(product);
    return false;
  });

  //event handler when the price is changing
  $('#clothing-designer')
    .bind('priceChange', function(evt, price, currentPrice) {
      $('#thsirt-price').text(currentPrice);
    });

  //recreate button
  $('#recreation-button').click(function(){
    var fabricJSON = JSON.stringify(yourDesigner.getFabricJSON());
    $('#recreation-form input:first').val(fabricJSON).parent().submit();
    return false;
  });

  //click handler for input upload
  $('#upload-button').click(function(){
    $('#design-upload').click();
    return false;
  });

  //save image on webserver
  $('#save-image-php').click(function() {
    $.post( "php/save_image.php", { base64_image: yourDesigner.getProductDataURL()} );
  });

  //send image via mail
  $('#send-image-mail-php').click(function() {
    $.post( "php/send_image_via_mail.php", { base64_image: yourDesigner.getProductDataURL()} );
  });

  //upload image
  document.getElementById('design-upload').onchange = function (e) {
    if(window.FileReader) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function (e) {

        var image = new Image;
        image.src = e.target.result;
        image.onload = function() {
          var maxH = 400,
            maxW = 300,
            imageH = this.height,
            imageW = this.width,
            scaling = 1;

          if(imageW > imageH) {
            if(imageW > maxW) { scaling = maxW / imageW; }
          }
          else {
            if(imageH > maxH) { scaling = maxH / imageH; }
          }

          yourDesigner.addElement('image', e.target.result, 'my custom design', {colors: $('#colorizable').is(':checked') ? '#000000' : false, zChangeable: true, removable: true, draggable: true, resizable: true, rotatable: true, autoCenter: true, boundingBox: "Base", scale: scaling});
        };
      };
    }
    else {
      alert('FileReader API is not supported in your browser, please use Firefox, Safari, Chrome or IE10!')
    }
  };
});