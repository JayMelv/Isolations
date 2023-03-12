const button = document.getElementById("pdf-button");

button.addEventListener("click", function () {
  const doc = new jspdf.jsPDF();
  const table = document.querySelector(".content-table");
  const html = table.outerHTML;

  doc.html(html, {
    callback: function () {
      // Save the PDF with a file name "table.pdf"
      doc.save("table.pdf");
      console.log("PDF Saved");
    },
  });
});
