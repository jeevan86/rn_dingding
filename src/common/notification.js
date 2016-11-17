主要属性：：
**animating** 是否显示指示器 默认是true
**color**     指示器颜色
**size**      指示器大小 small，large


/**
 * Created by gaocai on 16/9/7.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    ActivityIndicator,
    Text,
} from 'react-native';

class ActivityindicatorG extends Component {


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            //默认加载
            loading: true
        };
    }

    /**
     * 开启一个定时器
     */
    componentDidMount() {
        //setState()方法重新刷新界面改变loading值
        this.timer = setTimeout(() => {
                this.setState({loading: false})
            },
            8000)
    }

    /**
     * 清除定时器 一定要清除
     */
    componentWillUnMount() {
        this.timer && clearTimeout(this.timer)
    }


    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <ActivityIndicator
                //加载状态大小 samll / large
                size='large'
                //加载状态的颜色
                color='red'
                //是否显示
                animating={this.state.loading}
            />
        )
    }
}