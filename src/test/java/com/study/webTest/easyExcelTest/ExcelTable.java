package com.study.webTest.easyExcelTest;

/*
 * @ClassName ExcelTable
 * @description: TODO
 * @author: 何翔
 * @Date 2021/12/7 9:33
 */

import lombok.Data;

@Data
public class ExcelTable {
        // 用户名
        private String username;
        // 密码
        private String password;

}

/*

默认会根据属性的顺序来关联表格列的顺序，比如 name 对应姓名（第 0 列）、age 对应年龄（第 1 列）。
当然，你也可以使用注解的方式来指定每个属性对应的表格列，支持指定下标和列名，代码如下：

 // 强制读取下标为 2 的列（第三列）
  @ExcelProperty(index = 2)
  // 指定接受日期的格式
  @DateTimeFormat("yyyy/MM/dd")
  private Date bornDate;

  // 用名字去匹配，不能和其他列重复
  @ExcelProperty("年龄")
  private Integer age;

  @ExcelProperty("姓名")
  private String name;

 */
