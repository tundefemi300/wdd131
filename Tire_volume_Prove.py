# tire_volume.py
from email.mime import text


program to compute the volume of a tire and save results to a text file 

import math
from datetime import datetime

print("Tire Volume Calculator")
print("---------------------")

# get user input
width = float(input("Enter tire width in mm (e.g., 205): "))
aspect = float(input("Enter aspect ratio (e.g., 60): "))
diameter = float(input("Enter wheel diameter in inches (e.g., 15): "))

# calculate the volume
volume = (math.pi * width**2 * aspect * (width * aspect + 2540 * diameter)) / 10000000000

# display the result
print("\nApproximate tire volume:", format(volume, ".2f"), "liters")

# get the current date
today = datetime.now().strftime("%Y-%m-%d")

# save the result to volumes.txt
with open("volumes.txt", "a") as f:
    f.write(today + ", " + str(width) + ", " + str(aspect) + ", " + str(diameter) + ", " + format(volume, ".2f") + "\n")

print("Data has been saved to volumes.txt")

# small extra feature for creativity points
another = input("Do you want to calculate another tire? (yes/no): ")
if another.lower() == "yes":
    print("Please run the program again to calculate another tire!")
else:
    print("Thanks for using the Tire Volume Calculator. Goodbye!")