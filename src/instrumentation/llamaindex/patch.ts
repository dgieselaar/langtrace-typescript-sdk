import { FrameworkSpanAttributes } from "@langtrase/trace-attributes";
import {
  Attributes,
  Span,
  SpanKind,
  SpanStatusCode,
  Tracer,
  context,
  trace,
} from "@opentelemetry/api";
import { SERVICE_PROVIDERS } from "../../constants/instrumentation/common";

export function genericPatch(
  originalMethod: (...args: any[]) => any,
  method: string,
  task: string,
  tracer: Tracer,
  version: string
): (...args: any[]) => any {
  return async function (this: any, ...args: any[]) {
    return context.with(
      trace.setSpan(context.active(), trace.getSpan(context.active()) as Span),
      async () => {
        const span = tracer.startSpan(method, {
          kind: SpanKind.CLIENT,
        });
        const spanAttributes: Partial<FrameworkSpanAttributes> = {
          "langtrace.service.name": SERVICE_PROVIDERS.LLAMAINDEX,
          "langtrace.service.type": "framework",
          "langtrace.service.version": version,
          "langtrace.version": "1.0.0",
          "llamaindex.task.name": task,
        };
        span.setAttributes(spanAttributes as Attributes);

        try {
          const response = await originalMethod.apply(this, args);
          span.setStatus({ code: SpanStatusCode.OK });
          span.end();
          return response;
        } catch (error: any) {
          span.recordException(error);
          span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error.message,
          });
          span.end();
          throw error;
        }
      }
    );
  };
}
