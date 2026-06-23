age = int(input("Enter age: "))
gender = input("Enter gender (M or F): ").upper()
marital_status = input("Enter marital status (Y or N): ").upper()

if gender == "F" and 20 <= age <= 60:
    print("Place of service: Urban areas only")
elif gender == "M" and 20 <= age < 40:
    print("Place of service: Anywhere")
elif gender == "M" and 40 <= age <= 60:
    print("Place of service: Urban areas only")
else:
    print("ERROR")