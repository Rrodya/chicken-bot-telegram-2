export interface IMiddlewareUser {
  timestamp: number;
  messageCount: number;
  timeLimit: number;
  consecutiveCommands: number;
  blockedUntill: number;
}