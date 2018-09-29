/**
 * 过滤器, 尽量避免全局过滤器
 * 也可以作为方法调用
 */
import timeago from "timeago.js";

const timeagoInstance = timeago();

export const timeStamp = date => {
  if (date) {
    return timeagoInstance.format(date, "zh_CN");
  }
};
