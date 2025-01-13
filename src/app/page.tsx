import HomeButtons from "@/features/HomeButtons/HomeButtons";

export default function Home() {

    return (
        <main className="main_page">
            <div className={'flex flex-col justify-center items-center text-center text-lg'}>
                <span>У вас спросили, чего хотите на ужин, но не можете ничего придумать? Что ж, лучше доверьте это дело вашей пассии, ведь она наверняка устала дожидаться ответа.</span>
                <span>Просто гляньте в меню, что готов приготовить для вас ваш партнёр и за какую цену.</span>
            </div>
            <HomeButtons />
        </main>
    );
}
