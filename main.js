const app = new Vue({
    el: "#app",
    data: {
        name: "body",
        age: 25
    },
    template: `
    <div>
        <h1>Name: {{ name }}</h1>
        <h2>Age: {{ age }}</h2>
    </div>
    `
})