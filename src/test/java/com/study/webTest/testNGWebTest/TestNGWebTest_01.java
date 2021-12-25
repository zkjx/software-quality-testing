package com.study.webTest.testNGWebTest;

/*
 * @ClassName TestNGWebTest
 * @description: TODO
 * @author: 何翔
 * @Date 2021/11/23 8:47
 */

import org.testng.annotations.Test;

import static org.testng.AssertJUnit.assertEquals;

public class TestNGWebTest_01 {

    @Test
    public void testCase(){
        assertEquals(2+2, 4);
    }


}
