export const CREATE_TOPIC = 'CREATE_TOPIC';

export function createTopic(content, topicId) {
  return {
    type: CREATE_TOPIC,
    content,
    topicId,
  };
}
