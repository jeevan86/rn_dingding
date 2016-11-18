'use strict'

import React, {Component} from 'react';

import {
    Image,
    ListView,
    StyleSheet,
    RecyclerViewBackedScrollView,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import SearchBar from '../../../common/searchbar';

var styles = StyleSheet.create({
    searchRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    searchContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#cccccc',
        width: 360,
        height: 24,
        borderRadius: 12,
        opacity: .5
    },
    searchText: {
        backgroundColor: '#cccccc',
        borderColor: 'white',
        borderRadius: 3,
        borderWidth: 1,
        height: 30,
        paddingLeft: 8,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#FFF'
    },
    itemLeft: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginBottom: 10
    },
    itemLeftImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start'
    },
    itemRight: {
        flex: 7,
        paddingLeft: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderBottomWidth: 1.5,
        borderBottomColor: '#eeeeee'
    },
    itemTitle: {
        flex: 1,
        alignItems: 'flex-start'
    },
    itemContent: {
        flex: 1,
        color: '#666',
        alignItems: 'flex-end'
    }
});

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
        content: '最近通话: 马金虎最近通话: 马金虎最近通话: 马金虎最近通话: 马金虎最近通话: 马金虎最近通话: 马金虎最近通话: 马金虎最近通话: 马金虎最近通话: 马金虎最近通话: 马金虎最近通话: 马金虎'
    }
];

class DingList extends Component {

    static title = '全部';

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(dingData)
        };
    }

    render() {
        return (
            <ListView style={[this.props.style]}
                      dataSource={this.state.dataSource}
                      renderRow={(rowData, sectionID, rowID, highlightRow) =>
                          this._renderRow(rowData, sectionID, rowID, highlightRow)
                      }
                      renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
            />);
    }

    _pressRow(rowID) {

    }

    _getItem(rowData, sectionID, rowID, highlightRow) {
        if (rowID == 0) {
            return (
                <SearchBar text="搜索DING消息"/>
            );
        } else if (rowID == 1) {
            return (
                <View style={[styles.itemRow, {
                    alignSelf: 'center',
                    width: 128,
                    height: 50
                }]}>
                    <TouchableOpacity style={{
                        width: 96,
                        height: 36,
                        alignSelf: 'center',
                        backgroundColor: '#86CEFA',
                        borderRadius: 12,
                        justifyContent: 'center'
                    }} onPress={() => {
                        this._pressRow(rowID);
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: '#FFF',
                            fontSize: 12,
                            fontWeight: 'bold'
                        }}>{'4个未确认'}</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View>
                    <View style={[styles.itemRow, {
                        flexDirection: 'column',
                        backgroundColor: '#FFFFFF',
                        borderColor: '#ccc',
                        borderWidth: 1,
                        width: 360,
                        borderRadius: 4,
                        alignSelf: 'center'
                    }]}>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <View style={{flex: 2}}>
                                <Image source={rowData.icon}
                                       style={{width: 20, height: 20, borderRadius: 10}}/>
                            </View>
                            <Text style={{flex: 20, fontSize: 10}}>{'2016-11-11 14:20'}</Text>
                            <View style={{flex: 1}}>
                                <Image source={require('../../../../assets/img/icon_ding_ding.png')}
                                       style={{width: 10, height: 10, borderRadius: 0, opacity: 1}}/>
                            </View>
                        </View>
                        <View style={{borderBottomWidth: 1, opacity: .6, borderColor: '#ccc'}}>
                            <Text style={{fontSize: 12}}>{rowData.content}</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            this._pressRow(rowID);
                        }}>
                            <View style={{
                                height: 24,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{color: 'blue', fontSize: 12, alignSelf: 'center'}}>{'点击确认收到'}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 10}}/>
                </View>
            );
        }
    }

    _renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            this._getItem(rowData, sectionID, rowID, highlightRow)
        );
    }

    _renderSeperator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
                    height: adjacentRowHighlighted ? 4 : 1,
                    backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
                }}
            />
        );
    }
}

// class DingList extends Component {
//     static title = '全部';
//
//     render() {
//         return (
//             <ScrollView contentInset={{top: 0}}
//                         scrollsToTop={true}
//                         showsVerticalScrollIndicator={true}
//                         style={[styles.container, this.props.style]}>
//                 <SearchBar text="搜索DING消息"/>
//             </ScrollView>
//         );
//     }
// }

module.exports = DingList;