import { atom } from "recoil";
import { Timestamp } from "@firebase/firestore";

export interface Community {
  id: string;
  createId: string;
  numberOfMembers: number;
  privacyType: "public" | "restricted" | "private";
  createdAt?: Timestamp;
  imageUrl?: string;
}
