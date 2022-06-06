import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';
let num = 0;
function SignInScreen() {
    if (num == 0) {
        return (
            <SafeAreaView style={styles.fullscreen}>
                <Text style={styles.text}>로그인</Text>
                <View style={styles.form}>
                    <BorderedInput hasMarginBottom placeholder="아이디" />
                    <BorderedInput placeholder="비밀번호" />
                    <View style={styles.buttons}>
                        <CustomButton title="로그인" hasMarginBottom />
                        <CustomButton title="회원가입" />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
    else{
        return (
            <SafeAreaView style={styles.fullscreen}>
                <Text style={styles.text}>sss</Text>
                <View style={styles.form}>
                    <BorderedInput hasMarginBottom placeholder="아이디" />
                    <BorderedInput placeholder="비밀번호" />
                    <View style={styles.buttons}>
                        <CustomButton title="로그인" hasMarginBottom />
                        <CustomButton title="회원가입" />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    form: {
        marginTop: 64,
        width: '100%',
        paddingHorizontal: 16,
    },
    buttons: {
        marginTop: 64,
    },
});

export default SignInScreen;