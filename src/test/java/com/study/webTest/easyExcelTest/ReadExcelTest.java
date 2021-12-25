package com.study.webTest.easyExcelTest;

/*
 * @ClassName ReadTest
 * @description: TODO
 * @author: 何翔
 * @Date 2021/12/7 9:15
 */

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.context.AnalysisContext;
import com.alibaba.excel.read.listener.ReadListener;
import com.study.webTest.FileRoot;
import lombok.extern.slf4j.Slf4j;
import org.junit.Ignore;

import java.util.List;
import java.util.Map;

@Ignore
@Slf4j
public class ReadExcelTest implements ReadListener<ExcelTable> {

    public static void main(String[] args) {
        new ReadExcelTest().read();
    }

    /*
    不创建对象的读
    如果事先不清楚表格会有哪些列、类型如何（比如让用户自主上传表格）,
    那么可以使用 不创建对象读 的方式，直接用 Map<Integer, String> 泛型类来接收：
     */
    public void read(){
        List<Map<Integer, String>> list = EasyExcel
                .read(FileRoot.getExcelPath())
                .sheet()
                .doReadSync();
        // Map 的 key 为列下标，value 为单元格的值
        for (Map<Integer, String> data : list) {
            for (String value : data.values()) {
                System.out.print(value+" ");
            }
            System.out.println();
        }
    }

    /**
     * 同步读取
     * 同步是指一次性读取表格中的所有行，以列表的方式完整返回，再整体去处理。
     * 由于这种方式会将数据完整加载到内存中，因此只 适用于表格行数比较少 的情况。
     * 代码如下：
     */
    public void synchronousRead() {
        String fileName = FileRoot.getExcelPath();
        // 读取到的数据
        List<ExcelTable> list = EasyExcel.read(fileName)
                .head(ExcelTable.class)
                .sheet()
                .doReadSync();
        for (ExcelTable excelTable : list) {
            System.out.println(excelTable.getUsername());
            System.out.println(excelTable.getPassword());

        }
    }

    /**
     * 定义监听器
     * 异步方式需要定义一个 监听器 ，每读取一行，就要立即去处理该行数据。
     * 这样就不需要将所有数据都加载到内存中，算一行读一行，理论上算完了也可以丢弃。代码如下：
     * 每读一行数据，都会调用一次
     * @param data 一行数据
     * @param context 上下文
     */
    @Override
    public void invoke(ExcelTable data, AnalysisContext context) {
        // 输出姓名
        System.out.println(data.getUsername());
    }

    /**
     * 开始读取
     */
    public void assynchronousRead() {
        String fileName = FileRoot.getExcelPath();
        EasyExcel.read(fileName, ExcelTable.class,
                        new ReadExcelTest())
                .sheet()
                .doRead();
    }


    @Override
    public void doAfterAllAnalysed(AnalysisContext context) {}

}





































