export interface TreeType {
  id: number;
  name: string;
  nodes?: TreeType[];
}

const exampleTree: TreeType[] = [{
  id: 1,
  name: "Root",
  nodes: [
    {
      id: 12,
      name: "Applications",
      nodes: [
        { id: 121, name: "Browser" },
        { id: 122, name: "Terminal" },
        { id: 123, name: "Notepad" },
      ],
    },
    {
      id: 13,
      name: "Sound",
      nodes: [
        { id: 131, name: "USB Cards" },
        { id: 132, name: "" },
        { id: 133, name: "" },
      ],
    },
    { id: 14, name: "Settings" },
    {
      id: 15,
      name: "Periferals",
      nodes: [
        {
          id: 154,
          name: "Keyboards",
          nodes: [
            { id: 1541, name: "Internal" },
            { id: 1542, name: "Keychron K8" },
            { id: 1543, name: "Remote KVM Virtual Keyboard" },
          ],
        },
      ],
    },
  ],
}];

export default exampleTree;
