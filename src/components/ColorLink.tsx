import { Link, Box } from "@radix-ui/themes"
import React from "react"

// eslint-disable-next-line react/prop-types
export const ColorLink = ({ color }: { color: string}) => {
  return (
    <Link href=''>
      <Box
        as='span'
        style={{ border: '2.2px solid gray', borderRadius: '7px' }}
        className={`inline-block w-6 h-6 rounded-md mr-2 ${color}`}
      ></Box>
    </Link>
  )
}