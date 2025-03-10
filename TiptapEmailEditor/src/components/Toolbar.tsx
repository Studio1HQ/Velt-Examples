import {
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  HighlighterIcon,
} from "lucide-react";
import { ToolbarProps } from "../types";

const Toolbar = ({ editor }: ToolbarProps) => {
  if (!editor) {
    return null;
  }

  const toggleLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().unsetLink().run();
      return;
    }

    // Add https if no protocol is specified
    const validUrl = url.match(/^https?:\/\//) ? url : `https://${url}`;
    editor.chain().focus().setLink({ href: validUrl }).run();
  };

  return (
    <div className="border-b border-[#373B59]/50 bg-[#2F3349] p-3 flex space-x-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-2 rounded-lg hover:bg-[#373B59] transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
          editor.isActive("bold")
            ? "bg-[#373B59] text-indigo-400"
            : "text-[#F8F7FA]/80"
        }`}
      >
        <Bold size={20} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-2 rounded-lg hover:bg-[#373B59] transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
          editor.isActive("italic")
            ? "bg-[#373B59] text-indigo-400"
            : "text-[#F8F7FA]/80"
        }`}
      >
        <Italic size={20} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded-lg hover:bg-[#373B59] transition-colors ${
          editor.isActive("bulletList")
            ? "bg-[#373B59] text-indigo-400"
            : "text-[#F8F7FA]/80"
        }`}
      >
        <List size={20} />
      </button>
      <button
        onClick={toggleLink}
        className={`p-2 rounded-lg hover:bg-[#373B59] transition-colors ${
          editor.isActive("link")
            ? "bg-[#373B59] text-indigo-400"
            : "text-[#F8F7FA]/80"
        }`}
      >
        <LinkIcon size={20} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`p-2 rounded-lg hover:bg-[#373B59] transition-colors ${
          editor.isActive("highlight")
            ? "bg-[#373B59] text-indigo-400"
            : "text-[#F8F7FA]/80"
        }`}
      >
        <HighlighterIcon size={20} />
      </button>
    </div>
  );
};

export default Toolbar;
