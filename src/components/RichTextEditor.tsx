// src/components/RichTextEditor.tsx
import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type RichTextEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function RichTextEditor({
  value,
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc list-inside ml-4", // ✅ show bullets
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal list-inside ml-4",
          },
        },
      }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  // When the `value` prop changes (e.g. when you load the article from the server),
  // make sure the editor content is updated too.
  useEffect(() => {
    if (!editor) return;

    const current = editor.getHTML();
    if (value && value !== current) {
      editor.commands.setContent(value, { emitUpdate: false });
    }
  }, [value, editor]);

  if (!editor) return null;

  return (
    <div className="border rounded-md p-2 bg-white">
      {/* simple toolbar */}
      <div className="flex gap-2 mb-2 border-b pb-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 text-sm rounded ${
            editor.isActive("bold") ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          B
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 text-sm rounded ${
            editor.isActive("italic") ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          I
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 text-sm rounded ${
            editor.isActive("bulletList") ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          • List
        </button>
      </div>

      {/* the editor area */}
      <EditorContent
        editor={editor}
        className="max-w-none min-h-[150px] px-2 py-1 focus:outline-none"
      />
    </div>
  );
}
