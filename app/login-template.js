class LoginTemplate {
    render() {
        document.querySelector("#content").innerHTML = `
            <p>Another template</p>
            <button onclick="controller.renderHome()">Button</button>
        `;
    }
}