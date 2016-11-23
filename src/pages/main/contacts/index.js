'use strict'

import React, {Component} from 'react';

import {View, ScrollView, Navigator, Text, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';

var styles = StyleSheet.create({
    flexRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    flexColumnStart: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'center'
    },
    container: {height: 1000},
    section: {
        borderTopWidth: 1,
        borderColor: '#ccc'
    },
    sectionLine: {
        flex: 1,
        justifyContent: 'center'
    },
    sectionLineRight: {
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    sectionSearch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor:'#FFF'
    },
    sectionCatalog: {height: 180},
    sectionOrganization: {height: 45},
    sectionCreateTeam: {height: 45},
    sectionCommon: {height: 225},
    spreader: {height: 14, backgroundColor: '#ccc', opacity: .2},
    naviBarItem: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
});

class SectionSearch extends Component {
    render() {
        let contentStyle = {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: '#cccccc',
            width: 360,
            height: 24,
            borderRadius: 12,
            opacity: .5
        };
        return (
            <View style={styles.sectionSearch}>
                <TouchableOpacity onPress={() => {
                    Alert.alert('点击了查询');
                }}>
                    <View style={contentStyle}>
                        <Image style={{width: 12, height: 12}}
                               source={require('../../../../assets/img/search_50x50.png')}/>
                        <Text style={{fontSize: 12}}>{"  找人"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

class SectionCatalog extends Component {
    render() {
        let sectionLineStyle = [styles.sectionLine, styles.flexRowCenter, styles.sectionLineRight];
        let iconContainerStyle = [{flex: 1, justifyContent: 'flex-start', paddingLeft: 10}, styles.flexRowCenter];
        let iconStyle = {width: 36, height: 36};
        let textContainerStyle = [{flex: 7, justifyContent: 'flex-start'}, styles.flexRowCenter];
        let textStyle = {opacity: .9, fontSize: 14};
        return (
            <View style={[styles.section, styles.sectionCatalog]}>
                <View style={sectionLineStyle}>
                    <View style={iconContainerStyle}>
                        <Image source={require('../../../../assets/img/icon_contacts_ddhaoyou.png')} style={iconStyle}/>
                    </View>
                    <View style={textContainerStyle}>
                        <Text style={textStyle}>{'钉钉好友'}</Text>
                    </View>
                </View>

                <View style={sectionLineStyle}>
                    <View style={iconContainerStyle}>
                        <Image source={require('../../../../assets/img/icon_contacts_shoujitongxun.png')}
                               style={iconStyle}/>
                    </View>
                    <View style={textContainerStyle}>
                        <Text style={textStyle}>{'手机通讯录'}</Text>
                    </View>
                </View>

                <View style={sectionLineStyle}>
                    <View style={iconContainerStyle}>
                        <Image source={require('../../../../assets/img/icon_contacts_wodequnzu.png')}
                               style={iconStyle}/>
                    </View>
                    <View style={textContainerStyle}>
                        <Text style={textStyle}>{'我的群组'}</Text>
                    </View>
                </View>

                <View style={sectionLineStyle}>
                    <View style={iconContainerStyle}>
                        <Image source={require('../../../../assets/img/icon_contacts_fuwuchuang.png')}
                               style={iconStyle}/>
                    </View>
                    <View style={textContainerStyle}>
                        <Text style={textStyle}>{'服务窗'}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

class SectionOrganization extends Component {
    render() {
        let iconContainerStyle = [{flex: 1, justifyContent: 'flex-start', paddingLeft: 10}, styles.flexRowCenter];
        let iconStyle = {width: 36, height: 36};
        let textContainerStyle = [{flex: 7, justifyContent: 'flex-start'}, styles.flexRowCenter];
        let textStyle = {opacity: .9, fontSize: 14};
        return (
            <View style={[styles.section, styles.sectionOrganization, styles.flexRowCenter]}>
                <TouchableOpacity style={styles.flexRowCenter}>
                    <View style={iconContainerStyle}>
                        <Image source={require('../../../../assets/img/icon_contacts_zuzhi.png')} style={iconStyle}/>
                    </View>
                    <View style={textContainerStyle}>
                        <View style={[{flex: 2, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                            <Text style={textStyle}>{'蚂蚁金融服务股份有限公司'}</Text>
                            <Image source={require('../../../../assets/img/icon_contacts_gou.png')}
                                   style={{width: 16, height: 16}}/>
                        </View>
                        <View style={[{flex: 1, justifyContent: 'flex-end'}, styles.flexRowCenter]}>
                            <Text style={textStyle}>{'   >   '}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

class SectionCreateTeam extends Component {
    render() {
        let iconContainerStyle = [{flex: 1, justifyContent: 'flex-start', paddingLeft: 10}, styles.flexRowCenter];
        let iconStyle = {width: 36, height: 36};
        let textContainerStyle = [{flex: 7, justifyContent: 'flex-start'}, styles.flexRowCenter];
        let textStyle = {opacity: .9, fontSize: 14};
        return (
            <View style={[styles.section, styles.sectionOrganization, styles.flexRowCenter]}>
                <TouchableOpacity style={styles.flexRowCenter}>
                    <View style={iconContainerStyle}>
                        <Image source={require('../../../../assets/img/icon_contacts_chuangjian.png')}
                               style={iconStyle}/>
                    </View>
                    <View style={textContainerStyle}>
                        <View style={[{flex: 2, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                            <Text style={textStyle}>{'创建团队'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

class SectionCommon extends Component {
    render() {
        let iconContainerStyle = [{flex: 1, justifyContent: 'flex-start', paddingLeft: 10}, styles.flexRowCenter];
        let iconStyle = {width: 36, height: 36};
        let textContainerStyle = [{flex: 7, justifyContent: 'flex-start'}, styles.flexRowCenter];
        let textStyle = {opacity: .9, fontSize: 14};
        return (
            <View style={[styles.section, styles.sectionOrganization, styles.flexRowCenter]}>
                <TouchableOpacity style={styles.flexRowCenter}>
                    <View style={iconContainerStyle}>
                        <Image source={require('../../../../assets/img/icon_contacts_changyong.png')}
                               style={iconStyle}/>
                    </View>
                    <View style={textContainerStyle}>
                        <View style={[{flex: 2, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                            <Text style={textStyle}>{'常用联系人'}</Text>
                        </View>
                        <View style={[{flex: 1, justifyContent: 'flex-end'}, styles.flexRowCenter]}>
                            <Text style={textStyle}>{'   >   '}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

class ItemList extends Component {
    static title = '联系人';

    render() {
        return (
            <ScrollView contentInset={{top: 0}}
                        scrollsToTop={true}
                        showsVerticalScrollIndicator={true}
                        style={[styles.container, this.props.style]}>
                <SectionSearch />
                <View style={styles.spreader}/>
                <SectionCatalog />
                <View style={styles.spreader}/>
                <SectionOrganization />
                <View style={styles.spreader}/>
                <SectionCreateTeam />
                <View style={styles.spreader}/>
                <SectionCommon />
                <View style={styles.spreader}/>
            </ScrollView>
        );
    }
}

export default class ContactsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            naviBarHeight: this.props.naviBarHeight || 50
        };
    }

    _initialRoute() {
        return {
            name: 'ItemList',
            index: 0,
            component: ItemList,
            title: ItemList.title
        };
    }

    _configureScene() {
        return () => {
            return Navigator.SceneConfigs.HorizontalSwipeJump;
        };
    }

    _renderScene() {
        let style = {backgroundColor: '#FFF', marginTop: this.state.naviBarHeight};
        return (route, navigator) => {
            let Component = route.component;
            return <Component {...route.params}
                              style={style}
                              navigator={navigator}
                              onForward={() => {
                                  var nextIndex = route.index + 1;
                                  navigator.push({
                                      name: 'Scene ' + nextIndex,
                                      index: nextIndex
                                  })
                              }}
                              onBack={() => {
                                  if (route.index > 0) navigator.pop();
                              }}/>;
        };
    }

    _navigationBar() {
        let naviBar = {
            LeftButton(route, navigator, index, navState) {
                return <View />;
            },
            Title(route, navigator, index, navState) {
                let titleStyle = [{width: 200}, styles.naviBarItem];
                let titleTextStyle = {fontSize: 14, color: '#555555'};
                let title = route.title;
                return <View style={titleStyle}><Text style={titleTextStyle}>{title}</Text></View>;
            },
            RightButton(route, navigator, index, navState) {
                let titleStyle = [styles.naviBarItem];
                let titleTextStyle = {fontSize: 14, color: 'blue'};
                return <View style={titleStyle}><Text style={titleTextStyle}>{'   添加   '}</Text></View>;
            }
        };
        let style = {backgroundColor: '#e1e1e1', height: this.state.naviBarHeight};
        return <Navigator.NavigationBar style={style} routeMapper={naviBar}/>
    }

    render() {
        return <Navigator initialRoute={this._initialRoute()} configureScene={this._configureScene()}
                          renderScene={this._renderScene()} navigationBar={this._navigationBar()}/>;
    }
}

