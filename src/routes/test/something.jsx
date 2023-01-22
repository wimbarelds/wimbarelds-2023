import { createResource } from "solid-js";
import { Title, useRouteData } from "solid-start";
import { getPageData } from "~/sanity/query/page";
export function routeData() {
    const [page] = createResource(async () => {
        return await getPageData();
    });
    return { page };
}
export default function Test() {
    const { page } = useRouteData();
    console.log(page.loading, page.state, page.error, page.latest);
    return (<main>
      <Title>Test something {page()?.title}</Title>
      Moo
    </main>);
}
