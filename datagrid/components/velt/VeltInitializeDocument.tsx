// [Velt] This component initializes the Velt document with a unique identifier and metadata for collaboration.
import { useSetDocument } from "@veltdev/react";

export default function VeltInitializeDocument() {
  useSetDocument("Calories-datagrid-org", {
    documentName: "Calories-datagrid-org",
  });
  return null;
}
