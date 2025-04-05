import { useEffect } from "react";

/**
 * This component removes the comment count bubble from the Velt comments.
 * It's a hacky solution to remove the bubble from the comments.
 * It uses a MutationObserver to observe the DOM and remove the bubble when it appears.
 */
const RemoveCommentCountBubble = () => {
  useEffect(() => {
    /**
     * This function removes the comment count container from the DOM.
     * It recursively goes through the DOM tree and removes the container
     * if it matches the specified classes.
     * @param {ParentNode} root The root element to start the search from
     */
    const removeSpecificCommentCountContainer = (
      root: ParentNode = document,
    ) => {
      const treeWalker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_ELEMENT,
      );

      while (treeWalker.nextNode()) {
        const el = treeWalker.currentNode as HTMLElement;

        // Check if the element matches the classes we're looking for
        if (
          el.tagName === "DIV" &&
          el.getAttribute("part") === "count-container" &&
          el.classList.contains("comment-count-container") &&
          el.classList.contains("velt-comment-bubble--count-container") &&
          el.classList.contains("velt-comment-pin--status-default") &&
          el.classList.contains("ng-star-inserted")
        ) {
          el.remove();
          console.log("Removed comment count bubble");
        }

        // Recursively handle shadow roots
        if ((el as any).shadowRoot) {
          removeSpecificCommentCountContainer((el as any).shadowRoot);
        }
      }
    };

    // Initial call to remove the bubble
    removeSpecificCommentCountContainer();

    // Observe DOM changes in case it appears later
    const observer = new MutationObserver(() => {
      removeSpecificCommentCountContainer();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup on unmount
    return () => observer.disconnect();
  }, []);

  return null; // This component doesn't render anything
};

export default RemoveCommentCountBubble;
