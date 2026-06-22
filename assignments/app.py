salary = float(input("Enter your salary: "))
years_of_service = float(input("Enter your years of service: "))

bonus = 0.0

if years_of_service > 5:
    bonus = salary * 0.05


print(f"Your net bonus amount is: {bonus:.2f}")