
class MainPage {
    open (path) {
        return browser.url(`https://onlineattorney.org${path}`)
    }

    get nameInp () {
        return $('[name="form_name"]');
    }
    get phoneInp () {
        return $('[name="form_phone"]');
    }
    get zipInp () {
        return $('[name=form_zip]');
    }
    get locInp () {
        return $('[name="form_location"]');
    }
    get lawyerListSelector () {
        return $('[name="form_service"]');
    }
    get realEstLawyer () {
        return $('//option[contains(text(), "Real Estate Law Lawyer")]');
    }
    get msgInp () {
        return $('[name="form_message"]');
    }
    get sbmtBtn () {
        return $('[class="btn btn-submit"]');
    }
    get homeBtn () {
        return $('[id="button"]');
    }
    get emailInput () {
        return $('[class="input-group"] input');
    }
    get sendNewsettlerBtn () {
        return $('[class="input-group-btn"] button');
    }

    async setter (name, phone, zipCode, location, message) {
        await this.nameInp.setValue(name);
        await this.phoneInp.setValue(phone);
        await this.zipInp.setValue(zipCode);
        await this.locInp.setValue(location);
        if (message) {
        await this.msgInp.setValue(message);
        }
        await this.lawyerListSelector.click();
        await this.realEstLawyer.click();
        await this.sbmtBtn.click();
    }
}

module.exports = new MainPage()