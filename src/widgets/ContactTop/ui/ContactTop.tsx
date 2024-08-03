export const ContactTop = () => {
    return (
        <section className="contacts dark_text single_page">
            <div className="section_wrap">
                <h1 className="block_title">
                    Контакты
                </h1>
                <div className="contacts_block">
                    <div className="contacts_block_top">
                        <div className="contacts_block_item">
                            <div className="contacts_block_title">Адрес</div>
                            Москва, Кутузовский проспект, 1/7
                        </div>
                        <div className="contacts_block_item">
                            <div className="contacts_block_title">Телефон</div>
                            <a href="tel:+7 499 322 35 17">+7 499 322 35 17</a>
                        </div>
                        <div className="contacts_block_item">
                            <div className="contacts_block_title">Email</div>
                            <a href="mailto:info@point-design.ru">info@point-design.ru</a>
                        </div>
                    </div>
                    <div className="contacts_block_map" id="map">
                    </div>
                </div>
            </div>
        </section>
    )
}