//    /**
//     * 最简单的读
//     * <p>
//     * 1. 创建excel对应的实体对象 参照{@link DemoData}
//     * <p>
//     * 2. 由于默认一行行的读取excel，所以需要创建excel一行一行的回调监听器，参照{@link DemoDataListener}
//     * <p>
//     * 3. 直接读即可
//     */
//    @Test
//    public void simpleRead() {
//        // 写法1：JDK8+ ,不用额外写一个DemoDataListener
//        // since: 3.0.0-beta1
//        String fileName = TestFileUtil.getPath() + "demo" + File.separator + "demo.xlsx";
//        // 这里 需要指定读用哪个class去读，然后读取第一个sheet 文件流会自动关闭
//        // 这里每次会读取3000条数据 然后返回过来 直接调用使用数据就行
//        EasyExcel.read(fileName, DemoData.class, new PageReadListener<DemoData>(dataList -> {
//            for (DemoData demoData : dataList) {
//                log.info("读取到一条数据{}", JSON.toJSONString(demoData));
//            }
//        })).sheet().doRead();
//
//        // 写法2：
//        // 匿名内部类 不用额外写一个DemoDataListener
//        fileName = TestFileUtil.getPath() + "demo" + File.separator + "demo.xlsx";
//        // 这里 需要指定读用哪个class去读，然后读取第一个sheet 文件流会自动关闭
//        EasyExcel.read(fileName, DemoData.class, new ReadListener<DemoData>() {
//            /**
//             * 单次缓存的数据量
//             */
//            public static final int BATCH_COUNT = 100;
//            /**
//             *临时存储
//             */
//            private List<DemoData> cachedDataList = ListUtils.newArrayListWithExpectedSize(BATCH_COUNT);
//
//            @Override
//            public void invoke(DemoData data, AnalysisContext context) {
//                cachedDataList.add(data);
//                if (cachedDataList.size() >= BATCH_COUNT) {
//                    saveData();
//                    // 存储完成清理 list
//                    cachedDataList = ListUtils.newArrayListWithExpectedSize(BATCH_COUNT);
//                }
//            }
//
//            @Override
//            public void doAfterAllAnalysed(AnalysisContext context) {
//                saveData();
//            }
//
//            /**
//             * 加上存储数据库
//             */
//            private void saveData() {
//                log.info("{}条数据，开始存储数据库！", cachedDataList.size());
//                log.info("存储数据库成功！");
//            }
//        }).sheet().doRead();
//
//        // 有个很重要的点 DemoDataListener 不能被spring管理，要每次读取excel都要new,然后里面用到spring可以构造方法传进去
//        // 写法3：
//        fileName = TestFileUtil.getPath() + "demo" + File.separator + "demo.xlsx";
//        // 这里 需要指定读用哪个class去读，然后读取第一个sheet 文件流会自动关闭
//        EasyExcel.read(fileName, DemoData.class, new DemoDataListener()).sheet().doRead();
//
//        // 写法4：
//        fileName = TestFileUtil.getPath() + "demo" + File.separator + "demo.xlsx";
//        // 一个文件一个reader
//        ExcelReader excelReader = null;
//        try {
//            excelReader = EasyExcel.read(fileName, DemoData.class, new DemoDataListener()).build();
//            // 构建一个sheet 这里可以指定名字或者no
//            ReadSheet readSheet = EasyExcel.readSheet(0).build();
//            // 读取一个sheet
//            excelReader.read(readSheet);
//        } finally {
//            if (excelReader != null) {
//                // 这里千万别忘记关闭，读的时候会创建临时文件，到时磁盘会崩的
//                excelReader.finish();
//            }
//        }
//    }
//
//    /**
//     * 指定列的下标或者列名
//     *
//     * <p>
//     * 1. 创建excel对应的实体对象,并使用{@link ExcelProperty}注解. 参照{@link IndexOrNameData}
//     * <p>
//     * 2. 由于默认一行行的读取excel，所以需要创建excel一行一行的回调监听器，参照{@link IndexOrNameDataListener}
//     * <p>
//     * 3. 直接读即可
//     */
//    @Test
//    public void indexOrNameRead() {
//        String fileName = TestFileUtil.getPath() + "demo" + File.separator + "demo.xlsx";
//        // 这里默认读取第一个sheet
//        EasyExcel.read(fileName, IndexOrNameData.class, new IndexOrNameDataListener()).sheet().doRead();
//    }
//
//    /**
//     * 读多个或者全部sheet,这里注意一个sheet不能读取多次，多次读取需要重新读取文件
//     * <p>
//     * 1. 创建excel对应的实体对象 参照{@link DemoData}
//     * <p>
//     * 2. 由于默认一行行的读取excel，所以需要创建excel一行一行的回调监听器，参照{@link DemoDataListener}
//     * <p>
//     * 3. 直接读即可
//     */
//    @Test
//    public void repeatedRead() {
//        String fileName = TestFileUtil.getPath() + "demo" + File.separator + "demo.xlsx";
//        // 读取全部sheet
//        // 这里需要注意 DemoDataListener的doAfterAllAnalysed 会在每个sheet读取完毕后调用一次。然后所有sheet都会往同一个DemoDataListener里面写
//        EasyExcel.read(fileName, DemoData.class, new DemoDataListener()).doReadAll();
//
//        // 读取部分sheet
//        fileName = TestFileUtil.getPath() + "demo" + File.separator + "demo.xlsx";
//        ExcelReader excelReader = null;
//        try {
//            excelReader = EasyExcel.read(fileName).build();
//
//            // 这里为了简单 所以注册了 同样的head 和Listener 自己使用功能必须不同的Listener
//            ReadSheet readSheet1 =
//                    EasyExcel.readSheet(0).head(DemoData.class).registerReadListener(new DemoDataListener()).build();
//            ReadSheet readSheet2 =
//                    EasyExcel.readSheet(1).head(DemoData.class).registerReadListener(new DemoDataListener()).build();
//            // 这里注意 一定要把sheet1 sheet2 一起传进去，不然有个问题就是03版的excel 会读取多次，浪费性能
//            excelReader.read(readSheet1, readSheet2);
//        } finally {
//            if (excelReader != null) {
//                // 这里千万别忘记关闭，读的时候会创建临时文件，到时磁盘会崩的
//                excelReader.finish();
//            }
//        }
//    }
//
//    /**
//     * 日期、数字或者自定义格式转换
//     * <p>
//     * 默认读的转换器{@link DefaultConverterLoader#loadDefaultReadConverter()}
//     * <p>
//     * 1. 创建excel对应的实体对象 参照{@link ConverterData}.里面可以使用注解{@link DateTimeFormat}、{@link NumberFormat}或者自定义注解
//     * <p>
//     * 2. 由于默认一行行的读取excel，所以需要创建excel一行一行的回调监听器，参照{@link ConverterDataListener}
//     * <p>
//     * 3. 直接读即可
//     */
//    @Test
//    public void converterRead() {
//        String fileName = TestFileUtil.getPath() + "demo" + File.separator + "demo.xlsx";
//        // 这里 需要指定读用哪个class去读，然后读取第一个sheet
//        EasyExcel.read(fileName, ConverterData.class, new ConverterDataListener())
//                // 这里注意 我们也可以registerConverter来指定自定义转换器， 但是这个转换变成全局了， 所有java为string,excel为string的都会用这个转换器。
//                // 如果就想单个字段使用请使用@ExcelProperty 指定converter
//                // .registerConverter(new CustomStringStringConverter())
//                // 读取sheet
//                .sheet().doRead();
//    }
//
//    /**
//     * 多行头
//     *
//     * <p>
//     * 1. 创建excel对应的实体对象 参照{@link DemoData}
//     * <p>
//     * 2. 由于默认一行行的读取excel，所以需要创建excel一行一行的回调监听器，参照{@link DemoDataListener}
//     * <p>
//     * 3. 设置headRowNumber参数，然后读。 这里要注意headRowNumber如果不指定， 会根据你传入的class的{@link ExcelProperty#value()}里面的表头的数量来决定行数，
//     * 如果不传入class则默认为1.当然你指定了headRowNumber不管是否传入class都是以你传入的为准。
//     */
//    @Test
//    public void complexHeaderRead() {
//        String fileName = TestFileUtil.getPath() + "demo" + File.separator + "demo.xlsx";
//        // 这里 需要指定读用哪个class去读，然后读取第一个sheet
//        EasyExcel.read(fileName, DemoData.class, new DemoDataListener()).sheet()
//                // 这里可以设置1，因为头就是一行。如果多行头，可以设置其他值。不传入也可以，因为默认会根据DemoData 来解析，他没有指定头，也就是默认1行
//                .headRowNumber(1).doRead();
//    }
//
//    /**
//     * 读取表头数据
//     *
//     * <p>
//     * 1. 创建excel对应的实体对象 参照{@link DemoData}
//     * <p>
//     * 2. 由于默认一行行的读取excel，所以需要创建excel一行一行的回调监听器，参照{@link DemoHeadDataListener}
//     * <p>
//     * 3. 直接读即可
//     */
//    @Test
//    public void headerRead() {
//        String fileName = TestFileUtil.getPath() + "demo" + File.separator + "demo.xlsx";
//        // 这里 需要指定读用哪个class去读，然后读取第一个sheet
//        EasyExcel.read(fileName, DemoData.class, new DemoHeadDataListener()).sheet().doRead();
//    }
//
//    /**
//     * 额外信息（批注、超链接、合并单元格信息读取）
//     * <p>
//     * 由于是流式读取，没法在读取到单元格数据的时候直接读取到额外信息，所以只能最后通知哪些单元格有哪些额外信息
//     *
//     * <p>
//     * 1. 创建excel对应的实体对象 参照{@link DemoExtraData}
//     * <p>
//     * 2. 由于默认异步读取excel，所以需要创建excel一行一行的回调监听器，参照{@link DemoExtraListener}
//     * <p>
//     * 3. 直接读即可
//     *
//     * @since 2.2.0-beat1
//     */
//    @Test
//    public void extraRead() {
//        String fileName = TestFileUtil.getPath() + "demo" + File.separator + "extra.xlsx";
//        // 这里 需要指定读用哪个class去读，然后读取第一个sheet
//        EasyExcel.read(fileName, DemoExtraData.class, new DemoExtraListener())
//                // 需要读取批注 默认不读取
//                .extraRead(CellExtraTypeEnum.COMMENT)
//                // 需要读取超链接 默认不读取
//                .extraRead(CellExtraTypeEnum.HYPERLINK)
//                // 需要读取合并单元格信息 默认不读取
//                .extraRead(CellExtraTypeEnum.MERGE).sheet().doRead();
//    }
//
//    /**
//     * 读取公式和单元格类型
//     *
//     * <p>
//     * 1. 创建excel对应的实体对象 参照{@link CellDataReadDemoData}
//     * <p>
//     * 2. 由于默认一行行的读取excel，所以需要创建excel一行一行的回调监听器，参照{@link DemoHeadDataListener}
//     * <p>
//     * 3. 直接读即可
//     *
//     * @since 2.2.0-beat1
//     */
//    @Test
//    public void cellDataRead() {
//        String fileName = TestFileUtil.getPath() + "demo" + File.separator + "cellDataDemo.xlsx";
//        // 这里 需要指定读用哪个class去读，然后读取第一个sheet
//        EasyExcel.read(fileName, CellDataReadDemoData.class, new CellDataDemoHeadDataListener()).sheet().doRead();
//    }
//
//    /**
//     * 数据转换等异常处理
//     *
//     * <p>
//     * 1. 创建excel对应的实体对象 参照{@link ExceptionDemoData}
//     * <p>
//     * 2. 由于默认一行行的读取excel，所以需要创建excel一行一行的回调监听器，参照{@link DemoExceptionListener}
//     * <p>
//     * 3. 直接读即可
//     */
//    @Test
//    public void exceptionRead() {
//        String fileName = TestFileUtil.getPath() + "demo" + File.separator + "demo.xlsx";
//        // 这里 需要指定读用哪个class去读，然后读取第一个sheet
//        EasyExcel.read(fileName, ExceptionDemoData.class, new DemoExceptionListener()).sheet().doRead();
//    }
//
//    /**
//     * 同步的返回，不推荐使用，如果数据量大会把数据放到内存里面
//     */
//    @Test
//    public void synchronousRead() {
//        String fileName = TestFileUtil.getPath() + "demo" + File.separator + "demo.xlsx";
//        // 这里 需要指定读用哪个class去读，然后读取第一个sheet 同步读取会自动finish
//        List<DemoData> list = EasyExcel.read(fileName).head(DemoData.class).sheet().doReadSync();
//        for (DemoData data : list) {
//            log.info("读取到数据:{}", JSON.toJSONString(data));
//        }
//
//        // 这里 也可以不指定class，返回一个list，然后读取第一个sheet 同步读取会自动finish
//        List<Map<Integer, String>> listMap = EasyExcel.read(fileName).sheet().doReadSync();
//        for (Map<Integer, String> data : listMap) {
//            // 返回每条数据的键值对 表示所在的列 和所在列的值
//            log.info("读取到数据:{}", JSON.toJSONString(data));
//        }
//    }
//
//    /**
//     * 不创建对象的读
//     */
//    @Test
//    public void noModelRead() {
//        String fileName = TestFileUtil.getPath() + "demo" + File.separator + "demo.xlsx";
//        // 这里 只要，然后读取第一个sheet 同步读取会自动finish
//        EasyExcel.read(fileName, new NoModelDataListener()).sheet().doRead();
//    }
//}
