package com.study.config;

/*
 * @ClassName TestNGConfig
 * @description: 测试代码相关配置信息和数据文件信息
 * @author: 何翔
 * @Date 2021/12/27 18:49
 */

import com.alibaba.excel.EasyExcel;

import java.sql.*;
import java.util.List;
import java.util.Map;


public class TestNGConfig {

    static  final String url = "jdbc:mysql://localhost/db_springboot?&useSSL=false&serverTimezone=UTC&rewriteBatchedStatements=true";
    static  final String driver = "com.mysql.cj.jdbc.Driver";
    static  final String sqlUserName ="root";
    static  final String sqlPassword = "1234";
    static  final String ExcelPath = "C:\\StudyProject\\Project\\Java\\SpringBoot\\springboot\\src\\test\\resources" +
            "\\TestNGData.xlsx";
    static  String username ="admin";
    static  String password ="123";
    static  String expectResult="登录成功";

    public static String getIp(){return "http://localhost:8080/";}
    public static Object[][] getDatabaseData()  {
        //读取数据库文件信息
        Object[][] data = null;
        try {
            Class.forName(driver);
            Connection con = DriverManager.getConnection(url,sqlUserName, sqlPassword);
            Statement s = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            ResultSet rs = s.executeQuery("select * from user_copy ");
            int total = 0;
            while (rs.next()) {
                total++;
            }
            data = new Object[total][3];
            rs.beforeFirst();
            int a = 0;
            while (rs.next()) {
                data[a][0] = rs.getString("user_name");
                data[a][1] = rs.getString("user_pwd");
                data[a][2] = rs.getString("expect_result");
                a++;
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
        return data;
    }

    public static Object[][] getExcelData(){
        //读取Excel文件数据
        List<Map<Integer, String>> list = EasyExcel
                .read(ExcelPath)
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

    public static String getExpectResult() {return expectResult;}
    public static void setExpectResult(String expectResult) {TestNGConfig.expectResult = expectResult;}
    public static String getUsername() {
        return username;
    }
    public static void setUsername(String username) {
        TestNGConfig.username = username;
    }
    public static String getPassword() {
        return password;
    }
    public static void setPassword(String password) {
        TestNGConfig.password = password;
    }

}
