import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getContact} from '../../store/actions/contact';

const Home = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.getContactReducers);

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  // data.map(e => console.log('resss', e));

  return (
    <View style={styles.container}>
      {/* {data.data.data.map(item => (
        <Text>{item.firstName}</Text>
      ))} */}
      {data.data.data.map(e => (
        <>
          <Text>{e.id}</Text>
          <Text>
            {e.firstName}
            {e.lastName}
          </Text>
        </>
      ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
