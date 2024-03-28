const Registration = () => {

    return (
        <div>
            <div className="registration-content center">
                <form className="registration-content__form" action="#">
                    <div className="registration-content__form_flex">
                        <p className="registration-content__form_title">Your Name</p>
                        <input className="registration-content__form_input" placeholder="First Name"></input>
                        <input className="registration-content__form_input" placeholder="Last Name"></input>
                        <div className="registration-content__form_radio">
                            <input type="radio" id="Male" name="sex" value="Male" />
                            <label htmlFor="Male">Male</label>
                            <input type="radio" id="Female" name="sex" value="Female" />
                            <label htmlFor="Female">Female</label>
                            <input type="radio" id="Other" name="sex" value="Other" />
                            <label htmlFor="Other">Other</label>
                        </div>
                        <p className="registration-content__form_title">Login details</p>
                        <input className="registration-content__form_input" placeholder="Email"></input>
                        <input className="registration-content__form_input" placeholder="Password"></input>
                        <p className="registration-content__form_subtitle">Please use 8 or more characters, with at least 1 number
                            and a
                            mixture of uppercase and lowercase letters</p>
                        <button className="registration-content__form_button" type="submit">JOIN NOW</button>
                    </div>
                </form>
                <div className="registration-content__loyalty">
                    <div className="empty-resize"></div>
                    <div className="registration-content__loyalty_resize">
                        <p className="registration-content__loyalty_title">LOYALTY HAS ITS PERKS</p>
                        <p className="registration-content__loyalty_subtitle">Get in on the loyalty program where you can earn
                            points and
                            unlock serious perks. Starting with these as soon as you join:</p>
                        <div className="registration-content__loyalty_tick">
                            <div className="wrapper-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                    <path
                                        d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <p className="registration-content__loyalty_subtitle">15% off welcome offer
                            </p>
                        </div>

                        <div className="registration-content__loyalty_tick">
                            <div lass="wrapper-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                    <path
                                        d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <p className="registration-content__loyalty_subtitle">Free shipping, returns and exchanges on all
                                orders</p>
                        </div>
                        <div className="registration-content__loyalty_tick">
                            <div className="wrapper-svg">
                                <svg xmlns=" http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                    <path
                                        d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <p className="registration-content__loyalty_subtitle">$10 off a purchase on your birthday</p>
                        </div>
                        <div className="registration-content__loyalty_tick">
                            <div className="wrapper-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                    <path
                                        d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <p className="registration-content__loyalty_subtitle">Early access to products</p>
                        </div>
                        <div className="registration-content__loyalty_tick">
                            <div className="wrapper-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                    <path
                                        d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <p className="registration-content__loyalty_subtitle">Exclusive offers & rewards</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

};

export default Registration;
