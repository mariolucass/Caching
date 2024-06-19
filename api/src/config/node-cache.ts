import NodeCache from "node-cache";

export const postCache = new NodeCache({ stdTTL: 3600 });
