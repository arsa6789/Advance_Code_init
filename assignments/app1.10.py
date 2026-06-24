clean_countries = ["Bangladesh", "India", "Pakistan", "China"]
while True:
    user_input = input("Enter a country name: ")
    if user_input in clean_countries:
        print(f"{user_input} is in clean countries list")
        break 
    else:
        print("Country not found. Please try again.\n")