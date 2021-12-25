package com.study.springboot.controller;

/*
 * @ClassName TestController
 * @description: TODO
 * @author: 何翔
 * @Date 2021/10/5 21:46
 */

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@Secured("ROLE_myRole")
@PreAuthorize("hasRole('myRole')")
public class PageController {

    @RequestMapping("/toMain")
    public String to_main(){
        System.out.println("跳转到主页面！");
        return "redirect:index.html";
    }

    @RequestMapping("/toError404")
    public String to_error404(){
        System.out.println("跳转到404页面！");
        return "redirect:404.html";
    }

    @RequestMapping("/showLogin")
    public String showLogin(){
        System.out.println("跳转到主页面！");
        return "test_csrf";
    }

}
