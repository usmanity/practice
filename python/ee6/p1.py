def find_remaining(balance, interest_rate, monthly_payment_rate, months):
    remaining_balance = int(balance)
    interest_rate = float(interest_rate)
    monthly_payment_rate = float(monthly_payment_rate)
    for _ in range(0, int(months)):
        mmp = monthly_payment_rate * remaining_balance
        interest_paid = interest_rate / 12 * remaining_balance
        principal_paid = mmp - interest_paid
        remaining_balance = remaining_balance - principal_paid
    return round(remaining_balance, 2)

print find_remaining(
  raw_input("What is your balance? "),
  raw_input("Annual interest rate? "),
  raw_input("Monthly payment rate percentage? "),
  raw_input("How many months? ")
)
