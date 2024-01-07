/*
 * https://rentry.org/teralomaniac_clewd
 * https://github.com/teralomaniac/clewd
 */

// SET YOUR COOKIE BELOW

module.exports = {
  Cookie:
  CookieArray: ["sessionKey=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","sessionKey=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","sessionKey=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","sessionKey=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","sessionKey=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","sessionKey=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","sessionKey=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","sessionKey=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"],
  Cookiecounter: 3,
  CookieIndex: 0,
  ProxyPassword: "20010827",
  Ip: "127.0.0.1",
  Port: 8444,
  localtunnel: false,
  BufferSize: 1,
  SystemInterval: 3,
  rProxy: "https://claude.ai",
  api_rProxy: "",
  padtxt_placeholder: "",
  PromptExperimentFirst: "",
  PromptExperimentNext: "",
  PersonalityFormat: "{{char}}'s personality: {{personality}}",
  ScenarioFormat: "Dialogue scenario: {{scenario}}",
  Settings: {
    RenewAlways: true,
    RetryRegenerate: false,
    PromptExperiments: true,
    SystemExperiments: true,
    PreventImperson: false,
    AllSamples: false,
    NoSamples: false,
    StripAssistant: false,
    StripHuman: false,
    PassParams: false,
    ClearFlags: true,
    PreserveChats: false,
    LogMessages: true,
    FullColon: true,
    padtxt: 15000,
    xmlPlot: true,
    Superfetch: true,
  },
};

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */
