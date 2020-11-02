import { Dimensions, PixelRatio } from 'react-native';

export const deviceWidth = Dimensions.get('window').width; //设备的宽度
export const deviceHeight = Dimensions.get('window').height; //设备的高度
let fontScale = PixelRatio.getFontScale(); //返回字体大小缩放比例

let pixelRatio = PixelRatio.get(); //当前设备的像素密度
let screenPxW = PixelRatio.getPixelSizeForLayoutSize(deviceWidth);
// let screenPxH = PixelRatio.getPixelSizeForLayoutSize(deviceHeight);

const defaultPixel = 2; //iphone6的像素密度
//px转换成dp
const w2 = Math.round(750 / defaultPixel);
const h2 = Math.round(1334 / defaultPixel);
const scale = Math.min(deviceHeight / h2, deviceWidth / w2); //获取缩放比例
/**
 * 设置text为sp
 * @param size sp
 * @returns number dp
 */
export function setSpText(size: number) {
    var scaleWidth = deviceWidth / 900;
    var scaleHeight = deviceHeight / 1600;
    var scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round((size * scale) / fontScale + 0.5);
    return size;
}

/**
 *
 * @param size 元素的大小 类型为数值类型
 * @returns number dp
 */
export const scaleSize = function (size: number) {
    if (size == 750) {
        return deviceWidth;
    }
    size = Math.round(size * scale + 0.5) / defaultPixel;
    return size;
};
export function scaleSizeW(size: number) {
    var scaleWidth = (size * screenPxW) / 750;
    size = Math.round(scaleWidth / pixelRatio + 0.5);
    return size;
}