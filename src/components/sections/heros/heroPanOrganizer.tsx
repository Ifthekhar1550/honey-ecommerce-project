import { useTranslation } from "react-i18next";
const HeroPanOrganizer = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-[url('/images/pan-organizer/hero-bg.png')] bg-cover bg-no-repeat lg:py-[253px] py-[150px] lg:px-[57px] px-[15px] mb-20">
            <div className="text-muted-foreground max-w-[567px]">
                <h1 className="lg:text-[100px] md:text-[80px] text-7xl font-italianno">{t("pan_Organizer")}</h1>
                <p className="mt-[26px] lg:text-[32px] md:text-[26px] text-2xl font-bold opacity-60">{t("pan_details")}</p>
            </div>
        </section>
    )
}

export default HeroPanOrganizer