export default function (_variables: Record<string, string>): string {
  const DEFAULT_PROFILE_IMAGE = "https://placehold.co/150x150?text=+";

  const socials: Array<[string, string, string]> = [];

  if (_variables.twitterHandle) {
    socials.push(["twitter", _variables.twitterHandle, `Twitter @${_variables.twitterHandle}`]);
  }

  if (_variables.linkedinHandle) {
    socials.push(["linkedin", _variables.linkedinHandle, "LinkedIn"]);
  }

  if (_variables.youtubeHandle) {
    socials.push(["youtube", _variables.youtubeHandle, `Youtube @${_variables.youtubeHandle}`]);
  }

  if (_variables.githubHandle) {
    socials.push(["github", _variables.githubHandle, `Github @${_variables.githubHandle}`]);
  }

  if (_variables.email) {
    socials.push(["email", _variables.email, "Email me"]);
  }

  const multiline = new Set(["twitter", "youtube"]);
  const buttons = socials
    .map(([type, handle, label]) =>
      multiline.has(type)
        ? `    <SocialButton type="${type}" handle="${handle}"\n      >${label}</SocialButton\n    >`
        : `    <SocialButton type="${type}" handle="${handle}">${label}</SocialButton>`,
    )
    .join("\n\n");

  const imageProp = `\n    image={{ src: "${_variables.profileImage || DEFAULT_PROFILE_IMAGE}", alt: "Profile Picture" }}`

  return `---
import Layout from "@/layouts/main.astro"
import Heading from "@/components/typography/heading.astro"
import SocialButton from "@/components/buttons/social-button.astro"
---

<Layout>
  <Heading
    title="${_variables.name}"${imageProp}
  />
${buttons ? `\n  <div class="flex flex-col gap-4">\n${buttons}\n  </div>\n` : ""}</Layout>
`;
}