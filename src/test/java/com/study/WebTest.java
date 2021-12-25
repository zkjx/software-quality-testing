package com.study;

/*
 * @ClassName WebTest
 * @description: 读取数据库或Excel里面的用户信息，对自己的网站进行登入测试
 * @author: 何翔
 * @Date 2021/12/7 11:26
 */

import com.alibaba.excel.EasyExcel;
import com.study.springboot.entity.User;
import com.study.springboot.service.UserService;
import com.study.springboot.service.impl.UserServiceImpl;
import com.study.webTest.FileRoot;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import javax.servlet.http.HttpServletRequest;
import java.sql.*;
import java.util.List;
import java.util.Map;

import static org.testng.AssertJUnit.assertEquals;


@SpringBootTest()
public class WebTest {
    private static ChromeDriver chromeDriver;
    static String url = "http://"+ FileRoot.getIp()+"/";

    @Autowired
    private UserService userService;

    @Autowired
    private HttpServletRequest request;


    @Test(dataProvider="getDatabaseData")
    public void webTestByUseDatabase(String username , String password){
        openChrome(url);
        chromeDriver.findElement(By.name("username")).sendKeys(username);
        chromeDriver.findElement(By.name("password")).sendKeys(password);
        chromeDriver.findElement(By.xpath("//input[@type='submit']")).click();
        assertEquals(FileRoot.getUsername(), username);
        assertEquals(FileRoot.getPassword(), password);
//      assertMethod(username, password);
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        chromeDriver.quit();
    }

    @Test(dataProvider="getDatabaseDataByMybatis")
    public void webTestByUseDatabaseWithMybatis(String username , String password){
        openChrome(url);
        chromeDriver.findElement(By.name("username")).sendKeys(username);
        chromeDriver.findElement(By.name("password")).sendKeys(password);
        chromeDriver.findElement(By.xpath("//input[@type='submit']")).click();
        assertEquals(FileRoot.getUsername(), username);
        assertEquals(FileRoot.getPassword(), password);
//      assertMethod(username, password);
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        chromeDriver.quit();
    }

    @Test(dataProvider="getExcelData")
    public void webTestByUseExcel(String username , String password){
        openChrome(url);
        chromeDriver.findElement(By.name("username")).sendKeys(username);
        chromeDriver.findElement(By.name("password")).sendKeys(password);
        chromeDriver.findElement(By.xpath("//input[@type='submit']")).click();
//      assertMethod(username, password);
        assertEquals(FileRoot.getUsername(), username);
        assertEquals(FileRoot.getPassword(), password);
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        chromeDriver.quit();
    }


    @DataProvider(name = "getDatabaseData")
    public Object[][] getDatabaseData() throws ClassNotFoundException, SQLException {
        //读取数据库文件信息
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con = DriverManager.getConnection(FileRoot.getUrl(),FileRoot.getSqlUserName(),
                FileRoot.getSqlPassword());
        Statement s = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        ResultSet rs = s.executeQuery("select * from user ");
        int total = 0;
        while (rs.next()) {
            total++;
        }
        Object[][] data = new Object[total][2];
        rs.beforeFirst();
        int a = 0;
        while (rs.next()) {
            data[a][0] = rs.getString("user_name");
            data[a][1] = rs.getString("user_pwd");
            a++;
        }

        return data;

    }

    /*
     * @author: 何翔
     * @param: null
     * @return: Object[][]
     * @date: 2021/12/23 16:43
     * @description：此方法不可被执行，使用了框架无法得到数据，原因待检查
     */
    @DataProvider(name = "getDatabaseDataByMybatis")
    public Object[][] getDatabaseDataByMybatis() {
        //读取数据库文件信息
        List<User> users = new UserServiceImpl().list(null);
        Object[][] data = new Object[users.size()][];
        int row = 0;
        for (User user : users) {
            data[row] = new Object[2];
            data[row][0] = user.getUserName();
            data[row][1] = user.getUserPwd();
            row++;
        }
            return data;

    }


    @DataProvider(name = "getExcelData")
    public Object[][] getExcelData(){
        //读取Excel文件数据
        List<Map<Integer, String>> list = EasyExcel
                .read(FileRoot.getExcelPath())
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


    public void assertMethod(String username , String password){
        assertEquals(FileRoot.getUsername(), username);
        assertEquals(FileRoot.getPassword(), password);
        String test_url ="";
        test_url = request.getScheme() +"://" + request.getServerName() +":" +request.getServerPort() + request.getServletPath();
        if (request.getQueryString() !=null){
            test_url +="?" + request.getQueryString();
        }
        System.out.println(test_url);
        assertEquals(test_url, FileRoot.getBackUrl());
    }

    public void openChrome(String url) {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
        chromeDriver = new ChromeDriver();
        chromeDriver.get(url);

    }

}
