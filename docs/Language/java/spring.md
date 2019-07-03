# Spring系列

Spring框架学习，推荐一个可快速了解相关知识的链接:

[spring入门知识](https://www.jianshu.com/p/4f15aafd2bc6)

## SpringMVC数据绑定

方法前加@RequestMapping(value="xxx.xx",method=xxx)表示拦截地址有xxx.xx

方法前加@ResponseBody()表示返回值放到body里

方法里的参数前加@RequestParam(value="xxx")表示给参数进行别名处理

### 基本数据类型

```java
@RequestMapping(value="baseType.do")
@ResponseBody
public String baseType(@RequestParam(value="alias") int age){
	return "age:"+age;
}
//访问地址http://xxx.xxx.xxx:8080/baseType.do?alias=10
//结果：age：10
```

### 包装数据类型

```java
@RequestMapping(value="baseType.do2")
@ResponseBody
public String baseType(Integer age){
	return "age:"+age;
}
//访问地址http://xxx.xxx.xxx:8080/baseType.do2?age=10
//结果：age：10
```

### 数组类型

```java
@RequestMapping(value="array.do")
@ResponseBody
public String arrayTest(String[] ages){
    StringBuilder sb = new StringBuilder();
    for(String item:ages){
        sb.append(item).append(" ");
    }
	return sb.toString();
}
//访问地址http://xxx.xxx.xxx:8080/array.do?ages=12&ages=13&ages=14
//结果：12 13 14
```

简单和多层对象类型

```java
@RequestMapping(value="object.do")
@ResponseBody
public String object(User user){
    return user.toString();
}
public class User{
    private String name;
    private String age;
    private ContactPerson cp;
    ....
}
public class ContactPerson{
    private String phone;
    private String address;
    ......
}
访问地址：//访问地址http://xxx.xxx.xxx:8080/object.do?name=qwe&age=12&ContactPerson.phone=12345
//结果：User{name='qwe',age=12,ContactPerson{phone='12345',address='null'}}
```

### 同属性的多对象

```java
@RequestMapping(value="object.do")
@ResponseBody
public String object(User user,Admin admin){
    return user.toString();
}
@InitBinder("user")
public void initUser(WebDataBinder binder){
    binder.setFieldDefaultPrefix("user.");
}
@InitBinder("admin")
public void initUser(WebDataBinder binder){
    binder.setFieldDefaultPrefix("admin.");
}
public class User{
    private String name;
    private String age;
    private Admin am;
    ....
}
public class Admin{
    private String name;
    private String age;
   
    ....
}
访问地址：//访问地址http://xxx.xxx.xxx:8080/object.do?user.name=qwe&user.age=12&admin.name=12345&admin.age=12

```

### List

```java
@RequestMapping(value="list.do")
@ResponseBody
public String list(UserListForm users){
    return users.toString();
}
public class UserListForm{
    private List<User> users;
    ....
}
public class User{
    private String name;
    private String age;
    private Admin am;
    ....
}
//访问地址http://xxx.xxx.xxx:8080/object.do?users[0].name=qwe&user[0].age=12&users[1].name=qwe
```

### Set



### Map