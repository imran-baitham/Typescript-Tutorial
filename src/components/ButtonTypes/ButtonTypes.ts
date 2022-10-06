export {};

// // export enum ButtonSize {
// //   SMALL = "small",
// //   MEDIUM = "medium",
// //   LARGE = "large",
// // }

// export enum Variants {
//   ERROR = "error",
//   PERMIRY = "permiry",
//   SECONDARY = "secondary",
// }

// // export const getStatusColor = (status: Variants, defaultColor = "white") => {
// //   return status === Variants.ERROR
// //     ? "red"
// //     : status === Variants.PERMIRY
// //     ? "yellow"
// //     : status === Variants.SECONDARY
// //     ? "gray"
// //     : defaultColor;
// // };

// /*
//  *  ==========  Button for status  ==========
//  */

// export enum ButtonStatus {
//   SUCCEDED = "Succeeded",
//   FAILDED = "Failed",
//   PANDING = "Pending",
//   SKIPPED = "Skipped",
//   TIMEOUT = "Timeout",
//   CANCELLED = "Cancelled",
// }

// /*
//  *  Text and styles for badge based on execution status
//  */

// export const ButtonTrigger = ButtonStatus.SUCCEDED
//   ? "text-green-500 border-green-500"
//   : ButtonStatus.PANDING
//   ? "text-yellow-400 border-yellow-400"
//   : ButtonStatus.FAILDED
//   ? "text-red-600 border-red-600"
//   : ButtonStatus.SKIPPED
//   ? "text-blue-400 border-blue-400"
//   : ButtonStatus.CANCELLED
//   ? "text-black border-black"
//   : ButtonStatus.TIMEOUT
//   ? "text-red-400 border-red-400"
//   : "";
