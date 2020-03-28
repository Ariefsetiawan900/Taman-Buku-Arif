import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native'
import Arrow from '../Assets/Arrow.png'
import  { register } from '../Redux/action/user'
import { connect } from 'react-redux'

class Register extends Component {

    signin = () => {
        this.props.navigation.navigate('Login')
    }
    state = {
        username: "",
        fullname: "",
        email: "",
        password: ""
        // dicek dulu di database
    }
    postRegister = async () => {
        const { username, fullname, email, password } = this.state
        const user = { username, fullname, email, password}
        this.props.dispatch(register(user, this.props.navigation))
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Here To Get Welcomed !</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput onChangeText={e => { this.setState({ username: e}) }} style={styles.input} placeholder="Username" />
                    <TextInput onChangeText={e => { this.setState({ fullname: e}) }} style={styles.input} placeholder="Full Name" />
                    <TextInput onChangeText={e => { this.setState({ email: e}) }} style={styles.input} placeholder="Email" />
                    <TextInput onChangeText={e => { this.setState({ password: e}) }} style={styles.input} placeholder="Password" secureTextEntry={true} />
                </View>
                <View style={styles.signContainer}>
                    <Text style={styles.signin}>Sign Up</Text>
                    <TouchableOpacity onPress={this.postRegister}>
                        <View style={styles.arrow}>
                            <Image source={Arrow} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.signin}>
                        <Text style={styles.signup}>Sign in</Text>
                    </TouchableOpacity>
                    <Text style={styles.signup}>Forgot Password</Text>
                </View>
            </View>
        )
    }
}
const mapStateToProps = user  => {
    return {
        user,
    }
}

export default connect(mapStateToProps)(Register)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    titleContainer: {
        marginTop: 90,
        marginBottom: 50,
        marginRight: 113,
        marginLeft: 33,
        // backgroundColor: 'black'
    },
    title: {
        // fontFamily
        fontSize: 24,
        lineHeight: 31,
        color: '#4B4C72'
    },
    formContainer: {
        marginRight: 50,
        marginLeft: 33,
        // backgroundColor: 'lightgreen'
    },
    input: {
        // fontFamily
        borderBottomWidth: 1,
        color: '#4B4C72',
    },
    signContainer: {
        height: 60,
        marginTop: 30,
        marginLeft: 33,
        marginRight: 50,
        // backgroundColor: 'black'
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    arrow: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 50,
    },
    signin: {
        // fontFamily
        fontSize: 18,
        color: '#4B4C72'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        marginLeft: 33,
        marginRight: 50,
        backgroundColor: 'pink'
    },
    signup: {
        // fontFamily
        fontSize: 13,
        color: '#4B4C72',
        textDecorationLine: 'underline'
    }

})