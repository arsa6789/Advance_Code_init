# Ask the user to enter a number
number = int(input("Enter a number: "))

# Check if the remainder is 0 when divided by 7
if number % 7 == 0:
    print(f"{number} is divisible by 7.")
else:
    print(f"{number} is not divisible by 7.")