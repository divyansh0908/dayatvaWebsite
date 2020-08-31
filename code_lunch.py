# cook your dish here
for _ in range(int(input())):
    n=int(input())
    freq=list(map(int,input().split()))
    dic=dict()
    for i in freq:
        if i in dic:
            dic[i]+=1
        else:
            dic[i]=1
    
    k=dict()       
    for p in dic:
        if dic[p] in k:
            k[dic[p]]+=1
        else:
            k[dic[p]]=1
    ls=[]
    kt=max(list(k.values()))
    for y in k:
        if k[y]==kt:
            ls.append(y)
    print(min(ls))
     
