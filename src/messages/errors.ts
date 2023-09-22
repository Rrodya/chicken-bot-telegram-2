export const ERROR_MESSAGES = {
  default_error: "Произошла ошибка какая-то, хз"
}

export const ERROR_CONTROLLER_MESSAGE = {
  createChatError: "Error with createing chat",
  createUserError: "Error with creating user",
}

export function logError(dictErrorMessage: string, errorMessage = "error") {
  console.log(dictErrorMessage + ": " + errorMessage);
}