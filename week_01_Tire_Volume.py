# Program to compute the volume of a tire
# and store the results in a text file

import math
from datetime import datetime

print("Tire Volume Calculator")
print("----------------------")

# ask user for tire details
width = float(input("Enter tire width in mm (example 205): "))
aspect = float(input("Enter aspect ratio (example 60): "))
diameter = float(input("Enter wheel diameter in inches (example 15): "))

# calculate the volume
volume = (math.pi * width**2 * aspect * (width * aspect + 2540 * diameter)) / 10000000000

# show result
print(f"\nEstimated tire volume: {volume:.2f} liters")

# get today's date
current_date = datetime.now().strftime("%Y-%m-%d")

# save the result to the file
with open("volumes.txt", "a") as file:
    file.write(f"{current_date}, {width}, {aspect}, {diameter}, {volume:.2f}\n")

print("Data saved to volumes.txt")

# small extra feature for creativity
choice = input("Would you like to calculate another tire? (yes/no): ")

if choice.lower() == "yes":
    print("Run the program again to calculate another tire.")
else:
    print("Thanks for using the tire calculator!")