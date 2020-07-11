<aura:application extends="force:slds">
    <c:contactlist/>
    <c:paginator onnext="{!c.handleNext}" onprevious="{!c.handlePrevious}"/>
</aura:application>