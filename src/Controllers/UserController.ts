import { ERROR_CONTROLLER_MESSAGE, logError } from "../messages/errors";
import pool from "../Services/db";

class UserController {
  async create(telegramId: number, login: string, chatId: number) {
    try {
      const userQuery = "SELECT * FROM users WHERE telegram_id = $1";
      const userResult = await pool.query(userQuery, [telegramId]);
      const user = userResult.rows[0];

      const chatIdQuery = "SELECT id FROM chats WHERE telegram_id = $1";
      const chatResult = await pool.query(chatIdQuery, [chatId]);
      const chat = chatResult.rows[0];

      
      if (!chat) {
        throw new Error("Chat with the given telegram_id not found!")
      }

      if (!user) {      
        const insertUserQuery = "INSERT INTO users (telegram_id, login, length, chat_id) VALUES ($1, $2, $3, $4) RETURNING *";
        const defaultLength = 0;

        const insertResult = await pool.query(insertUserQuery, [telegramId, login, defaultLength, chat.id]);
        return insertResult.rows[0];
      }

      return userResult.rows[0];
    } catch (error: any) {
      logError(ERROR_CONTROLLER_MESSAGE.createUserError, error.message);
    }
  }
}

export default new UserController();