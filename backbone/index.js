var todos = [
    {
        "id":1437408075114 ,
        "date": 1431388800 ,
        "name": "JS",
        "description": "Learn JavaScript",
        "priority": "2"
    },
    {
        "id": 1437408334583,
        "date": 1431302400 ,
        "name": "HTML",
        "description": "learn HTML5",
        "priority": "2"
    },
    {
        "id": 1437408380055,
        "date": 1431216000 ,
        "name": "css",
        "description": "learn css",
        "priority": "2"
    },
    {
        "id": 1437408398884,
        "date": 1431129600 ,
        "name": "php",
        "description": "learn php",
        "priority": "1"
    },
    {
        "id": 1437408426171,
        "date": 1460160000 ,
        "name": "backbone",
        "description": "learn backbone",
        "priority": "0"
    }    
];
var td = {
    "id":1437408075114 ,
    "date": 1431388800 ,
    "name": "JS",
    "description": "Learn JavaScript",
    "priority": "2"
};



$(document).ready(function() {
//Classes  принято называть с большой буквы

Todo = Backbone.Model.extend({});
TodoView = Backbone.View.extend({
    tagName: 'li',
    className: 'todo',
    template: _.template($('#todo-tmpl').html()),
    initialize: function() {
        console.log('initialize');
        this.model.on('change', this.render, this);
        this.model.on('change:priority',this.alertP, this);
    },
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
TodoCollection = Backbone.Collection.extend({
    model: Todo
});
TodoCollectionView = Backbone.View.extend({
    tagName: 'li',
    className: 'todo',
    render: function() {
        this.collection.forEach(function (todo) {
            var todoView = new TodoView({model:todo});
            this.$el.append(todoView.render().el);
        });
        return this;
    }
});
//instances

todo = new Todo(td);
todoView = new TodoView({model:todo});
todoCollection = new TodoCollection(todos);
todoCollectionView = new TodoCollectionView(collectio:todoCollection);

 
            $('#one').html(todoView.render().el)
        });