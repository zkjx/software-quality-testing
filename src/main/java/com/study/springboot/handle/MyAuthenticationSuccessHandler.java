package com.study.springboot.handle;

/*
 * @ClassName MyAuthenticationSuccessHandler
 * @description: TODO
 * @author: 何翔
 * @Date 2021/10/12 8:49
 */

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class MyAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private String url;

    public MyAuthenticationSuccessHandler(String url) {
        this.url=url;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        //拿到用户的一些信息
        User user = (User)authentication.getPrincipal();
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());//为了安全起见，显示为null
        System.out.println(user.getAuthorities());
        response.sendRedirect(url);
    }
}
