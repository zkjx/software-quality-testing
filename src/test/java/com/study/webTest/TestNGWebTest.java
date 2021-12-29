package com.study.webTest;

/*
 * @ClassName TestNGWebTest
 * @description: 使用TestNG对数据库信息或excel文件信息进行登入功能测试
 * @author: 何翔
 * @Date 2021/11/23 8:47
 */

import com.study.config.TestNGConfig;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.*;

import static org.testng.AssertJUnit.assertEquals;


public class TestNGWebTest{

    static ChromeDriver driver;

    //在当前测试类开始时运行。
    @BeforeClass
    public void beforeClass(){
        System.out.println("-------------------beforeClass");
        System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
        driver = new ChromeDriver();
    }

    //每个测试方法运行之前运行
    @BeforeMethod
    public void before(){
        System.out.println("=====beforeMethod");
    }

    @Test(dataProvider="getDatabaseData")
    public void webTestByUseDatabase(String username , String password, String result){testContent(username, password,result);}

    @DataProvider(name = "getDatabaseData")
    public Object[][] getDatabaseData() {
        return TestNGConfig.getDatabaseData();
    }

    @Test(dataProvider="getExcelData")
    public void webTestByUseExcel(String username , String password, String result){testContent(username, password,result);}

    @DataProvider(name = "getExcelData")
    public Object[][] getExcelData() {
        return TestNGConfig.getExcelData();
    }

    //每个测试方法运行之后运行
    @AfterMethod
    public void after(){
        System.out.println("=====afterMethod");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    //在当前测试类结束时运行。
    @AfterClass
    public static void afterClass(){
        driver.quit();
        System.out.println("-------------------afterClass");
    }

    public void testContent(String username , String password , String result){
        System.out.println("=====testMethod");
        driver.get(TestNGConfig.getIp());
        driver.findElement(By.name("username")).sendKeys(username);
        driver.findElement(By.name("password")).sendKeys(password);
        driver.findElement(By.id("sign-in-submit")).click();
        assertEquals( driver.findElement(By.id("expect_result")).getAttribute("value"), result);
    }

}
