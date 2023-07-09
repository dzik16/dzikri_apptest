import {ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import BackTitle from '../../components/atoms/CustomHeader/BackTitle';
import {formProductSchema} from '../../plugins';
import {SIZES} from '../../themes';
import {CustomButton, CustomInput} from '../../components/atoms';
import styles from './styles';
import Upload from '../../components/molekules/UploadFoto';
import {useDispatch, useSelector} from 'react-redux';
import {
  addContact,
  getDetailDetailContact,
  updateContact,
} from '../../store/actions/contact';

const UpdateContact = ({navigation, route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const {dataAddContact} = useSelector(state => state.addContactReducers);
  const {dataDetailContact} = useSelector(
    state => state.getDetailContactReducers,
  );
  const [image, setAvatar] = useState(
    dataDetailContact.data.photo !== 'N/A' ? dataDetailContact.data.photo : '-',
  );
  const [data, setData] = useState();

  useEffect(() => {
    dispatch(getDetailDetailContact(id));
  }, []);

  const onPressTerbit = value => {
    try {
      const formData = new FormData();
      formData.append('firstName', value.firstName);
      formData.append('lastName', value.lastName);
      formData.append('age', value.age);
      formData.append('photo', image);

      console.log('dataaa :', formData);

      setData(formData);
      dispatch(updateContact(id, formData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BackTitle title="Update Contact" onPress={() => navigation.goBack()} />
      {/* <BottomUpload
        image={image}
        setAvatar={setAvatar}
        thisRef={thisRef}
        anim={anim}
        deskripsi="Choose your image product"
      /> */}
      {/* <Animated.View
        style={{opacity: Animated.add(0.1, Animated.multiply(anim, 1.0))}}> */}
      <Formik
        initialValues={{
          firstName: dataDetailContact.data.firstName,
          lastName: dataDetailContact.data.lastName,
          age: dataDetailContact.data.age.toString(),
          photo: dataDetailContact.data.photo,
        }}
        validationSchema={formProductSchema}
        onSubmit={values => onPressTerbit(values)}>
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
          dirty,
        }) => (
          <>
            <ScrollView contentContainerStyle={styles.scroll}>
              <View
                style={{
                  marginVertical: 10,
                  marginHorizontal: 16,
                  minHeight: SIZES.height * 0.95,
                }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <Upload
                    style={{marginTop: 10}}
                    source={image}
                    onPress={() => thisRef.current.snapTo(0)}
                    name="camera"
                  />
                </View>
                <View
                  style={{
                    marginVertical: 10,
                    marginHorizontal: 16,
                    minHeight: SIZES.height * 0.95,
                  }}>
                  <CustomInput
                    label="Firstname"
                    placeholder="Ex : Alex"
                    name="firstName"
                    onChangeText={handleChange('firstName')}
                    value={values.firstName}
                    error={touched.firstName && errors.firstName}
                  />
                  <CustomInput
                    label="Lastname"
                    placeholder="Ex : Dirga"
                    name="lastName"
                    onChangeText={handleChange('lastName')}
                    value={values.lastName}
                    error={touched.lastName && errors.lastName}
                  />
                  <CustomInput
                    label="Age"
                    placeholder="Ex : 20"
                    name="age"
                    keyboardType="numeric"
                    onChangeText={handleChange('age')}
                    value={values.age}
                    error={touched.age && errors.age}
                  />
                </View>
                <View style={styles.buttonWrapper}>
                  <CustomButton
                    style={{width: '100%'}}
                    primary
                    type="updatecontact"
                    title="Update"
                    disabled={!(dirty && isValid)}
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            </ScrollView>
          </>
        )}
      </Formik>
      {/* </Animated.View> */}
    </>
  );
};

export default UpdateContact;
