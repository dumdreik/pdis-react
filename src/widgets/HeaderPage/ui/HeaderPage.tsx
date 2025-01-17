import {Link} from "react-router-dom";

export const HeaderPage = () => {
    return (
        <div className="header">
            <div className="header_wrap">
                <div className="header_top">
                    <div className="header_logo">
                        <Link to="/">
                            <svg width="48" height="42" viewBox="0 0 48 42" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M1.82422 35.3994C1.82422 33.1703 2.21759 30.8101 3.00433 28.4499C3.79107 25.9585 5.1023 23.7294 6.93803 21.6314C8.77376 19.5335 11.0029 17.8289 13.7564 16.5176C16.51 15.2064 19.7881 14.5508 23.5907 14.5508C27.3933 14.5508 30.8025 15.2064 33.5561 16.6488C36.4408 17.96 38.801 19.6646 40.6367 21.7626C42.4725 23.8605 43.9148 26.0896 44.7016 28.581C45.6194 31.0723 46.0128 33.3014 46.0128 35.5305C46.0128 36.9729 45.7505 38.4152 45.3572 39.9887C45.3572 40.251 45.2261 40.5132 45.0949 40.7755H39.5877C39.9811 39.0709 40.2434 37.3663 40.2434 35.3994C40.2434 32.6458 39.85 30.2856 38.9321 27.9254C38.0143 25.6963 36.8342 23.7294 35.2607 22.0248C33.8183 20.4513 31.9826 19.1401 29.8846 18.2222C27.9178 17.3044 25.6887 16.7799 23.4596 16.7799C21.0994 16.7799 19.0014 17.3044 17.0345 18.2222C15.0677 19.1401 13.3631 20.3202 11.9207 22.0248C10.4784 23.5983 9.29825 25.5651 8.51151 27.9254C7.72477 30.1545 7.3314 32.6458 7.3314 35.3994C7.3314 37.2351 7.46252 39.0709 7.85589 40.7755H2.34871C2.08647 38.8086 1.82422 36.9729 1.82422 35.3994Z"
                                      fill="#0F0F0F"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M4.58398 1.43359C4.97735 2.08921 5.50185 2.6137 5.89522 3.26932C7.73095 5.3673 9.96004 7.20302 12.7136 8.64538C15.4672 10.0877 18.7453 10.7434 22.5479 10.7434C25.1704 10.7434 27.5306 10.4811 29.4974 9.82549C31.7265 9.16987 33.5623 8.25201 35.2669 7.0719C36.9715 5.89179 38.4138 4.71168 39.7251 3.26932C40.2495 2.6137 40.6429 2.08921 41.1674 1.43359H35.6602C35.2669 1.95809 34.8735 2.35146 34.4801 2.74483C33.0378 4.44943 31.202 5.76067 29.1041 6.67853C27.1372 7.59639 24.9081 8.12089 22.679 8.12089C20.3188 8.12089 18.2208 7.59639 16.254 6.67853C14.2871 5.76067 12.5825 4.44943 11.1402 2.74483C10.7468 2.35146 10.4845 1.82696 10.0912 1.43359H4.58398Z"
                                      fill="#0F0F0F"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="header_menu">
                        <ul>
                            <li><Link to="/projects/">Проекты</Link></li>
                            <li><Link to="/about/">О компании</Link></li>
                            <li><Link to="/about/#team">Команда</Link></li>
                            <li><Link to="/contacts/">Контакты</Link></li>
                        </ul>
                    </div>
                    <div className="header_right">
                        <div className="header_phone">
                            <a href="tel:+7 499 322 35 17">+7 499 322 35 17</a>
                        </div>
                        <div className="header_lang">
                            <a href="#">Ru</a> / <a href="#" className="unselect">Eng</a>
                        </div>
                    </div>
                </div>
                <div className="header_mobile">
                    <div className="header_mobile_top">
                        <div className="header_mobile_logo">
                            <Link to="/">
                                <svg width="48" height="42" viewBox="0 0 48 42" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M1.82422 35.3994C1.82422 33.1703 2.21759 30.8101 3.00433 28.4499C3.79107 25.9585 5.1023 23.7294 6.93803 21.6314C8.77376 19.5335 11.0029 17.8289 13.7564 16.5176C16.51 15.2064 19.7881 14.5508 23.5907 14.5508C27.3933 14.5508 30.8025 15.2064 33.5561 16.6488C36.4408 17.96 38.801 19.6646 40.6367 21.7626C42.4725 23.8605 43.9148 26.0896 44.7016 28.581C45.6194 31.0723 46.0128 33.3014 46.0128 35.5305C46.0128 36.9729 45.7505 38.4152 45.3572 39.9887C45.3572 40.251 45.2261 40.5132 45.0949 40.7755H39.5877C39.9811 39.0709 40.2434 37.3663 40.2434 35.3994C40.2434 32.6458 39.85 30.2856 38.9321 27.9254C38.0143 25.6963 36.8342 23.7294 35.2607 22.0248C33.8183 20.4513 31.9826 19.1401 29.8846 18.2222C27.9178 17.3044 25.6887 16.7799 23.4596 16.7799C21.0994 16.7799 19.0014 17.3044 17.0345 18.2222C15.0677 19.1401 13.3631 20.3202 11.9207 22.0248C10.4784 23.5983 9.29825 25.5651 8.51151 27.9254C7.72477 30.1545 7.3314 32.6458 7.3314 35.3994C7.3314 37.2351 7.46252 39.0709 7.85589 40.7755H2.34871C2.08647 38.8086 1.82422 36.9729 1.82422 35.3994Z"
                                          fill="#41342B"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M4.58398 1.43359C4.97735 2.08921 5.50185 2.6137 5.89522 3.26932C7.73095 5.3673 9.96004 7.20302 12.7136 8.64538C15.4672 10.0877 18.7453 10.7434 22.5479 10.7434C25.1704 10.7434 27.5306 10.4811 29.4974 9.82549C31.7265 9.16987 33.5623 8.25201 35.2669 7.0719C36.9715 5.89179 38.4138 4.71168 39.7251 3.26932C40.2495 2.6137 40.6429 2.08921 41.1674 1.43359H35.6602C35.2669 1.95809 34.8735 2.35146 34.4801 2.74483C33.0378 4.44943 31.202 5.76067 29.1041 6.67853C27.1372 7.59639 24.9081 8.12089 22.679 8.12089C20.3188 8.12089 18.2208 7.59639 16.254 6.67853C14.2871 5.76067 12.5825 4.44943 11.1402 2.74483C10.7468 2.35146 10.4845 1.82696 10.0912 1.43359H4.58398Z"
                                          fill="#41342B"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="header_mobile_burger"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}