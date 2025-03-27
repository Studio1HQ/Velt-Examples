import {
    VeltComments,
    VeltCursor,
} from '@veltdev/react';
import VeltInitializeDocument from './VeltInitializeDocument';
import VeltInitializeUser from './VeltInitializeUser';
// [VELT] initializes the document.

export default function VeltCollaboration() {
    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
            <VeltCursor />
            <VeltInitializeUser />
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