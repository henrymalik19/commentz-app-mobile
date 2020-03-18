import shortid from 'shortid';

export class Chat {
    constructor(init) {
        // Unique Identifier
        this.id = init.chatId || shortid.generate();
        // Determine Number of Unread Messages to Display in List
        this.unread = 0;
        // Array of Message Objects
        this.messages = [];
        this.recipient = {
            // ID of User Reciving Sent Messages
            id: init.recipient.id,
            name: init.recipient.name,
            handle: init.recipient.handle,
            avatar: init.recipient.avatar // Avatar that all messages pull from 
        }
    }
}