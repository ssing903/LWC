({
	handleNext : function(component, event, helper) {
		//alert('I am here in Aura Component');
        console.log(JSON.stringify(event.getParams('detail')));
	},
    handlePrevious : function(component,event,helper) {
        alert('I am here in Aura Component');
    }
})