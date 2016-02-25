/*
 * Mixin allows sharing of the component within a lifecycle.
 */
var LogMixin = {
    componentDidMount: function(){
        console.log("componentDidMount was successfully called.");
    }
};

var ComponentTwo = React.createClass({
   mixins: [LogMixin]
});
