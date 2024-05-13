import React from "react";
import { Document, Page } from "docx";

const Preview = ({ template }) => {
  return (
    <div>
      <h2>Preview</h2>
      <Document>
        <Page size="A4">
          {/* Render the template content */}
          {template}
        </Page>
      </Document>
    </div>
  );
};

export default Preview;
