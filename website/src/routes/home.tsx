import { createEffect, createResource, createSignal, For, Match, Switch } from "solid-js";
import { Title, useRouteData } from "solid-start";
import { About } from "~/components/Home/About";
import { Experience } from "~/components/Home/Experience";
import { Splash } from "~/components/Home/Splash";
import { getNewHomeData } from "~/sanity/query/home";

export function routeData() {
  const [data] = createResource(async () => {
    return await getNewHomeData();
  });
 
  return { data };
}

export default function Home() {
  const { data } = useRouteData<typeof routeData>();
  createEffect(() => {
    console.log(data());
  });
  return (
    <>
      {
        !(data()) ? 'Loading' : (
          <>
            <Title>{data()!.title}</Title>
            <For each={data()!.sections}>
              {(section) => (
                <Switch>
                  <Match when={section.id === 'splash'}>
                    <section><Splash section={section} /></section>
                  </Match>
                  <Match when={section.id === 'about'}>
                    <section><About /></section>
                  </Match>
                  <Match when={section.id === 'experience'}>
                    <section><Experience /></section>
                  </Match>
                </Switch>
              )}
            </For>
          </>
        )
      }
    </>
  )
}