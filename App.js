const heading = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "Hello from child1's H1!"),
        React.createElement("h2", {}, "Hello from child1's H2!")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "Hello from child2's H1!"),
        React.createElement("h2", {}, "Hello from child2's H2!")
    ])
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);