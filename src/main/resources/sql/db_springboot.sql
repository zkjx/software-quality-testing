/*
 Navicat Premium Data Transfer

 Source Server         : localhost - MySQL8.0
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : db_springboot

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 25/12/2021 17:51:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for persistent_logins
-- ----------------------------
DROP TABLE IF EXISTS `persistent_logins`;
CREATE TABLE `persistent_logins`  (
  `username` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `series` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `last_used` timestamp(0) NOT NULL,
  PRIMARY KEY (`series`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of persistent_logins
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` int NOT NULL AUTO_INCREMENT COMMENT '鐢ㄦ埛id',
  `user_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '鐢ㄦ埛鍚�',
  `user_pwd` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '鐢ㄦ埛瀵嗙爜',
  `create_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '鍒涘缓鏃堕棿',
  `modify_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '淇敼鏃堕棿',
  `enable` int NULL DEFAULT 1 COMMENT '閫昏緫鍒犻櫎閲�',
  `version` int NULL DEFAULT 1 COMMENT '涔愯閿佹爣閲�',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '张三', '123', '2021-12-07 19:07:36', '2021-12-22 23:17:49', 1, 1);
INSERT INTO `user` VALUES (2, 'admin', 'admin', '2021-12-22 23:17:53', '2021-12-22 23:42:17', 1, 1);
INSERT INTO `user` VALUES (3, '李四', 'error', '2021-12-22 23:42:52', '2021-12-22 23:42:52', 1, 1);
INSERT INTO `user` VALUES (4, '', '123', '2021-12-22 23:54:56', '2021-12-22 23:58:25', 1, 1);
INSERT INTO `user` VALUES (5, 'admin', '', '2021-12-22 23:55:06', '2021-12-22 23:58:29', 1, 1);
INSERT INTO `user` VALUES (6, '', '', '2021-12-22 23:55:26', '2021-12-22 23:58:39', 1, 1);
INSERT INTO `user` VALUES (7, '王五', '', '2021-12-22 23:58:05', '2021-12-22 23:58:34', 1, 1);
INSERT INTO `user` VALUES (8, '', 'error', '2021-12-22 23:59:48', '2021-12-23 00:33:43', 1, 1);
INSERT INTO `user` VALUES (9, 'admin', '123', '2021-12-23 00:33:53', '2021-12-23 00:33:53', 1, 1);

SET FOREIGN_KEY_CHECKS = 1;
