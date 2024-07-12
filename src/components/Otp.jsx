import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import GoBack from '../common/GoBack'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import SolidButton from '../common/SolidButton'
import Loader from './Loader'
import { verifyOtpReq } from '../Api/Api'

const Otp = () => {
    const route = useRoute()
    const navigation = useNavigation()

    const { activation_token } = route.params

    console.log("activation token", activation_token)

    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();
    const et5 = useRef();

    const [f1, setF1] = useState('');
    const [f2, setF2] = useState('');
    const [f3, setF3] = useState('');
    const [f4, setF4] = useState('');
    const [f5, setF5] = useState('');
    const [loading, setLoading] = useState(false)

    const [count, setCount] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount === 0) {
                    clearInterval(interval);
                    return prevCount;
                }
                return prevCount - 1;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [count]);


    //activation code
    const activation_code = f1 + f2 + f3 + f4 + f5;

    const data = {
        activation_code,
        activation_token


    }


    //method

    const handelVerify = async () => {

        setLoading(true)

        try {
            const res = await verifyOtpReq(data);
            console.log(res.data)
            navigation.navigate('AppNavigator')

        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Network request failed');

        } finally {
            setLoading(false);
        }



    }

    return (
        <View>
            <Loader visible={loading} />

            <View style={{ padding: 25, backgroundColor: 'white', height: '100%' }}>
                <View style={{ paddingTop: 10, gap: responsiveHeight(2) }}>
                    <GoBack />
                    <Text style={{ color: 'black', fontSize: 28, fontFamily: 'Outfit-Bold' }}>Otp Verification</Text>
                </View>

                {/* otp verification */}

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 12,
                        padding: 8, marginTop: responsiveHeight(3)
                    }}>
                    <TextInput
                        ref={et1}
                        style={styles.inputView}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={f1}
                        onChangeText={txt => {
                            setF1(txt);
                            if (txt.length >= 1) {
                                et2.current.focus();
                            } else if (txt.length < 1) {
                            } else if (txt.length < 1) {
                                et1.current.focus();
                            }
                        }}
                    />
                    <TextInput
                        ref={et2}
                        style={styles.inputView}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={f2}
                        onChangeText={txt => {
                            setF2(txt);
                            if (txt.length >= 1) {
                                et3.current.focus();
                            } else if (txt.length < 1) {
                                et1.current.focus();
                            } else if (txt.length < 1) {
                                et2.current.focus();
                            }
                        }}
                    />
                    <TextInput
                        ref={et3}
                        style={styles.inputView}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={f3}
                        onChangeText={txt => {
                            setF3(txt);
                            if (txt.length >= 1) {
                                et4.current.focus();
                            } else if (txt.length < 1) {
                                et2.current.focus();
                            } else if (txt.length < 1) {
                                et3.current.focus();
                            }
                        }}
                    />
                    <TextInput
                        ref={et4}
                        style={styles.inputView}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={f4}
                        onChangeText={txt => {
                            setF4(txt);
                            if (txt.length >= 1) {
                                et5.current.focus();
                            } else if (txt.length < 1) {
                                et3.current.focus();
                            } else if (txt.length < 1) {
                                et4.current.focus();
                            }
                        }}
                    />
                    <TextInput
                        ref={et5}
                        style={styles.inputView}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={f5}
                        onChangeText={txt => {
                            setF5(txt);
                            if (txt.length >= 1) {
                                et5.current.focus();
                            } else if (txt.length < 1) {
                                et4.current.focus();
                            }
                        }}
                    />
                </View>

                {/* resend otp */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: responsiveHeight(2),
                        marginLeft: responsiveWidth(4),
                        gap: 15,
                    }}>
                    <TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 16,
                                lineHeight: 24,
                                fontWeight: 500,
                                color: 'black',
                                fontFamily: 'Outfit-Bold'
                            }}>
                            {'Resend Otp'}
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 16,
                            lineHeight: 24,
                            fontWeight: 500,
                            fontFamily: 'Outfit-Regular',
                            color: count == 0 ? 'white' : 'black',
                        }}>
                        {count + '   seconds'}
                    </Text>
                </View>

                {/* verify button */}
                <SolidButton disabled={f1 !== '' && f2 !== '' && f3 !== '' && f4 !== '' && f5 !== ''
                    ? false
                    : true} title={'Verify Otp'} btnStyle={{
                        marginTop: responsiveHeight(15), backgroundColor:
                            f1 !== '' && f2 !== '' && f3 !== '' && f4 !== '' && f5 !== ''
                                ? 'black'
                                : '#686D76',
                    }} onclick={handelVerify} />


            </View>

        </View>
    )
}

export default Otp

const styles = StyleSheet.create({
    inputView: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: '#7C7979',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 16,
    },
});