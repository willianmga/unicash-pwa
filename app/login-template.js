class LoginTemplate {
    render() {
        document.querySelector("#content").innerHTML = `
            <p>Another template</p>
            <button onclick="controller.renderAnotherTemplate()">Button</button>
        `;
    }
}