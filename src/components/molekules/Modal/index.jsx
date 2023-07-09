import { Modal, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

function ConfirmationModal({ isVisible, onConfirmation, onCancel, title }) {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{title}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onConfirmation} style={styles.buttonConfrmation}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancel} style={styles.buttonCancel}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ConfirmationModal