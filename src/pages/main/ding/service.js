'use strict'

var dingDataId = 0;

var dingData = [
    {
        icon: require('../../../../assets/img/icon_newfriend.png'),
        title: '新的朋友',
        content: '新的好友推荐'
    },
    {
        icon: require('../../../../assets/img/icon_dingxiaomi.png'),
        title: '钉小秘',
        content: '3.1版本功能介绍'
    },
    {
        icon: require('../../../../assets/img/icon_jituanitsmomc.png'),
        title: '支付宝安全-区块链技术',
        content: '[tower任务] 安装Hadoop集群'
    },
    {
        icon: require('../../../../assets/img/icon_quanyuanqun_itm.png'),
        title: '全员群:支付宝安全',
        content: '王争宇:[无聊]'
    },
    {
        icon: require('../../../../assets/img/icon_dingdingfulishe.png'),
        title: '钉钉福利社',
        content: '感谢认真工作的你'
    },
    {
        icon: require('../../../../assets/img/icon_dingdingphone.png'),
        title: '钉钉电话',
        content: '最近通话: 马金虎'
    }
];

const icons = [
    require('../../../../assets/img/icon_newfriend.png'),
    require('../../../../assets/img/icon_dingxiaomi.png'),
    require('../../../../assets/img/icon_jituanitsmomc.png'),
    require('../../../../assets/img/icon_quanyuanqun_itm.png'),
    require('../../../../assets/img/icon_dingdingfulishe.png'),
    require('../../../../assets/img/icon_dingdingphone.png')
];

const titles = [
    '钉钉电话',
    '钉钉福利社',
    '全员群:支付宝安全',
    '支付宝安全-区块链技术',
    '钉小秘',
    '新的朋友'
];

const contents = [
    '新的好友推荐',
    '3.1版本功能介绍',
    '[tower任务] 安装Hadoop集群',
    '王争宇:[无聊]',
    '感谢认真工作的你',
    '最近通话: 马金虎'
];

export default class dingService {
    static getDingData = function () {
        let count = Math.round(Math.random() * 10) % 6;
        let dingData = [];
        for (let i = 0; i < count; i++) {
            dingData.push(
                {
                    id: ++dingDataId,
                    icon: icons[Math.round(Math.random() * 10) % 6],
                    title: titles[Math.round(Math.random() * 10) % 6],
                    content:contents[Math.round(Math.random() * 10) % 6],
                }
            );
        }
        return dingData;
    }
}
