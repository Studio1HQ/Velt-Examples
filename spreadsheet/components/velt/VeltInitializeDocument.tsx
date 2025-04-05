// [Velt] This component initializes the Velt document with a unique identifier and metadata for collaboration.
import { useSetDocument } from "@veltdev/react";

// [VELT] Initialize the document with a unique identifier and metadata.

export default function VeltInitializeDocument() {
  useSetDocument("space-missions-spreadsheet-org", {
    documentName: "space-missions-spreadsheet-org",
  });
  return null;
}
