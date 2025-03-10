import React from "react";
import { BubbleMenu } from "@tiptap/react";
import { triggerAddComment } from "@veltdev/tiptap-velt-comments";
import { MessageCircle } from "lucide-react";
import { BubbleMenuProps } from "../types";


const tiptapVeltCommentConfig = {
  context: {
    storyId: "story-id", // Replace with the actual story ID
    storyName: "story-name", // Replace with the actual story name
  },
};

const BubbleMenuComponent: React.FC<BubbleMenuProps> = ({ editor }) => {
  if (!editor) return null;

  const handleAddComment = async () => {
    try {
      console.log("click");
      await triggerAddComment(editor, tiptapVeltCommentConfig);
      console.log("trige", triggerAddComment(editor, tiptapVeltCommentConfig));
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }} >
      <div className="bg-[#b056ef] p-2 flex items-center justify-center  rounded-full">
        <button onClick={handleAddComment}>
          <MessageCircle color="white" />
        </button>
      </div>
    </BubbleMenu>
  );
};

export default BubbleMenuComponent;
