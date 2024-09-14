let form = document.getElementById('loanForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;
    let points = 0;

    // Full Name Validation
    let name = document.getElementById('name').value;
    let nameError = document.getElementById('nameError');
    if (name === "") {
        nameError.textContent = "Full Name is required";
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Annual Income Validation
    let income = document.getElementById('income').value.trim();
    let incomeError = document.getElementById('incomeError');
    if (income === "" || income <= 0) {
        incomeError.textContent = "Valid Annual Income is required";
        incomeError.style.display = "block";
        isValid = false;
    } else {
        incomeError.style.display = "none";
    }

    // Current Amount in Account Validation
    let currentAmount = document.getElementById('currentAmount').value;
    let currentAmountError = document.getElementById('currentAmountError');
    let loanAmount = document.getElementById('loanAmount').value;
    if (currentAmount === "" || currentAmount <= 0) {
        currentAmountError.textContent = "Valid Current Amount is required";
        currentAmountError.style.display = "block";
        isValid = false;
    } else if (parseFloat(currentAmount) >= parseFloat(loanAmount)) {
        points += 10;
        currentAmountError.style.display = "none";
    } else {
        points -= 10;
        currentAmountError.style.display = "none";
    }

    // Loan Amount Validation
    let loanAmountError = document.getElementById('loanAmountError');
    if (loanAmount === "" || loanAmount <= 0) {
        loanAmountError.textContent = "Valid Loan Amount is required";
        loanAmountError.style.display = "block";
        isValid = false;
    } else {
        loanAmountError.style.display = "none";
    }

    // Account Type Validation
    let accountType = document.getElementById('accountType').value;
    let accountTypeError = document.getElementById('accountTypeError');
    if (accountType === "") {
        accountTypeError.textContent = "Please select an Account Type";
        accountTypeError.style.display = "block";
        isValid = false;
    } else if (accountType === "current") {
        points += 10;
        accountTypeError.style.display = "none";
    } else if (accountType === "savings") {
        points += 5;
        accountTypeError.style.display = "none";
    }

    // Credit History Validation
    let creditHistory = document.getElementById('creditHistory').value;
    let creditHistoryError = document.getElementById('creditHistoryError');
    if (creditHistory === "") {
        creditHistoryError.textContent = "Please select Credit History";
        creditHistoryError.style.display = "block";
        isValid = false;
    } else {
        points += 10; 
        creditHistoryError.style.display = "none";
    }

    // Last Deposit Date Validation
    let lastDeposit = document.getElementById('lastDeposit').value;
    let lastDepositError = document.getElementById('lastDepositError');
    if (lastDeposit === "") {
        lastDepositError.textContent = "Please enter Last Deposit Date";
        lastDepositError.style.display = "block";
        isValid = false;
    } else {
        // If last deposit is within a month, add 5 points
        let lastDepositDate = new Date(lastDeposit);
        let currentDate = new Date();
        let oneMonthAgo = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
        if (lastDepositDate >= oneMonthAgo) {
            points += 5;
        }
        lastDepositError.style.display = "none";
    }

    // Last Loan Collection Date Validation
    let lastLoan = document.getElementById('lastLoan').value;
    let lastLoanError = document.getElementById('lastLoanError');
    if (lastLoan === "") {
        lastLoanError.textContent = "Please enter Last Loan Collection Date";
        lastLoanError.style.display = "block";
        isValid = false;
    } else {
        let lastLoanDate = new Date(lastLoan);
        let sixMonthsAgo = new Date(new Date().setMonth(new Date().getMonth() - 6));
        if (lastLoanDate <= sixMonthsAgo) {
            points += 10;
        }
        lastLoanError.style.display = "none";
    }

    // Repayment Period Validation
    let repaymentPeriod = document.getElementById('repaymentPeriod').value;
    let repaymentPeriodError = document.getElementById('repaymentPeriodError');
    if (repaymentPeriod === "" || repaymentPeriod <= 0) {
        repaymentPeriodError.textContent = "Valid Repayment Period is required";
        repaymentPeriodError.style.display = "block";
        isValid = false;
    } else if (repaymentPeriod < 6 ) {
        points += 5; 
        repaymentPeriodError.style.display = "none";
    } else {
        repaymentPeriodError.style.display = "none";
    }

    // Loan approval check
    let resultMessage = document.getElementById('resultMessage');
    if (isValid) {
        if (points >= 30) {
            resultMessage.textContent = "Congratulations! You are eligible for the loan.";
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = "Sorry, you do not meet the criteria for the loan.";
            resultMessage.style.color = "red";
        }
    }
});
