'use strict';

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

import messageService from './service';

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

var messageData = messageService.getMessageData();

export default class MessageList extends Component {

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
            return <SearchBar text={'搜索'}/>;
        }
    }

    _renderRow(self, rowData, sectionID, rowID, highlightRow) {
        return this._getItem(self, rowData, sectionID, rowID, highlightRow);
    }

}
