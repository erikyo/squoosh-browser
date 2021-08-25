// This file is autogenerated by lib/feature-plugin.js

import { expose } from 'comlink';
import { timed } from './util';
import avifDecode from './../features/decoders/avif/worker/avifDecode';
import jxlDecode from './../features/decoders/jxl/worker/jxlDecode';
import webpDecode from './../features/decoders/webp/worker/webpDecode';
import wp2Decode from './../features/decoders/wp2/worker/wp2Decode';
import avifEncode from './../features/encoders/avif/worker/avifEncode';
import jxlEncode from './../features/encoders/jxl/worker/jxlEncode';
import mozjpegEncode from './../features/encoders/mozJPEG/worker/mozjpegEncode';
import oxipngEncode from './../features/encoders/oxiPNG/worker/oxipngEncode';
import webpEncode from './../features/encoders/webP/worker/webpEncode';
import wp2Encode from './../features/encoders/wp2/worker/wp2Encode';
import rotate from './../features/preprocessors/rotate/worker/rotate';
import quantize from './../features/processors/quantize/worker/quantize';
import resize from './../features/processors/resize/worker/resize';
const exports1 = {
  avifDecode(
    ...args: Parameters<typeof avifDecode>
  ): ReturnType<typeof avifDecode> {
    return timed('avifDecode', () => avifDecode(...args));
  },
  jxlDecode(
    ...args: Parameters<typeof jxlDecode>
  ): ReturnType<typeof jxlDecode> {
    return timed('jxlDecode', () => jxlDecode(...args));
  },
  webpDecode(
    ...args: Parameters<typeof webpDecode>
  ): ReturnType<typeof webpDecode> {
    return timed('webpDecode', () => webpDecode(...args));
  },
  wp2Decode(
    ...args: Parameters<typeof wp2Decode>
  ): ReturnType<typeof wp2Decode> {
    return timed('wp2Decode', () => wp2Decode(...args));
  },
  avifEncode(
    ...args: Parameters<typeof avifEncode>
  ): ReturnType<typeof avifEncode> {
    return timed('avifEncode', () => avifEncode(...args));
  },
  jxlEncode(
    ...args: Parameters<typeof jxlEncode>
  ): ReturnType<typeof jxlEncode> {
    return timed('jxlEncode', () => jxlEncode(...args));
  },
  mozjpegEncode(
    ...args: Parameters<typeof mozjpegEncode>
  ): ReturnType<typeof mozjpegEncode> {
    return timed('mozjpegEncode', () => mozjpegEncode(...args));
  },
  oxipngEncode(
    ...args: Parameters<typeof oxipngEncode>
  ): ReturnType<typeof oxipngEncode> {
    return timed('oxipngEncode', () => oxipngEncode(...args));
  },
  webpEncode(
    ...args: Parameters<typeof webpEncode>
  ): ReturnType<typeof webpEncode> {
    return timed('webpEncode', () => webpEncode(...args));
  },
  wp2Encode(
    ...args: Parameters<typeof wp2Encode>
  ): ReturnType<typeof wp2Encode> {
    return timed('wp2Encode', () => wp2Encode(...args));
  },
  rotate(
    ...args: Parameters<typeof rotate>
  ): ReturnType<typeof rotate> {
    return timed('rotate', () => rotate(...args));
  },
  quantize(
    ...args: Parameters<typeof quantize>
  ): ReturnType<typeof quantize> {
    return timed('quantize', () => quantize(...args));
  },
  resize(
    ...args: Parameters<typeof resize>
  ): ReturnType<typeof resize> {
    return timed('resize', () => resize(...args));
  },
};
export type ProcessorWorkerApi = typeof exports;
// 'as any' to work around the way our client code has insight into worker code
expose(exports1, self as any);