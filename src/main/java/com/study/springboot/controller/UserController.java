package com.study.springboot.controller;


import com.study.config.TestNGConfig;
import com.study.springboot.service.UserService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author 何翔
 * @since 2021-10-06
 */
@RestController
@RequestMapping("/springboot/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public Map<String,Object> login_result(@Param("username")String username, @Param("password")String password){
        Map<String, Object> res = new HashMap<>();
        TestNGConfig.setUsername("admin");
        TestNGConfig.setPassword("123");

        System.out.println("username："+username);
        System.out.println("password："+password);
        if (!"admin".equals(username)){
            res.put("type", "error");
            res.put("msg", "用户不存在");
            TestNGConfig.setExpectResult("用户不存在");
            return res;
        }

        if (!"123".equals(password)){
            res.put("type", "error");
            res.put("msg", "密码输入错误");
            TestNGConfig.setExpectResult("密码输入错误");
            return res;
        }

        res.put("type", "success");
        res.put("msg", "登录成功");
        TestNGConfig.setExpectResult("登录成功");
        return res;
    }

}

