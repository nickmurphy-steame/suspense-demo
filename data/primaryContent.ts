import {
  PRIMARY_CONTENT_DELAY,
  SECONDARY_CONTENT_DELAY,
} from "@/app/constants";

export async function getPrimaryContentCount() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(5);
    }, PRIMARY_CONTENT_DELAY);
  });
  return 5;
}

export async function getSecondaryContentCount() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(5);
    }, SECONDARY_CONTENT_DELAY);
  });
  return 2;
}
