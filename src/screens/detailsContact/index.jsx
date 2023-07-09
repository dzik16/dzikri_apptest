import {Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {CustomText} from '../../components/atoms';
import styles from './style';
import {SIZES} from '../../themes';
import BackTitle from '../../components/atoms/CustomHeader/BackTitle';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailDetailContact} from '../../store/actions/contact';

const Details = ({navigation, route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const {dataDetailContact} = useSelector(
    state => state.getDetailContactReducers,
  );

  useEffect(() => {
    dispatch(getDetailDetailContact(id));
  }, [dispatch]);

  return (
    <>
      <BackTitle title="Detail Contact" onPress={() => navigation.goBack()} />
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 16,
          minHeight: SIZES.height * 0.95,
        }}>
        <View
          style={{
            marginVertical: 10,
            marginHorizontal: 16,
            minHeight: SIZES.height * 0.95,
          }}>
          <View
            style={{
              // flex: 1,
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              style={styles.imageContact}
              source={{
                uri:
                  dataDetailContact.data.photo !== 'N/A'
                    ? dataDetailContact.data.photo
                    : `https://ui-avatars.com/api/?name=${dataDetailContact.data.firstName}&background=01A0C7&color=fff`,
              }}
            />
          </View>

          <CustomText
            label="Firstname"
            value={dataDetailContact.data.firstName}
          />
          <CustomText
            label="Lastname"
            value={dataDetailContact.data.lastName}
          />
          <CustomText label="Age" value={dataDetailContact.data.age} />
        </View>
      </View>
    </>
  );
};

export default Details;
