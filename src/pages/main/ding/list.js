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
    RefreshControl,
    Alert
} from 'react-native';

import {SearchBarItem, ConfirmButtonItem, DingMessageItem} from './listitem';
import DingSearchPage from './search';
import dingService from './service';

var styles = StyleSheet.create({
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
        this._onRefresh();
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
        Alert.alert('点击了Item:{id:' + rowID + '}');
    }

    _pressSearchBar() {
        let navigator = this.props.navigator;
        navigator.push(
            {
                name: DingSearchPage.title,
                index: 0,
                component: DingSearchPage,
                title: DingSearchPage.title,
                passProps: {}
            }
        );
    }

    _getItem(rowData, sectionID, rowID, highlightRow) {
        if (rowID == 0) {
            return <SearchBarItem style={styles.itemRow} onPress={() => {
                this._pressSearchBar();
            }}/>;
        } else if (rowID == 1) {
            return <ConfirmButtonItem style={styles.itemRow} onPress={this._pressRow}
                                      count={this.state.dingData.length}/>;
        } else {
            return <DingMessageItem rowID={rowID} rowData={rowData} onPress={this._pressRow}/>;
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
