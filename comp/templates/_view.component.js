import './<%= name.toLowerCase() %>.component.html';

class <%= name %>Ctrl {
    constructor() {
        this.name = '<%= name %>';
    }
}

<%= name %>Ctrl.$inject = [];

export default {
    bindings: {},
    templateUrl: './<%= name.toLowerCase() %>.component.html',
    controller: <%= name %>Ctrl
}
