class <%= name %>Ctrl {
    constructor() {
        this.name = '<%= name %>';
    }
}

<%= name %>Ctrl.$inject = [];

export default {
    bindings: {},
    controller: <%= name %>Ctrl
}
