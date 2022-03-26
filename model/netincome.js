
function calnetincome(data) {
    var income = (data.income * data.months) + data.cryptoincome
    var eatd = 60000; //expenses and tax deduction
    var insurance = 0;
    var fund = 0;
    console.log(income)
    if (income <= 120000) {
        return 0
    }
    else {
        if (income <= 200000) {
            eatd += income / 2
        }
        else {
            eatd += 100000
        }
        if (data.socialsecurity <= 5100) {
            eatd += data.socialsecurity
        }
        else {
            eatd += 5100
        }
        if (data.lifeinsurance <= 100000) {
            insurance += data.lifeinsurance
        }
        else {
            eatd += 100000
        }
        if (data.healthinsurance <= 25000) {
            insurance += data.healthinsurance
        }
        else {
            eatd += 25000
        }
        if (insurance <= 100000) {
            eatd += insurance
        }
        else {
            eatd += 100000
        }
        if (data.rmf <= (income / 100) * 30 && data.rmf <= 500000) {
            fund += data.rmf
        }
        else {
            fund += 500000
        }
        if (data.ssf <= (income / 100) * 30 && data.rmf <= 200000) {
            fund += data.ssf
        }
        else {
            fund += 200000
        }
        if (data.pvd <= (income / 100) * 15 && data.rmf <= 500000) {
            fund += data.pvd
        }
        else {
            fund += 500000
        }
        if (fund <= 500000) {
            eatd+= fund
        }
        else {
            eatd += 500000
        }
        if (income-eatd>0) {
            return income-eatd
        }
        else {
            return 0 
        }


    }

    return data.months
}

module.exports = calnetincome