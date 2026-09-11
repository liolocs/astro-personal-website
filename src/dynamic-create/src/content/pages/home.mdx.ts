export default function (_variables: Record<string, string>): string {
  const siteDescription = _variables.siteDescription ?? "";
  const imageProp = _variables.profileImage
    ? ` image={{ src: "${_variables.profileImage}", alt: "Profile Picture" }}`
    : "";
  const twitterButton = _variables.twitterHandle
    ? `\n\n<SocialButton href="https://twitter.com/${_variables.twitterHandle}" icon="twitter">Twitter</SocialButton>`
    : "";

  return `---
title: Home
description: ${siteDescription}
updatedDate: '2026-08-25'
---
import Heading from "@/components/typography/heading.astro"
import SocialButton from "@/components/buttons/social-button.astro"

<Heading title="${_variables.name}"${imageProp} />${twitterButton}`;
}