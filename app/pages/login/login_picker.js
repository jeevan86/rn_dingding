/**
 * Created by huangjian on 2016/11/11.
 */
'use strict'

import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, TextInput, Button, Alert, TouchableOpacity, PickerIOS} from 'react-native';

import CarData from '../../data/car';

var CAR_MAKES_AND_MODELS = CarData;

var PickerItemIOS = PickerIOS.Item;

const styles = StyleSheet.create({
    fixedItem: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    header: {
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#1DBAF1',
        width: 1000
    },
    headtitle: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#000000',
    },
    avatarview: {
        height: 150,
        backgroundColor: '#ECEDF1',
        justifyContent: 'center',
    },
    avatarimage: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    picker: {
        flexDirection: 'column',
        flex: 1
    },
    inputview: {
        height: 100,
    },
    textinput: {
        flex: 1,
        fontSize: 16,
    },
    dividerview: {
        flexDirection: 'row',
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#ECEDF1'
    },
    bottomview: {
        backgroundColor: '#ECEDF1',
        flex: 1,
    },
    buttonview: {
        backgroundColor: '#1DBAF1',
        margin: 10,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logintext: {
        fontSize: 17,
        color: '#FFFFFF',
        marginTop: 10,
        marginBottom: 10,
    },
    emptyview: {
        flex: 1,
    },
    bottombtnsview: {
        flexDirection: 'row'
    },
    bottomleftbtnview: {
        flex: 1,
        height: 50,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    bottomrightbtnview: {
        flex: 1,
        height: 50,
        paddingRight: 10,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    bottombtn: {
        fontSize: 10,
        color: '#1DBAF1',
    }
});

class LoginPage extends Component {
    /**
     * 构造器
     * @param props 属性
     */
    constructor(props) {
        super(props);
        this.state = {
            carMake: 'cadillac',
            modelIndex: 3
        };
    }

    _onButtonPress() {
        Alert.alert('Button has been pressed!');
    }

    render() {

        var make = CAR_MAKES_AND_MODELS[this.state.carMake];
        var selectionString = make.name + ' ' + make.models[this.state.modelIndex];

        return (
            <View style={styles.fixedItem}>
                <View style={styles.header}>
                    <Text style={styles.headtitle}>添加账号</Text>
                </View>
                <View style={styles.avatarview}>
                    <Image source={require('../../../assets/img/avatar.png')} style={styles.avatarimage}/>
                </View>
                <View style={styles.inputview}>
                    <TextInput underlineColorAndroid='transparent' style={styles.textinput} placeholder='QQ号/手机号/邮箱'/>
                    <View style={styles.dividerview}><Text style={styles.divider}/></View>
                    <TextInput underlineColorAndroid='transparent' style={styles.textinput} placeholder='密码'
                               secureTextEntry={true}/>
                </View>
                <View style={styles.bottomview}>
                    <View style={styles.buttonview}>
                        <Button style={styles.logintext} onPress={this._onButtonPress} title="   登   录   "/>
                    </View>
                    <View style={styles.bottombtnsview}>
                        <View style={styles.bottomleftbtnview}>
                            <Button style={styles.bottombtn} onPress={this._onButtonPress} title="无法登录？"/>
                        </View>
                        <View style={styles.bottomrightbtnview}>
                            <Button style={styles.bottombtn} onPress={this._onButtonPress} title="新用户"/>
                        </View>
                    </View>
                    <View style={styles.emptyview}></View>

                    <View>
                        <Text>Please choose a make for your car:</Text>
                        <PickerIOS
                            selectedValue={this.state.carMake}
                            onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
                            {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
                                <PickerItemIOS
                                    key={carMake}
                                    value={carMake}
                                    label={CAR_MAKES_AND_MODELS[carMake].name}
                                />
                            ))}
                        </PickerIOS>
                        <Text>Please choose a model of {make.name}:</Text>
                        <PickerIOS
                            selectedValue={this.state.modelIndex}
                            key={this.state.carMake}
                            onValueChange={(modelIndex) => this.setState({modelIndex})}>
                            {CAR_MAKES_AND_MODELS[this.state.carMake].models.map((modelName, modelIndex) => (
                                <PickerItemIOS
                                    key={this.state.carMake + '_' + modelIndex}
                                    value={modelIndex}
                                    label={modelName}
                                />
                            ))}
                        </PickerIOS>
                        <Text>You selected: {selectionString}</Text>
                    </View>

                    <TouchableOpacity>
                        <Button style={styles.bottombtn} onPress={this._onButtonPress} title="更多"/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

module.exports = LoginPage;
