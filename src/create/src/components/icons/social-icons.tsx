import { 
  DiscordLogoIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, ThreadsLogoIcon, TwitchLogoIcon, XLogoIcon, YoutubeLogoIcon,
EnvelopeIcon } from "@phosphor-icons/react";

const socialIcons = {
  twitter: XLogoIcon,
  github: GithubLogoIcon,
  linkedin: LinkedinLogoIcon,
  youtube: YoutubeLogoIcon,
  twitch: TwitchLogoIcon,
  instagram: InstagramLogoIcon,
  threads: ThreadsLogoIcon,
  discord: DiscordLogoIcon,
  email: EnvelopeIcon,
}

export type SocialIcons = keyof typeof socialIcons

export const SocialIcon = ({ name, className = "size-12" }: { name: keyof typeof socialIcons, className?: string }) => {
  const ResolvedSocialIcon = socialIcons[name]

  return <ResolvedSocialIcon  className={className} />
}