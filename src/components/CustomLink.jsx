import { Link } from "@radix-ui/themes"

export const CustomLink = ({ text, link }) => {
  return (
    <Link href={link} className="hover:text-red-500">{text}</Link>
  )
}