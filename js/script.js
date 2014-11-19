$( document ).ready(function() {

	cat = [
		{
			catName: "Авто/Мото",
			minPrice: "0.50 руб.", 
			recomendedPrice: "0.50 руб.",
			setPrice: "0.50 руб."
		},
		{
			catName: "Бизнес и Финансы",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Дом и быт",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Красота и здоровье",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Культура и искуство",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Мода и стиль",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Недвижимость",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Новости и СМИ",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Образование и работа",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Политика",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Знакомства",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Развлечения и досуг",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Спорт",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Теника и аксессуары",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Туризм и путешествия",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Азартные игры",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Игры",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Прочее",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		},
		{
			catName: "Для взрослых",
			minPrice: "1.50 руб.", 
			recomendedPrice: "1.50 руб.",
			setPrice: "1.50 руб."
		}
	  ];

	Site = {

		catRow : $("#cat-tbody"),

		formDataToJSON : JSON.stringify($('#form').serializeArray()),

		send_data: function(){
		        $.ajax({
		            url: 'http://0.0.0.0:81/',
		            method: 'GET',
		            data: Site.formDataToJSON,
		            success: function(info) {
		            	console.log('Done!');
		            },
		            error: function(e) {
		            	console.log("Some error ocurred " + e);
		            }

	            })
	    },

		append_data_to_table: function() {
				for (var i = 0; i <= cat.length - 1; i++) {
					Site.catRow.append("<tr><td><input type='checkbox' name='cat_settings' id='cat" + 
						i + "' value='" + 
										cat[i].catName + "," + 
										cat[i].minPrice + "," + 
										cat[i].recomendedPrice + "," + 
										cat[i].setPrice + "' class='css-checkbox checked_prop'/><label for='cat" + 
						i + "' class='css-label'></label></td><td>" + 
						cat[i].catName + "</td><td class='centr'>" + 
						cat[i].minPrice + "</td><td class='centr'>" + 
						cat[i].recomendedPrice + "</td><td class='centr'>" + 
						cat[i].setPrice + "</td></tr>");
				};
		},

		on_change: function() {
			$('.checked_prop').change(function () {
				$(this).closest('tr').toggleClass("chk");
			});
		},

		check_all_cat: function() {
			$('.checkAllCat').on('click',function(e) {
				var table= $(e.target).closest('table');
				$('td input:checkbox',table).prop('checked',this.checked);

				$('td input:checkbox').closest('tr').toggleClass("chk");

			});
		},

		on_load_site: function() {

			$('#tree').tree({ 
				onCheck: {
		            ancestors: 'checkIfFull',
		            descendants: 'check'
		        },
		        onUncheck: {
		            ancestors: 'uncheck'
	        }});

			$('input[type=checkbox]').click(function () {
			    $(this).parent().find('li input[type=checkbox]').prop('checked', $(this).is(':checked'));
			    var sibs = false;
			    $(this).closest('ul').children('li').each(function () {
			        if($('input[type=checkbox]', this).is(':checked')) sibs=true;
			    })
			    $(this).parents('ul').prev().prop('checked', sibs);
			});

			Site.append_data_to_table();
			Site.check_all_cat();
			Site.on_change();
		},

		show_hide: function(tog) {
			tog.parent().find('.content').toggle('fast');
			tog.toggleClass('ui-icon-triangle-1-e');
			tog.toggleClass('ui-icon-triangle-1-se');
		}

	}

	Site.on_load_site();

	$('#create_company').on('click',function() {
		Site.send_data();
	});

	$('.toggle').on('click', function () {
		var this_ = $(this);
		Site.show_hide(this_);
	});

});
