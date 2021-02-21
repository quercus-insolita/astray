import React, { useState } from 'react';
import { withFormik, FormikProps } from 'formik';
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  MaskedInput,
  RadioButtonGroup,
  RangeInput,
  DateInput,
  Select,
  TextArea,
  TextInput
} from 'grommet';

enum PetTypes {
  Dog = 'Собака',
  Cat = 'Кішка',
  Other = 'Інший'
}

enum PetSex {
  Male = 'Хлопець',
  Female = 'Дівчина',
  NotSure = 'Не впевнений'
}

enum PetColor {
  Black = 'Чорний',
  Brown = 'Коричневий'
}

const ReportForm = ({
  values,
  touched,
  errors,
  setFieldValue,
  handleChange,
  handleBlur,
  handleSubmit
}) => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = event => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Тип тварини"
        htmlFor="type"
        name="type"
        required={true}
        margin={{ bottom: 'medium' }}
      >
        <Select
          id="type"
          name="type"
          options={[PetTypes.Dog, PetTypes.Cat, PetTypes.Other]}
          value={values.type}
          onChange={({ option }) => setFieldValue('type', option)}
        />
      </FormField>

      <FormField label="Стать" name="sex" required={true} margin={{ bottom: 'medium' }}>
        <RadioButtonGroup
          name="sex"
          options={[PetSex.Male, PetSex.Female, PetSex.NotSure]}
          value={values.sex}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="Дата знаходження" name="date" required={true} margin={{ bottom: 'medium' }}>
        <DateInput
          name="date"
          format="mm/dd/yyyy"
          value={values.date}
          onChange={({ value }) => setFieldValue('date', value)}
        />
      </FormField>

      <FormField label="Колір" name="color" required={true} margin={{ bottom: 'medium' }}>
        <RadioButtonGroup
          name="color"
          options={[PetColor.Black, PetColor.Brown]}
          value={values.color}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="Image" name="image" margin={{ bottom: 'medium' }}>
        <input type="file" name="file" onChange={changeHandler} />
      </FormField>

      {/* <FormField label="Локація" name="location" required={true}>
        <TextArea name="description" value={values.description} onChange={handleChange} />
      </FormField> */}

      <FormField label="Додаткова інформація" name="description" margin={{ bottom: 'medium' }}>
        <TextArea name="description" value={values.description} onChange={handleChange} />
      </FormField>

      <div>
        <FormField label="Контактна особа" name="contactName" required={true} margin={{ bottom: 'medium' }}>
          <TextInput name="contactName" value={values.contactName} onChange={handleChange} />
        </FormField>
        <FormField label="Номер телефону" name="contactPhone" required={true} margin={{ bottom: 'medium' }}>
          <TextInput
            name="contactPhone"
            value={values.contactPhone}
            onChange={handleChange}
            type="phone-number"
          />
        </FormField>
      </div>

      <Button
        type="submit"
        primary={true}
        color="neutral-3"
        label="Додати"
        margin={{ bottom: '30px' }}
      />
    </Form>
  );
};

export default withFormik<any, any>({
  mapPropsToValues: () => ({
    type: null,
    sex: null,
    date: new Date().toISOString(),
    location: null,
    color: null,
    imageUrl: null,
    description: '',
    contactName: '',
    contactPhone: ''
  }),
  handleSubmit: (values, bag) => bag.props.handleSubmit(values)
})(ReportForm);
