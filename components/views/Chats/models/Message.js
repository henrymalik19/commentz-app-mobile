import shortid from 'shortid';

export class Message {
    constructor(info) {
        this.id = shortid.generate(); // Unique Identifier
        this.chatId = info.chatId; // Identify the Owning Chat 
        this.sender = {
            id: info.sender.id, // Who is sending the message
            avatar: info.sender.avatar // Used to Update Chat Message Avatar
        };
        this.recipientId = info.recipientId; // Identify Who Receives the Message
        this.text = info.text.trim(); // Message Text
        this.read = false; // Determine if Message has Been Read
        this.recvd = false; // Determine if Server Received Message to Send
        this.sendDate = new Date(); // Date Sender Sent
        this.recvDate = ''; // Date Received by Recipient
    }
}