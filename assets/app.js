const chartData = [{"n": 0, "xLabel": "START", "match": "Старт турнира", "date": "", "team1": {"name": "Старт", "code": "START", "flagUrl": ""}, "team2": {"name": "турнира", "code": "", "flagUrl": ""}, "friendBet": "—", "friendCoef": 0, "friendBank": 1000.0, "friendProfit": 0, "yourBet": "—", "yourCoef": 0, "yourBank": 1000.0, "yourProfit": 0}, {"n": 1, "xLabel": "KOR-CZE", "match": "Южная Корея — Чехия", "date": "12.06.2026", "team1": {"name": "Южная Корея", "code": "KOR", "flagUrl": "https://flagcdn.com/w40/kr.png"}, "team2": {"name": "Чехия", "code": "CZE", "flagUrl": "https://flagcdn.com/w40/cz.png"}, "friendBet": "2026-01-01 00:00:00", "friendCoef": 6.3, "friendBank": 900.0, "friendProfit": -100.0, "yourBet": "ОЗ", "yourCoef": 1.74, "yourBank": 1074.0, "yourProfit": 74.0}, {"n": 2, "xLabel": "CAN-BIH", "match": "Канада — Босния и Герцеговина", "date": "12.06.2026", "team1": {"name": "Канада", "code": "CAN", "flagUrl": "https://flagcdn.com/w40/ca.png"}, "team2": {"name": "Босния и Герцеговина", "code": "BIH", "flagUrl": "https://flagcdn.com/w40/ba.png"}, "friendBet": "ЖК ТБ(3,5)", "friendCoef": 1.74, "friendBank": 974.0, "friendProfit": 74.0, "yourBet": "П1", "yourCoef": 1.82, "yourBank": 974.0, "yourProfit": -100.0}, {"n": 3, "xLabel": "USA-PAR", "match": "США — Парагвай", "date": "13.06.2026", "team1": {"name": "США", "code": "USA", "flagUrl": "https://flagcdn.com/w40/us.png"}, "team2": {"name": "Парагвай", "code": "PAR", "flagUrl": "https://flagcdn.com/w40/py.png"}, "friendBet": "x2", "friendCoef": 1.85, "friendBank": 874.0, "friendProfit": -100.0, "yourBet": "П1", "yourCoef": 1.93, "yourBank": 1067.0, "yourProfit": 93.0}, {"n": 4, "xLabel": "QAT-SUI", "match": "Катар — Швейцария", "date": "13.06.2026", "team1": {"name": "Катар", "code": "QAT", "flagUrl": "https://flagcdn.com/w40/qa.png"}, "team2": {"name": "Швейцария", "code": "SUI", "flagUrl": "https://flagcdn.com/w40/ch.png"}, "friendBet": "0-0", "friendCoef": 18.0, "friendBank": 774.0, "friendProfit": -100.0, "yourBet": "Забьёт ровно одна команда — да", "yourCoef": 1.66, "yourBank": 967.0, "yourProfit": -100.0}, {"n": 5, "xLabel": "BRA-MAR", "match": "Бразилия — Марокко", "date": "14.06.2026", "team1": {"name": "Бразилия", "code": "BRA", "flagUrl": "https://flagcdn.com/w40/br.png"}, "team2": {"name": "Марокко", "code": "MAR", "flagUrl": "https://flagcdn.com/w40/ma.png"}, "friendBet": "1-0", "friendCoef": 6.2, "friendBank": 674.0, "friendProfit": -100.0, "yourBet": "П2 с Ф(+1,5)", "yourCoef": 1.38, "yourBank": 1005.0, "yourProfit": 38.0}, {"n": 6, "xLabel": "HAI-SCO", "match": "Гаити — Шотландия", "date": "14.06.2026", "team1": {"name": "Гаити", "code": "HAI", "flagUrl": "https://flagcdn.com/w40/ht.png"}, "team2": {"name": "Шотландия", "code": "SCO", "flagUrl": "https://flagcdn.com/w40/gb-sct.png"}, "friendBet": "Угловые: ТБ(6,5)", "friendCoef": 1.13, "friendBank": 687.0, "friendProfit": 13.0, "yourBet": "Угловые: П2 с Ф(-1,5)", "yourCoef": 1.66, "yourBank": 905.0, "yourProfit": -100.0}, {"n": 7, "xLabel": "AUS-TUR", "match": "Австралия — Турция", "date": "14.06.2026", "team1": {"name": "Австралия", "code": "AUS", "flagUrl": "https://flagcdn.com/w40/au.png"}, "team2": {"name": "Турция", "code": "TUR", "flagUrl": "https://flagcdn.com/w40/tr.png"}, "friendBet": "П2", "friendCoef": 1.71, "friendBank": 587.0, "friendProfit": -100.0, "yourBet": "Пенальти", "yourCoef": 3.1, "yourBank": 805.0, "yourProfit": -100.0}, {"n": 8, "xLabel": "GER-CUW", "match": "Германия — Кюрасао", "date": "14.06.2026", "team1": {"name": "Германия", "code": "GER", "flagUrl": "https://flagcdn.com/w40/de.png"}, "team2": {"name": "Кюрасао", "code": "CUW", "flagUrl": "https://flagcdn.com/w40/cw.png"}, "friendBet": "Хаверц забьёт", "friendCoef": 1.52, "friendBank": 639.0, "friendProfit": 52.0, "yourBet": "ТМ > 5,5", "yourCoef": 3.2, "yourBank": 1025.0, "yourProfit": 220.0}, {"n": 9, "xLabel": "NED-JPN", "match": "Нидерланды — Япония", "date": "14.06.2026", "team1": {"name": "Нидерланды", "code": "NED", "flagUrl": "https://flagcdn.com/w40/nl.png"}, "team2": {"name": "Япония", "code": "JPN", "flagUrl": "https://flagcdn.com/w40/jp.png"}, "friendBet": "2026-01-01 00:00:00", "friendCoef": 7.2, "friendBank": 539.0, "friendProfit": -100.0, "yourBet": "Первый гол позже 30,5 минуты", "yourCoef": 1.81, "yourBank": 1106.0, "yourProfit": 81.0}, {"n": 10, "xLabel": "CIV-ECU", "match": "Кот д'Ивуар — Эквадор", "date": "15.06.2026", "team1": {"name": "Кот д'Ивуар", "code": "CIV", "flagUrl": "https://flagcdn.com/w40/ci.png"}, "team2": {"name": "Эквадор", "code": "ECU", "flagUrl": "https://flagcdn.com/w40/ec.png"}, "friendBet": "Удаление будет", "friendCoef": 4.9, "friendBank": 439.0, "friendProfit": -100.0, "yourBet": "ЖК: П1", "yourCoef": 2.34, "yourBank": 1240.0, "yourProfit": 134.0}, {"n": 11, "xLabel": "SWE-TUN", "match": "Швеция — Тунис", "date": "15.06.2026", "team1": {"name": "Швеция", "code": "SWE", "flagUrl": "https://flagcdn.com/w40/se.png"}, "team2": {"name": "Тунис", "code": "TUN", "flagUrl": "https://flagcdn.com/w40/tn.png"}, "friendBet": "Ничья в одном из таймов", "friendCoef": 1.43, "friendBank": 339.0, "friendProfit": -100.0, "yourBet": "П1 хотя бы в одном из таймов", "yourCoef": 1.45, "yourBank": 1285.0, "yourProfit": 45.0}, {"n": 12, "xLabel": "ESP-CPV", "match": "Испания — Кабо-Верде", "date": "15.06.2026", "team1": {"name": "Испания", "code": "ESP", "flagUrl": "https://flagcdn.com/w40/es.png"}, "team2": {"name": "Кабо-Верде", "code": "CPV", "flagUrl": "https://flagcdn.com/w40/cv.png"}, "friendBet": "Ферран Торрес забьёт", "friendCoef": 1.83, "friendBank": 239.0, "friendProfit": -100.0, "yourBet": "П1 и тотал Испании < 3,5", "yourCoef": 1.84, "yourBank": 1185.0, "yourProfit": -100.0}, {"n": 13, "xLabel": "BEL-EGY", "match": "Бельгия — Египет", "date": "15.06.2026", "team1": {"name": "Бельгия", "code": "BEL", "flagUrl": "https://flagcdn.com/w40/be.png"}, "team2": {"name": "Египет", "code": "EGY", "flagUrl": "https://flagcdn.com/w40/eg.png"}, "friendBet": "Обе забьют", "friendCoef": 1.95, "friendBank": 334.0, "friendProfit": 95.0, "yourBet": "Кевин де Брёйне: тотал ударов в створ > 0,5", "yourCoef": 1.5, "yourBank": 1235.0, "yourProfit": 50.0}, {"n": 14, "xLabel": "KSA-URU", "match": "Саудовская Аравия — Уругвай", "date": "16.06.2026", "team1": {"name": "Саудовская Аравия", "code": "KSA", "flagUrl": "https://flagcdn.com/w40/sa.png"}, "team2": {"name": "Уругвай", "code": "URU", "flagUrl": "https://flagcdn.com/w40/uy.png"}, "friendBet": "П2", "friendCoef": 1.47, "friendBank": 234.0, "friendProfit": -100.0, "yourBet": "Штанга/перекладина будет", "yourCoef": 2.44, "yourBank": 1379.0, "yourProfit": 144.0}, {"n": 15, "xLabel": "IRN-NZL", "match": "Иран — Новая Зеландия", "date": "16.06.2026", "team1": {"name": "Иран", "code": "IRN", "flagUrl": "https://flagcdn.com/w40/ir.png"}, "team2": {"name": "Новая Зеландия", "code": "NZL", "flagUrl": "https://flagcdn.com/w40/nz.png"}, "friendBet": "Забьёт ровно одна команда — да", "friendCoef": 2.01, "friendBank": 134.0, "friendProfit": -100.0, "yourBet": "П1 и ТМ < 3,5", "yourCoef": 2.25, "yourBank": 1279.0, "yourProfit": -100.0}, {"n": 16, "xLabel": "FRA-SEN", "match": "Франция — Сенегал", "date": "16.06.2026", "team1": {"name": "Франция", "code": "FRA", "flagUrl": "https://flagcdn.com/w40/fr.png"}, "team2": {"name": "Сенегал", "code": "SEN", "flagUrl": "https://flagcdn.com/w40/sn.png"}, "friendBet": "Обе забьют", "friendCoef": 2.01, "friendBank": 235.0, "friendProfit": 101.0, "yourBet": "Тотал офсайдов > 2,5", "yourCoef": 1.81, "yourBank": 1360.0, "yourProfit": 81.0}, {"n": 17, "xLabel": "IRQ-NOR", "match": "Ирак — Норвегия", "date": "17.06.2026", "team1": {"name": "Ирак", "code": "IRQ", "flagUrl": "https://flagcdn.com/w40/iq.png"}, "team2": {"name": "Норвегия", "code": "NOR", "flagUrl": "https://flagcdn.com/w40/no.png"}, "friendBet": "Эрлинг Холанн — дубль", "friendCoef": 3.0, "friendBank": 435.0, "friendProfit": 200.0, "yourBet": "П2 с Ф(-3)", "yourCoef": 3.9, "yourBank": 1360.0, "yourProfit": 0.0}, {"n": 18, "xLabel": "ARG-ALG", "match": "Аргентина — Алжир", "date": "17.06.2026", "team1": {"name": "Аргентина", "code": "ARG", "flagUrl": "https://flagcdn.com/w40/ar.png"}, "team2": {"name": "Алжир", "code": "ALG", "flagUrl": "https://flagcdn.com/w40/dz.png"}, "friendBet": "П1 и обе забьют", "friendCoef": 3.56, "friendBank": 335.0, "friendProfit": -100.0, "yourBet": "Сухая П1 и ТМ < 3,5", "yourCoef": 2.34, "yourBank": 1494.0, "yourProfit": 134.0}, {"n": 19, "xLabel": "AUT-JOR", "match": "Австрия — Иордания", "date": "17.06.2026", "team1": {"name": "Австрия", "code": "AUT", "flagUrl": "https://flagcdn.com/w40/at.png"}, "team2": {"name": "Иордания", "code": "JOR", "flagUrl": "https://flagcdn.com/w40/jo.png"}, "friendBet": "Сухая П1", "friendCoef": 2.07, "friendBank": 235.0, "friendProfit": -100.0, "yourBet": "П1 по ударам по воротам с Ф(-7,5)", "yourCoef": 1.65, "yourBank": 1394.0, "yourProfit": -100.0}, {"n": 20, "xLabel": "POR-COD", "match": "Португалия — ДР Конго", "date": "17.06.2026", "team1": {"name": "Португалия", "code": "POR", "flagUrl": "https://flagcdn.com/w40/pt.png"}, "team2": {"name": "ДР Конго", "code": "COD", "flagUrl": "https://flagcdn.com/w40/cd.png"}, "friendBet": "ЖК Роналду", "friendCoef": 7.8, "friendBank": 135.0, "friendProfit": -100.0, "yourBet": "П2 (ЖК)", "yourCoef": 1.75, "yourBank": 1294.0, "yourProfit": -100.0}, {"n": 21, "xLabel": "ENG-CRO", "match": "Англия — Хорватия", "date": "17.06.2026", "team1": {"name": "Англия", "code": "ENG", "flagUrl": "https://flagcdn.com/w40/gb-eng.png"}, "team2": {"name": "Хорватия", "code": "CRO", "flagUrl": "https://flagcdn.com/w40/hr.png"}, "friendBet": "Обе забьют", "friendCoef": 2.02, "friendBank": 237.0, "friendProfit": 102.0, "yourBet": "Цифра 1 в счёте — да", "yourCoef": 1.62, "yourBank": 1194.0, "yourProfit": -100.0}, {"n": 22, "xLabel": "GHA-PAN", "match": "Гана — Панама", "date": "18.06.2026", "team1": {"name": "Гана", "code": "GHA", "flagUrl": "https://flagcdn.com/w40/gh.png"}, "team2": {"name": "Панама", "code": "PAN", "flagUrl": "https://flagcdn.com/w40/pa.png"}, "friendBet": "ТМ > 2,5", "friendCoef": 2.36, "friendBank": 137.0, "friendProfit": -100.0, "yourBet": "П1 (офсайды)", "yourCoef": 1.56, "yourBank": 1250.0, "yourProfit": 56.0}, {"n": 23, "xLabel": "UZB-COL", "match": "Узбекистан — Колумбия", "date": "18.06.2026", "team1": {"name": "Узбекистан", "code": "UZB", "flagUrl": "https://flagcdn.com/w40/uz.png"}, "team2": {"name": "Колумбия", "code": "COL", "flagUrl": "https://flagcdn.com/w40/co.png"}, "friendBet": "Удаление будет", "friendCoef": 6.1, "friendBank": 37.0, "friendProfit": -100.0, "yourBet": "Тайм-матч (ЖК): НП1", "yourCoef": 4.7, "yourBank": 1150.0, "yourProfit": -100.0}, {"n": 24, "xLabel": "CZE-RSA", "match": "Чехия — ЮАР", "date": "18.06.2026", "team1": {"name": "Чехия", "code": "CZE", "flagUrl": "https://flagcdn.com/w40/cz.png"}, "team2": {"name": "ЮАР", "code": "RSA", "flagUrl": "https://flagcdn.com/w40/za.png"}, "friendBet": "ЖК: ТМ > 5,5", "friendCoef": 4.3, "friendBank": -63.0, "friendProfit": -100.0, "yourBet": "Гол головой", "yourCoef": 2.8, "yourBank": 1050.0, "yourProfit": -100.0}, {"n": 25, "xLabel": "SUI-BIH", "match": "Швейцария — Босния и Герцеговина", "date": "18.06.2026", "team1": {"name": "Швейцария", "code": "SUI", "flagUrl": "https://flagcdn.com/w40/ch.png"}, "team2": {"name": "Босния и Герцеговина", "code": "BIH", "flagUrl": "https://flagcdn.com/w40/ba.png"}, "friendBet": "Удаление будет", "friendCoef": 4.55, "friendBank": 292.0, "friendProfit": 355.0, "yourBet": "Гол головой", "yourCoef": 2.8, "yourBank": 950.0, "yourProfit": -100.0}, {"n": 26, "xLabel": "CAN-QAT", "match": "Канада — Катар", "date": "19.06.2026", "team1": {"name": "Канада", "code": "CAN", "flagUrl": "https://flagcdn.com/w40/ca.png"}, "team2": {"name": "Катар", "code": "QAT", "flagUrl": "https://flagcdn.com/w40/qa.png"}, "friendBet": "П1 в обоих таймах", "friendCoef": 2.56, "friendBank": 448.0, "friendProfit": 156.0, "yourBet": "1x (офсайды)", "yourCoef": 1.61, "yourBank": 1011.0, "yourProfit": 61.0}, {"n": 27, "xLabel": "MEX-KOR", "match": "Мексика — Южная Корея", "date": "19.06.2026", "team1": {"name": "Мексика", "code": "MEX", "flagUrl": "https://flagcdn.com/w40/mx.png"}, "team2": {"name": "Южная Корея", "code": "KOR", "flagUrl": "https://flagcdn.com/w40/kr.png"}, "friendBet": "Обе забьют", "friendCoef": 1.94, "friendBank": 348.0, "friendProfit": -100.0, "yourBet": "Обе забьют", "yourCoef": 1.94, "yourBank": 911.0, "yourProfit": -100.0}, {"n": 28, "xLabel": "USA-AUS", "match": "США — Австралия", "date": "19.06.2026", "team1": {"name": "США", "code": "USA", "flagUrl": "https://flagcdn.com/w40/us.png"}, "team2": {"name": "Австралия", "code": "AUS", "flagUrl": "https://flagcdn.com/w40/au.png"}, "friendBet": "2-0", "friendCoef": 7.6, "friendBank": 1008.0, "friendProfit": 660.0, "yourBet": "П1 и ТМ > 1,5", "yourCoef": 1.96, "yourBank": 1007.0, "yourProfit": 96.0}, {"n": 29, "xLabel": "SCO-MAR", "match": "Шотландия — Марокко", "date": "20.06.2026", "team1": {"name": "Шотландия", "code": "SCO", "flagUrl": "https://flagcdn.com/w40/gb-sct.png"}, "team2": {"name": "Марокко", "code": "MAR", "flagUrl": "https://flagcdn.com/w40/ma.png"}, "friendBet": "П2", "friendCoef": 1.74, "friendBank": 1082.0, "friendProfit": 74.0, "yourBet": "П2", "yourCoef": 1.74, "yourBank": 1081.0, "yourProfit": 74.0}, {"n": 30, "xLabel": "BRA-HAI", "match": "Бразилия — Гаити", "date": "20.06.2026", "team1": {"name": "Бразилия", "code": "BRA", "flagUrl": "https://flagcdn.com/w40/br.png"}, "team2": {"name": "Гаити", "code": "HAI", "flagUrl": "https://flagcdn.com/w40/ht.png"}, "friendBet": "Винисиус забьёт", "friendCoef": 1.83, "friendBank": 1165.0, "friendProfit": 83.0, "yourBet": "Угловые: тотал Гаити < 2,5", "yourCoef": 1.53, "yourBank": 981.0, "yourProfit": -100.0}, {"n": 31, "xLabel": "TUR-PAR", "match": "Турция — Парагвай", "date": "20.06.2026", "team1": {"name": "Турция", "code": "TUR", "flagUrl": "https://flagcdn.com/w40/tr.png"}, "team2": {"name": "Парагвай", "code": "PAR", "flagUrl": "https://flagcdn.com/w40/py.png"}, "friendBet": "Голевых передач А. Гюлера > 0,5", "friendCoef": 2.5, "friendBank": 1065.0, "friendProfit": -100.0, "yourBet": "ТМ > 2", "yourCoef": 1.57, "yourBank": 881.0, "yourProfit": -100.0}, {"n": 32, "xLabel": "NED-SWE", "match": "Нидерланды — Швеция", "date": "20.06.2026", "team1": {"name": "Нидерланды", "code": "NED", "flagUrl": "https://flagcdn.com/w40/nl.png"}, "team2": {"name": "Швеция", "code": "SWE", "flagUrl": "https://flagcdn.com/w40/se.png"}, "friendBet": "ТМ > 3,5", "friendCoef": 2.52, "friendBank": 1217.0, "friendProfit": 152.0, "yourBet": "Нидерланды пропустят, но выиграют", "yourCoef": 3.1, "yourBank": 1091.0, "yourProfit": 210.0}, {"n": 33, "xLabel": "GER-CIV", "match": "Германия — Кот д'Ивуар", "date": "20.06.2026", "team1": {"name": "Германия", "code": "GER", "flagUrl": "https://flagcdn.com/w40/de.png"}, "team2": {"name": "Кот д'Ивуар", "code": "CIV", "flagUrl": "https://flagcdn.com/w40/ci.png"}, "friendBet": "Обе забьют", "friendCoef": 1.66, "friendBank": 1283.0, "friendProfit": 66.0, "yourBet": "П2 (ЖК)", "yourCoef": 1.81, "yourBank": 991.0, "yourProfit": -100.0}, {"n": 34, "xLabel": "ECU-CUW", "match": "Эквадор — Кюрасао", "date": "21.06.2026", "team1": {"name": "Эквадор", "code": "ECU", "flagUrl": "https://flagcdn.com/w40/ec.png"}, "team2": {"name": "Кюрасао", "code": "CUW", "flagUrl": "https://flagcdn.com/w40/cw.png"}, "friendBet": "Гол из-за штрафной", "friendCoef": 2.3, "friendBank": 1183.0, "friendProfit": -100.0, "yourBet": "Время первого гола позже 20,5 минуты", "yourCoef": 1.75, "yourBank": 891.0, "yourProfit": -100.0}, {"n": 35, "xLabel": "TUN-JPN", "match": "Тунис — Япония", "date": "21.06.2026", "team1": {"name": "Тунис", "code": "TUN", "flagUrl": "https://flagcdn.com/w40/tn.png"}, "team2": {"name": "Япония", "code": "JPN", "flagUrl": "https://flagcdn.com/w40/jp.png"}, "friendBet": "Удаление будет", "friendCoef": 6.0, "friendBank": 1083.0, "friendProfit": -100.0, "yourBet": "Тотал Японии > 1,5", "yourCoef": 1.84, "yourBank": 975.0, "yourProfit": 84.0}, {"n": 36, "xLabel": "ESP-KSA", "match": "Испания — Саудовская Аравия", "date": "21.06.2026", "team1": {"name": "Испания", "code": "ESP", "flagUrl": "https://flagcdn.com/w40/es.png"}, "team2": {"name": "Саудовская Аравия", "code": "KSA", "flagUrl": "https://flagcdn.com/w40/sa.png"}, "friendBet": "ТМ > 4,5", "friendCoef": 3.4, "friendBank": 983.0, "friendProfit": -100.0, "yourBet": "П2 с Ф (+2,5)", "yourCoef": 1.88, "yourBank": 875.0, "yourProfit": -100.0}, {"n": 37, "xLabel": "BEL-IRN", "match": "Бельгия — Иран", "date": "21.06.2026", "team1": {"name": "Бельгия", "code": "BEL", "flagUrl": "https://flagcdn.com/w40/be.png"}, "team2": {"name": "Иран", "code": "IRN", "flagUrl": "https://flagcdn.com/w40/ir.png"}, "friendBet": "Обе забьют", "friendCoef": 1.97, "friendBank": 883.0, "friendProfit": -100.0, "yourBet": "Первый тайм: 2x", "yourCoef": 1.78, "yourBank": 953.0, "yourProfit": 78.0}, {"n": 38, "xLabel": "URU-CPV", "match": "Уругвай — Кабо-Верде", "date": "22.06.2026", "team1": {"name": "Уругвай", "code": "URU", "flagUrl": "https://flagcdn.com/w40/uy.png"}, "team2": {"name": "Кабо-Верде", "code": "CPV", "flagUrl": "https://flagcdn.com/w40/cv.png"}, "friendBet": "Сухая П1", "friendCoef": 1.93, "friendBank": 783.0, "friendProfit": -100.0, "yourBet": "ТМ < 2,5", "yourCoef": 1.64, "yourBank": 853.0, "yourProfit": -100.0}, {"n": 39, "xLabel": "NZL-EGY", "match": "Новая Зеландия — Египет", "date": "22.06.2026", "team1": {"name": "Новая Зеландия", "code": "NZL", "flagUrl": "https://flagcdn.com/w40/nz.png"}, "team2": {"name": "Египет", "code": "EGY", "flagUrl": "https://flagcdn.com/w40/eg.png"}, "friendBet": "М. Салах забьёт", "friendCoef": 2.28, "friendBank": 911.0, "friendProfit": 128.0, "yourBet": "Ни одна команда не забьёт два гола подряд", "yourCoef": 1.93, "yourBank": 753.0, "yourProfit": -100.0}, {"n": 40, "xLabel": "ARG-AUT", "match": "Аргентина — Австрия", "date": "22.06.2026", "team1": {"name": "Аргентина", "code": "ARG", "flagUrl": "https://flagcdn.com/w40/ar.png"}, "team2": {"name": "Австрия", "code": "AUT", "flagUrl": "https://flagcdn.com/w40/at.png"}, "friendBet": "П1 в обоих таймах", "friendCoef": 4.05, "friendBank": 1216.0, "friendProfit": 305.0, "yourBet": "П1", "yourCoef": 1.58, "yourBank": 811.0, "yourProfit": 58.0}, {"n": 41, "xLabel": "FRA-IRQ", "match": "Франция — Ирак", "date": "23.06.2026", "team1": {"name": "Франция", "code": "FRA", "flagUrl": "https://flagcdn.com/w40/fr.png"}, "team2": {"name": "Ирак", "code": "IRQ", "flagUrl": "https://flagcdn.com/w40/iq.png"}, "friendBet": "К. Мбаппе забьёт хотя бы три мяча", "friendCoef": 9.2, "friendBank": 1116.0, "friendProfit": -100.0, "yourBet": "П1П1 ТМ > 2,5", "yourCoef": 1.62, "yourBank": 873.0, "yourProfit": 62.0}, {"n": 42, "xLabel": "NOR-SEN", "match": "Норвегия — Сенегал", "date": "23.06.2026", "team1": {"name": "Норвегия", "code": "NOR", "flagUrl": "https://flagcdn.com/w40/no.png"}, "team2": {"name": "Сенегал", "code": "SEN", "flagUrl": "https://flagcdn.com/w40/sn.png"}, "friendBet": "2026-01-01 00:00:00", "friendCoef": 7.0, "friendBank": 1016.0, "friendProfit": -100.0, "yourBet": "Обе забьют и ТМ > 2,5", "yourCoef": 2.08, "yourBank": 981.0, "yourProfit": 108.0}, {"n": 43, "xLabel": "JOR-ALG", "match": "Иордания — Алжир", "date": "23.06.2026", "team1": {"name": "Иордания", "code": "JOR", "flagUrl": "https://flagcdn.com/w40/jo.png"}, "team2": {"name": "Алжир", "code": "ALG", "flagUrl": "https://flagcdn.com/w40/dz.png"}, "friendBet": "ЖК > 4,5", "friendCoef": 5.6, "friendBank": 916.0, "friendProfit": -100.0, "yourBet": "ТМ > 2,5 (офсайды)", "yourCoef": 1.62, "yourBank": 881.0, "yourProfit": -100.0}, {"n": 44, "xLabel": "POR-UZB", "match": "Португалия — Узбекистан", "date": "23.06.2026", "team1": {"name": "Португалия", "code": "POR", "flagUrl": "https://flagcdn.com/w40/pt.png"}, "team2": {"name": "Узбекистан", "code": "UZB", "flagUrl": "https://flagcdn.com/w40/uz.png"}, "friendBet": "ЖК Роналду", "friendCoef": 7.3, "friendBank": 816.0, "friendProfit": -100.0, "yourBet": "Не ничья и обе забьют", "yourCoef": 2.84, "yourBank": 781.0, "yourProfit": -100.0}, {"n": 45, "xLabel": "ENG-GHA", "match": "Англия — Гана", "date": "23.06.2026", "team1": {"name": "Англия", "code": "ENG", "flagUrl": "https://flagcdn.com/w40/gb-eng.png"}, "team2": {"name": "Гана", "code": "GHA", "flagUrl": "https://flagcdn.com/w40/gh.png"}, "friendBet": "Обе забьют", "friendCoef": 2.31, "friendBank": 716.0, "friendProfit": -100.0, "yourBet": "Х. Кейн забьёт", "yourCoef": 1.61, "yourBank": 681.0, "yourProfit": -100.0}, {"n": 46, "xLabel": "PAN-CRO", "match": "Панама — Хорватия", "date": "24.06.2026", "team1": {"name": "Панама", "code": "PAN", "flagUrl": "https://flagcdn.com/w40/pa.png"}, "team2": {"name": "Хорватия", "code": "CRO", "flagUrl": "https://flagcdn.com/w40/hr.png"}, "friendBet": "П2 в обоих таймах", "friendCoef": 3.74, "friendBank": 616.0, "friendProfit": -100.0, "yourBet": "П2", "yourCoef": 1.55, "yourBank": 736.0, "yourProfit": 55.0}, {"n": 47, "xLabel": "COL-COD", "match": "Колумбия — ДР Конго", "date": "24.06.2026", "team1": {"name": "Колумбия", "code": "COL", "flagUrl": "https://flagcdn.com/w40/co.png"}, "team2": {"name": "ДР Конго", "code": "COD", "flagUrl": "https://flagcdn.com/w40/cd.png"}, "friendBet": "Обе забьют", "friendCoef": 2.31, "friendBank": 516.0, "friendProfit": -100.0, "yourBet": "Ударов Й. Висса > 1", "yourCoef": 1.52, "yourBank": 636.0, "yourProfit": -100.0}, {"n": 48, "xLabel": "SUI-CAN", "match": "Швейцария — Канада", "date": "24.06.2026", "team1": {"name": "Швейцария", "code": "SUI", "flagUrl": "https://flagcdn.com/w40/ch.png"}, "team2": {"name": "Канада", "code": "CAN", "flagUrl": "https://flagcdn.com/w40/ca.png"}, "friendBet": "Не ничья и обе забьют", "friendCoef": 1.92, "friendBank": 416.0, "friendProfit": -100.0, "yourBet": "Первый гол позже 25,5 минуты", "yourCoef": 2.98, "yourBank": 834.0, "yourProfit": 198.0}, {"n": 49, "xLabel": "BIH-QAT", "match": "Босния и Герцеговина — Катар", "date": "24.06.2026", "team1": {"name": "Босния и Герцеговина", "code": "BIH", "flagUrl": "https://flagcdn.com/w40/ba.png"}, "team2": {"name": "Катар", "code": "QAT", "flagUrl": "https://flagcdn.com/w40/qa.png"}, "friendBet": "Катар не забьёт", "friendCoef": 2.16, "friendBank": 316.0, "friendProfit": -100.0, "yourBet": "Босния и Герцеговина победит и ТМ > 2,5", "yourCoef": 1.85, "yourBank": 919.0, "yourProfit": 85.0}, {"n": 50, "xLabel": "MAR-HAI", "match": "Марокко — Гаити", "date": "25.06.2026", "team1": {"name": "Марокко", "code": "MAR", "flagUrl": "https://flagcdn.com/w40/ma.png"}, "team2": {"name": "Гаити", "code": "HAI", "flagUrl": "https://flagcdn.com/w40/ht.png"}, "friendBet": "Гаити забьёт", "friendCoef": 2.09, "friendBank": 425.0, "friendProfit": 109.0, "yourBet": "Первый тайм > 1,5 и ТМ > 3,5", "yourCoef": 3.04, "yourBank": 1123.0, "yourProfit": 204.0}, {"n": 51, "xLabel": "SCO-BRA", "match": "Шотландия — Бразилия", "date": "25.06.2026", "team1": {"name": "Шотландия", "code": "SCO", "flagUrl": "https://flagcdn.com/w40/gb-sct.png"}, "team2": {"name": "Бразилия", "code": "BRA", "flagUrl": "https://flagcdn.com/w40/br.png"}, "friendBet": "ТМ < 2,5", "friendCoef": 2.07, "friendBank": 325.0, "friendProfit": -100.0, "yourBet": "Цифры 1 в итоговом счёте не будет", "yourCoef": 1.97, "yourBank": 1220.0, "yourProfit": 97.0}, {"n": 52, "xLabel": "RSA-KOR", "match": "ЮАР — Южная Корея", "date": "25.06.2026", "team1": {"name": "ЮАР", "code": "RSA", "flagUrl": "https://flagcdn.com/w40/za.png"}, "team2": {"name": "Южная Корея", "code": "KOR", "flagUrl": "https://flagcdn.com/w40/kr.png"}, "friendBet": "0-2", "friendCoef": 7.6, "friendBank": 225.0, "friendProfit": -100.0, "yourBet": "П2 с Ф (-1,5)", "yourCoef": 2.07, "yourBank": 1120.0, "yourProfit": -100.0}, {"n": 53, "xLabel": "CZE-MEX", "match": "Чехия — Мексика", "date": "25.06.2026", "team1": {"name": "Чехия", "code": "CZE", "flagUrl": "https://flagcdn.com/w40/cz.png"}, "team2": {"name": "Мексика", "code": "MEX", "flagUrl": "https://flagcdn.com/w40/mx.png"}, "friendBet": "Обе забьют", "friendCoef": 1.82, "friendBank": 125.0, "friendProfit": -100.0, "yourBet": "Тотал Мексики в 1-м тайме < 0,5 (ЖК)", "yourCoef": 1.58, "yourBank": 1178.0, "yourProfit": 58.0}, {"n": 54, "xLabel": "ECU-GER", "match": "Эквадор — Германия", "date": "25.06.2026", "team1": {"name": "Эквадор", "code": "ECU", "flagUrl": "https://flagcdn.com/w40/ec.png"}, "team2": {"name": "Германия", "code": "GER", "flagUrl": "https://flagcdn.com/w40/de.png"}, "friendBet": "Тотал первого тайма > 2", "friendCoef": 2.06, "friendBank": 125.0, "friendProfit": 0.0, "yourBet": "1-й тайм > 0,5 и матч > 2,5", "yourCoef": 1.76, "yourBank": 1254.0, "yourProfit": 76.0}, {"n": 55, "xLabel": "CUW-CIV", "match": "Кюрасао — Кот д'Ивуар", "date": "25.06.2026", "team1": {"name": "Кюрасао", "code": "CUW", "flagUrl": "https://flagcdn.com/w40/cw.png"}, "team2": {"name": "Кот д'Ивуар", "code": "CIV", "flagUrl": "https://flagcdn.com/w40/ci.png"}, "friendBet": "Кюрасао забьёт", "friendCoef": 2.76, "friendBank": 25.0, "friendProfit": -100.0, "yourBet": "В 1-м тайме забьют меньше, чем во 2-м", "yourCoef": 1.95, "yourBank": 1154.0, "yourProfit": -100.0}, {"n": 56, "xLabel": "TUN-NED", "match": "Тунис — Нидерланды", "date": "26.06.2026", "team1": {"name": "Тунис", "code": "TUN", "flagUrl": "https://flagcdn.com/w40/tn.png"}, "team2": {"name": "Нидерланды", "code": "NED", "flagUrl": "https://flagcdn.com/w40/nl.png"}, "friendBet": "Обе забьют два и более", "friendCoef": 8.4, "friendBank": -75.0, "friendProfit": -100.0, "yourBet": "П2 с Ф (-3,5)", "yourCoef": 3.14, "yourBank": 1054.0, "yourProfit": -100.0}, {"n": 57, "xLabel": "JPN-SWE", "match": "Япония — Швеция", "date": "26.06.2026", "team1": {"name": "Япония", "code": "JPN", "flagUrl": "https://flagcdn.com/w40/jp.png"}, "team2": {"name": "Швеция", "code": "SWE", "flagUrl": "https://flagcdn.com/w40/se.png"}, "friendBet": "Япония одержит волевую победу", "friendCoef": 11.0, "friendBank": -175.0, "friendProfit": -100.0, "yourBet": "1-й тайм < 1,5 и матч > 2,5", "yourCoef": 3.82, "yourBank": 954.0, "yourProfit": -100.0}, {"n": 58, "xLabel": "TUR-USA", "match": "Турция — США", "date": "26.06.2026", "team1": {"name": "Турция", "code": "TUR", "flagUrl": "https://flagcdn.com/w40/tr.png"}, "team2": {"name": "США", "code": "USA", "flagUrl": "https://flagcdn.com/w40/us.png"}, "friendBet": "Cухая П2 и ТМ > 2,5", "friendCoef": 8.4, "friendBank": -275.0, "friendProfit": -100.0, "yourBet": "П", "yourCoef": 1.76, "yourBank": 854.0, "yourProfit": -100.0}, {"n": 59, "xLabel": "PAR-AUS", "match": "Парагвай — Австралия", "date": "26.06.2026", "team1": {"name": "Парагвай", "code": "PAR", "flagUrl": "https://flagcdn.com/w40/py.png"}, "team2": {"name": "Австралия", "code": "AUS", "flagUrl": "https://flagcdn.com/w40/au.png"}, "friendBet": "ОЗ и ТМ > 4,5", "friendCoef": 9.6, "friendBank": -375.0, "friendProfit": -100.0, "yourBet": "Ничья в первом тайме", "yourCoef": 1.73, "yourBank": 927.0, "yourProfit": 73.0}, {"n": 60, "xLabel": "NOR-FRA", "match": "Норвегия — Франция", "date": "26.06.2026", "team1": {"name": "Норвегия", "code": "NOR", "flagUrl": "https://flagcdn.com/w40/no.png"}, "team2": {"name": "Франция", "code": "FRA", "flagUrl": "https://flagcdn.com/w40/fr.png"}, "friendBet": "ОЗ и ТМ > 3.5", "friendCoef": 2.58, "friendBank": -217.0, "friendProfit": 158.0, "yourBet": "К. Мбаппе забьёт", "yourCoef": 2.7, "yourBank": 827.0, "yourProfit": -100.0}, {"n": 61, "xLabel": "SEN-IRQ", "match": "Сенегал — Ирак", "date": "26.06.2026", "team1": {"name": "Сенегал", "code": "SEN", "flagUrl": "https://flagcdn.com/w40/sn.png"}, "team2": {"name": "Ирак", "code": "IRQ", "flagUrl": "https://flagcdn.com/w40/iq.png"}, "friendBet": "Сухая П1", "friendCoef": 1.89, "friendBank": -128.0, "friendProfit": 89.0, "yourBet": "Сенегал победит в 1-м тайме и в матче, и ТМ > 2,5", "yourCoef": 2.21, "yourBank": 948.0, "yourProfit": 121.0}, {"n": 62, "xLabel": "CPV-KSA", "match": "Кабо-Верде — Саудовская Аравия", "date": "27.06.2026", "team1": {"name": "Кабо-Верде", "code": "CPV", "flagUrl": "https://flagcdn.com/w40/cv.png"}, "team2": {"name": "Саудовская Аравия", "code": "KSA", "flagUrl": "https://flagcdn.com/w40/sa.png"}, "friendBet": "0-0 в первом тайме", "friendCoef": 2.5, "friendBank": 22.0, "friendProfit": 150.0, "yourBet": "П1", "yourCoef": 2.68, "yourBank": 848.0, "yourProfit": -100.0}, {"n": 63, "xLabel": "URU-ESP", "match": "Уругвай — Испания", "date": "27.06.2026", "team1": {"name": "Уругвай", "code": "URU", "flagUrl": "https://flagcdn.com/w40/uy.png"}, "team2": {"name": "Испания", "code": "ESP", "flagUrl": "https://flagcdn.com/w40/es.png"}, "friendBet": "Ничья", "friendCoef": 3.54, "friendBank": -78.0, "friendProfit": -100.0, "yourBet": "Тотал 1-го тайма < 1,5 и ТМ > 2,5", "yourCoef": 4.15, "yourBank": 748.0, "yourProfit": -100.0}, {"n": 64, "xLabel": "NZL-BEL", "match": "Новая Зеландия — Бельгия", "date": "27.06.2026", "team1": {"name": "Новая Зеландия", "code": "NZL", "flagUrl": "https://flagcdn.com/w40/nz.png"}, "team2": {"name": "Бельгия", "code": "BEL", "flagUrl": "https://flagcdn.com/w40/be.png"}, "friendBet": "Р. Лукаку забьёт", "friendCoef": 1.7, "friendBank": -8.0, "friendProfit": 70.0, "yourBet": "П1 по владению с Ф (-26,5)", "yourCoef": 1.85, "yourBank": 648.0, "yourProfit": -100.0}, {"n": 65, "xLabel": "EGY-IRN", "match": "Египет — Иран", "date": "27.06.2026", "team1": {"name": "Египет", "code": "EGY", "flagUrl": "https://flagcdn.com/w40/eg.png"}, "team2": {"name": "Иран", "code": "IRN", "flagUrl": "https://flagcdn.com/w40/ir.png"}, "friendBet": "П1 и М. Салах забьёт", "friendCoef": 7.94, "friendBank": -108.0, "friendProfit": -100.0, "yourBet": "0-0 в первом тайме", "yourCoef": 2.15, "yourBank": 548.0, "yourProfit": -100.0}, {"n": 66, "xLabel": "CRO-GHA", "match": "Хорватия — Гана", "date": "28.06.2026", "team1": {"name": "Хорватия", "code": "CRO", "flagUrl": "https://flagcdn.com/w40/hr.png"}, "team2": {"name": "Гана", "code": "GHA", "flagUrl": "https://flagcdn.com/w40/gh.png"}, "friendBet": "Удаление будет", "friendCoef": 5.8, "friendBank": -208.0, "friendProfit": -100.0, "yourBet": "ТМ < 2,5", "yourCoef": 1.6, "yourBank": 448.0, "yourProfit": -100.0}, {"n": 67, "xLabel": "PAN-ENG", "match": "Панама — Англия", "date": "28.06.2026", "team1": {"name": "Панама", "code": "PAN", "flagUrl": "https://flagcdn.com/w40/pa.png"}, "team2": {"name": "Англия", "code": "ENG", "flagUrl": "https://flagcdn.com/w40/gb-eng.png"}, "friendBet": "П2 в обоих таймах", "friendCoef": 1.9, "friendBank": -308.0, "friendProfit": -100.0, "yourBet": "Тотал первого тайма < 1,5 и ТМ < 3,5", "yourCoef": 2.19, "yourBank": 567.0, "yourProfit": 119.0}, {"n": 68, "xLabel": "COD-UZB", "match": "ДР Конго — Узбекистан", "date": "28.06.2026", "team1": {"name": "ДР Конго", "code": "COD", "flagUrl": "https://flagcdn.com/w40/cd.png"}, "team2": {"name": "Узбекистан", "code": "UZB", "flagUrl": "https://flagcdn.com/w40/uz.png"}, "friendBet": "Первый тайм: 0-0", "friendCoef": 2.62, "friendBank": -408.0, "friendProfit": -100.0, "yourBet": "П1", "yourCoef": 1.68, "yourBank": 635.0, "yourProfit": 68.0}, {"n": 69, "xLabel": "COL-POR", "match": "Колумбия — Португалия", "date": "28.06.2026", "team1": {"name": "Колумбия", "code": "COL", "flagUrl": "https://flagcdn.com/w40/co.png"}, "team2": {"name": "Португалия", "code": "POR", "flagUrl": "https://flagcdn.com/w40/pt.png"}, "friendBet": "1x\n0-2", "friendCoef": 0, "friendBank": -399.0, "friendProfit": 9.0, "yourBet": "ОЗ", "yourCoef": 1.65, "yourBank": 535.0, "yourProfit": -100.0}, {"n": 70, "xLabel": "JOR-ARG", "match": "Иордания — Аргентина", "date": "28.06.2026", "team1": {"name": "Иордания", "code": "JOR", "flagUrl": "https://flagcdn.com/w40/jo.png"}, "team2": {"name": "Аргентина", "code": "ARG", "flagUrl": "https://flagcdn.com/w40/ar.png"}, "friendBet": "П2 в обоих таймах", "friendCoef": 1.99, "friendBank": -499.0, "friendProfit": -100.0, "yourBet": "ОЗ — нет", "yourCoef": 1.48, "yourBank": 435.0, "yourProfit": -100.0}, {"n": 71, "xLabel": "ALG-AUT", "match": "Алжир — Австрия", "date": "28.06.2026", "team1": {"name": "Алжир", "code": "ALG", "flagUrl": "https://flagcdn.com/w40/dz.png"}, "team2": {"name": "Австрия", "code": "AUT", "flagUrl": "https://flagcdn.com/w40/at.png"}, "friendBet": "ОЗ", "friendCoef": 2.19, "friendBank": -380.0, "friendProfit": 119.0, "yourBet": "Ничья в первом тайме, ничья в матче", "yourCoef": 2.56, "yourBank": 591.0, "yourProfit": 156.0}, {"n": 72, "xLabel": "RSA-CAN", "match": "ЮАР — Канада", "date": "28.06.2026", "team1": {"name": "ЮАР", "code": "RSA", "flagUrl": "https://flagcdn.com/w40/za.png"}, "team2": {"name": "Канада", "code": "CAN", "flagUrl": "https://flagcdn.com/w40/ca.png"}, "friendBet": "ЮАР забьёт", "friendCoef": 2.38, "friendBank": -480.0, "friendProfit": -100.0, "yourBet": "П1 с Ф (1)\nТотал угловых Канады > 5,5", "yourCoef": 0, "yourBank": 541.0, "yourProfit": -50.0}, {"n": 73, "xLabel": "BRA-JPN", "match": "Бразилия — Япония", "date": "29.06.2026", "team1": {"name": "Бразилия", "code": "BRA", "flagUrl": "https://flagcdn.com/w40/br.png"}, "team2": {"name": "Япония", "code": "JPN", "flagUrl": "https://flagcdn.com/w40/jp.png"}, "friendBet": "Счёт 1-1 по ходу матча", "friendCoef": 2.62, "friendBank": -318.0, "friendProfit": 162.0, "yourBet": "ОЗ\nВолевая победа будет", "yourCoef": 0, "yourBank": 1002.0, "yourProfit": 461.0}, {"n": 74, "xLabel": "GER-PAR", "match": "Германия — Парагвай", "date": "29.06.2026", "team1": {"name": "Германия", "code": "GER", "flagUrl": "https://flagcdn.com/w40/de.png"}, "team2": {"name": "Парагвай", "code": "PAR", "flagUrl": "https://flagcdn.com/w40/py.png"}, "friendBet": "Дубль будет", "friendCoef": 3.4, "friendBank": -418.0, "friendProfit": -100.0, "yourBet": "П1 с Ф (-1)", "yourCoef": 1.55, "yourBank": 902.0, "yourProfit": -100.0}, {"n": 75, "xLabel": "NED-MAR", "match": "Нидерланды — Марокко", "date": "29.06.2026", "team1": {"name": "Нидерланды", "code": "NED", "flagUrl": "https://flagcdn.com/w40/nl.png"}, "team2": {"name": "Марокко", "code": "MAR", "flagUrl": "https://flagcdn.com/w40/ma.png"}, "friendBet": "Кол-во комп.минут в первом тайме > 4.5", "friendCoef": 2.0, "friendBank": -318.0, "friendProfit": 100.0, "yourBet": "ОЗ и ТМ > 2,5 и проход Нидерландов", "yourCoef": 4.03, "yourBank": 802.0, "yourProfit": -100.0}, {"n": 76, "xLabel": "CIV-NOR", "match": "Кот д'Ивуар — Норвегия", "date": "30.06.2026", "team1": {"name": "Кот д'Ивуар", "code": "CIV", "flagUrl": "https://flagcdn.com/w40/ci.png"}, "team2": {"name": "Норвегия", "code": "NOR", "flagUrl": "https://flagcdn.com/w40/no.png"}, "friendBet": "Штанга/перекладина будет", "friendCoef": 2.29, "friendBank": -418.0, "friendProfit": -100.0, "yourBet": "Кот д'Ивуар забьёт", "yourCoef": 2.15, "yourBank": 917.0, "yourProfit": 115.0}, {"n": 77, "xLabel": "FRA-SWE", "match": "Франция — Швеция", "date": "01.07.2026", "team1": {"name": "Франция", "code": "FRA", "flagUrl": "https://flagcdn.com/w40/fr.png"}, "team2": {"name": "Швеция", "code": "SWE", "flagUrl": "https://flagcdn.com/w40/se.png"}, "friendBet": "Франция пробьёт пенальти", "friendCoef": 3.4, "friendBank": -518.0, "friendProfit": -100.0, "yourBet": "Обе забьют и ТМ > 2,5\nАвтогол будет", "yourCoef": 0, "yourBank": 767.0, "yourProfit": -150.0}, {"n": 78, "xLabel": "MEX-ECU", "match": "Мексика — Эквадор", "date": "01.07.2026", "team1": {"name": "Мексика", "code": "MEX", "flagUrl": "https://flagcdn.com/w40/mx.png"}, "team2": {"name": "Эквадор", "code": "ECU", "flagUrl": "https://flagcdn.com/w40/ec.png"}, "friendBet": "Победитель определится в доп.время", "friendCoef": 2.0, "friendBank": -618.0, "friendProfit": -100.0, "yourBet": "Итоговая победа: Мексика", "yourCoef": 1.54, "yourBank": 821.0, "yourProfit": 54.0}, {"n": 79, "xLabel": "ENG-COD", "match": "Англия — ДР Конго", "date": "01.07.2026", "team1": {"name": "Англия", "code": "ENG", "flagUrl": "https://flagcdn.com/w40/gb-eng.png"}, "team2": {"name": "ДР Конго", "code": "COD", "flagUrl": "https://flagcdn.com/w40/cd.png"}, "friendBet": "Тотал первого тайма < 0.5", "friendCoef": 2.98, "friendBank": -718.0, "friendProfit": -100.0, "yourBet": "Тотал матча > 2,5", "yourCoef": 1.78, "yourBank": 899.0, "yourProfit": 78.0}, {"n": 80, "xLabel": "BEL-SEN", "match": "Бельгия — Сенегал", "date": "01.07.2026", "team1": {"name": "Бельгия", "code": "BEL", "flagUrl": "https://flagcdn.com/w40/be.png"}, "team2": {"name": "Сенегал", "code": "SEN", "flagUrl": "https://flagcdn.com/w40/sn.png"}, "friendBet": "ОЗ и < 2,5", "friendCoef": 5.4, "friendBank": -818.0, "friendProfit": -100.0, "yourBet": "Итоговая победа: Сенегал", "yourCoef": 2.5, "yourBank": 799.0, "yourProfit": -100.0}, {"n": 81, "xLabel": "USA-BIH", "match": "США — Босния и Герцеговина", "date": "02.07.2026", "team1": {"name": "США", "code": "USA", "flagUrl": "https://flagcdn.com/w40/us.png"}, "team2": {"name": "Босния и Герцеговина", "code": "BIH", "flagUrl": "https://flagcdn.com/w40/ba.png"}, "friendBet": "1-0", "friendCoef": 6.8, "friendBank": -918.0, "friendProfit": -100.0, "yourBet": "Тотал США > 2,5", "yourCoef": 2.34, "yourBank": 699.0, "yourProfit": -100.0}, {"n": 82, "xLabel": "ESP-AUT", "match": "Испания — Австрия", "date": "02.07.2026", "team1": {"name": "Испания", "code": "ESP", "flagUrl": "https://flagcdn.com/w40/es.png"}, "team2": {"name": "Австрия", "code": "AUT", "flagUrl": "https://flagcdn.com/w40/at.png"}, "friendBet": "Забьёт игрок, вышедший на замену", "friendCoef": 2.56, "friendBank": -1018.0, "friendProfit": -100.0, "yourBet": "П2 (фолы)", "yourCoef": 1.97, "yourBank": 796.0, "yourProfit": 97.0}, {"n": 83, "xLabel": "POR-CRO", "match": "Португалия — Хорватия", "date": "03.07.2026", "team1": {"name": "Португалия", "code": "POR", "flagUrl": "https://flagcdn.com/w40/pt.png"}, "team2": {"name": "Хорватия", "code": "CRO", "flagUrl": "https://flagcdn.com/w40/hr.png"}, "friendBet": "x2 и ТМ < 2,5", "friendCoef": 2.9, "friendBank": -1118.0, "friendProfit": -100.0, "yourBet": "Волевая победа будет", "yourCoef": 6.8, "yourBank": 1376.0, "yourProfit": 580.0}, {"n": 84, "xLabel": "SUI-ALG", "match": "Швейцария — Алжир", "date": "03.07.2026", "team1": {"name": "Швейцария", "code": "SUI", "flagUrl": "https://flagcdn.com/w40/ch.png"}, "team2": {"name": "Алжир", "code": "ALG", "flagUrl": "https://flagcdn.com/w40/dz.png"}, "friendBet": "Автогол будет", "friendCoef": 8.4, "friendBank": -1218.0, "friendProfit": -100.0, "yourBet": "Первый гол забьют раньше 40,5 минуты", "yourCoef": 1.61, "yourBank": 1437.0, "yourProfit": 61.0}, {"n": 85, "xLabel": "AUS-EGY", "match": "Австралия — Египет", "date": "03.07.2026", "team1": {"name": "Австралия", "code": "AUS", "flagUrl": "https://flagcdn.com/w40/au.png"}, "team2": {"name": "Египет", "code": "EGY", "flagUrl": "https://flagcdn.com/w40/eg.png"}, "friendBet": "Забьёт ровно одна команда", "friendCoef": 2.11, "friendBank": -1318.0, "friendProfit": -100.0, "yourBet": "Ничья только в первом тайме", "yourCoef": 3.34, "yourBank": 1337.0, "yourProfit": -100.0}, {"n": 86, "xLabel": "ARG-CPV", "match": "Аргентина — Кабо-Верде", "date": "04.07.2026", "team1": {"name": "Аргентина", "code": "ARG", "flagUrl": "https://flagcdn.com/w40/ar.png"}, "team2": {"name": "Кабо-Верде", "code": "CPV", "flagUrl": "https://flagcdn.com/w40/cv.png"}, "friendBet": "НП1", "friendCoef": 3.74, "friendBank": -1418.0, "friendProfit": -100.0, "yourBet": "Первый гол забьют позже 23,5 минуты", "yourCoef": 1.89, "yourBank": 1426.0, "yourProfit": 89.0}, {"n": 87, "xLabel": "COL-GHA", "match": "Колумбия — Гана", "date": "04.07.2026", "team1": {"name": "Колумбия", "code": "COL", "flagUrl": "https://flagcdn.com/w40/co.png"}, "team2": {"name": "Гана", "code": "GHA", "flagUrl": "https://flagcdn.com/w40/gh.png"}, "friendBet": "Обе забьют", "friendCoef": 2.29, "friendBank": -1518.0, "friendProfit": -100.0, "yourBet": "П2 с Ф (+1,5)", "yourCoef": 1.49, "yourBank": 1475.0, "yourProfit": 49.0}, {"n": 88, "xLabel": "CAN-MAR", "match": "Канада — Марокко", "date": "04.07.2026", "team1": {"name": "Канада", "code": "CAN", "flagUrl": "https://flagcdn.com/w40/ca.png"}, "team2": {"name": "Марокко", "code": "MAR", "flagUrl": "https://flagcdn.com/w40/ma.png"}, "friendBet": "2-2 и проход Канады", "friendCoef": 62.28, "friendBank": -1618.0, "friendProfit": -100.0, "yourBet": "Обе забьют", "yourCoef": 1.93, "yourBank": 1375.0, "yourProfit": -100.0}, {"n": 89, "xLabel": "PAR-FRA", "match": "Парагвай — Франция", "date": "05.07.2026", "team1": {"name": "Парагвай", "code": "PAR", "flagUrl": "https://flagcdn.com/w40/py.png"}, "team2": {"name": "Франция", "code": "FRA", "flagUrl": "https://flagcdn.com/w40/fr.png"}, "friendBet": "2026-03-01 00:00:00", "friendCoef": 12.5, "friendBank": -1718.0, "friendProfit": -100.0, "yourBet": "У. Дембеле забьёт", "yourCoef": 2.4, "yourBank": 1275.0, "yourProfit": -100.0}, {"n": 90, "xLabel": "BRA-NOR", "match": "Бразилия — Норвегия", "date": "05.07.2026", "team1": {"name": "Бразилия", "code": "BRA", "flagUrl": "https://flagcdn.com/w40/br.png"}, "team2": {"name": "Норвегия", "code": "NOR", "flagUrl": "https://flagcdn.com/w40/no.png"}, "friendBet": "1-1 и проход Норвегии", "friendCoef": 22.18, "friendBank": -1818.0, "friendProfit": -100.0, "yourBet": "В. Жуниор забьёт", "yourCoef": 2.5, "yourBank": 1175.0, "yourProfit": -100.0}, {"n": 91, "xLabel": "MEX-ENG", "match": "Мексика — Англия", "date": "06.07.2026", "team1": {"name": "Мексика", "code": "MEX", "flagUrl": "https://flagcdn.com/w40/mx.png"}, "team2": {"name": "Англия", "code": "ENG", "flagUrl": "https://flagcdn.com/w40/gb-eng.png"}, "friendBet": "2026-01-02 00:00:00", "friendCoef": 12.0, "friendBank": -1918.0, "friendProfit": -100.0, "yourBet": "Итоговая победа: Англия\nХ. Киньонес забьёт", "yourCoef": 0, "yourBank": 1426.0, "yourProfit": 251.0}, {"n": 92, "xLabel": "POR-ESP", "match": "Португалия — Испания", "date": "06.07.2026", "team1": {"name": "Португалия", "code": "POR", "flagUrl": "https://flagcdn.com/w40/pt.png"}, "team2": {"name": "Испания", "code": "ESP", "flagUrl": "https://flagcdn.com/w40/es.png"}, "friendBet": "2026-02-01 00:00:00", "friendCoef": 8.8, "friendBank": -2018.0, "friendProfit": -100.0, "yourBet": "Итоговая победа: Португалия", "yourCoef": 2.84, "yourBank": 1326.0, "yourProfit": -100.0}, {"n": 93, "xLabel": "USA-BEL", "match": "США — Бельгия", "date": "07.07.2026", "team1": {"name": "США", "code": "USA", "flagUrl": "https://flagcdn.com/w40/us.png"}, "team2": {"name": "Бельгия", "code": "BEL", "flagUrl": "https://flagcdn.com/w40/be.png"}, "friendBet": "2-0", "friendCoef": 16.0, "friendBank": -2118.0, "friendProfit": -100.0, "yourBet": "Итоговая победа: США", "yourCoef": 1.78, "yourBank": 1226.0, "yourProfit": -100.0}, {"n": 94, "xLabel": "ARG-EGY", "match": "Аргентина — Египет", "date": "07.07.2026", "team1": {"name": "Аргентина", "code": "ARG", "flagUrl": "https://flagcdn.com/w40/ar.png"}, "team2": {"name": "Египет", "code": "EGY", "flagUrl": "https://flagcdn.com/w40/eg.png"}, "friendBet": "2026-01-04 00:00:00", "friendCoef": 24.0, "friendBank": -2218.0, "friendProfit": -100.0, "yourBet": "Аргентина пропустит, но выиграет\nДубль Л. Месси", "yourCoef": 0, "yourBank": 1440.0, "yourProfit": 214.0}, {"n": 95, "xLabel": "SUI-COL", "match": "Швейцария — Колумбия", "date": "07.07.2026", "team1": {"name": "Швейцария", "code": "SUI", "flagUrl": "https://flagcdn.com/w40/ch.png"}, "team2": {"name": "Колумбия", "code": "COL", "flagUrl": "https://flagcdn.com/w40/co.png"}, "friendBet": "1-1 и проход Колумбии", "friendCoef": 10.53, "friendBank": -2318.0, "friendProfit": -100.0, "yourBet": "Проход Колумбии\nНичья", "yourCoef": 0, "yourBank": 1443.0, "yourProfit": 3.0}];

