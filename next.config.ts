import type { NextConfig } from "next";

module.exports = {
    // Указываем подкаталог, например, если ваш репозиторий называется `food-for-happiness`, то:
    basePath: '/foodforkiss',
    assetPrefix: '/foodforkiss/',

    // Разрешаем использование статического экспорта
    trailingSlash: true,
};

const nextConfig: NextConfig = {
    output: 'export',
};

export default nextConfig;
