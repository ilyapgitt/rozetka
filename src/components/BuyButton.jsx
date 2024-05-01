import { Box, Button, Dialog, Flex, Text } from "@radix-ui/themes"
import cart from '../../public/cart-w.png'

export const BuyButton = () => {
  return (
    <Box>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button color="green" style={{ width: '200px', height: '40px', borderRadius: '10px', cursor: 'pointer' }}><img src={cart} height={25} /> Купити</Button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Buy window</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Buy window
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Buy window
              </Text>
              Buy window
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Buy window
              </Text>
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button color="green" style={{ width: '200px', height: '40px', borderRadius: '10px', cursor: 'pointer' }}><img src={cart} height={25} /> Купити</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Box>
  )
}