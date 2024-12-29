/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Указывает на статический экспорт
    trailingSlash: true, // Добавляет завершающий слэш к URL
    images: {
        unoptimized: true, // Полностью отключает оптимизацию изображений
    },
};

export default nextConfig;
