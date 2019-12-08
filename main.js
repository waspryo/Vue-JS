const app = new Vue({
  el: "#app",
  data: {
    friends: ["john", "sala"],
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
        <h2 v-for="friend in friends">{{ friend }}</h2>
    </div>
    `
});
