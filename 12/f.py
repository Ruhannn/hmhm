def F(number):
    L2 = number % 100
    L = L2 // 10
    L3 = L2 % 10
    if L < L3:
        MN = (number // 10) * 10 + L3
    else:
        MN = (number // 100) * 10 + L
    return MN
n = 645667
output = F(n)
print(F"{output}")