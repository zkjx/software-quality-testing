package com.study.webTest.testNGWebTest;

/*
 * @ClassName TestNGWebTest
 * @description: TODO
 * @author: 何翔
 * @Date 2021/11/23 8:47
 */

import org.testng.annotations.Test;

import static org.testng.AssertJUnit.assertEquals;

public class TestNGWebTest_03 {


    @Test(groups={"高", "正常"})
    public void testCase1(){
        assertEquals(2+2, 4);
    }

    @Test(groups = {"高", "正常"})
    public void testCase2(){
        assertEquals(5-3, 2);
    }

    @Test(groups = {"中", "正常"})
    public void testCase3(){
        assertEquals(2/1, 2);
    }

    @Test(groups = {"低", "异常"})
    public void testCase4(){
        assertEquals(2/0, 1);
    }


}
