import pool from "../Services/db";
import { logError } from "../messages/errors";
import { getRandomLength } from "../commands/penis/modules/getRandomLength"

class PenisController {
  async updateLength(userId: number, chatId: number) {
    try {
      const userQuery = "SELECT * FROM users WHERE chat_id = (SELECT id FROM chats WHERE telegram_id = $1) AND telegram_id = $2";
      const res = await pool.query(userQuery, [chatId, userId]);
      const user = res.rows[0];

      if (!user ) {
        throw new Error("User not found")
      }

      const currentTime = new Date();
      const timeSinceLastGrow = (currentTime.getTime() - new Date(user.lastgrow).getTime()) ;

      if (timeSinceLastGrow < 10000) {
        return {
          status: "error",
          message: "time limit",
        }
      }

      const lengthChange = getRandomLength(user.length);
      const newLength = Math.max(0, user.length + lengthChange);

      const updateQuery = "UPDATE users SET length = $1 WHERE telegram_id = $2 AND chat_id = (SELECT id FROM chats WHERE telegram_id = $3)";
      await pool.query(updateQuery, [newLength, userId, chatId]);

      return {
        status: "success",
        data: {
          currentLength: newLength,
          change: lengthChange
        }
      }

    } catch (error) {
      logError("Error updating user length")
    }
  }
}

export default new PenisController();