	$(function () {
    $("td").dblclick(function () {
        var conteudoOriginal = $(this).text();

        $(this).addClass("celulaEmEdicao");
        $(this).html("<input type='text' value='" + conteudoOriginal + "' />");
        $(this).children().first().focus();

        $(this).children().first().keypress(function (e) {
            if (e.which == 13) {
                var novoConteudo = $(this).val();
                $(this).parent().text(novoConteudo);
                $(this).parent().removeClass("celulaEmEdicao");
            }
        });

	$(this).children().first().blur(function(){
		$(this).parent().text(conteudoOriginal);
		$(this).parent().removeClass("celulaEmEdicao");
	});
    });
});

 //inicio
        var iconSelect;

        window.onload = function(){

            iconSelect = new IconSelect("photo1", 
                {'selectedIconWidth':68,
                'selectedIconHeight':68,
                'selectedBoxPadding':1,
                'iconsWidth':43,
                'iconsHeight':43,
                'boxIconSpace':1,
                'vectoralIconNumber':4,
                'horizontalIconNumber':4});

            var icons = [];
            icons.push({'iconFilePath':'user.jpg', 'iconValue':'1'});
            icons.push({'iconFilePath':'barbara.jpg', 'iconValue':'2'});
            icons.push({'iconFilePath':'diego.jpg', 'iconValue':'3'});
            icons.push({'iconFilePath':'jhon.jpg', 'iconValue':'4'});
            icons.push({'iconFilePath':'lais.jpg', 'iconValue':'5'});
            icons.push({'iconFilePath':'lucas-albuquerque.jpg', 'iconValue':'6'});
            icons.push({'iconFilePath':'lucas-savio.jpg', 'iconValue':'7'});
            icons.push({'iconFilePath':'mateus.jpg', 'iconValue':'8'});
			
			iconSelect.refresh(icons);
			  
            iconSelect = new IconSelect("photo2", 
                {'selectedIconWidth':68,
                'selectedIconHeight':68,
                'selectedBoxPadding':1,
                'iconsWidth':43,
                'iconsHeight':43,
                'boxIconSpace':1,
                'vectoralIconNumber':4,
                'horizontalIconNumber':4});

            var icons = [];
            icons.push({'iconFilePath':'user.jpg', 'iconValue':'1'});
            icons.push({'iconFilePath':'ana.jpg', 'iconValue':'2'});
            icons.push({'iconFilePath':'barbara.jpg', 'iconValue':'3'});
            icons.push({'iconFilePath':'diego.jpg', 'iconValue':'4'});
            icons.push({'iconFilePath':'lais.jpg', 'iconValue':'5'});
            icons.push({'iconFilePath':'lucas-albuquerque.jpg', 'iconValue':'6'});
            icons.push({'iconFilePath':'lucas-savio.jpg', 'iconValue':'7'});
            icons.push({'iconFilePath':'mateus.jpg', 'iconValue':'8'});
            
            iconSelect.refresh(icons);
            iconSelect = new IconSelect("photo3", 
                {'selectedIconWidth':68,
                'selectedIconHeight':68,
                'selectedBoxPadding':1,
                'iconsWidth':43,
                'iconsHeight':43,
                'boxIconSpace':1,
                'vectoralIconNumber':4,
                'horizontalIconNumber':4});

            var icons = [];
            icons.push({'iconFilePath':'user.jpg', 'iconValue':'1'});
            icons.push({'iconFilePath':'ana.jpg', 'iconValue':'2'});
            icons.push({'iconFilePath':'barbara.jpg', 'iconValue':'3'});
            icons.push({'iconFilePath':'diego.jpg', 'iconValue':'4'});
            icons.push({'iconFilePath':'lais.jpg', 'iconValue':'5'});
            icons.push({'iconFilePath':'lucas-albuquerque.jpg', 'iconValue':'6'});
            icons.push({'iconFilePath':'lucas-savio.jpg', 'iconValue':'7'});
            icons.push({'iconFilePath':'mateus.jpg', 'iconValue':'8'});
            
            iconSelect.refresh(icons);
            iconSelect = new IconSelect("photo4", 
                {'selectedIconWidth':68,
                'selectedIconHeight':68,
                'selectedBoxPadding':1,
                'iconsWidth':43,
                'iconsHeight':43,
                'boxIconSpace':1,
                'vectoralIconNumber':4,
                'horizontalIconNumber':4});

            var icons = [];
            icons.push({'iconFilePath':'user.jpg', 'iconValue':'1'});
            icons.push({'iconFilePath':'ana.jpg', 'iconValue':'2'});
            icons.push({'iconFilePath':'barbara.jpg', 'iconValue':'3'});
            icons.push({'iconFilePath':'diego.jpg', 'iconValue':'4'});
            icons.push({'iconFilePath':'lais.jpg', 'iconValue':'5'});
            icons.push({'iconFilePath':'lucas-albuquerque.jpg', 'iconValue':'6'});
            icons.push({'iconFilePath':'lucas-savio.jpg', 'iconValue':'7'});
            icons.push({'iconFilePath':'mateus.jpg', 'iconValue':'8'});
            
            iconSelect.refresh(icons);			
            iconSelect = new IconSelect("photo5", 
                {'selectedIconWidth':68,
                'selectedIconHeight':68,
                'selectedBoxPadding':1,
                'iconsWidth':43,
                'iconsHeight':43,
                'boxIconSpace':1,
                'vectoralIconNumber':4,
                'horizontalIconNumber':4});

            var icons = [];
            icons.push({'iconFilePath':'user.jpg', 'iconValue':'1'});
            icons.push({'iconFilePath':'ana.jpg', 'iconValue':'2'});
            icons.push({'iconFilePath':'barbara.jpg', 'iconValue':'3'});
            icons.push({'iconFilePath':'diego.jpg', 'iconValue':'4'});
            icons.push({'iconFilePath':'lais.jpg', 'iconValue':'5'});
            icons.push({'iconFilePath':'lucas-albuquerque.jpg', 'iconValue':'6'});
            icons.push({'iconFilePath':'lucas-savio.jpg', 'iconValue':'7'});
            icons.push({'iconFilePath':'mateus.jpg', 'iconValue':'8'});
            
            iconSelect.refresh(icons);			
			
            iconSelect = new IconSelect("photo6", 
                {'selectedIconWidth':68,
                'selectedIconHeight':68,
                'selectedBoxPadding':1,
                'iconsWidth':43,
                'iconsHeight':43,
                'boxIconSpace':1,
                'vectoralIconNumber':4,
                'horizontalIconNumber':4});

            var icons = [];
            icons.push({'iconFilePath':'user.jpg', 'iconValue':'1'});
            icons.push({'iconFilePath':'ana.jpg', 'iconValue':'2'});
            icons.push({'iconFilePath':'barbara.jpg', 'iconValue':'3'});
            icons.push({'iconFilePath':'diego.jpg', 'iconValue':'4'});
            icons.push({'iconFilePath':'lais.jpg', 'iconValue':'5'});
            icons.push({'iconFilePath':'lucas-albuquerque.jpg', 'iconValue':'6'});
            icons.push({'iconFilePath':'lucas-savio.jpg', 'iconValue':'7'});
            icons.push({'iconFilePath':'mateus.jpg', 'iconValue':'8'});
            
            iconSelect.refresh(icons);			
			
            iconSelect = new IconSelect("photo7", 
                {'selectedIconWidth':68,
                'selectedIconHeight':68,
                'selectedBoxPadding':1,
                'iconsWidth':43,
                'iconsHeight':43,
                'boxIconSpace':1,
                'vectoralIconNumber':4,
                'horizontalIconNumber':4});

            var icons = [];
            icons.push({'iconFilePath':'user.jpg', 'iconValue':'1'});
            icons.push({'iconFilePath':'ana.jpg', 'iconValue':'2'});
            icons.push({'iconFilePath':'barbara.jpg', 'iconValue':'3'});
            icons.push({'iconFilePath':'diego.jpg', 'iconValue':'4'});
            icons.push({'iconFilePath':'lais.jpg', 'iconValue':'5'});
            icons.push({'iconFilePath':'lucas-albuquerque.jpg', 'iconValue':'6'});
            icons.push({'iconFilePath':'lucas-savio.jpg', 'iconValue':'7'});
            icons.push({'iconFilePath':'mateus.jpg', 'iconValue':'8'});
            
            iconSelect.refresh(icons);			
			
			
			
			
			
			
			
			
			
        };
//fim

function PrintDiv(id) {
            var data=document.getElementById(id).innerHTML;
            var myWindow = window.open('', 'my div', 'height=600,width=800');
            myWindow.document.write('<html><head><title>Rank</title>');
            /*optional stylesheet*/ //myWindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
			myWindow.document.write('<link rel="stylesheet" type="text/css" href="css/print.css" media="print" />');
            myWindow.document.write('</head><body >');
            myWindow.document.write(data);
            myWindow.document.write('</body></html>');
            myWindow.document.close(); // necessary for IE >= 10

            myWindow.onload=function(){ // necessary if the div contain images

                myWindow.focus(); // necessary for IE >= 10
                myWindow.print();
                myWindow.close();
            };
        }