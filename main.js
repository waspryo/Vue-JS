const app = new Vue({
  el: "#app",
  data: {
    john: {
      name: "body",
      age: 25
    },
    aim: {
      name: "deli",
      age: 25
    }
  },
  template: `
    <div>
        <h1>Name: {{ aim.name }}</h1>
        <h2>Age: {{ aim.age }}</h2>
    </div>
    `
});
