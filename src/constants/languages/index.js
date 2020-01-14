import ASM from "../../utils/ASM"

export { default as lang13 } from "./en"
export { default as lang14 } from "./id"
export { default as lang1 } from "./ms"
export { default as lang15 } from "./ms_jawi"

export const changeLang = (lang) => {
  ASM.setData("language", { lang })
}
