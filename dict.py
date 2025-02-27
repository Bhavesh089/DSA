vineeth = {"name": "vineeth", "phone":12322424, "address":"lb nagar"}

print(vineeth)
print(type(vineeth))

#fetch
print(vineeth["phone"])

address = vineeth["address"]

print(address)

#adding
vineeth["fav_colors"] = ["blue", "green"]
# txt2 = "My name is {0}, I'm {1}".format("John",36)
# print(txt2)
print("This is vineeth's: ", vineeth)


#delete
del vineeth["name"]
print(vineeth)
#replace
vineeth['address'] = "something"
print(vineeth)
print(vineeth.items())
print(vineeth.keys())
print(vineeth.values())

# print(vineeth.address)
for item in vineeth.keys():
    print("key: ",item, "value: ", vineeth[item])
    if(item == "address"):
        vineeth[item] = "lb nagar"
        
print(vineeth)
print(len(vineeth))