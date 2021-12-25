# 【软件测试报告】Selenium+TestNG综合练习

> 学号：04191315
>
> 姓名：何翔
>
> 学院：计算机学院
>
> 专业：软件工程
>
> 完整代码：https://github.com/He-Xiang-best/Software-Quality-Assurance-and-Testing
>
> 欢迎一起交流学习呀！

| 微信                                                         | B站号                                                        | 公众号                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image](https://img-blog.csdnimg.cn/img_convert/cece57138556f8ebe17ea8521e3114e1.png) | ![image](https://img-blog.csdnimg.cn/img_convert/96321ca49ce798da3095c0cb4c2bcafa.png) | ![image](https://img-blog.csdnimg.cn/img_convert/4488f9f9de1c18bb21c82f5657598d0d.png) |

---



# 一、测试需求
## 1.1 测试模块

登入功能模块

## 1.2 测试内容
- 使用【**Selenium+Java+数据库**】进行数据驱动测试，对自己搭建的Web项目做**登入功能测试**

- 使用【**Selenium+Java+Excel**】进行数据驱动测试，对自己搭建的Web项目做**登入功能测试**

- 使用**【Junit】**对自己开发的web程序进行**单元测试**，**实现简单的增删查改操作**

## 1.3 测试用例

|     字段名称     |                           描   述                            |
| :--------------: | :----------------------------------------------------------: |
|      标识符      |                             UC1                              |
|      测试项      |                           登入功能                           |
|      设计者      |                             何翔                             |
|   测试环境要求   | 与服务器可以正常连接  ；软件：Chrome浏览器96版本以上 ，jdk1.8+，maven相关依赖以及TestNG相关包 |
|     测试方法     |                手工测试 ；黑盒测试 ；白盒测试                |
|     输入说明     | （1） 点击登入链接（2）填写登入信息，其中所填写的“用户名”、“密码”登入信息需要和注册保存在数据库信息里面的数据一致，且非空 （3） 点击登入按钮 |
|     输出标准     | 界面提示信息： （2）登入成功（2）当输入信息不符合要求时要有具体提示（3）登入失败的话，显示登入失败具体失败的原因。 ，跳转相关页面 |
|     特殊要求     |                      进入到后台登入页面                      |
| 用例之间的依赖性 |                              无                              |


# 二、测试设计思想
## 2.1 Selenium+Java+数据库 and Excel
![请添加图片描述](https://img-blog.csdnimg.cn/21d6b49fbfeb45dfb4fa83eaf1b5c660.png)
## 2.2 Junit单元测试
![请添加图片描述](https://img-blog.csdnimg.cn/a08e50a51a114efd8e5a5f5928ece7ee.png)

# 三、测试代码（核心部分）

## 3.1 Selenium+Java+数据库
```java
    @Test(dataProvider="getDatabaseData")
    public void webTestByUseDatabase(String username , String password){
        openChrome(url);
        chromeDriver.findElement(By.name("username")).sendKeys(username);
        chromeDriver.findElement(By.name("password")).sendKeys(password);
        chromeDriver.findElement(By.xpath("//input[@type='submit']")).click();
        assertEquals(FileRoot.getUsername(), username);
        assertEquals(FileRoot.getPassword(), password);
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        chromeDriver.quit();
    }

    @DataProvider(name = "getDatabaseData")
    public Object[][] getDatabaseData() throws ClassNotFoundException, SQLException {
        //读取数据库文件信息
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con = DriverManager.getConnection(FileRoot.getUrl(),FileRoot.getSqlUserName(),
                FileRoot.getSqlPassword());
        Statement s = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        ResultSet rs = s.executeQuery("select * from user ");
        int total = 0;
        while (rs.next()) {
            total++;
        }
        Object[][] data = new Object[total][2];
        rs.beforeFirst();
        int a = 0;
        while (rs.next()) {
            data[a][0] = rs.getString("user_name");
            data[a][1] = rs.getString("user_pwd");
            a++;
        }

        return data;
    }
```

## 3.2 Selenium+Java+Excel
```java
    @Test(dataProvider="getExcelData")
    public void webTestByUseExcel(String username , String password){
        openChrome(url);
        chromeDriver.findElement(By.name("username")).sendKeys(username);
        chromeDriver.findElement(By.name("password")).sendKeys(password);
        chromeDriver.findElement(By.xpath("//input[@type='submit']")).click();
        assertEquals(FileRoot.getUsername(), username);
        assertEquals(FileRoot.getPassword(), password);
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        chromeDriver.quit();
    }

    @DataProvider(name = "getExcelData")
    public Object[][] getExcelData(){
        //读取Excel文件数据
        List<Map<Integer, String>> list = EasyExcel
                .read(FileRoot.getExcelPath())
                .sheet()
                .doReadSync();
         Object[][] data = new Object[list.size()][];
        int row=0, column;
            for (Map<Integer, String> map : list) {
                data[row] = new Object[map.size()];
                column=0;
                for (String value : map.values()) {
                    data[row][column] = value;
                    column++;
                }
                row++;
        }
        return data;
    }
```

## 3.3 Junit单元测试
```java
package com.study;


import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.study.springboot.entity.User;
import com.study.springboot.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootTest

class SpringbootApplicationTests {

/*
 * @author: 何翔
 * @date: 2021/10/6 0:56
 * @description：security 安全访问测试
 */
    @Test
    public void contextLords(){
        PasswordEncoder pe = new BCryptPasswordEncoder();
        String encode = pe.encode("123");
        System.out.println(encode);
        boolean matches = pe.matches("123",encode);
        System.out.println(matches);
    }

/*
 * @author: 何翔
 * @date: 2021/10/6 0:55
 * @description：mybatis-plus 数据库测试
 */

 @Autowired
 UserService userService;

  @Test
  public void query() {
    //System.out.println(userService.getById(10));
    System.out.println(userService.list(null));

  }

  @Test
  void insert() {
    User user = new User();
    user.setUserName("李四");
    user.setUserPwd("456");
    System.out.println(userService.save(user));
    System.out.println(user.getUserId());
  }

  @Test
  void delete() {
    System.out.println(userService.removeById(11));
  }

  @Test
  void update() {

    System.out.println(userService.update(new UpdateWrapper<User>().lambda()
            .set(User::getUserPwd, "223").eq(User::getUserId, 11)));

  }

  @Test
  void page() {
    IPage<User> iPage = new Page<>(1,2);
    IPage<User> page = userService.page(iPage);
    List<User> records = page.getRecords();
    System.out.println(records);
    System.out.println(page.getPages());
  }


}
```


# 四、测试数据
![在这里插入图片描述](https://img-blog.csdnimg.cn/088b0eed7a5b4c2ab9ffaeb7d3274ae0.png)



# 五、数据分析
## 5.1 测试运行分析
| ![在这里插入图片描述](https://img-blog.csdnimg.cn/238ea552d4a744abb63faf34da60577c.png) | ![在这里插入图片描述](https://img-blog.csdnimg.cn/16620e1c03c94d909025a94888908d1b.png) | ![在这里插入图片描述](https://img-blog.csdnimg.cn/2f6579c4e8f049a88242a34059d10c2b.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 用户名为空的情况                                             | 密码为空的情况                                               | 用户名和密码都为空的情况                                     |

| ![在这里插入图片描述](https://img-blog.csdnimg.cn/36ccf201dc1a49d6ad8d20158f1344b9.png) | ![在这里插入图片描述](https://img-blog.csdnimg.cn/5aabd300c8754c8eb4b1f2049d59345d.png) | ![在这里插入图片描述](https://img-blog.csdnimg.cn/b77a2fc9f56c467b8cae0ea975077d32.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 用户名和密码均填写                                           | 用户名或密码错误                                             | 用户名和密码均正确                                           |

**测试项目运行如下：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/cbf17e27eb844b4e8204f547ff5b3f43.png)


## 5.2 测试情况类别
| 测试情况 |           输入数据           |            期望值            |            实际值            |
| :------: | :--------------------------: | :--------------------------: | :--------------------------: |
|  case1   | 输入错误用户名，输入正确密码 |         进入404页面          |         进入404页面          |
|  case2   | 输入正确用户名，输入错误密码 |         进入404页面          |         进入404页面          |
|  case3   | 输入错误用户名，输入错误密码 |         进入404页面          |         进入404页面          |
|  case4   |  不输入用户名，输入正确密码  | 在用户名栏提示“请填写此字段” | 在用户名栏提示“请填写此字段” |
|  case5   |  输入正确用户名，不输入密码  |  在密码栏提示“请填写此字段”  |  在密码栏提示“请填写此字段”  |
|  case6   |   不输入用户名，不输入密码   | 在用户名栏提示“请填写此字段” | 在用户名栏提示“请填写此字段” |
|  case7   |  输入错误用户名，不输入密码  |  在密码栏提示“请填写此字段”  |  在密码栏提示“请填写此字段”  |
|  case8   |  不输入用户名，输入错误密码  | 在用户名栏提示“请填写此字段” | 在用户名栏提示“请填写此字段” |
|  case9   | 输入正确用户名，输入正确密码 |    登入成功，进入后台主页    |    登入成功，进入后台主页    |

## 5.3 测试数据报告
**使用TestNG生成测试报告如下：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/257148b851484eaab29ba86f24b7919a.png)

## 5.4 测试数据详情
![请添加图片描述](https://img-blog.csdnimg.cn/d96cf087c03e498fa059d2891be17513.png)


# 六、测试总结
## 6.1 问题分析
本次针对自己搭建的Web项目进行测试，大体效果上没有什么问题，但是在测试过程中，也遇到了诸多问题，如下分析：

**问题1：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/dcca2497da564d8bb2dbe6ce6533af7a.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/9358e5ce63174ae1a207a72a3c0e4b48.png)

**问题1分析：**

此处使用了Mybatis-plus框架，并用框架提供的相关方法查询数据库，但是无法将数据查出，报空指针异常，而且框起来那部分代码是没问题的，能在junit单元测试上测试成功，不知道使用了框架后，TestNG是否支持，如果支持是否有哪些地方进行改进。在测试中遇到了此问题，上网查几乎没有相关解答。

随后考虑报错原因：

1、因为测试工程是springboot工程，使用TestNG过程中未解决依赖注入等问题，可能在使用时有其他要求或代码添加等问题需要改进。

![在这里插入图片描述](https://img-blog.csdnimg.cn/f044bc816d4a475ebca65fa6e386bc36.png)
于是我不用自动依赖装配注入等，直接使用new对象调用方法，结果还是不行，依旧报同样的错误
![在这里插入图片描述](https://img-blog.csdnimg.cn/622aab1410b043d9b2c4db711a7b9d1e.png)

涉及这方面的知识，后续再了解一下，是否真的存在相关问题。（问题2同样也有)

2、使用TestNG时，与Mybatis-plus框架支持有其他使用要求或代码添加等问题需要改进。于是我不适用MyBatis-plus框架，通过原生jdbc的方式，封装在外面的方法里，进行调用查询，可是，同样报一样的错误，不能查询到数据，上网查了一下，也遇到有相关问题：

![在这里插入图片描述](https://img-blog.csdnimg.cn/f5747cd7714f47e5ae01f18b3541795e.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/e2e1aefd1f6042ad89628700149d0799.png)

此问题目前也没有明确问题关键问题与解答，而提供的解决方式就是——将连接操作数据库的代码都直接放在 @DataProvider 中，它就可以正常工作，所以改后就是上面代码给出的那部分。

![在这里插入图片描述](https://img-blog.csdnimg.cn/41f9bc3607994dc5a31c7585d9fd5876.png)

**问题2：**

在断言地址时，同样由于工程自动装配依赖注入等问题，无法完成断言。

![在这里插入图片描述](https://img-blog.csdnimg.cn/8df549f88b5a4ad89838b46fcb6f94da.png)

和问题1第一个问题类似，涉及这方面的知识，后续再了解一下，是否真的存在相关问题，并如何解决。因此在测试时取消了此断言的方案。

除了测试学习过程中遇到的一些问题，测试项目本身也有待完善的地方，但期末安排紧张，就之后有空再稍作改进。

## 6.2 待完善点

因为测试的项目使用了springsecurity安全框架，因此在密码和用户名都填了登入失败时，会由安全框架控制跳转。因此在测试时，前后端并未使用异步交互，如ajax那种，可以查询出确切的登入失败信息，如用户不存在，用户存在但登入密码错误两种情况，目前项目中就由安全框架控制直接跳转404页面，这部分后续有时间再修改完善一下。

## 6.3 作业总结

通过这次实验，对软件测试有了更进一步的学习了解，在测试中遇到的问题，能够自己寻找解决方案解决，从中也能学习到更多的知识，也能够将学习到的知识运用到实践当中，自己可以自觉学习相关专业知识，相信后续自己也会不断完善相关方面的知识学习，把知识应用的更好。

