// [Velt] This component initializes and configures the core Velt collaboration features including cursor tracking and comments.
import { VeltComments, VeltCursor } from "@veltdev/react";
import VeltInitializeDocument from "./VeltInitializeDocument";

// [VELT] initializes the collaboration features.

export default function VeltCollaboration() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
      <VeltCursor />
      <VeltComments
        recordings="audio"
        ghostCommentsIndicator={false}
        deleteOnBackspace={false}
        popoverMode={true}
        commentPinHighlighter={false}
        dialogOnHover={false}
        popoverTriangleComponent={false}
        textMode={false}
        enterKeyToSubmit={true}
        shadowDom={false}
        resolveButton={false}
      />
      <VeltInitializeDocument />
    </div>
  );
}
