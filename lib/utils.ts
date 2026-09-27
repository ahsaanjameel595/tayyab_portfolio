export function formatSlug(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}