# 算法题记录

#### [唯一摩尔斯密码词](https://leetcode-cn.com/problems/unique-morse-code-words/)

问题分析：遍历单词列表获取每一个字符串，再遍历每个字符串的字符，每个字符与a字符的差值可以作为26个英文字母对应的摩尔斯密码的字符串数组的下标，这样可以找到相应的摩尔斯密码并用stringbuilder存起来提高效率。为了获取最后所有不同单词翻译的数量，说明要去除重复的，hashset不允许重复，底层实现使用hashmap，故使用hashset.add，具体实现代码如下：

```java
class Solution {
   String[] morseArr = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
    Set<String> moreSet = new HashSet<>();
    public int uniqueMorseRepresentations(String[] words) {
        for(String eachword:words){
            StringBuilder sb = new StringBuilder();
            for(char e:eachword.toCharArray()){
                sb.append(morseArr[e-'a']);
            }
            moreSet.add(sb.toString());
        }
        return moreSet.size();
    }
}
```

