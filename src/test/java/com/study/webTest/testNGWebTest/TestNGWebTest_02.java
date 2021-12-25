package com.study.webTest.testNGWebTest;

/*
 * @ClassName TestNGWebTest
 * @description: TODO
 * @author: 何翔
 * @Date 2021/11/23 8:47
 */

import org.testng.annotations.*;

public class TestNGWebTest_02 {

    //在当前测试类开始时运行。
    @BeforeClass
    public static void beforeClass(){
        System.out.println("-------------------beforeClass");
    }

    //在当前测试类结束时运行。
    @AfterClass
    public static void afterClass(){
        System.out.println("-------------------afterClass");
    }

    //每个测试方法运行之前运行
    @BeforeMethod
    public void before(){
        System.out.println("=====beforeMethod");
    }

    //每个测试方法运行之后运行
    @AfterMethod
    public void after(){
        System.out.println("=====afterMethod");
    }

    @Test
    public void testCase1(){
        System.out.println("test case 1");
    }

    @Test
    public void testCase2(){
        System.out.println("test case 2");
    }

}