function profitClass(value) {
  if (value > 0) return "tooltip-profit-plus";
  if (value < 0) return "tooltip-profit-minus";
  return "tooltip-profit-zero";
}

function formatNumber(value) {
  const rounded = Math.round(Number(value) * 10) / 10;
  if (Number.isInteger(rounded)) return String(rounded);
  return String(rounded).replace(".", ",");
}

function formatCoef(value) {
  if (value === null || value === undefined || value === "" || Number(value) === 0) {
    return "—";
  }

  return String(value).replace(".", ",");
}

function formatProfit(value) {
  const text = formatNumber(value);
  if (value > 0) return `+${text}`;
  if (value === 0) return "+0";
  return text;
}

function createCustomTooltip() {
  let tooltip = document.querySelector(".custom-tooltip");

  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.className = "custom-tooltip";
    tooltip.style.display = "none";
    document.body.appendChild(tooltip);
  }

  return tooltip;
}

function renderFlag(url) {
  if (!url) return "";
  return `<img class="tooltip-flag" src="${url}" alt="">`;
}

function showCustomTooltip(eventData, player) {
  const point = eventData.points[0];
  const d = chartData[point.pointIndex];
  const isGerzog = player === "Gerzog";

  const bet = isGerzog ? d.friendBet : d.yourBet;
  const coef = isGerzog ? d.friendCoef : d.yourCoef;
  const profit = isGerzog ? d.friendProfit : d.yourProfit;
  const bank = isGerzog ? d.friendBank : d.yourBank;

  const tooltip = createCustomTooltip();
  tooltip.className = `custom-tooltip ${isGerzog ? "gerzog" : "yukon"}`;

  tooltip.innerHTML = `
  <div class="tooltip-match">
    <span class="tooltip-team">
      ${renderFlag(d.team1.flagUrl)}
      <span class="tooltip-team-name">${d.team1.name}</span>
    </span>

    <span class="tooltip-dash">—</span>

    <span class="tooltip-team">
      ${renderFlag(d.team2.flagUrl)}
      <span class="tooltip-team-name">${d.team2.name}</span>
    </span>
  </div>

  <div class="tooltip-bet">${bet}</div>

  <div class="tooltip-coef">
    ${formatCoef(coef)}
    <span class="${profitClass(profit)}">(${formatProfit(profit)})</span>
  </div>

  <div class="tooltip-bank">Итоговый банк: ${formatNumber(bank)}</div>
  ${d.date ? `<div class="tooltip-date">${d.date}</div>` : ""}
`;

  tooltip.style.display = "block";

  const offset = 14;
  const margin = 12;
  tooltip.style.left = "0px";
  tooltip.style.top = "0px";

  const rect = tooltip.getBoundingClientRect();
  let x = eventData.event.clientX + offset;
  let y = eventData.event.clientY + offset;

  x = Math.min(x, window.innerWidth - rect.width - margin);
  y = Math.min(y, window.innerHeight - rect.height - margin);
  x = Math.max(x, margin);
  y = Math.max(y, margin);

  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}

