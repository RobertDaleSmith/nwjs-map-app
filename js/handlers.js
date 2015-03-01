BP.handlers = {

	headerMainMenuClickEvent: function(event) {

		var self = this;
		
		$("#header_button_wrapper .btn").removeClass('active');
		$(self).parent().addClass('active');

	},

	headerDropDownMenuClickEvent: function(event) {

		var self = this;

		var isOpen = false;

		if ($(self).parent().attr('class').indexOf("open") >= 0) isOpen = true;
		
		$("#header_button_wrapper .btn").removeClass('open');
		if(!isOpen) {
			$(self).parent().addClass('open');

			$(self).find('i').attr("class","fa fa-chevron-up");
		} else {
			$(self).find('i').attr("class","fa fa-chevron-down");
		}

	},

	headerMenuItemClickEvent: function(event) {

		var self = this;

		var pointId = $(self).attr('id');
		
		$("#header_button_wrapper .btn").removeClass('open');

		$(self).parent().parent().find('.icon i').attr("class","fa fa-chevron-down");

		$('.mapPoint#'+pointId).click();

	},

	mapPointClickEvent: function(event) {

		var self = this;

		var id = $(self).attr("id");

		var isOpen = $(self).hasClass('open');

		if( !isOpen ){

			var labelWidth = $(self).find('.label').css("width");

			$(self).find('.label').css('width', labelWidth);

			$('div.mapPoint').removeClass('open');

			setTimeout(function(){

				$(self).addClass('open');

				setTimeout(function(){

					$(self).css('width', '');

				}, 1);

			}, 1);

			//Stuff for setting active dropDown item.
			$('.menuItem').removeClass('active');
			$('.menuItem#'+id).addClass('active');

			// $(self).unbind( "click" );
		}

	},

	mapPointLabelCloseBtnClickEvent: function(event) {

		var self = this;

		var point = $(self).parent().parent();

		point.removeClass('open');

		var id = $(point).attr("id");

		event.stopPropagation();

	}

}