import type { CodegenConfig } from "@graphql-codegen/cli";
import { printSchema } from "graphql";
import { schema } from "./src/schema";

const config: CodegenConfig = {
  overwrite: true,
  schema: printSchema(schema),
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
