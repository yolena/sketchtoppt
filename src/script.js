

export default function(context) {

  // import pptxgen function here 
  var pptx = require("pptxgenjs");
   
  var doc = context.document
  var artboard = doc.currentPage().currentArtboard() || doc.currentPage()

  var artboardname = artboard.name()
  context.document.showMessage("It's alive 🙌")
  artboardname = artboardname.replace(/['|'|/|#|.|\\|"|"]/g,'')
  var filename = NSTemporaryDirectory() + artboardname + ".png"
  /* var htmlContent = NSString.stringWithString_(
    "<html><head><title>PptxGenJS Examples/Demo Page</title><meta http-equiv='X-UA-Compatible' content='IE=edge;chrome=1'><script src='https://cdn.rawgit.com/gitbrent/PptxGenJS/v2.2.0/examples/images/base64Images.js'></script><script src='https://cdn.rawgit.com/gitbrent/PptxGenJS/v2.2.0/dist/pptxgen.colors.js'></script><script src='https://cdn.rawgit.com/gitbrent/PptxGenJS/v2.2.0/dist/pptxgen.bundle.js'></script><script src='https://cdn.rawgit.com/gitbrent/PptxGenJS/v2.2.0/examples/pptxgenjs-demo.js'></script><script src='https://cdn.rawgit.com/gitbrent/PptxGenJS/v2.2.0/dist/pptxgen.shapes.js'></script></head><body><script>"+function doTestSimpleImage() {
      // var pptx = new PptxGenJS();
      var slide = pptx.addNewSlide();
      // EX: Image by local URL
      slide.addImage({ path: "./assets/image.png", x:1, y:1, w:4.0, h:4.0 });
      pptx.save('Demo-Images');
  }+"</script><input type='button' value='Basic Slide Demo' onclick='doTestSimpleImage()'></body></html>"
  );*/
  var filepath = NSTemporaryDirectory() + artboardname + ".html";
  htmlContent.dataUsingEncoding_(NSUTF8StringEncoding).writeToFile_atomically_(filepath, true);
  var file = NSURL.fileURLWithPath(filepath)
  NSWorkspace.sharedWorkspace().openFile(file.path())

  var slide = pptx.addNewSlide();
  // EX: Image by local URL
  slide.addImage({ path: "./assets/image.png", x:1, y:1, w:4.0, h:4.0 });
  pptx.save('Demo-Images');

}; 


