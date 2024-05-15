import React from "react";

const Preview = ({ template }) => {
  const file_url =
    "https://docs.google.com/document/d/184dAeYo0mqq30UwO66yh3NiS5RZIwdcAjqBcAZPwreA/preview";

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        width="100%"
        height="740"
        frameBorder="0"
        src={file_url}
        title="Document Preview"
      ></iframe>
    </div>
  );
};

export default Preview;
