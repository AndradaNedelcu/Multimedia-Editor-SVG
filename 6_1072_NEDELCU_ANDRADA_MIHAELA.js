 $.fn.coordonateDreptunghi = function (x1, y1, x2, y2) {
            return this.attr({
                x: Math.min(x1, x2),
                y: Math.min(y1, y2),
                width: Math.max(x1, x2) - Math.min(x1, x2),
                height: Math.max(y1, y2) - Math.min(y1, y2)
            });
        }

 $.fn.coordonateLinie = function (x1, y1, x2, y2) {
     return this.attr({
                 x1: Math.min(x1, x2),
                 y1: Math.min(y1, y2),
                 x2: Math.max(x1, x2),
                 y2: Math.max(y1, y2)

            });
 }

 $.fn.coordonateText = function (x1, y1, x2, y2) {
            return this.attr({
                x: Math.floor(Math.random() * 1300-100),
                y: Math.floor(Math.random() * 550-20),
                width: 100,
                height: 20
            });
        }


		
		$.fn.coordonateElipsa = function (x1, y1, x2, y2) {
            return this.attr({
                rx: (Math.max(x1, x2)-Math.min(x1, x2))/2,
                ry: (Math.max(y1, y2)-Math.min(y1, y2))/2,
                cx: (x1+x2)/2,
                cy: (y1+y2)/2
            });
        }


    

        $(function () {
            var MOUSE_LEFT = 1, MOUSE_RIGHT = 3, KEY_DEL = 46;
            var x1 = 0, y1 = 0;
            var elementSelectat = null;
			var figura=null;
            var sunet_elemente_geometrice=document.getElementById('sunet_btn_elemente_geometrice');
            var sunet_culori=document.getElementById('sunet_btn_culori');
            var sunet_selectie=document.getElementById('sunet_functie_selectie');
            var sunet_delete=document.getElementById('sunet_functie_delete');
			$("#btn_dreptunghi").click(function (e){
				figura="dreptunghi";
                sunet_elemente_geometrice.play();
			})
			$("#btn_elipsa").click(function (e){
				figura="elipsa";
                sunet_elemente_geometrice.play();
			})
            $("#btn_linie").click(function (e){
                figura="linie";
                sunet_elemente_geometrice.play();
            })



            $("#rosu").click(function (e){
                if(elementSelectat){
                     $(elementSelectat).css({"fill":"#ea4335"});
                     sunet_culori.play();
                }
            })

            $("#albastru").click(function (e){
                if(elementSelectat){
                    $(elementSelectat).css({"fill":"#4285f3"});
                    sunet_culori.play();
                }
            })
            $("#verde_deschis").click(function (e){
                if(elementSelectat){
                    $(elementSelectat).css({"fill":"#34a853"});
                    sunet_culori.play();
                }
            })
            $("#galben").click(function (e){
                if(elementSelectat){
                    $(elementSelectat).css({"fill":"#f6ff60"});
                    sunet_culori.play();
                }
            })
            $("#maro").click(function (e){
                if(elementSelectat){
                    $(elementSelectat).css({"fill":"#56381F"});
                    sunet_culori.play();
                }
            })
            $("#mov").click(function (e){
                if(elementSelectat){
                   $(elementSelectat).css({"fill":"#8f79ba"});
                   sunet_culori.play();
                }
            })
            $("#verde_inchis").click(function (e){
                if(elementSelectat){
                   $(elementSelectat).css({"fill":"#062d00"});
                   sunet_culori.play();
                }
            })
            $("#albastru_inchis").click(function (e){
                if(elementSelectat){
                    $(elementSelectat).css({"fill":"#00116d"});
                    sunet_culori.play();
                }
            })
            $("#alb").click(function (e){
                if(elementSelectat){
                    $(elementSelectat).css({"fill":"#eeeeee"});
                    sunet_culori.play();
                }
            })
            $("#negru").click(function (e){
                if(elementSelectat){
                    $(elementSelectat).css({"fill":"#000000"});
                    sunet_culori.play();
                }
            })

            $("#margini_plus").click(function(e){
                if(elementSelectat){
                    $(elementSelectat).css({"stroke-width":"+=1px"});
                    sunet_culori.play();

                }
            })
            $("#margini_minus").click(function(e){
                if(elementSelectat){
                    $(elementSelectat).css({"stroke-width":"-=1px"});
                    sunet_culori.play();

                }
            })
            $("#adauga_text").click(function(e){
                var text=document.getElementById('casuta_text').value;
                sunet_culori.play();
                $(document.createElementNS("http://www.w3.org/2000/svg", "text"))
                .coordonateText(x1, y1, x2, y2)
                .text(text)
                            .mousedown(function (e) {
                                if (e.which == MOUSE_RIGHT) {
                                    $("#elemente *").attr("class", "");
                                    $(this).attr("class", "selectat");
                                    elementSelectat = this;
                                    sunet_selectie.play();
                                }
                            })
                            .appendTo($("#elemente"));

                
            })


			
            $("#editor")
                .mousedown(function (e) {                    
                    if (e.which == MOUSE_LEFT) {
                        x1 = e.pageX - this.getBoundingClientRect().left;
                        y1 = e.pageY - this.getBoundingClientRect().top;
					if(figura=="dreptunghi"){
                        $("#selectie_dreptunghi")
                            .coordonateDreptunghi(x1, y1, x1, y1)
                            .show();
							}
                    
					if(figura=="elipsa"){
					 $("#selectie_elipsa")
                            .coordonateElipsa(x1, y1, x1, y1)
                            .show();
					       }
                    if(figura=="linie"){
                     $("#selectie_linie")
                            .coordonateLinie(x1, y1, x1, y1)
                            .show();
                           }
					}
                })

                .mousemove(function (e) {
                    x2 = e.pageX - this.getBoundingClientRect().left;
                    y2 = e.pageY - this.getBoundingClientRect().top;

                if(figura=="dreptunghi"){
                    $("#selectie_dreptunghi")
                        .coordonateDreptunghi(x1, y1, x2, y2);
                }
                if(figura=="elipsa"){
                    $("#selectie_elipsa")
                        .coordonateElipsa(x1, y1, x2, y2);
                }
                if(figura=="linie"){
                    $("#selectie_linie")
                        .coordonateLinie(x1, y1, x2, y2);
                }
                })

                .mouseup(function (e) {
                    if (e.which == MOUSE_LEFT) {
                        x2 = e.pageX - this.getBoundingClientRect().left;
                        y2 = e.pageY - this.getBoundingClientRect().top;
						
						if(figura=="dreptunghi"){
                        $("#selectie_dreptunghi").hide();
						
						$(document.createElementNS("http://www.w3.org/2000/svg", "rect"))
                            .coordonateDreptunghi(x1, y1, x2, y2)
                            .mousedown(function (e) {
                                if (e.which == MOUSE_RIGHT) {
                                    $("#elemente *").attr("class", "");
                                    $(this).attr("class", "selectat");
                                    elementSelectat = this;
                                    sunet_selectie.play();

                                }
                            })
                            .appendTo($("#elemente"));
						}

                        if(figura=="linie"){
                        $("#selectie_linie").hide();
                        
                        $(document.createElementNS("http://www.w3.org/2000/svg", "line"))
                            .coordonateLinie(x1, y1, x2, y2)
                            .mousedown(function (e) {
                                if (e.which == MOUSE_RIGHT) {
                                    $("#elemente *").attr("class", "");
                                    $(this).attr("class", "selectat");
                                    elementSelectat = this;
                                    sunet_selectie.play();
                                }
                            })
                            .appendTo($("#elemente"));
                        }

						if(figura=="elipsa"){
							$("#selectie_elipsa").hide();
						
						
                        $(document.createElementNS("http://www.w3.org/2000/svg", "ellipse"))
                            .coordonateElipsa(x1, y1, x2, y2)
                            .mousedown(function (e) {
                                if (e.which == MOUSE_RIGHT) {
                                    $("#elemente *").attr("class", "");
                                    $(this).attr("class", "selectat");
                                    elementSelectat = this;
                                    sunet_selectie.play();
                                }
                            })
                            .appendTo($("#elemente"));
						}
                    }
                })
                
				
                .contextmenu(function () {
                    return false;
                });


            $(document).keydown(function (e) {
                if (elementSelectat && e.keyCode == KEY_DEL) {
                    elementSelectat.remove();
                    elementSelectat=null;
                    sunet_delete.play();
                }
                else if (elementSelectat && e.keyCode == 48){
                    $(elementSelectat).css({"fill":"#ea4335"});
                    sunet_culori.play();
                }
                else if (elementSelectat && e.keyCode == 49){
                    $(elementSelectat).css({"fill":"#4285f3"});
                    sunet_culori.play();
                }
                else if (elementSelectat && e.keyCode == 50){
                    $(elementSelectat).css({"fill":"#34a853"});
                    sunet_culori.play();
                }
                else if (elementSelectat && e.keyCode == 51){
                    $(elementSelectat).css({"fill":"#f6ff60"});
                    sunet_culori.play();
                }
                else if (elementSelectat && e.keyCode == 52){
                    $(elementSelectat).css({"fill":"#56381F"});
                    sunet_culori.play();
                }
                else if (elementSelectat && e.keyCode == 53){
                   $(elementSelectat).css({"fill":"#8f79ba"});
                   sunet_culori.play();
                }
                else if (elementSelectat && e.keyCode == 54){
                   $(elementSelectat).css({"fill":"#062d00"});
                   sunet_culori.play();
                }
                else if (elementSelectat && e.keyCode == 55){
                    $(elementSelectat).css({"fill":"#00116d"});
                    sunet_culori.play();
                }
                else if (elementSelectat && e.keyCode == 56){
                    $(elementSelectat).css({"fill":"#eeeeee"});
                    sunet_culori.play();
                }
                else if (elementSelectat && e.keyCode == 57){
                    $(elementSelectat).css({"fill":"#000000"});
                    sunet_culori.play();
                }

            });
        });


