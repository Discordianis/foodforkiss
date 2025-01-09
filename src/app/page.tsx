import Link from "next/link";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col justify-center gap-8 row-start-2 items-center bg-black/40 rounded-lg p-3">
                <div className={'flex flex-col justify-center items-center text-center text-lg'}>
                    <span>У вас спросили, чего хотите на ужин, но не можете ничего придумать? Что ж, лучше доверьте это дело вашей пассии, ведь она наверняка устала дожидаться ответа.</span>
                    <span>Просто гляньте в меню, что готов приготовить для вас ваш партнёр и за какую цену.</span>
                </div>
                <div className={'flex flex-col justify-center items-center'}>
                    <span className={'text-lg'}>Но для начала...</span>
                    <Link href={'/login'} className={'button_link'}>
                        Войдите в аккаунт
                    </Link>
                </div>
            </main>
        </div>
    );
}
