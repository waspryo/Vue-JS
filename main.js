const app = new Vue({
  el: "#app",
  data: {
    john: {
      first: "john",
      last: "conner",
      age: 25
    },
    sala: {
      first: "sala",
      last: "conner",
      age: 55
    },
  },
  computed: {
    johnFullName() {
      return `${this.john.first} ${this.john.last}`;
    },
    salaFullName(){
      return `${this.sala.first} ${this.sala.last}`
    },
    johnAgeInOneYear(){
      return this.john.age + 1
    }
  },
  template: `
    <div>
        <h1>Name: {{ johnFullName }}</h1>
        <h2>Age: {{ johnAgeInOneYear }}</h2>
        <br>
        <h1>Name: {{ salaFullName }}</h1>
        <h2>Age: {{ sala.age }}</h2>
    </div>
    `
});
