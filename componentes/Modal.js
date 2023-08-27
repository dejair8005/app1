import React, { useState } from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";

export default function App() {
    const [visivel, setVisivel] = useState(false); // Start with modal closed

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visivel}
                style={styles.modalContainer}
            >   
                <View style={styles.modalContent}>
                    <Text>CFB Cursos</Text>
                    <Text>Curso de React Native</Text>
                    <Button
                        title="Fechar"
                        onPress={() => setVisivel(false)} // Close the modal
                    />
                </View>
            </Modal>
            <Button
                title="Abrir"
                onPress={() => setVisivel(true)} // Open the modal
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "green",
        margin: 20,
        padding: 20,
        borderRadius: 10,
        elevation: 10,
    },
});
