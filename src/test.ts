import { Scraper } from "./Scraper";
import { IRelatedVideo } from "./types/IRelatedVideo";
import fetch from "node-fetch";
import fs from "fs";

// const scraper: Scraper = new Scraper();
// async function a(identifier: string) {
//   const result: IRelatedVideo[] | null = await scraper.scrape(identifier);
//   if (!result) return console.log(`Scrape result not found.`);
//   // console.log(`Scraped ${result.length} videos`);
//   const track = result[0];
//   console.log(`${track.videoId} ${track.title} (${track.duration} Seconds)`);
//   a(track.videoId);
// }

// // a("06YWg6Y1kxo");

const body = {
  context: {
    client: {
      // hl: "ko",
      // gl: "KR",
      // remoteHost: "121.147.148.13",
      // deviceMake: "",
      // deviceModel: "",
      // visitorData: "Cgt5d1kwV0VlRWhVdyjJkbaRBg%3D%3D",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36,gzip(gfe)",
      clientName: "WEB",
      clientVersion: "2.20220311.01.00",
      // osName: "Windows",
      // osVersion: "10.0",
      // originalUrl: "https://www.youtube.com/watch?v=dcOwj-QE_ZE",
      platform: "DESKTOP",
      // clientFormFactor: "UNKNOWN_FORM_FACTOR",
      // configInfo: {
      //   appInstallData:
      //     "CMmRtpEGEPX4rQUQt8utBRDC8q0FEP73rQUQmOqtBRDrhK4FEK_W_RIQkfj8EhDYvq0F",
      // },
      // userInterfaceTheme: "USER_INTERFACE_THEME_DARK",
      // timeZone: "Asia/Tokyo",
      // browserName: "Chrome",
      // browserVersion: "99.0.4844.51",
      // screenWidthPoints: 1101,
      // screenHeightPoints: 929,
      // screenPixelDensity: 1,
      // screenDensityFloat: 1,
      // utcOffsetMinutes: 540,
      // connectionType: "CONN_CELLULAR_4G",
      // memoryTotalKbytes: "8000000",
      // mainAppWebInfo: {
      //   graftUrl: "https://www.youtube.com/watch?v=ubrovjZUi64",
      //   pwaInstallabilityStatus: "PWA_INSTALLABILITY_STATUS_UNKNOWN",
      //   webDisplayMode: "WEB_DISPLAY_MODE_BROWSER",
      //   isWebNativeShareAvailable: true,
      // },
    },
    user: { lockedSafetyMode: false },
    // request: {
    //   useSsl: true,
    //   consistencyTokenJars: [
    //     {
    //       encryptedTokenJarContents:
    //         "AGDxDePSTt8P9y9bbWJ-aQM1x_4rXLujU3F8FEGBmVa9hl2YpwpSy4VxkXq7pot2J0NRQJtD4x_oQuTLBRKtb6tegQgWaie4u9j2nCkMw_kSy2rpchVd6mk3wkJbSACpPTY0HvdVS1Bj8aAAPxxiEw",
    //       expirationSeconds: "600",
    //     },
    //   ],
    //   internalExperimentFlags: [],
    // },
    clickTracking: {
      clickTrackingParams: "CI4BELsvGAIiEwiKmJr3tML2AhVIIWAKHRmvBf8=",
    },
    // adSignalsInfo: {
    //   params: [
    //     { key: "dt", value: "1647151305729" },
    //     { key: "flash", value: "0" },
    //     { key: "frm", value: "0" },
    //     { key: "u_tz", value: "540" },
    //     { key: "u_his", value: "36" },
    //     { key: "u_h", value: "1080" },
    //     { key: "u_w", value: "1920" },
    //     { key: "u_ah", value: "1032" },
    //     { key: "u_aw", value: "1920" },
    //     { key: "u_cd", value: "24" },
    //     { key: "bc", value: "31" },
    //     { key: "bih", value: "929" },
    //     { key: "biw", value: "1085" },
    //     { key: "brdim", value: "0,0,0,0,1920,0,1920,1032,1101,929" },
    //     { key: "vis", value: "1" },
    //     { key: "wgl", value: "true" },
    //     { key: "ca_type", value: "image" },
    //   ],
    // },
  },
  videoId: "dcOwj-QE_ZE",
  racyCheckOk: false,
  contentCheckOk: false,
  autonavState: "STATE_OFF",
  playbackContext: { vis: 0, lactMilliseconds: "-1" },
  captionsRequested: false,
  // continuation:
  //   // "Eg0SCzA2WVdnNlkxa3hvGAYyJSIRIgswNllXZzZZMWt4bzAAeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D",
  //   "Eg0SC3Vicm92alpVaTY0GAYyJSIRIgt1YnJvdmpaVWk2NDAAeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D",
};

