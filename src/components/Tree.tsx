import { TreeType } from "../data/exampleTree";

export default function ({ tree }: { tree: TreeType }) {
  return (
    <pre>
      <code>JSON.stringify(tree, null, '\t')</code>
    </pre>
  );
}
