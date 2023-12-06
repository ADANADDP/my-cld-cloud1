/*
* https://rentry.org/teralomaniac_clewd
* https://github.com/teralomaniac/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie": "sessionKey=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",
    "CookieArray": [
        "sessionKey=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",
        "sessionKey=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",
        "sessionKey=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",
        "sessionKey=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",
        "sessionKey=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"
    ],
    "Cookiecounter": 3,
    "CookieIndex": 0,
    "ProxyPassword": "08270087",
    "Ip": "127.0.0.1",
    "Port": 8444,
    "localtunnel": false,
    "BufferSize": 1,
    "SystemInterval": 3,
    "rProxy": "https://claude.ai",
    "api_rProxy": "",
    "padtxt_placeholder": "",
    "PromptExperimentFirst": "",
    "PromptExperimentNext": "",
    "PersonalityFormat": "{{char}}'s personality: {{personality}}",
    "ScenarioFormat": "Dialogue scenario: {{scenario}}",
    "Settings": {
        "RenewAlways": true,
        "RetryRegenerate": false,
        "PromptExperiments": true,
        "SystemExperiments": true,
        "PreventImperson": false,
        "AllSamples": false,
        "NoSamples": false,
        "StripAssistant": false,
        "StripHuman": false,
        "PassParams": false,
        "ClearFlags": true,
        "PreserveChats": false,
        "LogMessages": true,
        "FullColon": true,
        "padtxt": 15000,
        "xmlPlot": true,
        "Superfetch": true
    }
}

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