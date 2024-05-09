import { Matrix } from "@/types";

export const transformMatrix = (value: string): Matrix => JSON.parse(value);