fetch(
  "https://www.youtube.com/youtubei/v1/next?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false",
  {
    headers: {
      accept: "*/*",
      "accept-language": "ko-KR,ko;q=0.9",
      "content-type": "application/json",
      // referrer: "https://www.youtube.com/watch?v=ubrovjZUi64",
      referrerPolicy: "origin-when-cross-origin",
    },
    body: JSON.stringify(body),
    method: "POST",
  }
).then((res) =>
  res
    .json()
    .then((j) => fs.writeFileSync("continuation.json", JSON.stringify(j)))
);

// const a = {
//   context: {
//     client: {
//       hl: "ko",
//       gl: "KR",
//       remoteHost: "121.147.148.13",
//       deviceMake: "",
//       deviceModel: "",
//       visitorData: "Cgt5TFdUNnM0cTZhNCiL0baRBg%3D%3D",
//       userAgent:
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36,gzip(gfe)",
//       clientName: "WEB",
//       clientVersion: "2.20220311.01.00",
//       osName: "Windows",
//       osVersion: "10.0",
//       originalUrl: "https://www.youtube.com/watch?v=1okLHuZUftU",
//       platform: "DESKTOP",
//       clientFormFactor: "UNKNOWN_FORM_FACTOR",
//       configInfo: {
//         appInstallData:
//           "CIvRtpEGELfLrQUQ_vetBRCY6q0FEMPyrQUQ9fitBRDa1_0SENi-rQUQkfj8Eg%3D%3D",
//       },
//       userInterfaceTheme: "USER_INTERFACE_THEME_DARK",
//       timeZone: "Asia/Tokyo",
//       browserName: "Chrome",
//       browserVersion: "99.0.4844.51",
//       screenWidthPoints: 1101,
//       screenHeightPoints: 872,
//       screenPixelDensity: 1,
//       screenDensityFloat: 1,
//       utcOffsetMinutes: 540,
//       memoryTotalKbytes: "8000000",
//       clientScreen: "WATCH",
//       mainAppWebInfo: {
//         graftUrl: "/watch?v=1okLHuZUftU",
//         pwaInstallabilityStatus: "PWA_INSTALLABILITY_STATUS_UNKNOWN",
//         webDisplayMode: "WEB_DISPLAY_MODE_BROWSER",
//         isWebNativeShareAvailable: true,
//       },
//     },
//     user: { lockedSafetyMode: false },
//     request: {
//       useSsl: true,
//       internalExperimentFlags: [],
//       consistencyTokenJars: [],
//     },
//     clickTracking: {
//       clickTrackingParams:
//         "CIYCEKQwGAAiEwiuqLaI08L2AhXDl1YBHZHDDTMyB3JlbGF0ZWRIxPX6rr-siuHPAZoBBQgBEPgd",
//     },
//     adSignalsInfo: {
//       params: [
//         { key: "dt", value: "1647159435936" },
//         { key: "flash", value: "0" },
//         { key: "frm", value: "0" },
//         { key: "u_tz", value: "540" },
//         { key: "u_his", value: "1" },
//         { key: "u_h", value: "1080" },
//         { key: "u_w", value: "1920" },
//         { key: "u_ah", value: "1032" },
//         { key: "u_aw", value: "1920" },
//         { key: "u_cd", value: "24" },
//         { key: "bc", value: "31" },
//         { key: "bih", value: "872" },
//         { key: "biw", value: "1085" },
//         { key: "brdim", value: "0,0,0,0,1920,0,1920,1032,1101,872" },
//         { key: "vis", value: "1" },
//         { key: "wgl", value: "true" },
//         { key: "ca_type", value: "image" },
//       ],
//       bid: "ANyPxKqp-pOy_bpiUge4v54JEiwl9qE6TkusBZdz1zBaBqCESxDA2u7UYBWYrnGFZTcqh7BRjnKnTCgAiRx1KETvD65pgGcOQA",
//     },
//   },
//   videoId: "1okLHuZUftU",
//   racyCheckOk: false,
//   contentCheckOk: false,
//   autonavState: "STATE_OFF",
//   playbackContext: { vis: 0, lactMilliseconds: "-1" },
//   captionsRequested: false,
// };

