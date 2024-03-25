// File: custom.d.ts
declare module "*.svg" {
  export { default as linkedin } from "./assets/linkedin.svg";
  export { default as github } from "./assets/github.svg";
  export { default as whatsapp } from "./assets/whatsapp.svg";
  export { default as port } from "./assets/port.svg";
}

declare module "*.jfif" {
  const value: any;
  export default value;
}
