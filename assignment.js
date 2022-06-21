var fs        = require('fs')
var XmlStream = require('xml-stream') ;
var stream=fs.createReadStream('15323425.xml');
var xml = new XmlStream(stream);

var a = [];

xml.collect('subitem');
xml.on('endElement: uspat:PatentData', function(item) {
  // console.log(item);
  var txt = item['uspat:PatentCaseMetadata']['uscom:ApplicationNumberText']['$text'];
  a.push(txt);
})

xml.on('end', function () {
  console.log(a);
});
