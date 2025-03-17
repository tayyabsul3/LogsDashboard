import {
  registerLicense,
  SupplyChain,
} from "@yworks/react-yfiles-supply-chain";

import "@yworks/react-yfiles-supply-chain/dist/index.css";

import yFilesLicense from "../../../license.json";

registerLicense(yFilesLicense);

const data = {
  items: [
    { name: "Copper-Ore", id: 1, parentId: 3 },
    { name: "Copper-Plate", id: 2, parentId: 4 },
    { name: "Resource", id: 3 },
    { name: "Material", id: 4 },
    { name: "Steel", id: 5 },
    { name: "Steel-Plate", id: 6, parentId: 5 },
    { name: "Aluminum", id: 7 },
    { name: "Aluminum-Plate", id: 8, parentId: 7 },
    { name: "Bronze", id: 9 },
    { name: "Bronze-Plate", id: 10, parentId: 9 },
    { name: "Iron", id: 11 },
    { name: "Iron-Plate", id: 12, parentId: 11 },
    { name: "Gold", id: 13 },
    { name: "Gold-Plate", id: 14, parentId: 13 },
  ],
  connections: [{ sourceId: 1, targetId: 2 }],
};

function SpChain() {
  return <SupplyChain data={data}></SupplyChain>;
}

export default SpChain;
