import { Box, Flex, Text } from "@radix-ui/themes"
import { DialogWindow } from "./DialogWindow"

export const Reviews = () => {
  return (
    <Box className="h-[500px]">
      <Flex justify='between'>
        <Text size='7' className="font-medium">Відгуки покупців</Text>
        <DialogWindow />
      </Flex>
      <Box className="mt-5"></Box>
    </Box>

  )
}