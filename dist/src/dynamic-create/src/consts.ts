export default function (_variables: Record<string, string>): string {
  return `export const SITE_TITLE = \`${_variables.name.replace("`", "\\`")}\`;
export const SITE_DESCRIPTION = \`${_variables.siteDescription.replace("`", "\\`")}\`;
`;
}