/**
 * Disabling no-var-requires here as this is a node file.
 * There is probably a better way to do this that we should
 * look into at some point.
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const concurrently = require("concurrently");

concurrently(
  [
    { command: "npm:start:gatsby", name: "Gatsby", prefixColor: "#8A4BAF" },
    {
      command: "npm:start:storybook",
      name: "Storybook",
      prefixColor: "#FE4784",
    },
    {
      command: "npm:start:codegen",
      name: "Codegen",
      prefixColor: "#ffba00",
    },
  ],
  {
    killOthers: ["failure", "success"],
  }
);
