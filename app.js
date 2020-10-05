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
            const todos = this.todos.filter(item => item.id !== id);
            this.todos = todos;
        },
        submitTodoEdit(){
            const updatedTodos = this.todos.map(item => {
                if(item.id === this.selectedTodo.id){
                    return {
                        ...this.selectedTodo,
                        name: this.todoName
                    }
                }
                return item
            });

            this.todos = updatedTodos;
            this.isEditing = false;
        },
        selectTodoEdit(todo){
            this.selectedTodo = todo;
            this.isEditing = true;
            this.todoName = todo.name;
        },
        removedCompletedTodos(){
            const incompleteTodos = this.todos.filter(item => !item.complete)
            this.todos = incompleteTodos;
        },
        toggleComplete(id){
            const todos = this.todos.map(item => {
                if(item.id === id){
                    item.complete = !item.complete
                    return item
                }
                return item
            })
            this.todos = todos;
        }
    }
})