function placeOrder(plan) {
    const webhookURL = 'https://discord.com/api/webhooks/1246846210678194236/Ui2nEScu4wRgiNoUQ2HoAoTRXiq3If9D2cTd33STybiwwuNstqPfGFn34mOKLF8PHCZ0';
    const request = new XMLHttpRequest();
    request.open("POST", webhookURL);

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "Order Bot",
        content: `A customer may order..`
    };
}
