const app = new Vue({
  el: "#app",
  data: {
    friends: [
      {
        first: "john",
        last: "conner",
        age: 25
      },
      {
        first: "sala",
        last: "conner",
        age: 55
      }
    ]
  },
  filters: {
    ageInOneYear(age) {
      return age + 1;
    },
    fullName(value) {
      return `${value.first} ${value.last}`;
    }
  },
  methods: {
    incrementAge(friend) {
        friend.age = friend.age + 1
    },
    decrementAge(friend) {
        friend.age = friend.age - 1
    }
  },
  template: `
    <div>
        <h2 v-for="friend in friends">
        <h4>{{ friend | fullName }}</h4>
        <h5>age: {{friend.age}}</h5>
        <button v-on:click="incrementAge(friend)">+</button>
        <button v-on:click="decrementAge(friend)">-</button>
        <input v-model="friend.first"/>
        <input v-model="friend.last"/>
        </h2>
    </div>
    `
});
