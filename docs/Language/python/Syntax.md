**正则表达式**

```python
import re
patt=r'[1-5][0-9]'
match = re.findall(patt,'10.20,30,40,2,3,59,60')
if match:
    print(match)

patt2 = r'[A-C][a-zA-Z]'
match2 = re.findall(patt2,'10.20,30,40,2,3,59,60,xy,Ab,Bz')
if match2:
    print(match2)
# '10:00am,99:90am,8:00am,19:19pm:14:00pm,5:xm,23:23pm,29:19pm'
# am 00:00~12:00  pm 12:00~23:00
#patt3=r'(1[0-2]|[0-9]):[0-5][0-9][am]'
#patt4=r'(1[2-9]|2[0-3]):[0-5][0-9][pm]'
# ?表示可选项
patt5=r'([0-1]?[0-9]|2[0-3])(:)([0-5][0-9][ap]m)'
match5=re.findall(patt5,'10:00am,99:90pm,8:00am,19:19pm,14:00pm,5:xm,23:23pm,29:19pm')
if match5:
    print([''.join(x) for x in match5])
```

**字符串**

1、使用print打印字符串两种方式：%和format

```python
#方式1
name="girl"
age=18
print("Your name is %s,age is %d"%(name,age))
#方式2
print("Your name is {0},age is {1}".format(name,age))
```

2、空值None,None不是0，也不是空字符串，也不是False,它是一个特殊的空值

```python
None == None #true
None == False #false
None == 0 #false
None == '' #false
```

3、连接字符串特别是大规模的字符串，最好用join 而不是+

**运算符**

**i+=1 不等于++i**，python解释器将++i操作为+（+i）+表示正数

```python
print(+1) # 1
print(++1) # 1
print(+++1) # 1

```

