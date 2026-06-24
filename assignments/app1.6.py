n = int(input("Enter a number (n): "))

print(f"The odd numbers between 1 and {n} are:")

for i in range(1, n + 1, 2):
    print(i, end=" ")