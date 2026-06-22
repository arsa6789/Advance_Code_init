# Accept age from the user
age = int(input("Enter your age: "))

# Check voting eligibility
if age >= 18:
    print("You are eligible for voting.")
else:
    print("You are not eligible for voting.")