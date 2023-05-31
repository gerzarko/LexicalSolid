import { A } from "solid-start";
import Counter from "~/components/Counter";
import { Editor2 } from "./Editor2";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <div>
        <h1>Hola</h1>
        <Editor2 />
      </div>
    </main>
  );
}
