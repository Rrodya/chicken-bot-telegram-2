interface IConfig {
  COMMAND_INTERVAL: number;
  SPECIAL_INCREASE: number;
  SPECIAL_CHANCE: number;
}

const config: IConfig  = {
  COMMAND_INTERVAL: 1000,
  SPECIAL_INCREASE: 10000,
  SPECIAL_CHANCE: 0.0005,
}

export default config;