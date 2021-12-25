package com.study.springboot.service.impl;

import com.study.springboot.entity.User;
import com.study.springboot.mapper.UserMapper;
import com.study.springboot.service.UserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author 何翔
 * @since 2021-10-06
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
