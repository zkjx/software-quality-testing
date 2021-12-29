package com.study.webTest.util;

/*
 * @ClassName FileRoot
 * @description: TODO
 * @author: 何翔
 * @Date 2021/12/7 9:48
 */

import com.study.springboot.entity.User;
import com.study.springboot.service.impl.UserServiceImpl;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public class FileRoot {

    static  final String Ip = "localhost:8080";

    static  final String ExcelPath = "C:\\StudyProject\\Project\\Java\\SpringBoot\\springboot\\src\\test\\resources\\TestData.xlsx";

    static  final String username ="admin";
    static  final String password ="123";
    static  final String backUrl = "http://"+Ip+"/index.html";
    static  final String url = "jdbc:mysql://localhost/db_springboot?&useSSL=false&serverTimezone=UTC&rewriteBatchedStatements=true";
    static  final String sqlUserName ="root";
    static  final String sqlPassword = "1234";
    public static String getExcelPath(){
        return ExcelPath;
    }
    public static String getIp(){return Ip;}
    public static String getUsername(){return username;}
    public static String getPassword(){return password;}
    public static String getBackUrl(){return backUrl;}
    public static String getUrl(){return url;}
    public static String getSqlUserName(){return sqlUserName;}
    public static String getSqlPassword(){return sqlPassword;}

    public static String getCurrentUrl(HttpServletRequest request){
        String url ="";
        url = request.getScheme() +"://" + request.getServerName() +":" +request.getServerPort() + request.getServletPath();
        if (request.getQueryString() !=null){
            url +="?" + request.getQueryString();
        }
        return url;
    }

    public static List<User> getUserList(){
        return new UserServiceImpl().list(null);
    }

}
