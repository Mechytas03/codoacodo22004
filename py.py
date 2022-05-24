import pickle
s = "Hola mundo".upper()
with open("s.pkl", "wb") as f:
    pickle.dump(s, f)
with open("s.pkl", "r") as f:
    s2 = pickle.load(f).lower()
print(s2)
