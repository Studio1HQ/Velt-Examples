import { Editor } from "@tiptap/react";

interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  organizationId: string;
  color: string;
  textColor: string;
}
interface GUEST_USER {
  userId: string;
  name: string;
  email: string;
  photoUrl: string;
}
interface VeltClient {
  setDocument: (
    documentId: string,
    documentInfo: { documentName: string }
  ) => void;
}

interface BubbleMenuProps {
  editor: Editor | null;
}

interface InputFieldProps {
  title: string;
  type: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}
interface MenuItemProps {
  icon: JSX.Element;
  label: string;
  count?: number;
}

interface ToolbarProps {
  editor: Editor | null;
}

export type {
  User,
  VeltClient,
  BubbleMenuProps,
  InputFieldProps,
  ToolbarProps,
  MenuItemProps,
  GUEST_USER
}