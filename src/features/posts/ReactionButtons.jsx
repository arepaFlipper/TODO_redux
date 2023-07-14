import React from "react";
import { useAddReactionMutation } from '../api/apiSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
  const [addReaction] = useAddReactionMutation();
  const ReactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    const count_reactions = post.reactions[name];
    return (
      <button
        key={name}
        type="button"
        className="mutted-button reaction-button"
        onClick={() => {
          addReaction({ postId: post.id, reaction: name })
        }}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{ReactionButtons}</div>

}
