package com.study.springboot.service.impl;

/*
 * @ClassName UserDetailsServiceImpl
 * @description: TODO
 * @author: 何翔
 * @Date 2021/10/5 23:53
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private PasswordEncoder pw;



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        /*
         * @author: 何翔
         * @param: [username]
         * @return: org.springframework.security.core.userdetails.UserDetails
         * @date: 2021/10/6 1:16
         * @description：自定义Security访问用户名和密码
         */

        System.out.println("执行了 loadUserByUsername方法");

        //1.查询数据库，判断用户名是否存在，如果不存在就抛出UsernameNotFoundException异常
        if(!"admin".equals(username)){
            throw new UsernameNotFoundException("用户名不存在！");
        }
        //2.把查询出来的密码（注册时已经加密过）进行解析，或者直接把密码放入构造方法里
        String password = pw.encode("123");
        return new User(username, password,
                AuthorityUtils.
                        commaSeparatedStringToAuthorityList("admin,normal,ROLE_myRole"));
    }

}
