'use strict'

import React, {Component} from 'react';

import {
    Image,
    ListView,
    StyleSheet,
    RecyclerViewBackedScrollView,
    Text,
    View,
    TouchableOpacity,
    RefreshControl
} from 'react-native';

import SearchBar from '../../../common/searchbar';
import dingService from './service';

var styles = StyleSheet.create({
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

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class DingList extends Component {

    static title = '全部';

    constructor(props) {
        super(props);
        this.state = {
            dingData: [],
            dataSource: this._createData([]),
            isRefreshing: false
        };
    }

    componentDidMount() {
        // let dingData = dingService.getDingData();
        // this.setState({
        //     dingData: dingData,
        //     dataSource: this._createData(dingData)
        // });
    }

    _createData(array) {
        let dataArray = [{}, {}]
        return ds.cloneWithRows(dataArray.concat(array));
    }

    render() {
        /*
            In next release empty section headers will be rendered.
          In this release you can user 'enableEmptySections' flag
          to render empty section headers.
            解决：找到node_modules下的react-native-gifted-listview，
          在ListView下 加个 enableEmptySections = {true} 就可以解决了。
         */
        let enableEmptySections = true;
        return (
            <ListView style={[this.props.style]}
                      dataSource={this.state.dataSource}
                      enableEmptySections={enableEmptySections}
                      renderRow={(rowData, sectionID, rowID, highlightRow) =>
                          this._renderRow(rowData, sectionID, rowID, highlightRow)
                      }
                      renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                      refreshControl={
                          <RefreshControl
                              refreshing={this.state.isRefreshing}
                              onRefresh={() => this._onRefresh()}
                              colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
                              progressBackgroundColor="#ffffff"
                          />
                      }
            />);
    }

    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            var dingData = this.state.dingData.slice(0);
            let newData = dingService.getDingData();
            newData = newData.concat(dingData);
            this.setState({
                dingData: newData,
                dataSource: this._createData(newData),
                isRefreshing: false
            });
            this.props.onRefresh(newData);
        }, 500);
    }

    _pressRow(rowID) {

    }

    _getItem(rowData, sectionID, rowID, highlightRow) {
        if (rowID == 0) {
            return (
                <SearchBar text="搜索DING消息"/>
            );
        } else if (rowID == 1) {
            let opacity, width, height, count
            if (this.state.dingData.length && this.state.dingData.length > 0) {
                width = 128;
                height = 50;
                opacity = 1;
                count = this.state.dingData.length
            } else {
                width = 0;
                height = 0;
                opacity = 0;
                count = 0;
            }
            return (
                <View style={[styles.itemRow, {
                    alignSelf: 'center',
                    width: width,
                    height: height,
                    opacity : opacity
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
                        }}>{count + '个未确认'}</Text>
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
