package com.study.config;

/*
 * @ClassName SecurityConfig
 * @description: TODO
 * @author: 何翔
 * @Date 2021/10/5 22:46
 */

import com.study.springboot.handle.MyAccessDeniedHandler;
import com.study.springboot.handle.MyAuthenticationFailureHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.rememberme.JdbcTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;

import javax.sql.DataSource;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    MyAccessDeniedHandler myAccessDeniedHandler;
    @Autowired
    UserDetailsService userDetailsService;
    @Autowired
    private DataSource dataSource;
    @Autowired
    private PersistentTokenRepository persistentTokenRepository;

    @Bean
    public PasswordEncoder getPw(){
        return new BCryptPasswordEncoder();
    }
    @Bean
    public PersistentTokenRepository getPersistentTokenRepository(){
        JdbcTokenRepositoryImpl jdbcTokenRepository = new JdbcTokenRepositoryImpl();
        jdbcTokenRepository.setDataSource(dataSource);
        //自动建表，第一次启动需要，第二次启动注释掉
        //jdbcTokenRepository.setCreateTableOnStartup(true);
        return jdbcTokenRepository;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //表单提交
       http.formLogin()
               //当发现login时认为是登入，必须和login.html表单提交的地址一样，去执行UserDetailsServiceImpl
               .loginProcessingUrl("/toMain")

               //自定义登入页面
               //也可以用跳转实现
                .loginPage("/login.html")

               //.loginPage("/showLogin")

               //登入成功跳转页面（通过controller请求跳转）
               .successForwardUrl("/toMain")
               //.successHandler(new MyAuthenticationSuccessHandler("https://www.cnblogs.com/He-Xiang-best/"))

               //登入失败后跳转页面，post请求
               //.failureForwardUrl("/toError404");
               .failureHandler(new MyAuthenticationFailureHandler("/404.html"));


       //授权认证
       http.authorizeRequests()
               // 资源、认证放行（也可以通过跳转实现）
               .antMatchers("/login.html").permitAll()
               //.antMatchers("/showLogin").permitAll()
               //写法2：
               //.antMatchers("/login.html").access("permitAll()")
               .antMatchers("/404.html").permitAll()
               .antMatchers("/css/**","/js/**","/images/**","/fonts/**","/lib/**").permitAll()

               //正则表达式
               //.regexMatchers(.+[.]png).permitAll()
               //.regexMatchers(HttpMethod.GET,"/demo").permitAll()

               //权限判断
               //.antMatchers("/**").hasAuthority("admin")
               //.antMatchers("/**").hasAnyAuthority("admin","normal")
               //.antMatchers("/**").hasRole("myRole")
               //.antMatchers("/**").access("hasRole('myRole')")
               //.antMatchers("/**").hasAnyRole("myRole,role")

               //IP地址判断
               //.antMatchers("/main.html").hasIpAddress("127.0.0.1")

               //所有请求都必须被认证，必须登入之后被访问
               .anyRequest().authenticated();
               //.anyRequest().access("@myServiceImpl.hasPermission(request,authentication)");

       http.rememberMe()
               //失效时间，单位秒
               .tokenValiditySeconds(60)
               //rememberMeParameter() 修改name值，否则只能叫remember-me
               //自定义登入逻辑
               .userDetailsService(userDetailsService)
               //持久层对象
               .tokenRepository(persistentTokenRepository);

       http.exceptionHandling()
               .accessDeniedHandler(myAccessDeniedHandler);

       //退出登入，跳转页面
       http.logout()
               //.logoutUrl("/user/logout")
               //退出登入跳转页面
               .logoutSuccessUrl("/login.html");

       //页面可以在相同域名下显示
       http.headers().frameOptions().sameOrigin();


       //关闭csrf防护
        http.csrf().disable();

    }


}