function hideCustomTooltip() {
  const tooltip = document.querySelector(".custom-tooltip");
  if (tooltip) tooltip.style.display = "none";
}

function renderBankChart() {
  const chart = document.getElementById("bank-chart");
  if (!chart || typeof Plotly === "undefined") return;

  const x = chartData.map(d => d.n);
  const tickText = chartData.map(d => d.xLabel);

  const gerzog = {
    x,
    y: chartData.map(d => d.friendBank),
    mode: "lines+markers",
    name: "Gerzog",
    hoverinfo: "none",
    hovertemplate: "",
    line: { color: "#0000ff", width: 3 },
    marker: { color: "#0000ff", size: 8 }
  };

  const yukon = {
    x,
    y: chartData.map(d => d.yourBank),
    mode: "lines+markers",
    name: "Yukon",
    hoverinfo: "none",
    hovertemplate: "",
    line: { color: "#ff0000", width: 3 },
    marker: { color: "#ff0000", size: 8 }
  };

  const layout = {
    dragmode: "pan",
    paper_bgcolor: "#ffffff",
    plot_bgcolor: "#ffffff",
    font: {
      family: "Times New Roman, Times, serif",
      size: 15,
      color: "#000000"
    },
    margin: { l: 70, r: 35, t: 35, b: 95 },
    hovermode: "closest",
    legend: {
      orientation: "h",
      x: 0.5,
      xanchor: "center",
      y: 1.08,
      font: {
        size: 18,
        color: "#000000"
      }
    },
    xaxis: {
      title: "",
      tickmode: "array",
      tickvals: x,
      ticktext: tickText,
      tickangle: -55,
      tickfont: { size: 11, color: "#000000" },
      linecolor: "#000000",
      tickcolor: "#000000",
      gridcolor: "rgba(0,0,0,0.18)",
      zeroline: false,
      fixedrange: false,
      range: [-0.5, 95.5]
    },
    yaxis: {
        title: {
            text: "Банк",
            font: { size: 20, color: "#000000" }
        },
        tickfont: { size: 15, color: "#000000" },
        linecolor: "#000000",
        tickcolor: "#000000",
        gridcolor: "rgba(0,0,0,0.18)",
        zeroline: false,
        fixedrange: true
    },
    shapes: [
      {
        type: "line",
        xref: "paper",
        x0: 0,
        x1: 1,
        yref: "y",
        y0: 1000,
        y1: 1000,
        line: { color: "rgba(255,255,255,0.65)", width: 1.4, dash: "dash" }
      },
      {
        type: "line",
        xref: "x",
        x0: 23.5,
        x1: 23.5,
        yref: "paper",
        y0: 0,
        y1: 1,
        line: { color: "rgba(0,0,0,0.55)", width: 1.4, dash: "dash" }
      },
    {
      type: "line",
      xref: "x",
      x0: 47.5,
      x1: 47.5,
      yref: "paper",
      y0: 0,
      y1: 1,
      line: { color: "rgba(0,0,0,0.55)", width: 1.4, dash: "dash" }
    },
    {
      type: "line",
      xref: "x",
      x0: 71.5,
      x1: 71.5,
      yref: "paper",
      y0: 0,
      y1: 1,
      line: { color: "rgba(0,0,0,0.55)", width: 1.4, dash: "dash" }
    }
    ],
    annotations: [
      {
        xref: "paper",
        x: 0.01,
        yref: "y",
        y: 1000,
        text: "Стартовый банк",
        showarrow: false,
        yshift: 13,
        font: { size: 15, color: "#000000" }
      },
      {
        xref: "x",
        x: 23.7,
        yref: "paper",
        y: 1,
        text: "Второй тур",
        showarrow: false,
        xanchor: "left",
        yshift: 16,
        font: { size: 16, color: "#000000" }
      },
    {
      xref: "x",
      x:47.7,
      yref: "paper",
      y: 1,
      text: "Третий тур",
      showarrow: false,
      xanchor: "left",
      yshift: 16,
      font: { size: 16, color: "#000000" }
    },
    {
      xref: "x",
      x:71.7,
      yref: "paper",
      y: 1,
      text: "1/16 финала",
      showarrow: false,
      xanchor: "left",
      yshift: 16,
      font: { size: 16, color: "#000000" }
    }
    ]
  };

  const config = {
    responsive: true,
    scrollZoom: true,
    doubleClick: false,
    displaylogo: false,
    modeBarButtonsToRemove: ["lasso2d", "select2d", "autoScale2d"]
  };

    Plotly.newPlot(chart, [gerzog, yukon], layout, config).then(() => {
      chart.on("plotly_hover", (eventData) => {
        const player = eventData.points[0].data.name;
        showCustomTooltip(eventData, player);
      });

      chart.on("plotly_unhover", hideCustomTooltip);

        chart.on("plotly_doubleclick", () => {
          const fullLayout = chart._fullLayout;
          if (!fullLayout || !fullLayout.xaxis || !fullLayout.xaxis.range) return false;

          const range = fullLayout.xaxis.range;
          const left = Number(range[0]);
          const right = Number(range[1]);
          const center = (left + right) / 2;
          const currentWidth = right - left;

          const newWidth = Math.max(5, currentWidth * 0.7);
          const newLeft = center - newWidth / 2;
          const newRight = center + newWidth / 2;

          Plotly.relayout(chart, {
            "xaxis.range": [newLeft, newRight]
          });

          return false;
        });
    });
}

