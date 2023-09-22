import { ERROR_CONTROLLER_MESSAGE, logError } from "../messages/errors";
import pool from "../Services/db";

class ChatController {
  async create(chatId: number)  {
    try {
      const chatQuery = "SELECT * FROM chats WHERE telegram_id = $1";
      const chatResult = await pool.query(chatQuery, [chatId]);

      if (chatResult.rows.length === 0) {
        const insertChatQuery = "INSERT INTO chats (telegram_id) VALUES ($1) RETURNING *";

        const insertResult = await pool.query(insertChatQuery, [chatId]);

        return insertResult.rows[0]
      }

      return chatResult.rows[0];
    } catch (error: any) {
      logError(ERROR_CONTROLLER_MESSAGE.createChatError, error.message);
    }
  }
}

export default new ChatController();