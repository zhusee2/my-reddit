export const CREATE_TOPIC = 'CREATE_TOPIC';
export const UPVOTE_TOPIC = 'UPVOTE_TOPIC';
export const DOWNVOTE_TOPIC = 'DOWNVOTE_TOPIC';

export function createTopic(content, topicId) {
  return {
    type: CREATE_TOPIC,
    content,
    topicId,
  };
}

export function upvoteTopic(topicId) {
  return {
    type: UPVOTE_TOPIC,
    topicId,
  };
}

export function downvoteTopic(topicId) {
  return {
    type: DOWNVOTE_TOPIC,
    topicId,
  };
}
