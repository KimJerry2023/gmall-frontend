import axios from "axios";
import type { AxiosRequestConfig } from "axios";
import { redirect } from "next/navigation";
// import { Storage } from "@/utils/storage";
// import { cookies } from 'next/headers'

const baseUrl = 'http://127.0.0.1:4000/api/v1'

export interface RequestOptions {
  /** 当前接口权限, 不需要鉴权的接口请忽略， 格式：sys:user:add */
  permCode?: string;
  /** 是否直接获取data，而忽略message等 */
  isGetDataDirectly?: boolean;
  /** 请求成功是提示信息 */
  successMsg?: string;
  /** 请求失败是提示信息 */
  errorMsg?: string;
  /** 是否mock数据请求 */
  isMock?: boolean;
}

const UNKNOWN_ERROR = "未知错误，请重试";

export const service = axios.create({
  timeout: 6000,
  withCredentials: true, 
});

service.interceptors.request.use(
  (config) => {
    // const sessionId = cookies().get('SESSIONID')?.value;
    // if (sessionId) {
    //   // 请求token信息，请根据实际情况进行修改
    //   config.headers["Authorization"] = sessionId;
    // }
    console.log('请求拦截')
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // if the custom code is not 200, it is judged as an error
    if (res.code !== 200) {
      console.log('error: 响应拦截')
      console.error(res.message || UNKNOWN_ERROR);
      // Illegal token
      if (res.code === 11001 || res.code === 11002) {
        // window.localStorage.clear();
        // window.location.reload();
        console.error({
          title: '账号异常',
          message: '您可以取消停留在该页上，或重新登录'
        })
        redirect('/login')
        // Modal.confirm({
        //   title: "警告",
        //   content:
        //     res.message || "账号异常，您可以取消停留在该页上，或重新登录",
        //   okText: "重新登录",
        //   cancelText: "取消",
        //   onOk: () => {
        //     localStorage.clear();
        //     window.location.reload();
        //   },
        // });

      }
      // const error = new Error(res.message || UNKNOWN_ERROR) as Error & {
      //   code: any;
      // };
      // error.code = res.code;
      return Promise.resolve(response);
    } else {
      return res;
    }
  },
  (error) => {
    // 处理422 或者 500 的错误异常提示
    console.log('响应拦截')
    const errMsg = error?.response?.data?.message ?? UNKNOWN_ERROR;
    console.error(errMsg);
    error.message = errMsg;
    return Promise.reject(error);
  }
);

export type Response<T = any> = {
  code: number;
  message: string;
  data: T;
};

export type BaseRepsonse<T = any> = Promise<Response<T>>;

/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */
export const http = async <T = any>(
    config: AxiosRequestConfig,
    options: RequestOptions = {},
): Promise<T> => {
    try {
        console.log('请求发出：')
        const { successMsg, errorMsg, permCode, isMock, isGetDataDirectly = true } = options;
        // 如果当前是需要鉴权的接口 并且没有权限的话 则终止请求发起
        // debugger
        // if (permCode) {
        //   console.error('你没有访问该接口的权限，请联系管理员')
        //   return Promise.reject()
        // }
        config.url = `${baseUrl}${config.url}`
        const res = await service.request(config)
        successMsg && console.info(successMsg)
        errorMsg && console.error(errorMsg)
        return isGetDataDirectly ? res.data : res;
    } catch (error: any) {
        return Promise.resolve(error)
    }
}

