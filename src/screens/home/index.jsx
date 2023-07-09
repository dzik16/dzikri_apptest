import {FlatList, RefreshControl} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteContact, getContact} from '../../store/actions/contact';
import {CustomHeader} from '../../components/atoms';
import {
  CardFoto,
  EmptyState,
  ModalConfirmation,
} from '../../components/molekules';
import styles from './style';
import {EmptySearch} from '../../assets/image';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.commonReducers);
  const {dataContact} = useSelector(state => state.getContactReducers);
  const [onFocused, setOnFocused] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [id, setId] = useState('');

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    dispatch(getContact());
    setOnFocused('');
    setRefreshing(false);
  }, [dispatch, refreshing]);

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
        onPressEdit={() =>
          navigation.navigate('UpdateContactScreen', {id: item.id})
        }
        onPressDelete={() => {
          setModalVisible(true);
          setFirstName(item.firstName);
          setId(item.id);
        }}
        source={{
          uri:
            item.photo !== 'N/A'
              ? item.photo
              : `https://ui-avatars.com/api/?name=${item.firstName}&background=01A0C7&color=fff`,
        }}
        isFocused={onFocused === item.id ? true : false}
      />
    ),
    [onFocused, setOnFocused, setRefreshing],
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
      <ModalConfirmation
        isVisible={isModalVisible}
        onConfirmation={handleDelete}
        onCancel={handleCancel}
        title={`Are you sure you want to delete ${firstName} ?`}
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
  );
};

export default Home;
