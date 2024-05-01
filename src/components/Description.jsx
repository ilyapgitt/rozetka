// import { IconName } from "react-icons/bi";
import { Flex, Link, Box, Text, Separator, Checkbox, Table } from '@radix-ui/themes';
import star from '../../public/star.svg'
import carpet from '../../public/carpet.jpg'
import logo from '../../public/logo.svg'
import bonus from '../../public/bonus.svg'
import swit from '../../public/swit.png'
import wallet from '../../public/wallet.png'
import shield from '../../public/shield.png'

import { ColorLink } from './ColorLink';
import { BuyButton } from './BuyButton';
import { BuyCreditBtn } from './BuyCreditBtn';
import { BuyBankBtn } from './BuyBankBtn';

export const Description = () => {

  return (
    <Box>
      <h1 className="text-[24px] font-medium text-left">
        Мобільний телефон Apple iPhone 13 128GB Midnight (MLPF3HU/A)
      </h1>
      {/* Grade */}
      <Box>
        <Flex justify='between'>
          <Flex align='center'>
            <span><img src={star} alt="" width={16} height={16} /></span>
            <span><img src={star} alt="" width={16} height={16} /></span>
            <span><img src={star} alt="" width={16} height={16} /></span>
            <span><img src={star} alt="" width={16} height={16} /></span>
            <span><img src={star} alt="" width={16} height={16} /></span>
            <Link href=""><span className='text-sm hover:text-red-500 ml-1'>324 відгуки</span></Link>
          </Flex>
          <Text color='gray'>Код:  318463663</Text>
        </Flex>
      </Box>
      {/* Target */}
      <Box style={{ border: '1px solid green', borderRadius: '10px' }} className='px-8 py-3 mt-4'>
        <Flex align='center' justify='between'>
          <Flex align='center' gap='5'>
            <Link
              href='https://rozetka.com.ua/ua/apple-iphone-13-13-pro-deep-navy/p317584330/'
            >
              <span><img src={carpet} alt="" height={65} /></span>
            </Link>
            <Box>
              <Link href='https://rozetka.com.ua/ua/apple-iphone-13-13-pro-deep-navy/p317584330/'>
                <Box>
                  <Text className='text-sm text-gray-800 hover:text-red-500'><span className='text-green-600 font-semibold hover:text-red-500'>Рекомендуємо</span> <br /> Панель Apple MagSafe Clear Case для Apple iPhone 13 Clear (MM2X3ZE/A)</Text>
                </Box>
              </Link>
            </Box>
          </Flex>
          <Text className='min-w-[60px]'><strong>2 499₴</strong></Text>
        </Flex>
      </Box>
      {/* Choose color and memory*/}
      <Box className='mt-4'>
        <span className='text-sm'>Колір: <strong>Midnight</strong></span>
        <Flex className='mt-3' gap='1'>
          <ColorLink color={'bg-blue-700'} />
          <ColorLink color={'bg-green-700'} />
          <ColorLink color={'bg-black'} />
          <ColorLink color={'bg-pink-400'} />
          <ColorLink color={'bg-red-500'} />
          <ColorLink color={'bg-gray-200'} />
        </Flex>
        <Box className='mt-1'>
          <span className='text-sm'>Вбудована пам&apos;ять: <strong>128GB</strong></span>
          <Flex className='mt-2' gap='2'>
            <Link href=''>
              <Box as='span' className='text-gray-500 py-1 px-3 text-sm bg-green-50' style={{ border: '1px solid green', borderRadius: '8px' }}>128GB</Box></Link>
            <Link href=''><Box as='span' className='py-1 px-3 text-sm hover:bg-green-50' style={{ border: '1px solid green', borderRadius: '8px' }}>256GB</Box></Link>
          </Flex>
        </Box>
      </Box>
      {/* Buy section */}
      <Box style={{ border: '1px solid gray', borderRadius: '10px' }} className='py-1 px-3 mt-4'>
        <Flex className='items-center mt-2' gap='2'>
          <span className='text-sm'>Продавець:</span>
          <img src={logo} height={20} alt="" />
        </Flex>
        <Separator className='my-4' size='4' />
        <Box>
          <Flex className='items-center' gap='9'>
            <Box className='min-w-[100px]'>
              <span className='text-2xl font-medium'>29 999₴</span><br />
              <span className='text-green-600 text-sm font-semibold'>Є в наявності</span>
            </Box>
            <Flex className='flex-wrap gap-4 items-center justify-center'>
              <BuyButton />
              <BuyCreditBtn />
            </Flex>
          </Flex>
        </Box>
        <Separator className='my-4' size='4' />
        <Box>
          <Flex gap='4' className='flex-wrap'>
            <BuyBankBtn />
            <BuyBankBtn />
            <BuyBankBtn />
            <BuyBankBtn />
            <BuyBankBtn />
            <BuyBankBtn />
            <BuyBankBtn />
            <BuyBankBtn />
            <BuyBankBtn />
          </Flex>
        </Box>
        <Separator className='mt-4 mb-2' size='4' />
        <Flex>
          <img src={bonus} height={30} alt="" />
          <span className='text-sm'><strong>+ 279 бонусних ₴ </strong> на рахунок у разі купівлі
          </span>
        </Flex>
        <Separator className='my-2' size='4' />
        <Flex align={'center'}>
          <img src={bonus} height={30} alt="" />
          <span className='text-sm'><strong>+ 279 бонусних ₴ </strong> на рахунок у разі купівлі
          </span>
        </Flex>
        <Separator className='my-2' size='4' />
        <Flex align={'center'}>
          <img src={bonus} height={30} alt="" />
          <span className='text-sm'><strong>+ 279 бонусних ₴ </strong> на рахунок у разі купівлі
          </span>
        </Flex>
      </Box>
      <Box style={{ border: '1px solid gray', borderRadius: '10px' }} className='py-1 px-3 mt-4'>
        <Box className='my-3'>
          <Text className='font-bold'>Додаткові послуги</Text>
        </Box>
        <Box>
          <Flex
            gap='3'
            className="justify-center items-center mb-3 text-sm"
          >
            <Checkbox color='green' />
            <img src={swit} height={40} alt="" className='rounded' />
            <span>Фільми, серіали, мультфільми, ТВ передачі онлайн</span>
          </Flex>
          <Flex gap='3' className="justify-center items-center mb-3 text-sm">
            <Checkbox color='green' />
            <img src={swit} height={40} alt="" className='rounded' />
            <span>Сервіси гарантії</span>
          </Flex>
          <Flex gap='3' className="justify-center items-center mb-3 text-sm">
            <Checkbox color='green' />
            <img src={swit} height={40} alt="" className='rounded' />
            <span>Сервіс Rozetka Super</span>
          </Flex>
        </Box>
      </Box>
      <Box style={{ border: '1px solid gray', borderRadius: '10px' }} className='py-1 px-3 mt-4'>
        <Box className='my-3'>
          <Text className='font-bold'>Додаткові послуги</Text>
        </Box>
        <Separator size='4' />
        <Box className='text-sm'>


          <Box>
            <Table.Root>
              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>
                    <Flex gap='4' className='items-center w-[280px]'>
                      <img height={30} width={30} src={logo} alt="" />
                      <Box>
                        <span>Самовивіз з магазинів Rozetka</span><br />
                        <Link href=''>Дивитись на мапі</Link>
                      </Box>
                    </Flex>
                  </Table.RowHeaderCell>
                  <Table.Cell>
                    <Box className='mx-auto'>
                      <span className='font-semibold'>Отримати завтра з 17:00</span>
                    </Box>
                  </Table.Cell>
                  <Table.Cell>
                    <Box className='ml-auto'>
                      <span className='text-green-600 font-semibold'>Безкоштовно</span>
                    </Box>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>
                    <Flex gap='4' className='items-center w-[280px]'>
                      <img height={30} width={30} src={logo} alt="" />
                      <Box>
                        <span>Доставка кур'єром Meest ПОШТА, Нової Пошти</span>
                      </Box>
                    </Flex>
                  </Table.RowHeaderCell>
                  <Table.Cell>
                    <Box className='mx-auto'>
                      <span className='font-semibold'>Відправимо сьогодні</span>
                    </Box>
                  </Table.Cell>
                  <Table.Cell>
                    <Box className='ml-auto'>
                      <span>99₴ - 149₴</span>
                    </Box>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>
                    <Flex gap='4' className='items-center w-[280px]'>
                      <img height={30} width={30} src={logo} alt="" />
                      <Box>
                        <span>Самовивіз з відділень поштових операторів</span><br />
                        <Link href=''>Дивитись на мапі</Link>
                      </Box>
                    </Flex>
                  </Table.RowHeaderCell>
                  <Table.Cell>
                    <Box className='mx-auto'>
                      <span className='font-semibold'>Відправимо сьогодні</span>
                    </Box>
                  </Table.Cell>
                  <Table.Cell>
                    <Box className='ml-auto'>
                      <span>55₴ - 79₴</span>
                    </Box>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Box>
        </Box>
      </Box>
      <Box style={{ border: '1px solid gray', borderRadius: '10px' }} className='py-1 px-3 mt-4 text-sm'>
        <Flex gap='4' className='justify-center items-center my-2'>
          <img height={30} width={30} src={wallet} />
          <Text>
            <strong>Оплата.</strong> Оплата під час отримання товару, Оплата карткою у відділенні, Google Pay, Картою онлайн, Безготівковими для юридичних осіб, Оплатити онлайн соціальною картою "Пакунок малюка", Безготівковий для фізичних осіб, Apple Pay, Оплатити онлайн картою "єПідтримка", Visa, Mastercard
          </Text>
        </Flex>
        <Separator size='4' />
        <Flex gap='4' className='justify-center items-center my-3'>
          <img height={30} width={30} src={shield} />
          <Text>
            <strong>Гарантія.</strong> 12 місяців Обмін/повернення товару впродовж 14 днів
          </Text>
        </Flex>
      </Box>
    </Box >
  )
}