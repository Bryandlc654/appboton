import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const RegisterScreen = () => {

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <View style={styles.container}>
                <Image source={require('../assets/icon.png')} style={styles.logo} />
                <Text style={styles.title}>Regístrate</Text>
                <Text style={styles.label}>DNI</Text>
                <TextInput
                    style={styles.input}
                    placeholder="12345678"
                    placeholderTextColor="#C1C1C1"
                />
                <Text style={styles.label}>Nombres</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ejm: Juan Carlos"
                    placeholderTextColor="#C1C1C1"
                />
                <Text style={styles.label}>Apellidos</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ejm: Martínez"
                    placeholderTextColor="#C1C1C1"
                />
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="*******"
                    placeholderTextColor="#C1C1C1"
                    secureTextEntry
                />
                <Text style={styles.label}>Celular</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ejm: 987654321"
                    placeholderTextColor="#C1C1C1"
                    secureTextEntry
                />
                <Text style={styles.label}>N° Tienda</Text>
                <TextInput
                    style={styles.input}
                    placeholder="N° 70"
                    placeholderTextColor="#C1C1C1"
                    secureTextEntry
                />
                <Text style={styles.label}>Piso</Text>
                <TextInput
                    style={styles.input}
                    placeholder="2"
                    placeholderTextColor="#C1C1C1"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Siguiente</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerContainer} >
                    <Text style={styles.registerText}>¿Ya tienes una cuenta?</Text>
                    <Text style={styles.registerLink}>Ingresa aquí.</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingVertical: 20,
    },
    container: {
        height: '100%',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    input: {
        height: 58,
        borderColor: '#509BF8',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontWeight: 'bold',
        color: '#000',
    },
    button: {
        backgroundColor: '#509BF8',
        borderRadius: 40,
        paddingVertical: 22,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    registerText: {
        fontWeight: 'bold',
        color: '#7C7C7C',
        fontSize: 14,
    },
    registerLink: {
        color: '#509BF8',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 5,
    },
});

export default RegisterScreen;