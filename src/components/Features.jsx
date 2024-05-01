import { Box, Flex, Table, Text } from "@radix-ui/themes"
import { CustomLink } from "./CustomLink"
import { DialogWindow } from "./DialogWindow"

export const Features = () => {
  return (
    <Box>
        <Text size='7' className="font-medium">Характеристики</Text>
      <Box className="mt-5">
        <Table.Root size='2'>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Серія</Table.Cell>
              <Table.Cell><CustomLink text={'iPhone 13'} link={'*'} /></Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Стандарт зв`язку</Table.RowHeaderCell>
              <Table.Cell>
                <CustomLink text={'2G (GPRS/EDGE)'} link={'*'} /> <br/>
                <CustomLink text={'3G (WCDMA/UMTS/HSPA)'} link={'*'} /> <br/>
                <CustomLink text={'4G (LTE)'} link={'*'} /> <br/>
                <CustomLink text={'5G'} link={'*'} />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Діагональ екрана</Table.RowHeaderCell>
              <Table.Cell><CustomLink text={'6.1'} link={'*'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.RowHeaderCell>Роздільна здатність дисплея</Table.RowHeaderCell>
              <Table.Cell><CustomLink text={'2532x1170'} link={'*'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.RowHeaderCell>Тип матриці</Table.RowHeaderCell>
              <Table.Cell><CustomLink text={'OLED (Super Retina XDR)'} link={'*'} /></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>

  )
}