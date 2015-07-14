<!DOCTYPE HTML>
    <html>
    <head>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <title>Fancy Product Designer</title>

    <!-- Style sheets -->
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="css/main.css">

    <!-- Google Webfonts -->
    <link href='http://fonts.googleapis.com/css?family=Gorditas' rel='stylesheet' type='text/css'>

	<!-- jQuery UI - required -->
	<link href="css/jquery-ui.css" rel="stylesheet" />
    <!-- Custom iconic font - required -->
    <link href="css/icon-font.css" rel="stylesheet" />
    <!-- External plugins css - required -->
    <link rel="stylesheet" type="text/css" href="css/plugins.min.css" />
    <!-- The CSS for the plugin itself - required -->
	<link rel="stylesheet" type="text/css" href="css/jquery.fancyProductDesigner.css" />
	<!-- Optional - only when you would like to use custom fonts - optional -->
	<link rel="stylesheet" type="text/css" href="css/jquery.fancyProductDesigner-fonts.css" />

    <!-- Include js files -->
	<script src="js/jquery.min.js" type="text/javascript"></script>
	<script src="js/jquery-ui.min.js" type="text/javascript"></script>
	<script src="bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

	<!-- HTML5 canvas library - required -->
	<script src="js/fabric.js" type="text/javascript"></script>
	<!-- The plugin itself - required -->
    <script src="js/jquery.fancyProductDesigner.min.js" type="text/javascript"></script>

    <script type="text/javascript">
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
    </script>
    </head>

    <body>
    	<div id="main-container" class="container">
          	<h3 id="clothing">Clothing Designer</h3>
          	<div id="clothing-designer" class="fpd-shadow-1">
          		<div class="fpd-product" title="Shirt Front" data-thumbnail="images/yellow_shirt/front/preview.png">
	    			<img src="images/yellow_shirt/front/base.png" title="Base" data-parameters='{"x": 325, "y": 329, "colors": "#d59211", "price": 20}' />
			  		<img src="images/yellow_shirt/front/shadows.png" title="Shadow" data-parameters='{"x": 325, "y": 329}' />
			  		<img src="images/yellow_shirt/front/body.png" title="Hightlights" data-parameters='{"x": 322, "y": 137}' />
			  		<span title="Any Text" data-parameters='{"boundingBox": "Base", "x": 326, "y": 232, "zChangeable": true, "removable": true, "draggable": true, "rotatable": true, "resizable": true, "colors": "#000000"}' >Default Text</span>
			  		<div class="fpd-product" title="Shirt Back" data-thumbnail="images/yellow_shirt/back/preview.png">
		    			<img src="images/yellow_shirt/back/base.png" title="Base" data-parameters='{"x": 317, "y": 329, "colors": "Base", "price": 20}' />
		    			<img src="images/yellow_shirt/back/body.png" title="Hightlights" data-parameters='{"x": 333, "y": 119}' />
				  		<img src="images/yellow_shirt/back/shadows.png" title="Shadow" data-parameters='{"x": 318, "y": 329}' />
					</div>
				</div>
          		<div class="fpd-product" title="Sweater" data-thumbnail="images/sweater/preview.png">
	    			<img src="images/sweater/basic.png" title="Base" data-parameters='{"x": 332, "y": 311, "colors": "#D5D5D5,#990000,#cccccc", "price": 20}' />
			  		<img src="images/sweater/highlights.png" title="Hightlights" data-parameters='{"x": 332, "y": 311}' />
			  		<img src="images/sweater/shadow.png" title="Shadow" data-parameters='{"x": 332, "y": 309}' />
				</div>
				<div class="fpd-product" title="Scoop Tee" data-thumbnail="images/scoop_tee/preview.png">
	    			<img src="images/scoop_tee/basic.png" title="Base" data-parameters='{"x": 314, "y": 323, "colors": "#98937f, #000000, #ffffff", "price": 15}' />
			  		<img src="images/scoop_tee/highlights.png" title="Hightlights" data-parameters='{"x":308, "y": 316}' />
			  		<img src="images/scoop_tee/shadows.png" title="Shadow" data-parameters='{"x": 308, "y": 316}' />
			  		<img src="images/scoop_tee/label.png" title="Label" data-parameters='{"x": 314, "y": 140}' />
				</div>
				<div class="fpd-product" title="Hoodie" data-thumbnail="images/hoodie/preview.png">
	    			<img src="images/hoodie/basic.png" title="Base" data-parameters='{"x": 313, "y": 322, "colors": "#850b0b", "price": 40}' />
			  		<img src="images/hoodie/highlights.png" title="Hightlights" data-parameters='{"x": 311, "y": 318}' />
			  		<img src="images/hoodie/shadows.png" title="Shadow" data-parameters='{"x": 311, "y": 321}' />
			  		<img src="images/hoodie/zip.png" title="Zip" data-parameters='{"x": 303, "y": 216}' />
				</div>
				<div class="fpd-product" title="Shirt" data-thumbnail="images/shirt/preview.png">
	    			<img src="images/shirt/basic.png" title="Base" data-parameters='{"x": 327, "y": 313, "colors": "#6ebed5", "price": 10}' />
	    			<img src="images/shirt/collar_arms.png" title="Collars & Arms" data-parameters='{"x": 326, "y": 217, "colors": "#000000"}' />
			  		<img src="images/shirt/highlights.png" title="Hightlights" data-parameters='{"x": 330, "y": 313}' />
			  		<img src="images/shirt/shadow.png" title="Shadow" data-parameters='{"x": 327, "y": 312}' />
			  		<span title="Any Text" data-parameters='{"boundingBox": "Base", "removable": true, "draggable": true, "rotatable": true, "resizable": true, "colors": "#000000"}' >Default Text</span>
				</div>
				<div class="fpd-product" title="Short" data-thumbnail="images/shorts/preview.png">
	    			<img src="images/shorts/basic.png" title="Base" data-parameters='{"x": 317, "y": 332, "colors": "#81b5eb", "price": 15}' />
			  		<img src="images/shorts/highlights.png" title="Hightlights" data-parameters='{"x": 318, "y": 331}' />
			  		<img src="images/shorts/pullstrings.png" title="Pullstrings" data-parameters='{"x": 307, "y": 195, "colors": "#ffffff"}' />
			  		<img src="images/shorts/midtones.png" title="Midtones" data-parameters='{"x": 317, "y": 332}' />
			  		<img src="images/shorts/shadows.png" title="Shadow" data-parameters='{"x": 320, "y": 331}' />
				</div>
				<div class="fpd-product" title="Basecap" data-thumbnail="images/cap/preview.png">
	    			<img src="images/cap/basic.png" title="Base" data-parameters='{"x": 318, "y": 311, "colors": "#ededed", "price": 5}' />
			  		<img src="images/cap/highlights.png" title="Hightlights" data-parameters='{"x": 309, "y": 300}' />
			  		<img src="images/cap/shadows.png" title="Shadows" data-parameters='{"x": 306, "y": 299}' />
				</div>
		  		<div class="fpd-design">
		  			<div class="fpd-category" title="Swirls">
			  			<img src="images/designs/swirl.png" title="Swirl" data-parameters='{"zChangeable": true, "x": 215, "y": 200, "colors": "#000000", "removable": true, "draggable": true, "rotatable": true, "resizable": true, "price": 10, "boundingBox": "Base", "autoCenter": true}' />
				  		<img src="images/designs/swirl2.png" title="Swirl 2" data-parameters='{"x": 215, "y": 200, "colors": "#000000", "removable": true, "draggable": true, "rotatable": true, "resizable": true, "price": 5, "boundingBox": "Base", "autoCenter": true}' />
				  		<img src="images/designs/swirl3.png" title="Swirl 3" data-parameters='{"x": 215, "y": 200, "colors": "#000000", "removable": true, "draggable": true, "rotatable": true, "resizable": true, "autoCenter": true}' />
				  		<img src="images/designs/heart_blur.png" title="Heart Blur" data-parameters='{"x": 215, "y": 200, "colors": "#bf0200", "removable": true, "draggable": true, "rotatable": true, "resizable": true, "price": 5, "boundingBox": "Base", "autoCenter": true}' />
				  		<img src="images/designs/converse.png" title="Converse" data-parameters='{"x": 215, "y": 200, "colors": "#000000", "removable": true, "draggable": true, "rotatable": true, "resizable": true, "autoCenter": true}' />
				  		<img src="images/designs/crown.png" title="Crown" data-parameters='{"x": 215, "y": 200, "colors": "#000000", "removable": true, "draggable": true, "rotatable": true, "resizable": true, "autoCenter": true}' />
				  		<img src="images/designs/men_women.png" title="Men hits Women" data-parameters='{"x": 215, "y": 200, "colors": "#000000", "removable": true, "draggable": true, "rotatable": true, "resizable": true, "boundingBox": "Base", "autoCenter": true}' />
		  			</div>
		  			<div class="fpd-category" title="Retro">
			  			<img src="images/designs/retro_1.png" title="Retro One" data-parameters='{"x": 210, "y": 200, "colors": "#000000", "removable": true, "draggable": true, "rotatable": true, "resizable": true, "scale": 0.25, "price": 7, "boundingBox": "Base", "autoCenter": true}' />
				  		<img src="images/designs/retro_2.png" title="Retro Two" data-parameters='{"x": 193, "y": 180, "colors": "#ffffff", "removable": true, "draggable": true, "rotatable": true, "resizable": true, "scale": 0.46, "boundingBox": "Base", "autoCenter": true}' />
				  		<img src="images/designs/retro_3.png" title="Retro Three" data-parameters='{"x": 240, "y": 200, "colors": "#000000", "removable": true, "draggable": true, "rotatable": true, "resizable": true, "scale": 0.25, "price": 8, "boundingBox": "Base", "autoCenter": true}' />
				  		<img src="images/designs/heart_circle.png" title="Heart Circle" data-parameters='{"x": 240, "y": 200, "colors": "#007D41", "removable": true, "draggable": true, "rotatable": true, "resizable": true, "scale": 0.4, "boundingBox": "Base", "autoCenter": true}' />
				  		<img src="images/designs/swirl.png" title="Swirl" data-parameters='{"x": 215, "y": 200, "colors": "#000000", "removable": true, "draggable": true, "rotatable": true, "resizable": true, "price": 10, "boundingBox": "Base", "autoCenter": true}' />
				  		<img src="images/designs/swirl2.png" title="Swirl 2" data-parameters='{"x": 215, "y": 200, "colors": "#000000", "removable": true, "draggable": true, "rotatable": true, "resizable": true, "price": 5, "boundingBox": "Base", "autoCenter": true}' />
				  		<img src="images/designs/swirl3.png" title="Swirl 3" data-parameters='{"x": 215, "y": 200, "colors": "#000000", "removable": true, "draggable": true, "rotatable": true, "resizable": true}' />
				  	</div>
		  		</div>
		  	</div>
		  	<br />
		  	<div class="row">
			  	<div class="api-buttons col-md-7">
				  	<a href="#" id="print-button" class="btn btn-primary">Print</a>
				  	<a href="#" id="image-button" class="btn btn-primary">Create Image</a>
				  	<a href="#" id="pdf-button" class="btn btn-primary">Create PDF</a>
				  	<a href="#" id="checkout-button" class="btn btn-success">Checkout</a>
				  	<a href="#" id="recreation-button" class="btn btn-success">Recreate product</a>
			  	</div>
			  	<div class="col-md-2">
			  		<a href="#" id="upload-button" class="btn btn-warning">Upload own design</a>
				  	<label class="checkbox inline"><input type="checkbox" id="colorizable" /> Colorizable?</label>
			  	</div>
			  	<div class="col-md-3">
				  	<span class="price badge badge-inverse"><span id="thsirt-price"></span> $</span>
			  	</div>
		  	</div>

		  	<h4>Only working on a webserver:</h4>
		  	<button class="btn btn-info" id="save-image-php">Save image with php</button>
		  	<button class="btn btn-info" id="send-image-mail-php">Send image to mail</button>

		  	<!-- The form recreation -->
		  	<input type="file" id="design-upload" style="display: none;" />
			<form action="php/recreation.php" id="recreation-form" method="post">
				<input type="hidden" name="recreation_product" value="" />
			</form>

    	</div>
    </body>
</html>