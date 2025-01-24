import EmojiStyle, { ITheme } from "../interfaces/ITheme"; 

const BORDER_COLOR = "gray-300";
const ACTIVE_COLOR = "gray-200";


export const FacebookTheme: Partial<ITheme> = {
  senderClass: `flex flex-row-reverse bg-blue-500 text-white  
    justify-self-end mr-6 mb-6 px-6 py-2 rounded rounded-xl`,
  receiverClass: `flex flex-row bg-gray-200 text-gray-800  
    justify-self-start ml-6 mb-6 mr-6 mb-6 px-6 py-2 rounded rounded-xl`,
  datetimeClass: "text-xs text-gray-500 text-center",

  chatInputClasses: `mt-1 block w-full px-4 py-2 pt-4 border-0 border-t border-t-${BORDER_COLOR}
  hover:border-t-${BORDER_COLOR} focus:outline-none focus:ring-0`,
  
  emojiStyle: EmojiStyle.FACEBOOK,

  contacts: {
    asideClass: `h-screen border-r border-${BORDER_COLOR}`,
    containerClass: "flex content-center h-[80px] overflow-none cursor-pointer",
    datetimeClass: "absolute top-2 right-2 text-xs text-gray-500 text-center",
    avatarSize: 16,
    nameClass: "text-md font-semibold",
    lastmessageClass: "text-sm text-gray-400",
    active: `bg-${ACTIVE_COLOR}`
  }
};