// Список сайтов, которым мы разрешаем обращаться к серверу
const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'http://localhost:3005',
    'http://localhost:3001'
];

// Функция, которая принимает объекты req (информация о запросе),
// res (объект ответа) и функцию next (для запуска следующего миддлвара)
function cors(req, res, next) {
    const { origin } = req.headers; // Смотрим, кто стучится к серверу
    if (allowedCors.includes(origin)) { // Если это один из разрешенных сайтов,
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-type,Authorization,Accept,X-Custom-Header');// разрешаем доступ
    }

    next(); // Идём дальше, не задерживаем очередь
}

module.exports = cors;