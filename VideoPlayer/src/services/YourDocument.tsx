// 1) Create a component that will represent your document

//Warning: Make sure this is a child component to VeltProvider
//and not within the same file where VeltProvider is placed.

// 2) Get the Velt client
import { useVeltClient } from "@veltdev/react";
import { useEffect } from "react";
import { VeltClient } from "../types";


export default function YourDocument() {
  const { client } = useVeltClient()

  useEffect(() => {
    if (client) {
      // 4) Set a document ID with the Velt client
      const documentId = "video-player-example";
      const documentInfo = {
        documentName: "Big Buck Bunny Video",
      };

      // Assuming `client` is typed correctly as per the VeltClient interface
      (client as VeltClient).setDocument(documentId, documentInfo);
    }
  }, [client]);

  return null;
}
