package com.study.springboot.service;

/*
 * @ClassName MyService
 * @description: TODO
 * @author: 何翔
 * @Date 2021/10/12 23:50
 */

import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;

public interface MyService {
    boolean hasPermission(HttpServletRequest request, Authentication authentication);
}
