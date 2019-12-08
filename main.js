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
    }
  },
  computed: {
    // johnFullName() {
    //   return `${this.john.first} ${this.john.last}`;
    // },
    // salaFullName(){
    //   return `${this.sala.first} ${this.sala.last}`
    // },
    johnAgeInOneYear() {
      return this.john.age + 1;
    }
  },
  filters: {
    ageInOneYear(age) {
        return age + 1
    },
    fullName(value) {
      return `${value.first} ${value.last}`;
    }
  },
  template: `
    <div>
        <h1>Name: {{ john | fullName }}</h1>
        <h2>Age: {{ john.age | ageInOneYear }}</h2>
        <br>
        <h1>Name: {{ sala | fullName }}</h1>
        <h2>Age: {{ sala.age | ageInOneYear }}</h2>
    </div>
    `
});
