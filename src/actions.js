export const CREATE_TOPIC = 'CREATE_TOPIC';

export function createTopic(content) {
  return {
    type: CREATE_TOPIC,
    content,
  };
}
