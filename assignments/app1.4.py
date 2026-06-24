n = int(input("Enter a number: "))

print(f"The first {n} terms of the series are:")

for i in range(1, n + 1):
    print(i**2, end=" ")