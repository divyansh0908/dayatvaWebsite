# cook your dish here
import copy
for _ in range(int(input())):
    pl=list(map(int,input().split()))
    n=pl[0]
    m=pl[1]
    score=list(map(int,input().split()))
    ls=[]
    best_rank=0
    best_score=0
    poss=dict()
    rank=dict()
    mem=dict()
    round=dict()
    for i in range(m):
        round[i]=[]
        
    for i in range(n):
        poss[i]=[]
        rank[i]=[]

    for p in range(n):
        dedu=list(map(int,input().split()))
        sc=score[p]
        for j in range(m):
            sc+=dedu[j]
            poss[p].append(sc)
            round[j].append(sc)
    print(poss,round)
    for ty in poss:
        for kt in round:
            rank[ty].append(sorted(round[ty]).index((poss[ty])[kt]))
    print(rank)
    # for f in poss:
    #     for d in range(m):
    #         print((poss[f]))
    #         print(round[f])
            
        # for o in range(n):
        #     score[o]+=dedu[o]
        # tp=copy.deepcopy(score)
        # tp.sort()
        # ls=[((tp.index(opp))+1) for opp in score]
        # for i in range(n):
        #     poss[i].append(score[i])
        #     rank[i].append(ls[i])
    # print(poss,rank)

        
    # print("ende",rank)