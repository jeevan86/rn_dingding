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
    sectionMyInfo: {height: 70},
    sectionQiInfo: {height: 60},
    sectionMain: {height: 160},
    sectionOther: {height: 80},
    sectionConfig: {height: 40},
    sectionConfigContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        opacity: .7,
        borderWidth: .5,
        borderColor: '#777'
    },
    spreader: {height: 14, backgroundColor: '#ccc', opacity: .2},
    naviBarItem: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
});

class SectionMyInfo extends Component {
    render() {
        return (
            <View style={[styles.section, styles.sectionMyInfo, {justifyContent: 'center'}, styles.flexRowCenter]}>
                <TouchableOpacity style={styles.flexRowCenter}>
                    <View style={[{flex: 2, justifyContent: 'flex-start', paddingLeft: 10}, styles.flexRowCenter]}>
                        <Image source={require('../../../assets/img/avatar.png')}
                               style={{width: 48, height: 48, borderRadius: 24}}/>
                    </View>
                    <View style={[{flex: 11, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                        <View style={[{flex: 2, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 14}}>{'180****0695'}</Text>
                        </View>
                        <View style={[{flex: 1, justifyContent: 'flex-end'}, styles.flexRowCenter]}>
                            <Image source={require('../../../assets/img/icon_mine_info.png')}
                                   style={{width: 16, height: 16}}/>
                            <Text style={{opacity: .9, fontSize: 12}}>{'   >   '}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

class SectionQiInfo extends Component {
    render() {
        return (
            <View style={[styles.section, styles.sectionQiInfo, {justifyContent: 'center'}, styles.flexRowCenter]}>
                <TouchableOpacity style={styles.flexRowCenter}>
                    <View style={[{flex: 1, justifyContent: 'flex-start', paddingLeft: 10}, styles.flexRowCenter]}>
                        <Image source={require('../../../assets/img/icon_mine_qi.png')}
                               style={{width: 20, height: 20}}/>

                    </View>
                    <View style={[{flex: 10, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                        <View style={[{flex: 2, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                            <View style={styles.flexColumnStart}>
                                <Text style={{opacity: .9, fontSize: 14}}>{'蚂蚁金融服务股份有限公司'}</Text>
                                <Text style={{opacity: .7, fontSize: 12}}>{'高级认证企业,等级V3'}</Text>
                            </View>
                        </View>
                        <View style={[{flex: 1, justifyContent: 'flex-end'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 12}}>{'   >   '}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

class SectionMain extends Component {
    render() {
        return (
            <View style={[styles.section, styles.sectionMain]}>
                <View style={[styles.sectionLine, styles.flexRowCenter, styles.sectionLineRight]}>
                    <View style={[{flex: 1, justifyContent: 'flex-start', paddingLeft: 10}, styles.flexRowCenter]}>
                        <Image source={require('../../../assets/img/icon_mine_hongbao.png')}
                               style={{width: 20, height: 20}}/>
                    </View>
                    <View style={[{flex: 10, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                        <View style={[{flex: 2, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 14}}>{'红包'}</Text>
                        </View>
                        <View style={[{flex: 1, justifyContent: 'flex-end'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 12}}>{'   >   '}</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.sectionLine, styles.flexRowCenter, styles.sectionLineRight]}>
                    <View style={[{flex: 1, justifyContent: 'flex-start', paddingLeft: 10}, styles.flexRowCenter]}>
                        <Image source={require('../../../assets/img/icon_mine_biaoqing.png')}
                               style={{width: 20, height: 20}}/>
                    </View>
                    <View style={[{flex: 10, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                        <View style={[{flex: 2, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 14}}>{'表情'}</Text>
                        </View>
                        <View style={[{flex: 1, justifyContent: 'flex-end'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 12}}>{'   >   '}</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.sectionLine, styles.flexRowCenter, styles.sectionLineRight]}>
                    <View style={[{flex: 1, justifyContent: 'flex-start', paddingLeft: 10}, styles.flexRowCenter]}>
                        <Image source={require('../../../assets/img/icon_mine_shoucang.png')}
                               style={{width: 20, height: 20}}/>
                    </View>
                    <View style={[{flex: 10, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                        <View style={[{flex: 2, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 14}}>{'收藏'}</Text>
                        </View>
                        <View style={[{flex: 1, justifyContent: 'flex-end'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 12}}>{'   >   '}</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.sectionLine, styles.flexRowCenter, styles.sectionLineRight]}>
                    <View style={[{flex: 1, justifyContent: 'flex-start', paddingLeft: 10}, styles.flexRowCenter]}>
                        <Image source={require('../../../assets/img/icon_mine_fulishe.png')}
                               style={{width: 20, height: 20}}/>
                    </View>
                    <View style={[{flex: 10, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                        <View style={[{flex: 2, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 14}}>{'福利社'}</Text>
                        </View>
                        <View style={[{flex: 1, justifyContent: 'flex-end'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 12}}>{'   >   '}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

class SectionOther extends Component {
    render() {
        return (
            <View style={[styles.section, styles.sectionOther]}>
                <View style={[styles.sectionLine, styles.flexRowCenter, styles.sectionLineRight]}>
                    <View style={[{flex: 1, justifyContent: 'flex-start', paddingLeft: 10}, styles.flexRowCenter]}>
                        <Image source={require('../../../assets/img/icon_mine_fuwuzhongxin.png')}
                               style={{width: 20, height: 20}}/>
                    </View>
                    <View style={[{flex: 10, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                        <View style={[{flex: 2, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 14}}>{'服务中心'}</Text>
                        </View>
                        <View style={[{flex: 1, justifyContent: 'flex-end'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 12}}>{'   >   '}</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.sectionLine, styles.flexRowCenter, styles.sectionLineRight]}>
                    <View style={[{flex: 1, justifyContent: 'flex-start', paddingLeft: 10}, styles.flexRowCenter]}>
                        <Image source={require('../../../assets/img/icon_mine_yaoqing.png')}
                               style={{width: 20, height: 20}}/>
                    </View>
                    <View style={[{flex: 10, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                        <View style={[{flex: 2, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 14}}>{'邀请'}</Text>
                        </View>
                        <View style={[{flex: 1, justifyContent: 'flex-end'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 12}}>{'   >   '}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

class SectionConfig extends Component {
    render() {
        return (
            <View style={[styles.section, styles.sectionConfig]}>
                <View style={[styles.sectionLine, styles.flexRowCenter, styles.sectionLineRight]}>
                    <View style={[{flex: 1, justifyContent: 'flex-start', paddingLeft: 10}, styles.flexRowCenter]}>
                        <Image source={require('../../../assets/img/icon_mine_shezhi.png')}
                               style={{width: 20, height: 20}}/>
                    </View>
                    <View style={[{flex: 10, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                        <View style={[{flex: 2, justifyContent: 'flex-start'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 14}}>{'设置'}</Text>
                        </View>
                        <View style={[{flex: 1, justifyContent: 'flex-end'}, styles.flexRowCenter]}>
                            <Text style={{opacity: .9, fontSize: 12}}>{'   >   '}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

class ItemList extends Component {
    static title = '我的';

    render() {
        return (
            <ScrollView contentInset={{top: 0}}
                        scrollsToTop={true}
                        showsVerticalScrollIndicator={true}
                        style={[styles.container, this.props.style]}>
                <View style={styles.spreader}/>
                <SectionMyInfo />
                <View style={styles.spreader}/>
                <SectionQiInfo />
                <View style={styles.spreader}/>
                <SectionMain />
                <View style={styles.spreader}/>
                <SectionOther />
                <View style={styles.spreader}/>
                <SectionConfig />
                <View style={styles.spreader}/>
            </ScrollView>
        );
    }
}

export default class MinePage extends Component {
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
                return <View />;
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
