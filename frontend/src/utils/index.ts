import { fullNames } from "@/ts/const";

export function getRandomFullName(): string {
  const randomIndex = Math.floor(Math.random() * fullNames.length)
  return fullNames[randomIndex]
}
