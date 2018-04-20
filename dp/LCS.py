import numpy as np

arr1 = [1,3,4,5,6,7,7,8]
arr2 = [3,5,7,4,8,6,7,8,2]



def LongestCommon(arr1,arr2):
	m = len(arr1) + 1
	n = len(arr2) + 1
	tmpArr = []
	for i in range(m):
		tmpArr.append([0]*n)
	for i in range(1,m):
		for j in range(1,n):
			if arr1[i-1] == arr2[j-1]:
				tmpArr[i][j] = tmpArr[i-1][j-1] + 1
			else:
				tmpArr[i][j] = max(tmpArr[i-1][j],tmpArr[i][j-1])
	print(np.array(tmpArr))
	p = m-1
	q = n-1
	res = []
	while p > 0 and q>0:
		if arr1[p-1] == arr2[q-1]:
			res.append(arr1[p-1])
			p -= 1
			q -= 1
		else:
			if tmpArr[p-1][q] > tmpArr[p][q-1]:
				p -= 1
			else:
				q -= 1
	return res
 



res = LongestCommon(arr1,arr2)
print(res)