// fetch(
//   "https://www.youtube.com/youtubei/v1/next?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false",
//   {
//     headers: {
//       accept: "*/*",
//       "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
//       authorization:
//         "SAPISIDHASH 1647159564_ceee1b34dfdc4358d6aa285785fe9abcc001d625",
//       "content-type": "application/json",
//       "sec-ch-ua":
//         '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
//       "sec-ch-ua-arch": '"x86"',
//       "sec-ch-ua-bitness": '"64"',
//       "sec-ch-ua-full-version": '"99.0.4844.51"',
//       "sec-ch-ua-full-version-list":
//         '" Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.51", "Google Chrome";v="99.0.4844.51"',
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-model": "",
//       "sec-ch-ua-platform": '"Windows"',
//       "sec-ch-ua-platform-version": '"15.0.0"',
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "same-origin",
//       "sec-fetch-site": "same-origin",
//       "x-client-data":
//         "CLO1yQEIlrbJAQijtskBCMS2yQEIqZ3KAQiP8coBCOryywEInvnLAQjmhMwBCJuPzAEIiJTMAQjQm8wBCJuczAEYrKnKAQ==",
//       "x-goog-authuser": "0",
//       "x-goog-visitor-id": "Cgt5TFdUNnM0cTZhNCiL0baRBg%3D%3D",
//       "x-origin": "https://www.youtube.com",
//       "x-youtube-client-name": "1",
//       "x-youtube-client-version": "2.20220311.01.00",
//     },
//     referrer: "https://www.youtube.com/watch?v=z8IpY_XeusQ",
//     referrerPolicy: "origin-when-cross-origin",
//     body: '{"context":{"client":{"hl":"ko","gl":"KR","remoteHost":"121.147.148.13","deviceMake":"","deviceModel":"","visitorData":"Cgt5TFdUNnM0cTZhNCiL0baRBg%3D%3D","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36,gzip(gfe)","clientName":"WEB","clientVersion":"2.20220311.01.00","osName":"Windows","osVersion":"10.0","originalUrl":"https://www.youtube.com/watch?v=1okLHuZUftU","platform":"DESKTOP","clientFormFactor":"UNKNOWN_FORM_FACTOR","configInfo":{"appInstallData":"CIvRtpEGELfLrQUQ_vetBRCY6q0FEMPyrQUQ9fitBRDa1_0SENi-rQUQkfj8Eg%3D%3D"},"userInterfaceTheme":"USER_INTERFACE_THEME_DARK","timeZone":"Asia/Tokyo","browserName":"Chrome","browserVersion":"99.0.4844.51","screenWidthPoints":1101,"screenHeightPoints":872,"screenPixelDensity":1,"screenDensityFloat":1,"utcOffsetMinutes":540,"memoryTotalKbytes":"8000000","clientScreen":"WATCH","mainAppWebInfo":{"graftUrl":"/watch?v=1okLHuZUftU","pwaInstallabilityStatus":"PWA_INSTALLABILITY_STATUS_UNKNOWN","webDisplayMode":"WEB_DISPLAY_MODE_BROWSER","isWebNativeShareAvailable":true}},"user":{"lockedSafetyMode":false},"request":{"useSsl":true,"internalExperimentFlags":[],"consistencyTokenJars":[]},"clickTracking":{"clickTrackingParams":"CIYCEKQwGAAiEwiuqLaI08L2AhXDl1YBHZHDDTMyB3JlbGF0ZWRIxPX6rr-siuHPAZoBBQgBEPgd"},"adSignalsInfo":{"params":[{"key":"dt","value":"1647159435936"},{"key":"flash","value":"0"},{"key":"frm","value":"0"},{"key":"u_tz","value":"540"},{"key":"u_his","value":"1"},{"key":"u_h","value":"1080"},{"key":"u_w","value":"1920"},{"key":"u_ah","value":"1032"},{"key":"u_aw","value":"1920"},{"key":"u_cd","value":"24"},{"key":"bc","value":"31"},{"key":"bih","value":"872"},{"key":"biw","value":"1085"},{"key":"brdim","value":"0,0,0,0,1920,0,1920,1032,1101,872"},{"key":"vis","value":"1"},{"key":"wgl","value":"true"},{"key":"ca_type","value":"image"}],"bid":"ANyPxKqp-pOy_bpiUge4v54JEiwl9qE6TkusBZdz1zBaBqCESxDA2u7UYBWYrnGFZTcqh7BRjnKnTCgAiRx1KETvD65pgGcOQA"}},"videoId":"1okLHuZUftU","racyCheckOk":false,"contentCheckOk":false,"autonavState":"STATE_OFF","playbackContext":{"vis":0,"lactMilliseconds":"-1"},"captionsRequested":false}',
//     method: "POST",
//     mode: "cors",
//     credentials: "include",
//   }
// );
