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
  getDetailDetailContact,
  updateContact,
} from '../../store/actions/contact';
import ImagePicker from 'react-native-image-crop-picker';

const UpdateContact = ({navigation, route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.commonReducers);
  const {dataDetailContact} = useSelector(
    state => state.getDetailContactReducers,
  );
  const [image, setAvatar] = useState(
    dataDetailContact.data.photo !== 'N/A' ? dataDetailContact.data.photo : '-',
  );

  useEffect(() => {
    dispatch(getDetailDetailContact(id));
  }, [dispatch]);

  const initialValuess = {
    firstName: !isLoading ? dataDetailContact.data.firstName : '',
    lastName: !isLoading ? dataDetailContact.data.lastName : '',
    age: !isLoading ? dataDetailContact.data.age.toString() : '',
    photo: !isLoading ? dataDetailContact.data.photo : '-',
  };

  console.log('valueee : ', dataDetailContact);

  const onPressTerbit = value => {
    try {
      const formData = new FormData();
      formData.append('firstName', value.firstName);
      formData.append('lastName', value.lastName);
      formData.append('age', value.age);
      formData.append('photo', image);
      console.log('haha : ', value);
      dispatch(updateContact(id, formData, navigation));
    } catch (error) {
      showError('Update Contact Gagal');
    }
  };

  const fromLibrary = () =>
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      setAvatar(image.path);
    });

  return (
    <>
      <BackTitle title="Update Contact" onPress={() => navigation.goBack()} />
      <Formik
        initialValues={initialValuess}
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
                    onPress={fromLibrary}
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
                    loading={isLoading}
                    disabled={!(dirty && isValid)}
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            </ScrollView>
          </>
        )}
      </Formik>
    </>
  );
};

export default UpdateContact;