document.addEventListener("DOMContentLoaded", renderBankChart);

let bankSvgPanZoom = null;
let bankSvgLoaded = false;

async function initBankSvgViewer() {
const details = document.querySelector(".svg-details");
const container = document.getElementById("svg-container");
const fullscreenBtn = document.getElementById("svg-fullscreen-btn");

if (!details || !container) return;

if (fullscreenBtn) {
  fullscreenBtn.addEventListener("click", async () => {
    if (!document.fullscreenElement) {
      await container.requestFullscreen();
      fullscreenBtn.title = document.fullscreenElement
          ? "Выйти из полного экрана"
          : "На весь экран";
    } else {
      await document.exitFullscreen();
      fullscreenBtn.textContent = "На весь экран";
    }

    setTimeout(() => {
      if (bankSvgPanZoom) {
        bankSvgPanZoom.resize();
        bankSvgPanZoom.fit();
        bankSvgPanZoom.center();
      }
    }, 100);
  });

  document.addEventListener("fullscreenchange", () => {
    fullscreenBtn.textContent = document.fullscreenElement
      ? "Выйти из полного экрана"
      : "На весь экран";

    setTimeout(() => {
      if (bankSvgPanZoom) {
        bankSvgPanZoom.resize();
        bankSvgPanZoom.fit();
        bankSvgPanZoom.center();
      }
    }, 100);
  });
}

  async function loadBankSvg() {
    if (bankSvgLoaded) return;

    bankSvgLoaded = true;
    container.innerHTML = '<div class="svg-loading">Загрузка SVG...</div>';

    try {
      const response = await fetch("assets/bank_full.svg");

      if (!response.ok) {
        throw new Error("Не удалось загрузить SVG: " + response.status);
      }

      const svgText = await response.text();
      container.innerHTML = svgText;

      const svg = container.querySelector("svg");
      if (!svg) throw new Error("В файле не найден тег svg");

      svg.removeAttribute("width");
      svg.removeAttribute("height");
      svg.style.display = "block";

      bankSvgPanZoom = svgPanZoom(svg, {
        zoomEnabled: true,
        controlIconsEnabled: true,
        mouseWheelZoomEnabled: false,
        fit: false,
        center: false,
        minZoom: 0.2,
        maxZoom: 25
      });

      setTimeout(() => {
        bankSvgPanZoom.resize();
        bankSvgPanZoom.fit();
        bankSvgPanZoom.center();
      }, 100);

    } catch (error) {
      console.error(error);
      container.innerHTML = '<div class="svg-loading">Не удалось загрузить SVG</div>';
      bankSvgLoaded = false;
    }
  }

  details.addEventListener("toggle", () => {
    if (details.open) loadBankSvg();
  });

  if (details.open) loadBankSvg();
}

document.addEventListener("DOMContentLoaded", initBankSvgViewer);
console.log("SVG viewer script loaded");
