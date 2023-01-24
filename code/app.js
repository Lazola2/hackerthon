// debts examples
const debts = [
    {
        id: 1,
        partyOwed: 'Nedbank loan',
        price: 66000,
        balance: 34000,
        description: 'School fees loan',
        paymentDate: '22-04-2023'
    },
    {
        id: 2,
        partyOwed: 'Clothing Account',
        price: 30000,
        balance: 3000,
        description: 'Sport Scene account',
        paymentDate: '22-04-2023'
    },
    {
        id: 3,
        partyOwed: 'Entertainment',
        price: 15000,
        balance: 2470,
        description: 'Money for groove',
        paymentDate: '22-04-2023'
    },
    
]

// get the users from the local storage
let users = JSON.parse(localStorage.getItem('users'));

const debtsContainer = document.querySelector('.debts');
let userId = JSON.parse(localStorage.getItem('selectedUser')).userId;

// get the selected user
let selectedUser = JSON.parse(localStorage.getItem('selectedUser')); 

// set the username
const username = document.querySelector('.username');

let selected;
users.forEach(user => {
    if (user.id === selectedUser.userId) {
        selected = user;
    }
})
username.innerHTML = selected.name;

// calculate the total of the debts
let debtPercentages = [];

debts.forEach(debt => {
    let percentage = Math.round((debt.balance/ debt.price) * 100);
    debtPercentages.push(percentage);
    
    let debtItem = `
        <div class="debt-item">
            <div class="progress-bar-section">
                <div class="progress-bar" style="
                    background: conic-gradient( var(--text-theme) calc(360deg * .${percentage}), rgba(255, 255, 255, 0.181) 0deg );">
                    <div class="inner-circle">
                        <p class="debt-remaining-percentage">
                            ${percentage}%
                        </p>
                    </div>
                </div>
            </div>
            <div class="content-section">
                <div class="party-owed-container">
                    <p class="party-owed">${debt.partyOwed}</p>
                    <p class="party-owed">R${debt.balance}</p>
                </div>
                <p class="debt-description">${debt.description}</p>
                <p class="next-payment-date">Payment date: ${debt.paymentDate}</p>
            </div>
        </div>
    `
    debtsContainer.innerHTML += debtItem;
});

// get the small progress bar

// update the average
let totalPercentages = debtPercentages.reduce((a,b) => a + b, 0);
let average = totalPercentages / debtPercentages.length;


// get overall debt container
const outerCircle = document.querySelector('.overall-debt');
outerCircle.style.background = `
    conic-gradient( var(--text-theme) 
    calc(360deg * .${average < 10 ? '0'+average: average}), 
    rgba(255, 255, 255, 0.181) 0deg )`;

const overallDebtContainer = document.querySelector('.overall-debt>.inner-circle');
overallDebtContainer.innerHTML += `<p class="overall-percentage">${Math.round(average)}%</p>`;

// load the debts in the debts setting container

    const debtSettingsContainer = document.querySelector('.debt-item-settings-container');
    
    debts.forEach(debt => {
        debtSettingsContainer.innerHTML += 
            `<div class="debt-item-settings overflow-hidden">
                <div class="upper d-flex px-3 justify-content-between align-items-center">
                    <p class="item-name pt-3">${debt.partyOwed}</p>
                    <i class="bi bi-x-square-fill cancel-icon"
                        onclick="handleCancelDebt(${debt.id})">
                    </i>
                </div>
                <div class="lower d-flex justify-content-between">
                    <input type="number" class="form-control price-input" placeholder="amount in rands">
                    <button class="pay-button">Pay</button>
                </div>
            </div>` 
    });





