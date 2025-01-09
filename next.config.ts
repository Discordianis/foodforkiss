/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Указывает на статический экспорт

    images: {
        unoptimized: true, // Полностью отключает оптимизацию изображений
    },

};

export default nextConfig;
