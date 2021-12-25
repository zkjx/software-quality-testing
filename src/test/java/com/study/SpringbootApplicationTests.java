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
