$(document).ready(function() {

	var addedColourID = 0;
	$(".addField").click(function(){

		var addedHtml = $(	'<div class="form-group" id="addedPart"' + addedColourID + '>'
								+ '<input type="text" class="form-control partOfColour" id="colourPart' + addedColourID + '" placeholder="Flip-flop sole...">'
								+ '<div class="input-group">'
									+ '<input type="text" class="form-control" id="colourCode' + addedColourID + '" placeholder="e.g. 100 C">'
									+ '<span class="input-group-btn">'
										+ '<button class="btn btn-danger deleteColour" type="button"><i class="fa fa-minus minusIcon"></i></button>'
									+ '</span>'
								+ '</div>'
							+ '</div>');
		addedColourID++;

	    $("#dynamicColours").append(addedHtml);
	});

	$(document).on('click', '.deleteColour', function(){
		$(this).parents().eq(2).remove();
	});
});