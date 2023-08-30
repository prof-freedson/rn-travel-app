/*

Instalar os seguintes pacotes:

1) npx expo install @react-native-community/datetimepicker

2) npm install date-fns


*/

import React, { useState } from 'react';
import { View, Button, Text, Platform, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('08:00');
  const [showPicker, setShowPicker] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false); // Estado para controlar a visibilidade do Modal

  const timeOptions = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
  ];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedDate;
    setShowPicker(Platform.OS === 'ios');
    setSelectedDate(currentDate);
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  const formattedDate = format(selectedDate, 'dd/MM/yyyy');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Button onPress={showDatepicker} title="Selecionar Data" />
      </View>
      {showPicker && (
        // Exibição do calendário com DateTimePicker
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
        // Fim da exibição do calendário com DateTimePicker
      )}
      <Text>Data selecionada: {formattedDate}</Text>

      <TouchableOpacity onPress={() => setShowTimeModal(true)}>
        <Text>Selecione um horário:</Text>
        <Text style={styles.timeButton}>{selectedTime}</Text>
      </TouchableOpacity>

      {/* Configuração do Modal */}
      <Modal
        visible={showTimeModal}
        transparent={true}
        animationType="slide"
      //Final da configuração do modal
      >
        {/* Elementos que serão exibidos no Modal */}
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {timeOptions.map((time, index) => (
              <TouchableOpacity
                key={index}
                style={styles.timeOption}
                onPress={() => {
                  setSelectedTime(time);
                  setShowTimeModal(false);
                }}
              >
                <Text>{time}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* Final dos elementos que serão exibidos no Modal  */}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  timeButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#333',
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 250,
  },
  timeOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
