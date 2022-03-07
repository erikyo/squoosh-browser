import { PreprocessorState, ProcessorState, EncoderState } from "../../src/client/lazy-app/feature-meta";
import Compress from "../../src/client/lazy-app/Compress";
import "./style.scss";

interface Setting {
  preprocessorState: PreprocessorState;
  processorState: ProcessorState;
  encoderState: EncoderState;
}

interface ImageData {
  imageSrc: string | ArrayBuffer;
  name: string;
}

const options: Setting = {
  encoderState: {
    type: "avif",
    options: {
      cqLevel: 33,
      cqAlphaLevel: -1,
      denoiseLevel: 0,
      tileColsLog2: 0,
      tileRowsLog2: 0,
      speed: 6,
      subsample: 1,
      chromaDeltaQ: false,
      sharpness: 0,
      tune: 1
    }
  },
  preprocessorState: {
    rotate: {
      rotate: 0
    }
  },
  processorState: {
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
  }
}


// Create Squoosh Browser object into window
const squooshBrowser = {

  encodeLog(filesize, data = undefined) {
    console.log('Squoosh Browser');
    console.log(new Date() + `Filename: ${filesize.size}  (size ${filesize.size})`);
    if (data) console.log('data', data);
  },


  // Encode to Avif
  async encoder(image: File, args: Setting = options) {

    this.encodeLog(image, args);

    const compress = new Compress(image, args);

    const compressFile : File = await compress.process();

    this.encodeLog(compressFile);

    return compressFile;
  },


  // utility to download base64 data
  downloadBase64Data(fileName, base64Data) {
    const downloadLink = document.createElement("a");
    downloadLink.href = base64Data;
    downloadLink.download = fileName;
  },


  setImage(src, target) {
    const img = new Image()
    img.src = src
    document.getElementById(target).appendChild(img)  // reader.result为获取结果
  },


  async changeCallback(uploadedFile: Event) {

    const images = uploadedFile.target as HTMLInputElement;

    // return if something went wrong
    if (!images.files?.length) {
      return;
    }

     [...images.files].forEach((image) => {
       squooshBrowser.readImage(image)
         .then((res) => {

           // load the original image
           squooshBrowser.loadOriginal(image);

           // process and show the encoded image
           squooshBrowser.setImage(res.imageSrc, "encoded")
           console.log(res);

         })
    })
  },

  async loadOriginal(image: Blob) {
    var originalFile = new FileReader();
    originalFile.onload = function (e) {
      squooshBrowser.setImage(e.target.result , "original")
    }
    originalFile.readAsDataURL(image);
  },

  async readImage(image: any, args: Setting = undefined) :  Promise<ImageData> {
    const respSquoosh = await squooshBrowser.encoder(image, args);
    const reader = new FileReader()
    await reader.readAsDataURL(respSquoosh)

    return new Promise<ImageData>(function (resolve) {
      reader.onload = () => {
        resolve({
          imageSrc: reader.result,
          name: respSquoosh.name
        })
      }
    });
  }
};

// input type onChange trigger conversion
const fileinput : HTMLElement = document.getElementById('file')

fileinput.addEventListener('change',(input:Event) => {
  const encodedImage = squooshBrowser.changeCallback(input)
  console.log(encodedImage)
  }
)

export default squooshBrowser;