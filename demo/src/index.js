import Compress from '@yireen/squoosh-browser'
import Setting from '@yireen/squoosh-browser'

// Create Squoosh Browser object into window
window.squooshBrowser = {};

// Encode to Avif
squooshBrowser.encoder = async function (image) {
  console.log('start');
  console.log('time', new Date());
  console.log( Setting );
  console.log('size', image.size);
  const avifOptions = {
    cqLevel: 33,
    cqAlphaLevel: -1,
    denoiseLevel: 0,
    tileColsLog2: 0,
    tileRowsLog2: 0,
    speed: 6,
    subsample: 1,
    chromaDeltaQ: false,
    sharpness: 0,
    tune: 1,
  };
  const options = { type: "avif", options: avifOptions };
  const defaultPreprocessorState = { rotate: { rotate: 0 } };
  const defaultProcessorState = {
    quantize: { enabled: false, ...{
      zx: 0,
      maxNumColors: 256,
      dither: 1.0,
    } },
    resize: { enabled: false, ...{
      // Width and height will always default to the image size.
      // This is set elsewhere.
      width: 1,
      height: 1,
      // This will be set to 'vector' if the input is SVG.
      method: 'lanczos3',
      fitMethod: 'stretch',
      premultiply: true,
      linearRGB: true,
    } },
  };
  const compress = new Compress(image, {
    encoderState: options,
    processorState: defaultProcessorState,
    preprocessorState: defaultPreprocessorState
  } );
  console.log( compress.setting.encoderState );
  //compress.setting.encoderState.type = 'avif';
  const compressFile = await compress.process();
  console.log('end');
  console.log('time', new Date());
  console.log('size', compressFile.size);
  return compressFile;
}

// utility to download base64 data
squooshBrowser.downloadBase64Data = function (base64Data, fileName) {
  const downloadLink = document.createElement("a");
  downloadLink.href = base64Data;
  downloadLink.download = fileName;
  downloadLink.click();
  downloadLink.remove();
}

// input type onChange trigger conversion
const file = document.getElementById('file');
file.onchange = async (event) => {
  const image = event.target.files[0];
  const respImage = await squooshBrowser.encoder(image);

  const reader = new FileReader()
  reader.onload = () => {
    const img = new Image()
    img.src = reader.result
    img.style = 'width:30%;'
    document.body.appendChild(img)  // reader.result为获取结果

    squooshBrowser.downloadBase64Data(reader.result, respImage.name)
  }

  await reader.readAsDataURL(respImage)
}
