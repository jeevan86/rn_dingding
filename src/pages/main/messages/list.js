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
        alignSelf : 'flex-start',
        marginBottom : 10
    },
    itemLeftImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf : 'flex-start'
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

var messageData = [
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

class MessageList extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(messageData)
        };
    }

    render() {
        let self = this;
        return (
            <ListView style={[this.props.style]}
                      dataSource={this.state.dataSource}
                      renderRow={(rowData, sectionID, rowID, highlightRow) =>
                          self._renderRow(self, rowData, sectionID, rowID, highlightRow)
                      }
                      renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
            />);
    }

    _pressRow(rowID) {

    }

    _getItem(self, rowData, sectionID, rowID, highlightRow) {
        if (rowID > 0) {
            return (
                <TouchableOpacity onPress={() => {
                    self._pressRow(rowID);
                }}>
                    <View style={styles.itemRow}>
                        <View style={styles.itemLeft}>
                            <Image style={styles.itemLeftImage} source={rowData.icon}/>
                        </View>
                        <View style={styles.itemRight}>
                            <Text style={styles.itemTitle}>
                                {rowData.title}
                            </Text>
                            <Text style={styles.itemContent}>
                                {rowData.content}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>);
        } else {
            return (
                <View style={styles.searchRow}>
                    <TouchableOpacity onPress={() => {
                        self._pressRow(rowID);
                        highlightRow(sectionID, rowID);
                    }}>
                        <View style={styles.searchContent}>
                            <Image style={{width: 12, height: 12}}
                                   source={require('../../../../assets/img/search_50x50.png')}/>
                            <Text style={{fontSize: 12}}>{"  搜索"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    _renderRow(self, rowData, sectionID, rowID, highlightRow) {
        return (
            this._getItem(self, rowData, sectionID, rowID, highlightRow)
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

module.exports = MessageList;
