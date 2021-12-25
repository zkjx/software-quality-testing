package com.study.springboot.handle;

/*
 * @ClassName MyAccessDeniedHandler
 * @description: TODO
 * @author: 何翔
 * @Date 2021/10/12 23:12
 */

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class MyAccessDeniedHandler implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        response.setStatus(HttpServletResponse.SC_ACCEPTED);
        response.setHeader("Content-Type","application/json;charset=utf-8");
        response.getWriter().write("{\"status\":\"error\",\"msg\":\"权限不足，请联系管理员\"}");
    }
}
