import {FlatList, RefreshControl} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addContact,
  getContact,
  getDetailDetailContact,
  upDataProduct,
  updateContact,
} from '../../store/actions/contact';
import {CustomHeader} from '../../components/atoms';
import {CardFoto, EmptyState} from '../../components/molekules';
import styles from './style';
import {EmptySearch} from '../../assets/image';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataAddContact} = useSelector(state => state.addContactReducers);
  const {dataUpdateContact} = useSelector(state => state.updateContactReducers);
  const {dataContact, isLoading} = useSelector(
    state => state.getContactReducers,
  );
  const {dataDeleteContact} = useSelector(state => state.deleteContactReducers);
  const [onFocused, setOnFocused] = useState();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    // const formData = new FormData();

    // formData.append('firstName', 'Joko');
    // formData.append('lastName', 'Anwar');
    // formData.append('age', 40);
    // formData.append('photo', 'N/A');
    // dispatch(addContact(formData));
    // dispatch(updateContact('3d623fd0-1db1-11ee-9149-b7b09d51d714', formData));
    dispatch(getDetailDetailContact('3d623fd0-1db1-11ee-9149-b7b09d51d714'));
    dispatch(getContact());
    setOnFocused('');
    setRefreshing(false);
  }, [dispatch, refreshing]);

  // console.log('Update Contact : ', dataUpdateContact);
  // console.log('Detail Contact : ', dataDetailContact.data);
  // console.log('Contact : ', dataContact.data);

  const renderItem = useCallback(
    ({item}) => (
      <CardFoto
        text1={`${item.firstName} ${item.lastName}`}
        text2={`${item.age}`}
        onPressCard={() => {
          onFocused === item.id ? setOnFocused('') : setOnFocused(item.id);
        }}
        onPressDetails={() =>
          navigation.navigate('DetailScreen', {id: item.id})
        }
        source={{
          uri:
            item.photo !== 'N/A'
              ? item.photo
              : `https://ui-avatars.com/api/?name=${item.firstName}&background=01A0C7&color=fff`,
        }}
        isFocused={onFocused === item.id ? true : false}
      />
    ),
    [onFocused, setOnFocused, setRefreshing], // Menambahkan onFocused, setOnFocused, setRefreshing, dan navigation ke dalam dependencies useCallback
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);
  const ITEM_HEIGHT = 200;
  const getItemLayout = useCallback(
    (data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  return (
    <>
      <CustomHeader
        type="HeaderTitle"
        title="My Contact"
        onPress={() => navigation.navigate('CreateContactScreen')}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.cardProductWrapper}
        data={dataContact.data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        maxToRenderPerBatch={1000}
        ListEmptyComponent={() =>
          !isLoading && (
            <EmptyState
              image={EmptySearch}
              title="Tidak ada hasil yang ditemukan"
            />
          )
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
            }}
          />
        }
      />
    </>
    // </ScrollView>
  );
};

export default Home;
