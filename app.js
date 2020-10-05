new Vue({
    el: '#app',
    data: {
        isEditing: false,
        todoName: '',
        todos: [],
        selectedTodo: null,

    },
    methods: {
        addTodo(){
            const newTodo = {
                name: this.todoName,
                id: Date.now(),
                complete: false
            }
            this.todos.push(newTodo)
            this.todoName = ''
        },
        removeTodo(id){
            this.todos = this.todos.filter(item => item.id !== id);
        },
        submitTodoEdit(){
            this.todos = this.todos.map(item => {
                if(item.id === this.selectedTodo.id){
                    return {
                        ...this.selectedTodo,
                        name: this.todoName
                    }
                }
                return item
            });

            this.isEditing = false;
        },
        selectTodoEdit(todo){
            this.selectedTodo = todo;
            this.isEditing = true;
            this.todoName = todo.name;
        },
        removedCompletedTodos(){
            this.todos = this.todos.filter(item => !item.complete);
        },
        toggleComplete(id){
            this.todos = this.todos.map(item => {
                if(item.id === id){
                    item.complete = !item.complete
                    return item
                }
                return item
            });
        }
    }
})