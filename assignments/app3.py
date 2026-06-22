# Ask the user to enter a number
number = int(input("Enter a number: "))

# Check if the number is divisible by 2
if number % 2 == 0:
    print(f"{number} is an Even number.")
else:
    print(f"{number} is an Odd number.")