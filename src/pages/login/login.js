/**
 * Created by huangjian on 2016/11/11.
 */
'use strict'

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    Modal,
    TouchableHighlight,
    PickerIOS
} from 'react-native';

import CarData from '../../data/car';

const styles = StyleSheet.create({
    textinput: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center'
    },
    dividerview: {
        flexDirection: 'row',
        height: 2,
        backgroundColor: '#ECEDF1'
    },
    divider: {
        flex: 1,
        height: 2,
        backgroundColor: '#ECEDF1'
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
            modalVisible: false,
            data: ""
        };
    }

    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _getModalVisible() {
        return this.state.modalVisible;
    }

    _onButtonPress() {
        Alert.alert('Button has been pressed!');
    }

    render() {
        var self = this;
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#FFFFFF'
            }}>
                <View style={{
                    height: 22,
                    justifyContent: 'center',
                    backgroundColor: '#FFFFFF'
                }}/>
                <View style={{
                    height: 150,
                    backgroundColor: '#ECEDF1',
                    justifyContent: 'center'
                }}>
                    <Image source={require('../../../assets/img/avatar.png')} style={{
                        width: 80,
                        height: 80,
                        alignSelf: 'center',
                        borderWidth: 0,
                        borderRadius: 40,
                        overflow: 'hidden'
                    }}/>
                    <Text style={{
                        marginTop: 5,
                        alignSelf: 'center',
                        fontSize: 20,
                        color: '#555555',
                        textAlign: 'center'
                    }}>口香糖</Text>
                </View>

                <View style={{backgroundColor: '#ECEDF1'}}>
                    <View
                        style={{
                            height: 100,
                            width: 350,
                            alignSelf: 'center',
                            backgroundColor: '#FFFFFF'
                        }}>
                        <TextInput underlineColorAndroid='transparent' style={styles.textinput} placeholder='请输入手机号'
                                   value={this.state.data}/>
                        <View style={styles.dividerview}><Text style={styles.divider}/></View>
                        <TextInput underlineColorAndroid='transparent' style={styles.textinput} placeholder='密码'
                                   secureTextEntry={true}/>
                        <View style={styles.dividerview}><Text style={styles.divider}/></View>
                    </View>
                </View>

                <View style={{
                    backgroundColor: '#ECEDF1',
                    flex: 1
                }}>
                    <View style={{
                        backgroundColor: '#1DBAF1',
                        margin: 14,
                        borderRadius: 6,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={this._onButtonPress}>
                            <Text style={{
                                fontSize: 17,
                                color: '#FFFFFF',
                                marginTop: 10,
                                marginBottom: 10
                            }}>{"   登  录   "}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{
                            flex: 1,
                            height: 50,
                            paddingLeft: 10,
                            alignItems: 'flex-start',
                            justifyContent: 'center'
                        }}>
                            <TouchableOpacity onPress={this._onButtonPress}>
                                <Text style={{fontSize: 14, color: '#1DBAF1'}}>新用户注册</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flex: 1,
                            height: 50,
                            paddingRight: 10,
                            alignItems: 'flex-end',
                            justifyContent: 'center'
                        }}>
                            <TouchableOpacity onPress={this._onButtonPress}>
                                <Text style={{fontSize: 14, color: '#1DBAF1'}}>忘记密码</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex: 1}}></View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {
                            this._setModalVisible(true)
                        }} style={{marginBottom: 10}}>
                            <Text style={{fontSize: 13, color: '#1DBAF1',}}>更多</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal animationType={"slide"} transparent={false} visible={this._getModalVisible()}>
                    <ModalPage carData={CarData} onBack={(data) => {
                        self._setModalVisible(false);
                        self.state.data = data;
                    }}/>
                </Modal>
            </View>
        );
    }
}

var PickerItemIOS = PickerIOS.Item;
class ModalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carMake: 'cadillac',
            modelIndex: 3
        }
    }

    _getCarMakeList() {
        return Object.keys(this.props.carData).map((carMake) => (
            <PickerItemIOS
                key={carMake}
                value={carMake}
                label={this.props.carData[carMake].name}
            />
        ));
    }

    _getCarModalList() {
        return this.props.carData[this.state.carMake].models.map((modelName, modelIndex) => (
            <PickerItemIOS
                key={this.state.carMake + '_' + modelIndex}
                value={modelIndex}
                label={modelName}
            />
        ));
    }

    render() {
        var make = this.props.carData[this.state.carMake];
        var selectionString = make.name + ' ' + make.models[this.state.modelIndex];
        return (
            <View style={{marginTop: 22}}>
                <View style={{marginTop: 22}}>
                    <TouchableHighlight onPress={() => {
                        this.props.onBack(selectionString);
                    }}>
                        <Text style={{color: '#1DBAF1'}}>{"< 返回"}</Text>
                    </TouchableHighlight>
                </View>
                <View style={{marginTop: 22}}>
                    <Text>Please choose a make for your car:</Text>
                    <PickerIOS
                        selectedValue={this.state.carMake}
                        onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
                        {this._getCarMakeList()}
                    </PickerIOS>
                    <Text>Please choose a model of {make.name}:</Text>
                    <PickerIOS selectedValue={this.state.modelIndex} key={this.state.carMake}
                               onValueChange={(modelIndex) => this.setState({modelIndex})}>
                        {this._getCarModalList()}
                    </PickerIOS>
                    <Text>You selected: {selectionString}</Text>
                </View>
            </View>
        );
    }
}

module.exports = LoginPage;
