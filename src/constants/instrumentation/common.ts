import { TiktokenEncoding } from "tiktoken";

export const TRACE_NAMESPACES = {
  OPENAI: "Langtrace OpenAI SDK",
  LANGCHAIN: "Langtrace Langchain SDK",
  PINECONE: "Langtrace Pinecone SDK",
  LLAMAINDEX: "Langtrace LlamaIndex SDK",
  CHROMA: "Langtrace Chroma SDK",
};

// https://github.com/dqbd/tiktoken/blob/74c147e19584a3a1acea0c8e0da4d39415cd33e0/wasm/src/lib.rs#L328
export const TIKTOKEN_MODEL_MAPPING: Record<string, TiktokenEncoding> = {
  "gpt-4": "cl100k_base",
  "gpt-4-32k": "cl100k_base",
  "gpt-4-0125-preview": "cl100k_base",
  "gpt-4-1106-preview": "cl100k_base",
  "gpt-4-1106-vision-preview": "cl100k_base",
};

export const SERVICE_PROVIDERS = {
  OPENAI: "OpenAI",
  AZURE: "Azure",
  LANGCHAIN: "Langchain",
  PINECONE: "Pinecone",
  LLAMAINDEX: "LlamaIndex",
  CHROMA: "Chroma",
};