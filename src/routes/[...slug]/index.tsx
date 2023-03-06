import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import {
  getContent,
  RenderContent,
  getBuilderSearchParams,
} from "@builder.io/sdk-qwik";

export const BUILDER_PUBLIC_API_KEY = "16dbabb6550a4336ae2393377075086b";
export const BUILDER_MODEL = "page";

export const RotatingText = component$((props: { text: string }) => {
  return (
    <div class="rotating-text-container">
      <p class="rotating-text">{props.text}</p>
    </div>
  );
});

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: RotatingText,
    name: "RotatingText",
    inputs: [
      {
        name: "text",
        type: "string",
        defaultValue: "Customer Solutions Engineer",
      },
    ],
  },
];

export default component$(() => {
  const location = useLocation();
  const builderContentRsrc = useResource$<any>(() => {
    return getContent({
      model: BUILDER_MODEL,
      apiKey: BUILDER_PUBLIC_API_KEY,
      options: getBuilderSearchParams(location.query),
      userAttributes: {
        urlPath: location.pathname || "/",
      },
    });
  });

  return (
    <Resource
      value={builderContentRsrc}
      onPending={() => <div>Loading...</div>}
      onResolved={(content) => (
        <RenderContent
          model={BUILDER_MODEL}
          content={content}
          apiKey={BUILDER_PUBLIC_API_KEY}
          customComponents={CUSTOM_COMPONENTS}
        />
      )}
    />
  );
});
