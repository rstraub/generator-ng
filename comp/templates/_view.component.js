import './<%= importName %>.component.html';

class <%= name %>Ctrl {
    constructor() {
        this.name = '<%= name %>';
    }
}

<%= name %>Ctrl.$inject = [];

export default {
    bindings: {},
    templateUrl: './<%= importName %>.component.html',
    controller: <%= name %>Ctrl
};
