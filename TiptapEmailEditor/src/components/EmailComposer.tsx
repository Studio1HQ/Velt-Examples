import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";
import { Send } from "lucide-react";
import Toolbar from "./Toolbar";
import BubbleMenuComponent from "./BubbleMenu";
import VeltComments from "@veltdev/tiptap-velt-comments";
import InputField from "./InputField";
import { defaultContent } from "../utils/constant";
import { useGetCommentAnnotations } from "@veltdev/react";

const EmailComposer = () => {
  const [to, setTo] = useState<string>("");
  const [subject, setSubject] = useState<string>("");

  const { data } = useGetCommentAnnotations({
    storyId: "story-id",
    storyName: "story-name",
  });

  const editor = useEditor({
    extensions: [
      VeltComments.configure({ persistVeltMarks: true }),
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-4 text-white",
          },
        },
      }),
      Placeholder.configure({
        placeholder: "Write your message here...",
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-indigo-400 underline",
        },
      }),
      Highlight,
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none focus:outline-none min-h-[200px] px-4 py-2 text-white",
      },
    },
    content: defaultContent,
  });

  useEffect(() => {
    if (data && editor) {
      // Iterate through each annotation (comment)
      Object.keys(data).forEach((documentId) => {
        const annotations = data[documentId];
        annotations.forEach(
          (annotation: {
            annotationId: string;
            context: { tiptapConfig: { text: string } };
          }) => {
            // Loop through the comments inside each annotation
            const annotationId = annotation.annotationId;
            const commentHtml = annotation.context.tiptapConfig.text;

            // Insert the comment HTML wrapped in the <velt-comment-text> custom tag
            const wrappedCommentHtml = `<velt-comment-text annotation-id="${annotationId}">${commentHtml}</velt-comment-text>`;

            const startPosition = 0; // Adjust to the correct insertion position

            // Insert the comment HTML into the editor at the appropriate position
            editor
              .chain()
              .focus()
              .insertContentAt(startPosition, wrappedCommentHtml)
              .run();
          }
        );
      });
    }
  }, [data, editor]);

  const handleSend = () => {
    if (editor) {
      console.log({
        to,
        subject,
        content: editor.getHTML(),
      });
    }
  };
  const HandleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTo(e.target.value);
  };
  const HandleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };
  return (
    <div className="bg-[#2F3349] rounded-2xl shadow-2xl overflow-hidden border border-[#373B59]/50">
      <div className="p-8 space-y-6">
        <h2 className="text-3xl font-bold text-[#F8F7FA] mb-8">New Message</h2>
        <div className="space-y-6">
          <InputField
            title="To:"
            type="email"
            onChangeHandler={HandleToChange}
            placeholder="recipient@example.com"
            value={to}
          />
          <InputField
            title="Subject:"
            type="text"
            onChangeHandler={HandleSubjectChange}
            placeholder="Enter subject"
            value={subject}
          />
        </div>

        <div className="mt-6 border border-[#373B59]/50 rounded-xl overflow-hidden bg-[#25293c]">
          {/* Toolbar */}
          <Toolbar editor={editor} />
          {/* Bubble Menu */}
          <BubbleMenuComponent editor={editor} />
          <div className="p-4">
            {/* Editor Content */}
            <EditorContent editor={editor} />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSend}
            className="bg-indigo-600 hover:bg-indigo-700 text-[#F8F7FA] px-8 py-3 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25"
          >
            <Send size={20} />
            <span className="font-medium">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailComposer;
