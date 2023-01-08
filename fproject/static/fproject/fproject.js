
function newloadchat(username) {
    const url = document.querySelector('#url').innerHTML;
    fetch(url)
    .then(response => response.json())
    .then(chats => {
        document.querySelector('#sohbet').innerHTML = "";
        chats.forEach(chat => {
            let bubble = document.createElement('div');
            let mess = document.createElement('a');
            if (chat.message_sender != username) {
                bubble.className = "balon1 p-2 m-0 position-relative";
                bubble.setAttribute("data-is", `You - ${chat.date}`);
                mess.className = "float-right";
            } else {
                bubble.className = "balon2 p-2 m-0 position-relative";
                bubble.setAttribute("data-is", `${username} - ${chat.date}`);
                mess.className = "float-left sohbet2";
            }
            mess.innerHTML = chat.message;
            bubble.append(mess)
            document.querySelector('#sohbet').append(bubble);
        })
    })
}

