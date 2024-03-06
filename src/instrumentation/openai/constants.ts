
import { OpenAIMethods } from "@langtrase/trace-attributes";
import { TiktokenEncoding } from "tiktoken";

export const OPENAI_COST_TABLE: Record<string, any> = {
  "gpt-4-0125-preview": {
    input: 0.01,
    output: 0.03,
  },
  "gpt-4-1106-preview": {
    input: 0.01,
    output: 0.03,
  },
  "gpt-4-1106-vision-preview": {
    input: 0.01,
    output: 0.03,
  },
  "gpt-4": {
    input: 0.03,
    output: 0.06,
  },
  "gpt-4-32k": {
    input: 0.06,
    output: 0.12,
  },
  "gpt-3.5-turbo-0125": {
    input: 0.0005,
    output: 0.0015,
  },
  "gpt-3.5-turbo-instruct": {
    input: 0.0015,
    output: 0.002,
  },
};

export const APIS = {
  CHAT_COMPLETION: {
    METHOD: OpenAIMethods.CHAT_COMPLETION,
    ENDPOINT: "/chat/completions",
  },
  IMAGES_GENERATION: {
    METHOD: OpenAIMethods.IMAGES_GENERATION,
    ENDPOINT: "/images/generations",
  },
  EMBEDDINGS_CREATE: {
    METHOD: OpenAIMethods.EMBEDDINGS_CREATE,
    ENDPOINT: "/embeddings",
  },
}
export const TIKTOKEN_MODEL_MAPPING: Record<string, TiktokenEncoding> = {
  "gpt-4": "cl100k_base",
  "gpt-4-32k": "cl100k_base",
  "gpt-4-0125-preview": "cl100k_base",
  "gpt-4-1106-preview": "cl100k_base",
  "gpt-4-1106-vision-preview": "cl100k_base",
};
