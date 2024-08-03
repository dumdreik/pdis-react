export const ContactForm = () => {
    return (
        <section className="contacts_form">
            <div className="section_wrap">
                <div className="contacts_form_wrap">
                    <div className="contacts_form_left">
                        <div className="contacts_form_title">Напишите нам</div>
                        <div className="contacts_form_text">Оставьте заявку через форму или напишите нам в мессенджере,
                            чтобы обсудить ваш проект.
                        </div>
                    </div>
                    <div className="contacts_form_right">
                        <form action="">
                            <div className="contacts_form_inputs">
                                <div className="contacts_form_input">
                                    <label>
                                        <input type="text" name="name" placeholder="Ваше имя"/>
                                    </label>
                                </div>
                                <div className="contacts_form_input">
                                    <div className="select_input">
                                        <input type="hidden" name="theme"/>
                                        <div className="select_input_title">Тема обращения</div>
                                        <div className="select_input_values">
                                            <div className="select_input_val">Заказать проект</div>
                                            <div className="select_input_val">Сотрудничество</div>
                                            <div className="select_input_val">Хочу у вас работать</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contacts_form_input">
                                    <label>
                                        <input type="text" name="phone" placeholder="+7 (999) 999 99 99"/>
                                    </label>
                                </div>
                                <div className="contacts_form_input">
                                    <label>
                                        <input type="text" name="email" placeholder="Email"/>
                                    </label>
                                </div>
                            </div>
                            <div className="contacts_form_input_pol">
                                <label>
                                    <input type="checkbox" name="pol" className="input_hide"/>
                                    Я соглашаюсь с условиями <a href="">Политики конфиденциальности</a> и обработки
                                    персональных данных
                                </label>
                            </div>
                            <button type="submit" className="btn white">
                                <div className="btn_text">Отправить</div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}