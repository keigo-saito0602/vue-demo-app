<!DOCTYPE html>
<html>
  <head>
    <title>Vue.js 2 Task Tracker</title>
  </head>
  <body>
    <div id="app">
      <h1>Task Tracker</h1>
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          {{ task }}
          <button @click="completeTask(index)">Complete</button>
        </li>
      </ul>
      <h2>Completed Tasks</h2>
      <ul>
        <li v-for="(task, index) in completedTasks" :key="index">
          {{ task }}
        </li>
      </ul>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          newTask: '',
          tasks: [],
          completedTasks: [],
        },
        methods: {
          addTask() {
            if (this.newTask.trim() === '') return;
            this.tasks.push(this.newTask);
            this.newTask = '';
          },
          completeTask(index) {
            this.completedTasks.push(this.tasks[index]);
            this.tasks.splice(index, 1);
          },
        },
      });
    </script>
  </body>
</html>
