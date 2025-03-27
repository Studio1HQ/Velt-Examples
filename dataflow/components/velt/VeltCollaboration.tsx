import {
    VeltComments,
    VeltCursor
} from '@veltdev/react';
// [VELT] Installs Velt's root feature components with config, authenticates the user, initializes the document.

export default function VeltCollaboration() {
    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
            <VeltCursor />
            <VeltComments
                popoverMode={true}
                recordings="audio"
                ghostCommentsIndicator={true}
                deleteOnBackspace={true}
                commentPinHighlighter={true}
                dialogOnHover={true}
                popoverTriangleComponent={true}
                textMode={true}
                enterKeyToSubmit={true}
                shadowDom={false}
                resolveButton={true}
            />
        </div>
    );
}