// [Velt] This component initializes the Velt document with a unique identifier and metadata for collaboration.
import { useSetDocument } from "@veltdev/react";

/**
 * Initializes the Velt document context with a specific identifier and metadata for collaborative features.
 *
 * This component sets up the Velt document with the ID and name "sales-spreadsheet-org" and does not render any UI.
 *
 * @remark Intended for use as a non-visual configuration component within a React tree.
 */
export default function VeltInitializeDocument() {
  useSetDocument("sales-spreadsheet-org", {
    documentName: "sales-spreadsheet-org",
  });
  return null;
}
