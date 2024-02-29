export interface Category {
	id: number,
	title: string,
	items: []
}

export const categories = [
	{
		id: 1,
		title: 'Mobile Phones',
		items: [
			{
				id: 1,
				name: 'Смартфон Apple iPhone 14 Pro 256Gb фиолетовый',
				image: 'https://techmart.ru/image/cache/catalog/Apple%2014/fiolet/iphone14-pro-fioletoviy_v3-840x840.jpg',
				price: 648000,
				rating: 5,
				description: 'технология NFC: Да\n' +
					'цвет: фиолетовый\n' +
					'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n' +
					'диагональ: 6.1 дюйм\n' +
					'размер оперативной памяти: 6 ГБ\n' +
					'процессор: 6-ядерный Apple A16 Bionic\n' +
					'объем встроенной памяти: 256 ГБ\n' +
					'емкость аккумулятора: 3125 мАч',
				link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
			{
				id: 2,
				name: 'Смартфон Apple iPhone 13 128Gb синий',
				image: 'https://2cent.ru/storage/photo/resized/xy_866x866/a/55svpcvbhw9tj7i_53c1439.jpg',
				price: 378000,
				rating: 4.9,
				description: 'технология NFC: Да\n' +
					'цвет: синий\n' +
					'тип экрана: OLED, Super Retina XDR\n' +
					'диагональ: 6.1 дюйм\n' +
					'размер оперативной памяти: 4 ГБ\n' +
					'процессор: 6-ядерный Apple A15 Bionic\n' +
					'объем встроенной памяти: 128 ГБ\n' +
					'емкость аккумулятора: 3095 мАч',
				link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE',
			},
			{
				id: 3,
				name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ оранжевый',
				image: 'https://nurancell.kz/image/cache/catalog/31.03.2022/izobrazhenie_2022-04-01_103922-500x500.png',
				price: 104625,
				rating: 4,
				description: 'ехнология NFC: Да\n' +
					'цвет: оранжевый\n' +
					'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
					'диагональ: 6.6 дюйм\n' +
					'размер оперативной памяти: 6 ГБ\n' +
					'процессор: 8-ядерный Snapdragon 680',
				link: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-oranzhevyi-104347752/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE',
			},
			{
				id: 4,
				name: 'Смартфон Samsung Galaxy S22 Ultra 12 ГБ/256 ГБ черный',
				image: 'https://sanmi.kz/upload/iblock/4dd/64307364200478.jpg',
				price: 800000,
				rating: 5,
				description: 'технология NFC: Да\n' +
					'цвет: черный\n' +
					'тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+\n' +
					'диагональ: 6.8 дюйм\n' +
					'размер оперативной памяти: 12 ГБ\n' +
					'процессор: 8-ядерный Exynos 2200\n' +
					'объем встроенной памяти: 256 ГБ\n' +
					'емкость аккумулятора: 5000 мАч',
				link: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-12-gb-256-gb-chernyi-103668309/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE',
			},
			{
				id: 5,
				name: 'Смартфон Samsung Galaxy S23+ 5G 8 ГБ/512 ГБ черный + подарок',
				image: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_4240_2_6.png',
				price: 600000,
				rating: 4.8,
				description: 'технология NFC: Да\n' +
					'цвет: черный\n' +
					'тип экрана: Dynamic AMOLED 2X, HDR10+\n' +
					'диагональ: 6.6 дюйм\n' +
					'размер оперативной памяти: 8 ГБ\n' +
					'процессор: 8-ядерный Snapdragon 8 Gen 2\n' +
					'объем встроенной памяти: 512 ГБ\n' +
					'емкость аккумулятора: 4700 мАч',
				link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-512-gb-chernyi-108916004/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE',
			}
		]
	},
	{
		id: 2,
		title: 'Household Appliances',
		items: [
			{
				id: 1,
				name: 'Стиральная машина LG F2J3HS4L серебристый',
				image: 'https://www.lg.com/content/dam/channel/wcms/kz/images/washing-machines/f2j3hs4l_alspcom_eeak_kz_c/gallery/medium01.jpg',
				price: 220000,
				rating: 3.9,
				description: 'установка: отдельностоящая\n' +
					'управление: электронное (интеллектуальное)\n' +
					'максимальная загрузка белья: 7 кг\n' +
					'класс потребления электроэнергии: A\n' +
					'скорость вращения при отжиме: 1200 об/мин\n' +
					'защита от протечек воды: Нет\n' +
					'цвет: серебристый',
				link: 'https://kaspi.kz/shop/p/lg-f2j3hs4l-serebristyi-3601603/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
			{
				id: 2,
				name: 'Вытяжка Midea MH 60F10 B черный',
				image: 'https://mideakz.com/wp-content/uploads/2021/09/mh60f10b.jpg',
				price: 21000,
				rating: 2.5,
				description: 'установка: подвесная\n' +
					'ширина встраивания: 60 см\n' +
					'производительность: 300 куб.м/ч\n' +
					'количество скоростей: 3\n' +
					'управление: механическое\n' +
					'тип освещения: светодиодная лампа\n' +
					'цвет: черный',
				link: 'https://kaspi.kz/shop/p/midea-mh-60f15-x-serebristyi-2403055/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
			{
				id: 3,
				name: 'Духовой шкаф Smeg ALFA 43XMFDS серебристый',
				image: 'https://smgshop.ru/uploads/shop/products/large/fcddf1c9ef7c9b9acd4dba33ef8b82e2.jpg',
				price: 500000,
				rating: 5,
				description: 'размеры (ВхШхГ): 54x60x58 см\n' +
					'конвекция: Да\n' +
					'цвет: серебристый',
				link: 'https://kaspi.kz/shop/p/smeg-alfa-43xmfds-serebristyi-105626129/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
			{
				id: 4,
				name: 'Морозильник FROSTOR F 2500 B 999 л белый',
				image: 'https://frostor.ru/upload/iblock/ed4/ed4a50efb6763cbbc295313efdc80f2c.jpg',
				price: 899000,
				rating: 4.8,
				description: 'тип: морозильник-ларь\n' +
					'размораживание морозильной камеры: ручное\n' +
					'мощность замораживания: 1 кг/сут\n' +
					'климатический класс: ST\n' +
					'класс энергопотребления: A\n' +
					'цвет: белый',
				link: 'https://kaspi.kz/shop/p/frostor-f-2500-b-999-l-belyi-104045575/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
			{
				id: 5,
				name: 'Пылесос ARNICA Hydra Rain Plus красный',
				image: 'https://arnica.kz/wp-content/uploads/2023/06/HRP-4.jpg',
				price: 99970,
				rating: 4,
				description: 'тип: сепараторный\n' +
					'уборка: сухая, ,влажная\n' +
					'тип пылесборника: аквафильтр\n' +
					'потребляемая мощность: 2400 Вт\n' +
					'источник питания: сеть\n' +
					'цвет: красный',
				link: 'https://kaspi.kz/shop/p/arnica-hydra-rain-plus-krasnyi-3700837/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
		]
	},
	{
		id: 3,
		title: 'Computers and Laptops',
		items: [
			{
				id: 1,
				name: 'Acer Nitro 5 AN515-57',
				image: 'https://nout.kz/upload/resize_cache/webp/iblock/c85/603s7nevpbemnd02dycu89caj09rmzgb/aj7yb1xj0jqu8x6upusy33vntxmycibk.webp',
				price: 389980,
				rating: 4.8,
				description: 'Dominate the Game: With the 11th Gen Intel Core i7-11800H processor, your Nitro 5 is packed with incredible power for all your games.',
				link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeler-008-chernyi-102710820/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
			{
				id: 2,
				name: 'Apple MacBook Air 13 MLXY3',
				image: 'https://cdn1.new-brz.net/q:68/g:sm/plain/s3:/breezy-space/app/public/models/MVFH2RU-A/large/w/190710160015909923.webp',
				price: 638803,
				rating: 5,
				description: 'Apple MacBook Air 2022 MLXY3 13.6 Inch M2 Chipset 8 Core CPU & 8 Core GPU 8GB Memory 256GB SSD Silver. Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminum enclosure.',
				link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxy3-serebristyi-106110064/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
			{
				id: 3,
				name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
				image: 'https://nout.kz/upload/resize_cache/webp/iblock/788/csjvk6shxsnoa3165fb1a7027erda6r1/93c7618a_40b5_11ed_8132_001e67d1aaeb_9a9088a3_40b5_11ed_8132_001e67d1aaeb.webp',
				price: 189000,
				rating: 4,
				description: 'диагональ экрана: 15.6 дюйм\n' +
					'процессор: Intel Pentium Gold 7505\n' +
					'видеокарта: Intel UHD Graphics\n' +
					'размер оперативной памяти: 8 ГБ\n' +
					'тип жесткого диска: SSD\n' +
					'общий объем накопителей: 256 ГБ',
				link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
			{
				id: 4,
				name: 'Ноутбук Apple MacBook Air 13 Z15S000MP серый',
				image: 'https://cdn1.new-brz.net/q:68/g:sm/plain/s3:/breezy-space/app/public/models/MVFH2RU-A/large/w/190710160015909923.webp',
				price: 760000,
				rating: 5,
				description: 'Apple MacBook Air 2022 MLXY3 13.6 Inch M2 Chipset 8 Core CPU & 8 Core GPU 8GB Memory 256GB SSD Silver. Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminum enclosure.',
				link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-z15s000nb-seryi-106722606/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
			{
				id: 5,
				name: 'Ноутбук Apple MacBook Pro 16 MK1H3 серый',
				image: 'https://185504.selcdn.ru/static/ajpro.reshop.kz/catalog/434/47551100164e0658ab323a_original.jpg',
				price: 2100000,
				rating: 5,
				description: 'диагональ экрана: 16 дюйм\n' +
					'процессор: Apple M1 Max\n' +
					'видеокарта: Apple M1 Max 32-Core\n' +
					'размер оперативной памяти: 32 ГБ\n' +
					'тип жесткого диска: SSD\n' +
					'общий объем накопителей: 1024 ГБ',
				link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mk1h3-seryi-103316814/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			}
		]
	},
	{
		id: 4,
		title: 'Entertainment',
		items: [
			{
				id: 1,
				name: 'Sony PlayStation 5',
				image: 'https://object.pscloud.io/cms/cms/Photo/img_0_68_217_5_1.jpg',
				price: 247000,
				rating: 4.5,
				description: 'Stunning Games - Marvel at incredible graphics and experience new PS5 features. Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.',
				link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
			{
				id: 2,
				name: 'Дрон DJI Mini 3 Pro + DJI RC',
				image: 'https://mavic.kz/wp-content/uploads/2022/05/DJI_Mini_3_Pro_drone_2_large_PhotoRoom-e1653503609327.png',
				price: 595380,
				rating: 4.7,
				description: 'Квадрокоптер DJI Mini 3 Pro – миниатюрный, но мощный квадрокоптер для съемки с воздуха в высоком разрешении 3840×2160 в формате 4К. У этой модели усовершенствованный внешний вид и более надежная конструкция для создания невероятных видео материалов. Время полета этого устройства увеличено за счет использования больших винтов и системы обнаружения препятствий. Усовершенствованный подвес предоставляет более широкий охват для проведения съемки. Кроме того, с этим дроном вы сможете вести вертикальную съемку, выводя создание видео материалов на новый уровень.',
				link: 'https://kaspi.kz/shop/p/dji-mini-3-pro-belyi-dji-rc-105597357/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
			{
				id: 3,
				name: 'Игровой контроллер Artifact NJOS M3',
				image: 'https://mediasale.kz/upload/iblock/bbc/vo1qv21fhbazzbh5hruvwkzp0jlghev8.jpg',
				price: 34900,
				rating: 4.1,
				description: 'Наш игровой геймпад Artifact NJOS M3 для смартфонов выведет вашу игру на новый уровень! ',
				link: 'https://kaspi.kz/shop/p/artifact-njos-m3-chernyi-103347636/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
			{
				id: 4,
				name: 'Умная колонка Яндекс Станция Мини',
				image: 'https://sonycenter.kz/image/cache/catalog/products/yandex/station-mini/blue/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%9C%D0%B8%D0%BD%D0%B84_1-600x600.png',
				price: 44500,
				rating: 4.4,
				description: 'Станция Мини разбудит вас вовремя, напомнит покормить кота, расскажет новости, напомнит о важных или приятных делах. - Алиса, напомни про встречу через час.',
				link: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-yndx-00020-chernyi-102580021/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
			{
				id: 5,
				name: 'Очки виртуальной реальности VR Box VR',
				image: 'https://ecowheels.kz/frontend/web/image/files/33ee94.jpg',
				price: 3500,
				rating: 5,
				description: 'Definition of VR Box Headset for Beginners. Virtual reality VR Box headset is a head-mounted device that you wear over your eyes like a pair of goggles. This vr device provides virtual reality for the wearer. The goal of the VR headset is too provide immersive virtual reality experience.',
				link: 'https://kaspi.kz/shop/p/vr-box-vr-2-0-11800010/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNY1rxibSF7_n1USqJqjtXExK3VCJ4xu51CzndAJnh1TzIgdwVKIdHRoCnGcQAvD_BwE'
			},
		]
	}
];