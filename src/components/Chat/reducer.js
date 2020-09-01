export default function chatReducer(state, action) {
  switch (action.type) {
    case 'DATA_RESPONSE_SUCCESS': {
      const {
        data: { members, messages },
      } = action;
      const membersMap = new Map();

      members.forEach(m => {
        membersMap.set(m.id, m);
      });

      const messagesWithAuthors = messages.map(m => ({
        ...m,
        author: membersMap.get(m.authorId) ?? null,
      }));

      return {
        ...state,
        members: membersMap,
        messages: messagesWithAuthors,
      };
    }
    case 'NEW_MESSAGE': {
      const { members, messages } = state;
      const { message } = action;

      const messageWithAuthor = {
        ...message,
        author: members.get(message.authorId),
      };

      const newMessages = [...messages, messageWithAuthor];

      return {
        ...state,
        messages: newMessages,
      };
    }

    default:
      return state;
  }
}
