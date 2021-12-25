package com.study.webTest.seleniumWebTest;

/*
 * @ClassName FirstWebTest
 * @description: 使用浏览器进行Web自动化测试
 * @author: 何翔
 * @Date 2021/9/15 23:21
 */

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class SeleniumWebTest {

    private static ChromeDriver chromeDriver;

    public static void main(String[] args) {
//        learn_main();
          test_main();

    }

    public static void test_main() {
        openChrome("http://localhost:8080/");
        chromeDriver.findElement(By.name("username")).sendKeys("admin");
        chromeDriver.findElement(By.name("password")).sendKeys("1234");
        chromeDriver.findElement(By.xpath("//input[@type='submit']")).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        chromeDriver.findElement(By.partialLinkText("Go back Home?")).click();
        chromeDriver.findElement(By.name("username")).sendKeys("admin");
        chromeDriver.findElement(By.name("password")).sendKeys("123");
        chromeDriver.findElement(By.xpath("//input[@type='submit']")).click();
    }

    public static void learn_main() {
        //定位百度搜索框，输入数据测试
        openChrome("https://www.baidu.com");
        //通过id定位:
        //chromeDriver.findElement(By.id("kw")).sendKeys("腾讯课堂");
        //通过name定位:
        //chromeDriver.findElement(By.name("wd")).sendKeys("腾讯课堂");
        //通过class name定位: 当有多个时，选择一个是当前页面唯一
        //chromeDriver.findElement(By.className("s_ipt")).sendKeys("腾讯课堂");
        //通过tag name定位:
        //chromeDriver.findElement(By.tagName("input"));//定位的是一组，不能完全精准定位
        //通过xpath定位，xpath定位有N种写法，这里列几个常用写法:
//        chromeDriver.findElement(By.xpath("//*[@id='kw']"));
//        chromeDriver.findElement(By.xpath("//*[@name='wd']"));
//        chromeDriver.findElement(By.xpath("//input[@class='s_ipt']"));
//        chromeDriver.findElement(By.xpath("/html/body/form/span/input"));
//        chromeDriver.findElement(By.xpath("//span[@class='soutu-btn']/input"));
//        chromeDriver.findElement(By.xpath("//form[@id='form']/span/input"));
//        chromeDriver.findElement(By.xpath("//input[@id='kw' and @name='wd']"));
        //通过css定位，css定位有N种写法，这里列几个常用写法:
//        chromeDriver.findElement(By.cssSelector("#kw"));
//        chromeDriver.findElement(By.cssSelector("[name=wd]"));
//        chromeDriver.findElement(By.cssSelector(".s_ipt"));
//        chromeDriver.findElement(By.cssSelector("html > body > form > span > input"));
//        chromeDriver.findElement(By.cssSelector("span.soutu-btn> input#kw"));
//        chromeDriver.findElement(By.cssSelector("form#form > span > input"));
          //超链接的全部定位
          chromeDriver.findElement(By.linkText("新闻")).click();
          //超链接的部分定位
//        chromeDriver.findElement(By.partialLinkText("新")


    }


    public static void openChrome(String url) {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
        chromeDriver = new ChromeDriver();
        chromeDriver.get(url);
    }

    public static void openFireFox() {
        System.setProperty("webdriver.gecko.driver", "src/test/resources/geckodriver.exe");
        FirefoxDriver firefoxDriver = new FirefoxDriver();
        firefoxDriver.get("https://www.baidu.com");
    }

}
